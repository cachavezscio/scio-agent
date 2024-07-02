"use client";

import Header from "@/components/header";
import { useChat } from "ai/react";
import Image from "next/image";
import { remark } from "remark";
import html from "remark-html";

const scioAvatar = require("./../../public/scio-avatar.png");
const userAvatar = require("./../../public/user-avatar.png");

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
  function parseMarkdown(markdown: string) {
    return remark().use(html).processSync(markdown).toString();
  }
  return (
    <div className="bg-white">
      <Header />
      <section className="container min-h-[calc(100vh-72px)] mx-auto flex flex-col">
        <section className="flex flex-1 flex-col gap-4 p-4">
          {!messages.length && <InitialMessage />}
          {messages.map((m) => (
            <>
              {m.role === "user" ? (
                <section className="flex flex-col gap-2">
                  {/* User */}
                  <section className="flex gap-2 items-center justify-end">
                    <p className="text-base text-[#000] font-semibold">You</p>
                    <Image src={userAvatar} alt="User" width={32} height={32} />
                  </section>
                  {/* Content */}
                  <section className="p-4 bg-[#F2FAFF] border border-[#A9D6FF] rounded">
                    <p
                      className="text-base text-[#0971C6] font-medium text-right list-disc"
                      dangerouslySetInnerHTML={{
                        __html: parseMarkdown(m.content).toString(),
                      }}
                    ></p>
                  </section>
                </section>
              ) : (
                <section className="flex flex-col gap-2">
                  <section className="flex gap-2 items-center">
                    <Image
                      src={scioAvatar}
                      alt="Scio Consulting"
                      width={32}
                      height={32}
                    />
                    <p className="text-base text-[#000] font-semibold">
                      Scio Consulting
                    </p>
                  </section>
                  {/* Content */}
                  <section className="p-4 bg-[#F9F9FB] border border-[#D8D9E0] rounded">
                    <p
                      className="text-base text-[#62636C] font-medium"
                      dangerouslySetInnerHTML={{
                        __html: parseMarkdown(m.content).toString(),
                      }}
                    ></p>
                  </section>
                </section>
              )}
            </>
          ))}
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
