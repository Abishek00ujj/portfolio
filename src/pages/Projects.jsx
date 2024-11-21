import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from '../components/Navbar';
import { Procomponent } from '../components/Procomponent';
import { Loader } from 'lucide-react';

export const Projects = () => {
  const url = "https://66e527045cc7f9b6273c6d1d.mockapi.io/contact";
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); 

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      if (response.status === 200 || response.status === 201) {
        setProjects(response.data);
      } else {
        alert("API error!");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch projects. Please try again later."); 
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="backdrop-blur-sm">
        <p className='text-orange-400 font-mono flex items-center justify-center text-4xl'>PROJECTS</p>
        <div className='flex flex-col justify-center items-center'>
          {loading ? (
            <div className='w-screen h-screen flex justify-center items-center'>
            <Loader className='text-white animate-spin ' />
          </div>
          ) : projects.length > 0 ? (
            projects.map((item, index) => (
              <Procomponent
                id={item.id}
                key={index}
                title={item.Title}
                description={item.Description}
                coverlink={item.CoverLink}
                gitlink={item.GitLink}
                previewlink={item.Previewlink}
                fetchData={fetchData}
              />
            ))
          ) : (
            <p className="text-gray-600">No projects available.</p> 
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
