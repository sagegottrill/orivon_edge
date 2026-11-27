// Shared AI client for the Orivon Edge tools.
// Calls the server-side Vercel function at /api/ai, which holds the Inception
// API key. The key never reaches the browser bundle.

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export async function aiChat(
  messages: ChatMessage[],
  opts: { temperature?: number; json?: boolean; maxTokens?: number } = {}
): Promise<string> {
  const res = await fetch("/api/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages,
      temperature: opts.temperature ?? 0.7,
      maxTokens: opts.maxTokens ?? 2000,
      json: opts.json ?? false,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.error || "AI request failed");
  }

  return data.content;
}

/** Ask the model for a JSON object and parse it, stripping code fences if present. */
export async function aiJson<T>(
  messages: ChatMessage[],
  opts: { temperature?: number; maxTokens?: number } = {}
): Promise<T> {
  const raw = await aiChat(messages, { ...opts, json: true });
  const cleaned = raw.replace(/```json/g, "").replace(/```/g, "").trim();
  return JSON.parse(cleaned) as T;
}
