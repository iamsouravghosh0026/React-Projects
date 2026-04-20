import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  // Load notes from localStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) setNotes(savedNotes);
  }, []);

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (input.trim() === "") return;
    setNotes([...notes, { id: Date.now(), text: input }]);
    setInput("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Notes App</h1>

        <div className="flex gap-2 mb-4 w-full max-w-md">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write a note..."
            className="flex-1 p-2 border rounded-lg"
          />
          <button
            onClick={addNote}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Add
          </button>
        </div>
        <div className="w-full max-w-md space-y-2">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-white p-3 rounded-lg shadow flex justify-between items-center"
            >
              <span>{note.text}</span>
              <button
                onClick={() => deleteNote(note.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
