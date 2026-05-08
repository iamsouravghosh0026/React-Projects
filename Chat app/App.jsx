import React, { useState, useRef, useEffect } from "react";
import './App.css'

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: input,
      sender: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        // hour12:false,
      }),
    };
    setMessages([...messages, newMessage]);
    setInput("");
    // console.log(newMessage); 
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="h-screen bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
        <div className="w-full max-w-md h-150 bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">

          {/* Header */}
          <div className="bg-indigo-600 text-white p-4 text-lg font-semibold">
            💬 Chat App
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"
                  }`}
              >
                <div className="max-w-[80%]">
                  <div
                    className={`px-4 py-2 rounded-2xl text-sm wrap-break-word shadow 
                  ${msg.sender === "me"
                        ? "bg-indigo-500 text-white rounded-br-none"
                        : "bg-gray-200 text-gray-800 rounded-bl-none"
                      }`}
                  >
                    {msg.text}
                  </div>
                  <div className="text-xs text-gray-400 mt-1 text-right">
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
            <div ref={bottomRef}></div>
          </div>

          {/* Input */}
          <div className="p-3 border-t flex items-center gap-2 bg-white">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full transition"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App



