import { User2 } from 'lucide-react'
import {useState} from 'react'
import React from 'react'
import {Link} from 'react-router-dom'
import {X} from 'lucide-react'
export const Navbar = () => {
    const [visible,setvisible]=useState(false)
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
                        <li className='mr-7  hover:text-yellow-400'>
                        <Link to={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <User2 className='w-8 h-8  hover:text-yellow-400 text-white rounded-xl border-2 border-white' onClick={()=>setvisible(true)}/>
                </div>
            </div>
            {
                visible && (
                    <div className='top-1/2 left-1/2 fixed'>
                    <div className='fixed  w-[30vw] h-[40vh] flex-col justify-center items-center bg-black border-2 border-5 text-white flex z-20 rounded-md'>
                        <div className='flex-row  w-full pl-[100%] pb-16'>
                            <X className='text-red-600 border-2 rounded-full'  onClick={()=>setvisible(false)}/>
                            </div>
                        <p>Codewithabi-@admin login</p>
                      <input className='m-5 rounded-md text-black' placeholder='ID'/>    
                      <input className='m-5 rounded-md text-black' placeholder='PASSWORD'/> 
                      <button className= 'rounded-md p-1 m-4 bg-green-600'>Login<Link to={'/admin'}>Admin</Link></button>             
               </div>
               </div>
                )
            }
        </>
    )
}
