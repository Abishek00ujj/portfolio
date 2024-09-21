import React from 'react'
import { Navbar } from '../components/Navbar'
import profile from '../assets/img/abidp2.jpg'
import java from '../assets/img/java.png'
import js from '../assets/img/java-script.png'
import rea from '../assets/img/rea.png'
import sql from '../assets/img/sql.png'
import git from '../assets/img/git.png'
import Typewriter from "typewriter-effect";
export const Home=() => (
    <div>
        <Navbar/>
        <div className='flex w-screen h-screen'>
        <div className='w-[50%] h-50%'>
            <div className='w-[80%] h-[20%] flex flex-col  justify-center m-10 text-orange-400 font-bold text-5xl'>
                <p>I am </p>
            <Typewriter className=''
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
            <div className='w-[90%] flex-row p-10 m-20 rounded-lg bg-slate-800'>
                <p className='text-white font-extralight pl-auto pr-auto '>
                I'm Abishek, currently pursuing my B.Tech in Information Technology at Sri Shakthi Institute of Engineering
            and Technology. I am passionate about Java development and I am eagerly seeking professional internships to
            showcase my talents.
                </p>
            </div>
            <div className='flex'>
            <img src={java} className='w-30 h-20'/>
            <img src={js} className='w-30 h-20'/>
            <img src={sql} className='w-30 h-20'/>
            <img src={rea} className='w-60 h-20'/>
            <img src={git} className='w-30 h-20'/>
            </div>
        </div>
        <div className='w-[30vw] h-40vh] flex justify-center items-center'>
            <img src={profile} className='rounded-full border-8 border-slate-400'/>
        </div>
        </div>
        <div>
        </div>
    </div>
)
