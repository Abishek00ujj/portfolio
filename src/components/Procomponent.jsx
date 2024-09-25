import React from 'react';
import { Github } from 'lucide-react';
import { Trash } from 'lucide-react'
import axios from 'axios';
export const Procomponent = (props) => {
  const handledelete = async (ide) => {
    const url = "https://66e527045cc7f9b6273c6d1d.mockapi.io/contact/";
    try {
      const res = await axios.delete(`${url}${ide}`);
      if (res.status == 200 || 201) {
        alert("deleted");
        props.fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="border-2 border-white bg-black rounded-lg p-4 flex flex-col justify-center items-center w-[350px] shadow-2xl m-10">
      <div className="w-[320px] h-[180px]">
        <a
          href={props.previewlink}
        >
          <img
            src={props.coverlink}
            alt="Project Preview"
            className="object-cover w-full h-full rounded-lg"
          />
        </a>
      </div>
      <div className="text-white text-center mt-4">
        <p className="text-orange-400 text-sm font-semibold">{props.title}</p>
        <h2 className="text-2xl font-bold mt-2">{props.description}</h2>
      </div>
      <div className="flex justify-center items-center mt-4 w-[100%]">
        <div className='w-[50%] flex justify-start items-start'>
          <a
            href={props.gitlink}
            className="bg-white text-black flex items-center justify-center px-4 py-2 rounded-md font-semibold shadow-md hover:bg-gray-200">
            View Project<Github className="mr-2" />
          </a>
        </div>
        <div className='w-[50%] flex justify-end items-end'>
          <div className="flex justify-end items-end w-[100%] "><Trash onClick={() => handledelete(props.id)} className='text-white' /></div>
        </div>
      </div>
    </div>
  );
};
