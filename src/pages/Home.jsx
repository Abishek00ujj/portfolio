import React from 'react'
import { Navbar } from '../components/Navbar'
import profile from '../assets/img/profile.jpg'
export const Home=() => (
    <div>
        <Navbar />
        <div className='flex w-screen h-screen bg-slate-300'>
        <div className='w-[50%] h-50%'>
            <div className='w-[80%] h-[20%] flex  justify-center items-center'>
                <p className='from-neutral-900 text-4xl'>I'm ABISHEK</p>
            </div>
            <div className='w-[90%] flex-row p-10 m-20 rounded-lg bg-slate-800'>
                <p className='text-white font-extralight pl-auto pr-auto '>
                I'm Abishek, currently pursuing my B.Tech in Information Technology at Sri Shakthi Institute of Engineering
            and Technology. I am passionate about Java development and I am eagerly seeking professional internships to
            showcase my talents.
                </p>
            </div>
        </div>
        <div className='w-[45%] h-45%] flex justify-center items-center'>
            <img src={profile} className='rounded-full border-8 border-slate-400'/>
        </div>
        <div>
            
        </div>
        </div>
    </div>
)
