import React, { useState } from "react";

const LiveChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: "Admin", text: "Selamat datang di live stream! 🚀" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    const newMessage = {
      id: Date.now(),
      user: "Kamu",
      text: input,
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  const sendEmoji = (emoji) => {
    const newMessage = {
      id: Date.now(),
      user: "Kamu",
      text: emoji,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="w-full md:w-80 flex flex-col rounded-2xl border border-gray-700 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gray-800 text-white px-4 py-2 font-semibold">
        💬 Live Chat
      </div>

      {/* Chat messages */}
      <div className="flex-1 bg-black p-4 text-sm text-gray-200 space-y-2 overflow-y-auto max-h-96">
        {messages.map((msg) => (
          <div key={msg.id}>
            <span className="font-bold text-blue-400">{msg.user}: </span>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex border-t border-gray-700 bg-gray-900">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Tulis komentar..."
          className="flex-1 px-3 py-2 bg-transparent text-white outline-none"
        />
        <button
          onClick={sendMessage}
          className="px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold"
        >
          Kirim
        </button>
      </div>

      {/* Emoji buttons */}
      <div className="flex justify-around bg-gray-800 p-2">
        {["😂", "🔥", "❤️", "👏", "🥳"].map((emoji) => (
          <button
            key={emoji}
            onClick={() => sendEmoji(emoji)}
            className="text-lg hover:scale-125 transition"
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LiveChat;
