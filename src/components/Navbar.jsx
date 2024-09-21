import { User2 } from 'lucide-react'
import React from 'react'
import {Link} from 'react-router-dom'
export const Navbar = () => {
    return (
        <>
            <div className='w-full h-[4rem] bg-slate-800 flex justify-between p-5 sticky'>
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
                        <Link to={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <User2 className='w-8 h-8  hover:text-yellow-400 text-white rounded-xl border-2 border-white'></User2>
                </div>
            </div>
        </>
    )
}
