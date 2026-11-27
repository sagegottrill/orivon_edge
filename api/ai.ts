import type { VercelRequest, VercelResponse } from "@vercel/node";

const API_KEY = process.env.INCEPTION_API_KEY;
const BASE_URL = "https://api.inceptionlabs.ai/v1";
const MODEL = process.env.INCEPTION_MODEL || "mercury-3";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!API_KEY) {
    return res.status(500).json({ error: "INCEPTION_API_KEY is not configured" });
  }

  const { messages, temperature, maxTokens, json } = req.body ?? {};

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "messages is required" });
  }

  try {
    const upstream = await fetch(`${BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        temperature: temperature ?? 0.7,
        max_tokens: maxTokens ?? 2000,
        ...(json ? { response_format: { type: "json_object" } } : {}),
      }),
    });

    const data = (await upstream.json()) as {
      error?: { message?: string };
      choices?: Array<{ message?: { content?: unknown } }>;
    };

    if (!upstream.ok) {
      return res.status(upstream.status).json({
        error: data?.error?.message || "AI request failed",
      });
    }

    const content = data?.choices?.[0]?.message?.content;
    if (typeof content !== "string") {
      return res.status(502).json({ error: "Unexpected AI response", debug: JSON.stringify(data).slice(0, 1000) });
    }

    return res.status(200).json({ content });
  } catch (err) {
    console.error("AI proxy error:", err);
    return res.status(500).json({ error: "AI proxy failure" });
  }
}
