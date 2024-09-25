import React from 'react';
import { Trash } from 'lucide-react';
import axios from 'axios';

const Blogcomponent = (props) => {

  const handledelete = async (ide) => {
    const url = "https://66e527045cc7f9b6273c6d1d.mockapi.io/Blogs/";
    try {
      const res = await axios.delete(`${url}${ide}`);
      if (res.status === 200 || res.status === 201) {
        alert("Deleted successfully");
        props.fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='w-[80vw] h-auto border-2 border-white rounded-xl shadow-inner shadow-green-400 flex flex-col m-10 justify-center p-5 backdrop-blur-sm'>
        <div className='w-80vw'>
          <div className='flex justify-center items-start pb-2'>
            <p className='text-2xl text-white'></p>
            <p className='text-2xl text-orange-600 underline font-mono'>{props.title}</p>
          </div>
          <div className='flex justify-start items-start pb-2'>
            <p className='text text-white font-mono'>Subject:</p>
            <p className='text text-orange-400 font-mono'>{props.body}</p>
          </div>
          <div className='flex justify-start items-start pb-2'>
            <p className='text-2xl text-white'></p>
            <p className='font-mono text-[#] text-white'>{props.blog}</p>
          </div>
          <div className="text-white flex justify-end items-end">
            {props.isLoggedIn && (
              <Trash onClick={() => handledelete(props.id)} className='cursor-pointer' />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogcomponent;
