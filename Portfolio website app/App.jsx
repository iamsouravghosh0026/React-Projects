import React, { useState } from "react";
import { motion } from "framer-motion";
import './App.css'

const projects = [
  {
    title: "Todolist App",
    desc: "Todo app using React & Tailwindcss",
    link: "https://github.com/iamsouravghosh0026/React-Projects/blob/main/Todolist%20app/App.jsx"
  },
  {
    title: "Music Player App",
    desc: "Music player app using React & Tailwindcss",
    link: "https://github.com/iamsouravghosh0026/React-Projects/blob/main/Music%20player%20app/App.jsx"
  },
  {
    title: "Chat App",
    desc: "Chat app using React & Tailwindcss",
    link: "https://github.com/iamsouravghosh0026/React-Projects/blob/main/Chat%20app/App.jsx"
  },
];

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    // if (name.trim() === "" || email.trim() === "" || message.trim() === "") return;
    if (!name || !email || !message) return;

    // if (!isNaN(name)) {
    //     alert("Name cannot be a number");
    //     return;
    //   }

    if (!name.trim()) {
      alert("Name cannot be empty");
      return;
    };

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
      alert("Name can not contain numbers or symbols");
      return;
    }

    if (!email.endsWith("@gmail.com")) {
      alert("Email must ends with @gmail.com");
      return;
    }

    alert("Your message sent successfully!")
  }

  return (
    <>
      <div className="bg-gray-950 text-white min-h-screen font-sans">

        {/* Navbar */}
        <nav className="flex justify-between items-center p-5 max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">MyPortfolio</h1>
          <div className="space-x-2 md:space-x-4 text-xl">
            <a href="#about" className="hover:text-indigo-400">About</a>
            <a href="#projects" className="hover:text-indigo-400">Projects</a>
            <a href="#contact" className="hover:text-indigo-400">Contact</a>
          </div>
        </nav>

        {/* Me */}
        <section className="text-center py-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Hi, I'm SOURAV GHOSH 👋
          </motion.h2>
          <p className="mt-4 text-gray-400 text-lg">
            Frontend Developer | React Enthusiast
          </p>
        </section>

        {/* About */}
        <section id="about" className="max-w-4xl mx-auto px-5 py-16">
          <h3 className="text-3xl font-semibold mb-4">About Me</h3>
          <p className="text-gray-400">
            I am a passionate developer skilled in building modern web
            applications using React, Tailwind CSS, and APIs.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-6xl mx-auto px-5 py-16">
          <h3 className="text-3xl font-semibold mb-8">Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.05 }}
                href={proj.link}
                target="_blank"
                className="bg-gray-900 p-5 rounded-2xl shadow-lg"
              >
                <h4 className="text-xl font-bold mb-2">{proj.title}</h4>
                <p className="text-gray-400">{proj.desc}</p>
              </motion.a>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-6">
            <h4 className="text-xl">Click here to see all React-Projects:-</h4>
            <span>
              <a
                href="https://github.com/iamsouravghosh0026/React-Projects"
                target="_blank"
                className="underline text-cyan-500 hover:text-indigo-400 "
              >
                github.com/iamsouravghosh0026/React-Projects
              </a>
            </span>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-4xl mx-auto px-5 py-16">
          <h3 className="text-3xl font-semibold mb-4">Contact</h3>
          <form
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
            />
            <textarea
              placeholder="Type Your Message...."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
            />
            <button
              onClick={sendMessage}
              className="bg-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
          © {new Date().getFullYear()} Sourav Ghosh. All rights reserved.
        </footer>

      </div>
    </>
  )
}

export default App




