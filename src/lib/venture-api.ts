
import { supabase } from './supabase';
import { GoogleGenerativeAI } from '@google/generative-ai';

// ============================================
// TYPES
// ============================================

export interface DeckAssessment {
    id: string;
    user_id: string;
    project_name: string;
    pitch_text: string;
    score: number;
    strengths: string[];
    weaknesses: string[];
    investor_questions: string[];
    improvement_tips: string[];
    created_at: string;
}

export interface ProblemAnalysis {
    id: string;
    user_id: string;
    problem_statement: string;
    pain_point_intensity: number; // 1-10
    target_audience: string;
    market_size_estimation: string;
    potential_solution_angle: string;
    created_at: string;
}

// ============================================
// DECKLY: PITCH ASSESSMENT
// ============================================

export const analyzeDeckWithAI = async (
    userId: string,
    pitchText: string,
    projectName: string = "Untitled Project"
): Promise<DeckAssessment | null> => {
    try {
        const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
        if (!API_KEY) throw new Error('Missing VITE_GEMINI_API_KEY');

        const genAI = new GoogleGenerativeAI(API_KEY);
        // Using the same model as North for consistency
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
            Act as a top-tier Venture Capitalist (Sequoia/a16z methodology).
            Analyze the following startup pitch/summary:
            "${pitchText}"

            Return ONLY valid JSON (no markdown) with this structure:
            {
                "score": 0-100 (integer, be critical),
                "strengths": ["List of 3 specific strengths"],
                "weaknesses": ["List of 3 specific weaknesses"],
                "investor_questions": ["3 hard questions an investor would ask"],
                "improvement_tips": ["3 actionable tips to improve the pitch"]
            }
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();
        const aiData = JSON.parse(text);

        // Save to Supabase
        const { data, error } = await supabase
            .from('deck_assessments')
            .insert([{
                user_id: userId,
                project_name: projectName,
                pitch_text: pitchText,
                score: aiData.score,
                strengths: aiData.strengths,
                weaknesses: aiData.weaknesses,
                investor_questions: aiData.investor_questions,
                improvement_tips: aiData.improvement_tips
            }])
            .select()
            .single();

        if (error) {
            console.error('Database Error:', error);
            throw error;
        }

        return data;

    } catch (err) {
        console.error('Deckly AI Failed:', err);
        throw err;
    }
};

export const getUserAssessments = async (userId: string): Promise<DeckAssessment[]> => {
    const { data, error } = await supabase
        .from('deck_assessments')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching assessments:', error);
        return [];
    }
    return data || [];
};

// ============================================
// DEEP REVEAL: PROBLEM ANALYSIS
// ============================================

export const analyzeProblemWithAI = async (
    userId: string,
    problemStatement: string
): Promise<ProblemAnalysis | null> => {
    try {
        const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
        if (!API_KEY) throw new Error('Missing VITE_GEMINI_API_KEY');

        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
            Act as a Product Strategy Expert.
            Analyze the following problem statement for a potential startup:
            "${problemStatement}"

            Return ONLY valid JSON (no markdown) with this structure:
            {
                "pain_point_intensity": 1-10 (integer, how acute is the pain?),
                "target_audience": "Specific description of who suffers most",
                "market_size_estimation": "Rough estimation (Niche/Large/Massive)",
                "potential_solution_angle": "One sentence novel approach advice"
            }
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();
        const aiData = JSON.parse(text);

        // Save to Supabase
        const { data, error } = await supabase
            .from('problem_analyses')
            .insert([{
                user_id: userId,
                problem_statement: problemStatement,
                pain_point_intensity: aiData.pain_point_intensity,
                target_audience: aiData.target_audience,
                market_size_estimation: aiData.market_size_estimation,
                potential_solution_angle: aiData.potential_solution_angle
            }])
            .select()
            .single();

        if (error) {
            console.error('Database Error:', error);
            throw error;
        }

        return data;
    } catch (err) {
        console.error('Deep Reveal AI Failed:', err);
        throw err;
    }
};
