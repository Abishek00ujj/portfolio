import React, { useState } from 'react';
import axios from 'axios';
import { Navbar } from '../components/Navbar';
import { Github, Linkedin, Code } from 'lucide-react';

export const Contact = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "d653fb3b-e8d0-435b-95b8-629fed32c9e7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
      console.error("Submission Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="text-2xl font-semibold mb-4 w-[400px] text-orange-400">Contact Form</div>
        <form
          onSubmit={onSubmit}
          className="w-[80%] max-w-lg flex flex-col items-center space-y-4"
          aria-busy={loading}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 border border-gray-300 rounded-xl focus:border-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 border border-gray-300 rounded-xl focus:border-black"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-4 border border-gray-300 rounded-xl focus:border-black"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            aria-disabled={loading}
            className={`w-full p-4 text-white rounded-xl ${
              loading ? "bg-pink-500" : "bg-orange-400"
            }`}
          >
            {loading ? "Sending..." : "Submit Form"}
          </button>
        </form>
        <span className="mt-4 text-lg text-green-400" role="status" aria-live="polite">
          {result}
        </span>
      </div>
      <footer className="mt-10 p-4 bg-slate-900 text-white text-center">
        <h3 className="mb-4 text-lg">Connect with Me</h3>
        <div className="flex justify-center space-x-6">
          <a
            href="https://leetcode.com/u/abisheks123/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code className="w-8 h-8 hover:text-orange-400 transition duration-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/abishek-s-336b612b9?fromQR=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-8 h-8 hover:text-blue-400 transition duration-200" />
          </a>
          <a
            href="https://github.com/Abishek00ujj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-8 h-8 hover:text-gray-400 transition duration-200" />
          </a>
        </div>
        <p className="mt-4 text-sm">
          &copy; 2024 Abishek. All rights reserved.
          <br />
          Made with ❤ by Abishek
        </p>
      </footer>
    </>
  );
};
