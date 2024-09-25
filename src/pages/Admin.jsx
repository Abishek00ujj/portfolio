import React from 'react'
import { Navbar } from '../components/Navbar'
import { Adminblog } from '../pages/Adminblog'
import { Link } from 'react-router-dom'
import { Adminproject } from '../pages/Adminproject'
import { PlusIcon } from 'lucide-react'
export const Admin = () => {
  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center flex-col backdrop-blur-sm w-screen h-screen'>
        <div>
          <p className='text-orange-400 font-mono text-4xl'>WELCOME ABI!</p>
        </div>
        <div>
          <button className='border-2 text-orange-400 p-8 rounded-lg bg-black w-auto h-30 m-5'>
            <Link to={'/adminproject'}>
              <div className='flex'>
                <PlusIcon />Add projects
              </div>
            </Link>
          </button>
          <button className='border-2 text-orange-400 p-8 rounded-lg bg-black w-auto h-30'>
            <Link to={'/adminblog'}>
              <div className='flex'>
                <PlusIcon />Add blogs
              </div>
            </Link>
          </button>
        </div>

      </div>
    </>
  )
}

export default Admin