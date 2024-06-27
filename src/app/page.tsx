"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <section className="grid gap-2">
        {messages.map(
          (m) => (
            console.log(m),
            (
              <div
                key={m.id}
                className={
                  "whitespace-pre-wrap rounded p-2 " +
                  `${m.role === "user" ? "bg-gray-500" : "bg-gray-600"}`
                }
              >
                <section>
                  {m.role === "user" ? "🙋🏻‍♂️ User: " : "🤖 Scio Consulting: "}
                </section>
                <p>{m.content}</p>
              </div>
            )
          )
        )}
      </section>

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl text-gray-800"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
