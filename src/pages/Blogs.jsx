import React from 'react'
import {Navbar} from '../components/Navbar'
export const Blogs = () => {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center pt-10">
     <div className='w-[80%] h-[80%] border-2 border-white rounded-lg pl-5'>
        <p className='text-white'>
            Blogs will be uploaded soon! 
            <br/><br/>
            This module is being under construction..
            </p>
     </div>
    </div>
</>
  )
}
