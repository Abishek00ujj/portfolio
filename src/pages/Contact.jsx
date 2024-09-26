import React, { useRef } from 'react';
import axios from 'axios';
import { Navbar } from '../components/Navbar';
import { Github, Linkedin, Code } from 'lucide-react';
export const Contact = () => {
  const url = "";
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const commentsRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      Name: nameRef.current.value,
      Email: emailRef.current.value,
      Comments: commentsRef.current.value
    };

    try {
      const response = await axios.post(url, formData);
      if (response.status === 201 || 200) {
        alert("Data sent succesffuly")
        nameRef.current.value = '';
        emailRef.current.value = '';
        commentsRef.current.value = '';
      }
      else {
        alert("Failed to sent");
      }
      console.log('Data posted:', response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-screen h-screen backdrop-blur-sm">
        <h1 className='text-4xl text-orange-400 font-mono'>CONTACT</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center p-10 border backdrop-blur-lg text-white rounded-xl">
          <h3 className="font-serif text-black-400 text-2xl pb-10">Get in touch with me!</h3>
          <input required ref={nameRef} className="border-2 border-solid border-purple-600 p-2.5 mb-10 rounded-md placeholder-slate-500 text-black" type="text" placeholder="NAME" />
          <input required ref={emailRef} className="border-2 p-2.5 mb-10 rounded-md border-purple-600 placeholder-slate-500 text-black" type="email" placeholder="EMAIL" />
          <textarea required ref={commentsRef} className="border-2 p-2.5 mb-10 rounded-md border-purple-600 placeholder-slate-500 text-black" placeholder="COMMENTS" />
          <button type="submit" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            SEND
          </button>
        </form>
      </div>
      <footer className="mt-10 p-4 bg-slate-900 text-white text-center">
        <h3 className="mb-4 text-lg">Connect with Me</h3>
        <div className="flex justify-center space-x-6">
          <a href="https://leetcode.com/u/abisheks123/" target="_blank" rel="noopener noreferrer">
            <Code className="w-8 h-8 hover:text-orange-400 transition duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/abishek-s-336b612b9?fromQR=1 " target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-8 h-8 hover:text-blue-400 transition duration-200" />
          </a>
          <a href="https://github.com/Abishek00ujj" target="_blank" rel="noopener noreferrer">
            <Github className="w-8 h-8 hover:text-gray-400 transition duration-200" />
          </a>
        </div>
        <p className="mt-4 text-sm">&copy; 2024 Abishek. All rights reserved.<br/><p>Made with ❤ by Abishek</p></p>
      </footer>
    </>
  );
};
