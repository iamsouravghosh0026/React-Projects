import React, { useState } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const API_KEY = "800fabee0393f481adac13213af7d7d1";

  const getWeather = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    // console.log(data);
    setWeather(data);
  };

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-blue-200">
        <h1 className="text-3xl mb-4">Weather App 🌦️</h1>

        <div className="flex gap-2">
          <input
            className="p-2 rounded"
            type="text"
            placeholder="Enter city"
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            onClick={getWeather}
            className="bg-blue-500 text-white px-4 rounded"
          >
            Search
          </button>
        </div>

        {weather && weather.main && (
          <div className="mt-6 bg-white p-4 rounded shadow">
            <h2 className="text-xl">{weather.name}</h2>
            <p>{weather.main.temp}°C</p>
            <p>{weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default App


