"use client";

import { useState } from "react";

export default function AIPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { role: string; content: string }[]
  >([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMessage = {
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "خطا در ارتباط با سرور.",
        },
      ]);
    }

    setMessage("");
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8">
        دستیار هوشمند Olympia
      </h1>

      <div className="bg-zinc-900 rounded-xl p-5 h-[60vh] overflow-y-auto mb-6">
        {messages.length === 0 && (
          <p className="text-gray-400">
            هر سوالی درباره مکمل، بدنسازی یا تغذیه داری بپرس.
          </p>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 ${
              msg.role === "user"
                ? "text-right"
                : "text-left"
            }`}
          >
            <div
              className={`inline-block rounded-xl px-4 py-3 ${
                msg.role === "user"
                  ? "bg-yellow-500 text-black"
                  : "bg-zinc-800"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <p className="text-gray-400">
            در حال فکر کردن...
          </p>
        )}
      </div>

      <div className="flex gap-3">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          className="flex-1 bg-zinc-900 rounded-xl px-4 py-3 outline-none"
          placeholder="سوالت را بنویس..."
        />

        <button
          onClick={sendMessage}
          className="bg-yellow-500 text-black px-6 rounded-xl font-bold"
        >
          ارسال
        </button>
      </div>
    </div>
  );
}