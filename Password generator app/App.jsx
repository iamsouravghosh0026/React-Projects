import react, { useState } from "react";
import './App.css'

function App() {
  const [length, setLength] = useState(10);
  const [password, setPassword] = useState("");
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);

  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+";

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += chars[Math.floor(Math.random() * chars.length)];
    }

    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Copied to clipboard!");
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center">
          <h1 className="text-xl font-bold mb-4">Password Generator</h1>

          <input
            type="text"
            value={password}
            readOnly
            placeholder="Your password"
            className="w-full p-2 border rounded mb-2"
          />
          {password && (
            <button
              onClick={copyToClipboard}
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
            >
              Copy
            </button>
          )}

          <div className="mb-0.5 mt-5">
            <label className="block text-sm mb-1">Length: {length}</label>
            <input
              type="range"
              min="6"
              max="20"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex justify-between mb-2">
            <label className="text-sm">
              <input
                type="checkbox"
                checked={numbers}
                onChange={() => setNumbers(!numbers)}
                className="mr-1"
              />
              Numbers
            </label>

            <label className="text-sm">
              <input
                type="checkbox"
                checked={symbols}
                onChange={() => setSymbols(!symbols)}
                className="mr-1"
              />
              Symbols
            </label>
          </div>
          <button
            onClick={generatePassword}
            className="w-full mt-2 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Generate Password
          </button>

        </div>
      </div>
    </>
  )
}

export default App


//    if (numbers) newPassword += "0123456789"[Math.floor(Math.random()*10)];
//    if (symbols) newPassword += "!@#$%^&*()_+"[Math.floor(Math.random()*12)];



