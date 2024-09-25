import { User2 } from 'lucide-react'
import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
export const Navbar = () => {
    const id = 7;
    const pass = 1234;
    const [visible, setvisible] = useState(false)
    return (
        <>
            <div className='w-full h-[4rem] bg-slate-800 flex justify-between p-5 sticky z-1 '>
                <div className='w-[50%]'>
                    <h1 className='font-mono text-blue-50 font-bold text-2xl pb-15 pl-10'>Portfolio</h1>
                </div>
                <div className='font-serif text-white  w-1/2 h-[4rem]'>
                    <ul className='flex'>
                        <li className='mr-7 hover:text-yellow-400'>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className='mr-7  hover:text-yellow-400'>
                            <Link to={'/projects'}>Project</Link>
                        </li>
                        <li className='mr-7  hover:text-yellow-400'>
                            <Link to={'/blogs'}>Blogs</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <User2 className='w-8 h-8  hover:text-yellow-400 text-white rounded-xl border-2 border-white' onClick={() => setvisible(true)} />
                </div>
            </div>
            {
                visible && (
                    <div className='top-1/2 left-1/2 fixed z-10 backdrop-blur-sm flex justify-center items-center'>
                        <div className='fixed  w-[44vw] h-[40vh] flex-col justify-center items-center bg-black border-2 border-5 text-white flex z-20 rounded-md'>

                            <div className='flex-row  w-full pl-[100%] pb-16'>

                            </div>
                            <div className='flex justify-end  w-[100%] pb-14'>
                                <X className='text-red-600 border-2 rounded-full z-11' onClick={() => setvisible(false)} />
                            </div>
                            <p>Codewithabi-@admin login</p>
                            <input className='m-3 rounded-md text-black' placeholder='ID' />
                            <input className='m-3 rounded-md text-black' placeholder='PASSWORD' />
                            <button className='mb-20 rounded-md p-1 m-4 bg-green-600 p-2'><Link to={'/admin'}>Login</Link></button>
                        </div>
                    </div>
                )
            }
        </>
    )
}
