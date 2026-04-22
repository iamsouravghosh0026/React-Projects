import React, { useState } from "react";
import './App.css'

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };


  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
    const E = todos.filter((todo) => todo.id === id)
    // console.log(E);
    setTask(E[0].text)
  }
  const filteredTodos = todos.filter((todo) => {
    if (filter === "Completed") return todo.completed;
    if (filter === "Pending") return !todo.completed;
    return true;
  }
  );
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">
          <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
            Todo App
          </h1>
          {/* Input */}
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Enter a task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              onClick={addTask}
              disabled={task.length <= 3}
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition disabled:text-gray-700 disabled:bg-[rgb(249,244,244)] disabled:border"
            >Add</button>
          </div>

          {/* filter  */}
          <div className="flex justify-center gap-4 mb-4 text-sm">
            <label className="flex items-center gap-1 cursor-pointer" >
              <input
                type="radio"
                name="filter"
                checked={filter === "All"}
                onChange={() => setFilter("All")}
              />
              All
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="filter"
                checked={filter === "Completed"}
                onChange={() => setFilter("Completed")}
              />
              Completed
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="filter"
                checked={filter === "Pending"}
                onChange={() => setFilter("Pending")}
              />
              Pending
            </label>
          </div>

          {/* Todo List */}
          <ul className="space-y-2">
            {filteredTodos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-lg"
              >
                <input type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                />
                <span
                  onClick={() => toggleComplete(todo.id)}
                  className={`cursor-pointer ${todo.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800"
                    }`}
                >
                  {todo.text}
                </span>
                <div>
                  <button
                    className="mr-2.5"
                    onClick={() => editTodo(todo.id)}
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => deleteTask(todo.id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>
          {todos.length === 0 && (
            <p className="text-center text-gray-400 mt-4">
              No tasks yet. Add one!
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default App

