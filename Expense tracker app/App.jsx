import React, { useState } from "react";
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const newExpense = {
      id: Date.now(),
      text,
      amount: +amount,
    };

    setExpenses([...expenses, newExpense]);
    setText("");
    setAmount("");
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  const total = expenses.reduce((acc, exp) => acc + exp.amount, 0);
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
          <h1 className="text-2xl font-bold text-center mb-4">Expense Tracker</h1>

          <div className="text-center mb-4">
            <h2 className="text-lg">Total Expense</h2>
            <p className="text-2xl font-semibold">₹{total}</p>
          </div>

          <form onSubmit={addExpense} className="space-y-3">
            <input
              type="text"
              placeholder="Where to expense?"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="number"
              placeholder="Enter expense amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
              Add Expense
            </button>
          </form>

          <ul className="mt-4 space-y-2 max-h-60 overflow-y-auto">
            {expenses.map((exp) => (
              <li
                key={exp.id}
                className="flex justify-between items-center bg-gray-100 p-2 rounded-lg"
              >
                <span>{exp.text}</span>
                <div className="flex items-center gap-2">
                  <span>₹{exp.amount}</span>
                  <button
                    onClick={() => deleteExpense(exp.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App


