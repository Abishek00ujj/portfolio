import React, { useEffect, useState, useRef } from 'react';
import { Navbar } from '../components/Navbar';
import profile from '../assets/img/abidp2.jpg';
import java from '../assets/img/java.png';
import js from '../assets/img/java-script.png';
import rea from '../assets/img/rea.png';
import sql from '../assets/img/sql.png';
import git from '../assets/img/git.png';
import Typewriter from "typewriter-effect";
import { Github, Linkedin, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [progress, setProgress] = useState({
    java: 0,
    reactjs: 0,
    expressjs: 0,
    javascript: 0,
    c: 0,
    tailwind: 0,
  });

  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setProgress({
            java: 98,
            reactjs: 60,
            expressjs: 65,
            javascript: 80,
            c: 95,
            tailwind: 80,
          });
        }
      });
    }, { threshold: 0.5 });

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col-reverse md:flex-row w-screen min-h-screen justify-center md:justify-between">
        <div className="w-full md:w-[50%] flex flex-col items-center justify-center">
          <div className="w-[80%] h-[20%] flex flex-col justify-center text-orange-400 font-bold text-3xl md:text-5xl m-5 md:m-10">
            <p>I am </p>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("ABISHEK")
                  .pauseFor(100)
                  .deleteAll()
                  .typeString("FULL STACK DEVELOPER")
                  .start();
              }}
            />
          </div>
          <div className="w-[85%] p-5 md:p-10 m-5 md:m-10 rounded-lg bg-slate-800 bg-opacity-80 backdrop-blur-lg">
            <p className="text-white font-extralight text-sm md:text-base">
              I'm Abishek, currently pursuing my B.Tech in Information Technology at Sri Shakthi Institute of Engineering
              and Technology. I am passionate about Java development and I am eagerly seeking professional internships to
              showcase my talents.
            </p>
          </div>
          <div className="flex justify-around w-[80%] md:w-[85%]">
            <img src={java} className="w-10 h-10 md:w-16 md:h-16" />
            <img src={js} className="w-10 h-10 md:w-16 md:h-16" />
            <img src={sql} className="w-10 h-10 md:w-16 md:h-16" />
            <img src={rea} className="w-16 h-10 md:w-32 md:h-16" />
            <img src={git} className="w-10 h-10 md:w-16 md:h-16" />
          </div>
        </div>
        <div className="w-full md:w-[25vw] flex justify-center items-center">
          <img src={profile} className="rounded-full border-4 md:border-8 border-slate-400 w-48 h-48 md:w-64 md:h-64" />
        </div>
      </div>

      <div className="flex justify-center items-center space-x-5 mt-10">
        <Link to="/projects" className="relative inline-flex items-center justify-center w-36 h-12 py-3 px-6 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
          <span className="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-white">Projects</span>
        </Link>

        <Link to="/blogs" className="relative inline-flex items-center justify-center w-36 h-12 py-3 px-6 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
          <span className="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-white">Blogs</span>
        </Link>
      </div>

      <div ref={skillsRef} className="mt-10 p-5 md:p-8 w-full md:w-[60%] mx-auto bg-slate-800 bg-opacity-70 backdrop-blur-lg rounded-lg">
        <h2 className="text-center text-white font-bold text-2xl mb-6">Skills</h2>
        <div className="space-y-4">
          {[{ skill: "Java", percentage: progress.java },
            { skill: "ReactJS", percentage: progress.reactjs },
            { skill: "ExpressJS", percentage: progress.expressjs },
            { skill: "JavaScript", percentage: progress.javascript },
            { skill: "C", percentage: progress.c },
            { skill: "Tailwind CSS", percentage: progress.tailwind },
          ].map(({ skill, percentage }) => (
            <div key={skill}>
              <div className="flex justify-between">
                <span className="text-white">{skill}</span>
                <span className="text-white">{percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 md:h-4 backdrop-blur-md bg-opacity-30">
                <div
                  className={`bg-orange-500 h-3 md:h-4 rounded-full transition-all duration-[2s] ease-in-out`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-10 p-4 bg-slate-900 text-white text-center">
        <h3 className="mb-4 text-lg">Connect with Me</h3>
        <div className="flex justify-center space-x-6">
          <a href="https://leetcode.com/u/abisheks123/" target="_blank" rel="noopener noreferrer">
            <Code className="w-8 h-8 hover:text-orange-400 transition duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/abishek-s-336b612b9?fromQR=1 " target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-8 h-8 hover:text-blue-400 transition duration-200" />
          </a>
          <a href="https://github.com/Abishek00ujj" target="_blank" rel="noopener noreferrer">
            <Github className="w-8 h-8 hover:text-gray-400 transition duration-200" />
          </a>
        </div>
        <p className="mt-4 text-sm">&copy; 2024 Abishek. All rights reserved.<br/><p>Made with ❤ by Abishek</p></p>
      </footer>
    </div>
  );
};
