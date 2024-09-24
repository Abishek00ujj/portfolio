import React from 'react'
import {Navbar} from '../components/Navbar'
import {Adminblog} from '../pages/Adminblog'
import {Link} from 'react-router-dom'
import {Adminproject} from '../pages/Adminproject'
import { PlusIcon } from 'lucide-react'
export const Admin = () => {
  return (
    <>
    <Navbar/>
    <div className='flex justify-center items-center flex-col backdrop-blur-sm w-screen h-screen'>
      <div>
      <p className='text-orange-400 font-mono text-4xl'>WELCOME ABI!</p>
      </div>
      <div>
      <button className='border-2 text-orange-400 p-8 rounded-lg bg-black w-auto h-30 m-5'>
        <div className='flex'>
        <PlusIcon/><Link to={'/adminproject'}>Add projects</Link>
       </div>
      </button>
      <button className='border-2 text-orange-400 p-8 rounded-lg bg-black w-auto h-30'>
      <div className='flex'>
      <PlusIcon/><Link to={'/adminblog'}>Add blogs</Link>
      </div>
      </button>
      </div>
    </div>
    </>
  )
}

export default Admin