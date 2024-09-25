import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from '../components/Navbar'
import { Procomponent } from '../components/Procomponent'
export const Projects = () => {
  const url = "https://66e527045cc7f9b6273c6d1d.mockapi.io/contact";
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      if (response.status === 200 || 201) {
        setProjects(response.data);
      } else {
        alert("API error!");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch blogs. Please try again later.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <div className=" backdrop-blur-sm">
        <p className=' text-orange-400 font-mono flex items-center justify-center text-4xl'>PROJECTS</p>
        <div className='flex flex-col justify-center items-center'>
          {projects.map((item, index) => (
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
          ))}
        </div>
      </div>
    </div>
  )
}
