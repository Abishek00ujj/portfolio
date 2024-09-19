import { User2 } from 'lucide-react'
import React from 'react'
import { Projects } from '../pages/Projects'
import { Contact } from '../pages/Contact'
export const Navbar = () => {
    return (
        <>
            <div className='w-full h-[4rem] bg-black flex justify-between p-5'>
                <div className='w-[50%]'>
                    <h1 className='font-mono text-blue-50 font-bold text-2xl pb-15 pl-10'>ABISHEK S</h1>
                </div>
                <div className='font-serif text-white  w-1/2 h-[4rem]'>
                    <ul className='flex'>
                        <li className='mr-7'>
                            Home
                        </li>
                        <li  className='mr-7'>
                            Project
                        </li>
                        <li  className='mr-7'>
                            Contact
                        </li>
                    </ul>
                </div>
                <div>
                    <User2 className='w-8 h-8 text-white rounded-xl border-2 border-white'></User2>
                </div>
            </div>
        </>
    )
}
