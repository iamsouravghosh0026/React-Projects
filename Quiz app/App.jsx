import React, { useState } from 'react'
import './App.css'
const quizData = [
  {
    question: "What is the shortcut of Copy-Paste?",
    options: ["Ctrl Y", "Ctrl Z", "Ctrl C + Ctrl V", "Ctrl X + Ctrl V"],
    answer: "Ctrl C + Ctrl V",
  },
  {
    question: "Who developed React?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    answer: "Facebook",
  },
  {
    question: "Who is the present Prime Minister of India?",
    options: ["Amit Shah", "Narendra Modi", "Mamata Banerjee", "Yogi Adityanath"],
    answer: "Narendra Modi",
  },
  {
    question: "Which team won the ICC Mens T20 World Cup 2026?",
    options: [
      "India",
      "Australia",
      "Pakistan",
      "England",
    ],
    answer: "India",
  },
];
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    const next = currentQuestion + 1;
    if (next < quizData.length) {
      setCurrentQuestion(next);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-87.5 text-center">

          {showScore ? (
            <>
              <h2 className="text-2xl font-bold mb-4">Quiz Completed 🎉</h2>
              <p className="text-lg mb-6">
                Your Score: <span className="font-semibold">{score}</span> / {quizData.length}
              </p>
              <button
                onClick={restartQuiz}
                className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
              >
                Restart Quiz
              </button>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-2">
                Question {currentQuestion + 1}/{quizData.length}
              </h2>

              <p className="text-lg mb-6">
                {quizData[currentQuestion].question}
              </p>

              <div className="flex flex-col gap-3">
                {quizData[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="bg-gray-200 hover:bg-blue-500 hover:text-white py-2 rounded-xl transition"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          )}

        </div>
      </div>
    </>
  )
}

export default App
