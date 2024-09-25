import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import Blogcomponent from '../components/Blogcomponent';
import { Suspense } from 'react';
export const Blogs = (props) => {
  const url = "https://66e527045cc7f9b6273c6d1d.mockapi.io/Blogs";
  const [blogs, setBlogs] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      if (response.status === 200 || 201) {
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
      <>
        <Suspense fallback={<Loader className='text-white' />}>
          <div className='w-screen h-auto flex flex-col justify-center items-center'>
            <h1 className='text-4xl text-orange-400 font-mono'>BLOGS</h1>
            {blogs.map((item, index) => (
              <Blogcomponent
                id={item.id}
                key={index}
                title={item.Title}
                body={item.Body}
                blog={item.Blog}
                fetchData={fetchData}
              />
            ))}
          </div>
        </Suspense>
      </>
    </>
  );
};

export default Blogs;
