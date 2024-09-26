import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import BlogComponent from '../components/BlogComponent';

export const Blogs = () => {
  const url = "https://66e527045cc7f9b6273c6d1d.mockapi.io/Blogs";
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      if (response.status === 200 || response.status === 201) {
        setBlogs(response.data);
      } else {
        console.error("API error: ", response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className='w-screen h-auto flex flex-col justify-center items-center'>
        <h1 className='text-4xl text-orange-400 font-mono'>BLOGS</h1>
        {loading ? (
          <Loader className='text-white animate-spin' />
        ) : blogs.length > 0 ? (
          blogs.map((item) => (
            <BlogComponent
              key={item.id}
              title={item.Title}
              body={item.Body}
              blog={item.Blog}
              fetchData={fetchData}
            />
          ))
        ) : (
          <p className="text-gray-600">No blogs available.</p>
        )}
      </div>
    </>
  );
};

export default Blogs;
