import { User2, Menu, X } from 'lucide-react';
import { useRef, useState } from 'react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useAuth } from '../AuthContext'; 

export const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [error, setError] = useState("");
  const idref = useRef(null);
  const passref = useRef(null);
  
  const { setLoggedIn } = useAuth();
  const navigate = useNavigate(); 

  const id = "7"; 
  const pass = "admin"; 

  const handleLogin = () => {
    if (idref.current.value === id && passref.current.value === pass) {
      setVisible(false);
      setError("");
      setLoggedIn(true);
      navigate('/admin');
      console.log("Logged in successfully");
    } else {
      setError("Wrong Password");
    }
  };

  const handleSidebarLinkClick = () => {
    setSidebarVisible(false);
  };

  return (
    <>
      <div className="w-full h-[4rem] bg-slate-800 flex justify-between p-5 sticky top-0 z-10">
        <div className="w-[50%]">
          <h1 className="font-mono text-blue-50 font-bold text-2xl pb-15 pl-10">Portfolio</h1>
        </div>
        <div className="font-serif text-white w-1/2 h-[4rem] hidden md:flex">
          <ul className="flex">
            <li className="mr-7 hover:text-yellow-400">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-7 hover:text-yellow-400">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="mr-7 hover:text-yellow-400">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="mr-7 hover:text-yellow-400">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <User2
            className="w-8 h-8 hover:text-yellow-400 text-white rounded-xl border-2 border-white"
            onClick={() => setVisible(true)}
          />
        </div>
        <div className="block md:hidden">
          <Menu
            className="w-8 h-8 text-white"
            onClick={() => setSidebarVisible(true)}
          />
        </div>
      </div>
      <div className={`fixed top-0 right-0 h-full w-[60%] bg-slate-900 bg-opacity-80 z-20 transform ${sidebarVisible ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out backdrop-blur-sm`}>
        <div className="flex justify-end p-4">
          <X className="text-white w-8 h-8" onClick={() => setSidebarVisible(false)} />
        </div>
        <div className="text-white font-serif text-lg">
          <Link to="/" onClick={handleSidebarLinkClick} className="block p-4 border-b border-slate-600 hover:bg-slate-700">Home</Link>
          <Link to="/projects" onClick={handleSidebarLinkClick} className="block p-4 border-b border-slate-600 hover:bg-slate-700">Projects</Link>
          <Link to="/blogs" onClick={handleSidebarLinkClick} className="block p-4 border-b border-slate-600 hover:bg-slate-700">Blogs</Link>
          <Link to="/contact" onClick={handleSidebarLinkClick} className="block p-4 border-b border-slate-600 hover:bg-slate-700">Contact</Link>
          <button className="w-full text-left p-4 border-b border-slate-600 hover:bg-slate-700" onClick={() => {
            setSidebarVisible(false);
            setVisible(true);
          }}>
            Admin Login
          </button>
        </div>
      </div>
      {visible && (
        <div className="fixed top-0 left-0 w-full h-full z-30 backdrop-blur-sm flex justify-center items-center">
          <div className="fixed w-[90vw] md:w-[44vw] h-[40vh] flex-col justify-center items-center bg-black border-2 text-white flex z-20 rounded-md">
            <div className="flex justify-end w-full p-4">
              <X className="text-red-600 border-2 rounded-full" onClick={() => setVisible(false)} />
            </div>
            <p>Codewithabi - Admin login</p>
            <input ref={idref} className="m-3 rounded-md text-black" placeholder="ID" />
            <input ref={passref} className="m-3 rounded-md text-black" placeholder="PASSWORD" />
            <button onClick={handleLogin} className="mb-4 rounded-md bg-green-600 p-2">Login</button>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      )}
    </>
  );
};
