import React from 'react'
import { Navbar } from '../components/Navbar'
import { useRef } from 'react';
import axios from 'axios';
export const Adminproject = () => {
  const titleref = useRef(null);
  const descref = useRef(null);
  const coverref = useRef(null);
  const gitref = useRef(null);
  const previewref = useRef(null);
  const url = "https://66e527045cc7f9b6273c6d1d.mockapi.io/contact";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      Title: titleref.current.value,
      Description: descref.current.value,
      CoverLink: coverref.current.value,
      GitLink: gitref.current.value,
      Previewlink: previewref.current.value
    };

    try {
      const response = await axios.post(url, formData);
      if (response.status === 201 || 200) {
        alert("Data sent succesffuly")
        titleref.current.value = '';
        descref.current.value = '';
        coverref.current.value = '';
        gitref.current.value = '';
        previewref.current.value = '';
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
    <div>
      <Navbar />
      <h1 className='text-4xl text-orange-400 font-serif'>Welcome Admin!</h1>
      <div>
        <div className="flex flex-col items-center justify-center w-screen h-screen">
          <form onSubmit={handleSubmit} className="text-black  flex flex-col items-center justify-center p-10  backdrop-blur-lg border-2 border-white rounded-xl">
            <h3 className='font-serif text-white text-2xl pb-10'>ADD-PROJECTS</h3>
            <input required ref={titleref} className="border-2 border-solid border-purple-600 p-2.5 mb-10 rounded-md placeholder-slate-500" type="text" placeholder="Title" />
            <input required ref={descref} className="border-2 p-2.5 mb-10 rounded-md border-purple-600 placeholder-slate-500" type="text" placeholder="Description" />
            <input required ref={coverref} className='border-2 p-2.5 mb-10 rounded-md border-purple-600 placeholder-slate-500' type="text" placeholder="Cover Link" />
            <input required ref={gitref} className='border-2 p-2.5 mb-10 rounded-md border-purple-600 placeholder-slate-500' type="text" placeholder="GitHub Link" />
            <input ref={previewref} className='border-2 p-2.5 mb-10 rounded-md border-purple-600 placeholder-slate-500' type="text" placeholder="Preview Link(Optional)" />
            <button type="submit" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">ADD</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Adminproject