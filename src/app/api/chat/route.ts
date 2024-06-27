import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { createPrompt } from "./service";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();
  const question = messages[messages.length - 1].content;
  const prompt = createPrompt(question);

  const result = await streamText({
    messages: prompt,
    model: openai('gpt-3.5-turbo'),
    maxTokens: 150,
    temperature: 0.7,
  });

  return result.toAIStreamResponse();
}
