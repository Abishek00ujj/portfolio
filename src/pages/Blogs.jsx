import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import { Navbar } from '../components/Navbar';
import Blogcomponent from '../components/Blogcomponent'; // Make sure to import your Blogcomponent

export const Blogs = (props) => {
  const url = "https://66e527045cc7f9b6273c6d1d.mockapi.io/Blogs";
  const [blogs, setBlogs] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        setBlogs(response.data);
      } else {
        alert("API error!");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch blogs. Please try again later."); // User feedback for errors
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className='w-screen h-auto flex flex-col justify-center items-center'>
        <h1 className='text-4xl text-[#f3ebeb] font-mono'>BLOGS</h1>
        {blogs.map((item) => (
          <Blogcomponent
            key={item.id}
            title={item.Title}
            body={item.Body}
            blog={item.Blog}
          />
        ))}
      </div>
    </>
  );
};

export default Blogs;
