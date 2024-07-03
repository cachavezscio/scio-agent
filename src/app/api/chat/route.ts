import { ask } from './service';

export async function POST(req: Request) {
  const { messages } = await req.json();
  const question = messages[messages.length - 1].content;
  return await ask(question);
}
