import React, { useState } from 'react'
import './App.css'

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const ACCESS_KEY = "fM6aSU1kV8VSofUglZlOD8WMfdJLU0jlGbKeBQQlH5s";

  const searchImages = async () => {
    if (!query) return;

    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`
    );

    const data = await response.json();
    // console.log(data);

    setImages(data.results);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-5 text-center">
        <h1 className="text-3xl font-bold mb-4">Image Search App</h1>

        <input
          className="p-2 border rounded w-64"
          type="text"
          placeholder="Search images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          onClick={searchImages}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {images.map((img) => (
            <img
              key={img.id}
              src={img.urls.small}
              alt={img.alt_description}
              className="rounded-lg shadow"
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App


