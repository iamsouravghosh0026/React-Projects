import React, { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={darkMode ? "bg-black text-white h-screen flex flex-col justify-center items-center" : "bg-white text-black h-screen flex flex-col justify-center items-center"}>
        <h1 className="text-2xl mb-4">
          {darkMode ? "Dark Mode" : "Light Mode"}
        </h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 border rounded"
        >
          Toggle Theme
        </button>
      </div>
    </>
  )
}

export default App


