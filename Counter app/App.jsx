import React,{useState} from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);  //ctrl+Enter for next line
  }
  const decrement = () => {
    setCount(count - 1);
  }
  const reset = () => {
    setCount(0);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Counter App</h1>

        <div className="text-6xl font-semibold mb-6">{count}</div>

        <div className="flex gap-4">
          <button
            onClick={increment}
            className="px-6 py-2 bg-green-500 text-white rounded-xl"
          >
            +
          </button>

          <button
            onClick={decrement}
            className="px-6 py-2 bg-red-500 text-white rounded-xl"
          >
            -
          </button>

          <button
            onClick={reset}
            className="px-6 py-2 bg-blue-500 text-white rounded-xl"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  )
}

export default App
