import React, {useState, useEffect} from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
 // cleanup function
    return () => clearInterval(timer);
  }, []);

  return (
    <>
   {/* // h-screen = height 100vh */}
      <div className="h-screen flex justify-center items-center bg-black">
      <h1 className="text-green-400 text-6xl font-mono">
        {time.toLocaleTimeString()}
      </h1>
    </div>
    </>
  )
}

export default App


