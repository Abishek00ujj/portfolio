import React, { useRef } from 'react';
import axios from 'axios';
import { Navbar } from '../components/Navbar';

export const Contact = () => {
  const url = "https://66e527045cc7f9b6273c6d1d.mockapi.io/contact";
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
      if(response.status===201||200)
      {
        alert("Data sent succesffuly")
        nameRef.current.value = '';
        emailRef.current.value = '';
        commentsRef.current.value = '';
      }
      else{
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
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center p-10 border bg-slate-100 rounded-xl">
          <h3 className="font-serif text-black-400 text-2xl pb-10">Get in touch with me!</h3>
          <input ref={nameRef} className="border-2 border-solid border-purple-600 p-2.5 mb-10 rounded-md placeholder-slate-500" type="text" placeholder="NAME" />
          <input ref={emailRef} className="border-2 p-2.5 mb-10 rounded-md border-purple-600 placeholder-slate-500" type="email" placeholder="EMAIL" />
          <textarea ref={commentsRef} className="border-2 p-2.5 mb-10 rounded-md border-purple-600 placeholder-slate-500" placeholder="COMMENTS" />
          <button type="submit" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            SEND
          </button>
        </form>
      </div>
    </>
  );
};
