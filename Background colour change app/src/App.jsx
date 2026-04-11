import React, { useState } from 'react'

import './App.css'

function App() {

  const [bgColor, setBgColor] = useState("white");

  const changeColor = () => {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };
  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundColor: bgColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={changeColor}
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            cursor: "pointer",
            border: "3px solid black",
            color: "black",
            backgroundColor: "white",
            borderRadius: "10px"
          }}
        >
          Click Me to Change Background
        </button>
    
      </div>
    </>
  )
}

export default App
