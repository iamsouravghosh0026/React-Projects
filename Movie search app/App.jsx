import React, { useState } from 'react'
import './App.css'

function App() {

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const API_KEY = "cd1a946e";

  const searchMovies = async () => {
    if (!query) return;

    const res = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
    );
    const data = await res.json();
    console.log(data);

    setMovies(data.Search || []);
  };
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-5">

        {/* Title */}
        <h1 className="text-3xl font-bold mb-6">🎬 Movie Search</h1>

        {/* Search Box */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-2 w-64 rounded-lg text-white outline-none"
          />
          <button
            onClick={searchMovies}
            className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              className="bg-gray-800 rounded-xl p-4 shadow-lg hover:scale-105 transition"
            >
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
                // src={movie.Poster}
                alt={movie.Title}
                className="w-full h-64 object-cover rounded-lg mb-3"
              />
              <h2 className="text-lg font-semibold">{movie.Title}</h2>
              <p className="text-gray-400">{movie.Year}</p>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default App



