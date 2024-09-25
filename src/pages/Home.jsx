import React from 'react';
import { Navbar } from '../components/Navbar';
import profile from '../assets/img/abidp2.jpg';
import java from '../assets/img/java.png';
import js from '../assets/img/java-script.png';
import rea from '../assets/img/rea.png';
import sql from '../assets/img/sql.png';
import git from '../assets/img/git.png';
import Typewriter from "typewriter-effect";

export const Home = () => (
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
        <div className="w-[90%] p-5 md:p-10 m-5 md:m-20 rounded-lg bg-slate-800">
          <p className="text-white font-extralight text-sm md:text-base">
            I'm Abishek, currently pursuing my B.Tech in Information Technology at Sri Shakthi Institute of Engineering
            and Technology. I am passionate about Java development and I am eagerly seeking professional internships to
            showcase my talents.
          </p>
        </div>
        <div className="flex justify-around w-[80%] md:w-[90%]">
          <img src={java} className="w-10 h-10 md:w-20 md:h-20" />
          <img src={js} className="w-10 h-10 md:w-20 md:h-20" />
          <img src={sql} className="w-10 h-10 md:w-20 md:h-20" />
          <img src={rea} className="w-20 h-10 md:w-40 md:h-20" />
          <img src={git} className="w-10 h-10 md:w-20 md:h-20" />
        </div>
      </div>
      <div className="w-full md:w-[30vw] flex justify-center items-center">
        <img src={profile} className="rounded-full border-4 md:border-8 border-slate-400 w-32 h-32 md:w-48 md:h-48" />
      </div>
    </div>
  </div>
);
