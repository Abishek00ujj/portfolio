import React from 'react';
import { Github, Trash ,Eye} from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../AuthContext';

export const Procomponent = (props) => {
  const { loggedIn } = useAuth();

  const handledelete = async (ide) => {
    const url = "https://66e527045cc7f9b6273c6d1d.mockapi.io/contact/";
    try {
      const res = await axios.delete(`${url}${ide}`);
      if (res.status === 200 || res.status === 201) {
        alert("Deleted successfully.");
        props.fetchData();
      }
    } catch (error) {
      alert("Failed to delete the project. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="border-2 border-white bg-black rounded-lg p-4 flex flex-col justify-center items-center w-[350px] shadow-2xl m-10">
      <div className="w-[320px] h-[180px]">
        <a href={props.previewlink} target="_blank" rel="noopener noreferrer">
          <img
            src={props.coverlink}
            alt={`Preview of ${props.title}`}
            className="object-cover w-full h-full rounded-lg"
          />
        </a>
      </div>
      <div className="text-white text-center mt-4">
        <p className="text-orange-400 text-sm font-semibold">{props.title}</p>
        <h2 className="text-2xl font-bold mt-2">{props.description}</h2>
      </div>
      <div className="flex mt-4 w-full">
        <div className="w-full flex justify-between">
          <a
            href={props.gitlink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black flex items-center justify-center px-4 py-2 rounded-md font-semibold shadow-md hover:bg-gray-200">
            View Project <Github className="ml-2" />
          </a>
          <a
            href={props.previewlink || props.previewlink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black flex items-center justify-center px-4 py-2 rounded-md font-semibold shadow-md hover:bg-gray-200">
            LIVE <Eye className="ml-2" />
          </a>
        </div>
        {loggedIn && (
          <div className="flex justify-end items-end">
            <Trash
              onClick={() => handledelete(props.id)}
              className="text-white cursor-pointer hover:text-red-500"
            />
          </div>
        )}
      </div>
    </div>
  );
};
