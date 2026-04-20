
import React, { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input)); // evaluates expression
    } catch {
      setInput("Error");
    }
  };

  return (
    <>
      {/* {{ textAlign: "center", marginTop: "50px" }} */}
      <div className="text-center mt-12">
        <h1 className="calc text-center font-medium text-4xl">React Calculator</h1>
        <h2 className='text-center'>Created by SOURAV GHOSH</h2>
        <input
          className="inputText w-103 h-[8vh] text-[18px] border-2 border-black"
          type="text"
          placeholder='Result'
          value={input}
          readOnly
        // style={{ width: "200px", height: "40px", fontSize: "18px" }}
        />
        <div>
          <button className="divider" onClick={() => handleClick("1")}>1</button>
          <button className="divider" onClick={() => handleClick("2")}>2</button>
          <button className="divider" onClick={() => handleClick("3")}>3</button>
          <button className="divider" onClick={() => handleClick("+")}>+</button>
        </div>

        <div>
          <button className="divider" onClick={() => handleClick("4")}>4</button>
          <button className="divider" onClick={() => handleClick("5")}>5</button>
          <button className="divider" onClick={() => handleClick("6")}>6</button>
          <button className="divider" onClick={() => handleClick("-")}>-</button>
        </div>

        <div>
          <button className="divider" onClick={() => handleClick("7")}>7</button>
          <button className="divider" onClick={() => handleClick("8")}>8</button>
          <button className="divider" onClick={() => handleClick("9")}>9</button>
          <button className="divider" onClick={() => handleClick("*")}>*</button>
        </div>

        <div>
          <button className="divider" onClick={() => handleClick("0")}>0</button>
          <button className="divider bg-orange-500 text-white" onClick={clearInput}>C</button>
          <button className="divider text-white bg-green-700" onClick={calculateResult}>=</button>
          <button className="divider" onClick={() => handleClick("/")}>/</button>
        </div>
      </div>
    </>       /* alt+z for toggle word wrap*/
  )
}

export default App
