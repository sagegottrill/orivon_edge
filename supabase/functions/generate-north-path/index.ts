import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
    // Handle CORS preflight requests
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const { jobRole, experienceLevel } = await req.json()

        // 1. Validate Input
        if (!jobRole) {
            throw new Error('Missing jobRole')
        }

        // 2. Prepare Gemini Prompt
        const prompt = `
      Act as an expert technical curriculum designer.
      Create a comprehensive, 24-week learning path for a student wanting to become a "${jobRole}".
      The student's current level is "${experienceLevel || 'beginner'}".
      
      Return ONLY valid JSON with this structure:
      {
        "path_name": "Title of the path",
        "description": "Short inspiring description",
        "difficulty_level": "beginner|intermediate|advanced",
        "steps": [
          {
            "step_number": 1,
            "title": "Week 1-2: [Topic]",
            "description": "What they will learn...",
            "step_type": "module|project"
          }
        ]
      }
      Do not include markdown formatting (like \`\`\`json). Just the raw JSON string.
    `;

        // 3. Call Google Gemini API
        const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');
        if (!GEMINI_API_KEY) {
            throw new Error('Missing GEMINI_API_KEY environment variable');
        }

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }]
            })
        });

        const data = await response.json();

        // 4. Parse Gemini Response
        let generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!generatedText) {
            throw new Error('Failed to generate content from Gemini');
        }

        // Cleanup potential markdown formatting
        generatedText = generatedText.replace(/```json/g, '').replace(/```/g, '').trim();

        const curriculum = JSON.parse(generatedText);

        // 5. Return the JSON
        return new Response(
            JSON.stringify(curriculum),
            {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                status: 200
            }
        )

    } catch (error) {
        return new Response(
            JSON.stringify({ error: error.message }),
            {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                status: 400
            }
        )
    }
})
