import React from 'react';
import { Github } from 'lucide-react';

export const Procomponent = (props) => {
  return (
    <div className="border-2 border-white bg-black rounded-lg p-4 flex flex-col justify-center items-center w-[350px] shadow-2xl shadow-white">
      <div className="w-[320px] h-[180px]">
        <img 
          src={props.img} 
          alt="Project Preview" 
          className="object-cover w-full h-full rounded-lg" 
        />
      </div>
      <div className="text-white text-center mt-4">
        <p className="text-orange-400 text-sm font-semibold">props.name</p>
        <h2 className="text-2xl font-bold mt-2">props.title</h2>
      </div>
      <div className="flex justify-center items-center mt-4">
        <a 
          href={props.githubLink} 
          className="bg-white text-black flex items-center justify-center px-4 py-2 rounded-md font-semibold shadow-md hover:bg-gray-200">
          View Project<Github className="mr-2" />
        </a>
      </div>
    </div>
  );
};
