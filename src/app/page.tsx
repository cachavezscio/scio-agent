"use client";

import Header from "@/components/header";
import { useChat } from "ai/react";
import Image from "next/image";

const scioAvatar = require("./../../public/scio-avatar.png");

const InitialMessage = () => {
  return (
    <section className="p-4 flex items-center justify-center">
      <section className="flex items-center gap-2 flex-col">
        <Image src={scioAvatar} alt="Scio Consulting" width={48} height={48} />
        <p className="text-base text-[#0971C6] text-center max-w-[24ch]">
          What do you want to know about Scio Consulting?
        </p>
      </section>
    </section>
  );
};

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  console.log(!messages.length);
  return (
    <div className="bg-white">
      <Header />
      <section className="container min-h-[calc(100vh-72px)] mx-auto flex flex-col">
        <section className="grid gap-2 flex-1">
          {!messages.length && <InitialMessage />}
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

        <form
          onSubmit={handleSubmit}
          className="p-4 bg-[#E5F4FF] border border-[#A9D6FF] flex space-between gap-2"
        >
          <input
            className="px-4 py-3 rounded-2xl border border-[#88C5FF] w-full focus-visible:outline-none focus:ring-2 focus:ring-[#00447C] text-[#000]"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
          <button type="submit" className="bg-[#00447C] px-4 py-3 rounded-2xl">
            Ask
          </button>
        </form>
      </section>
    </div>
  );
}
