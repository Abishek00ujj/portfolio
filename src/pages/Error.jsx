import React from 'react'
import errorImg from '../assets/img/errorImg.gif'
export const Error = () => {
  return (
    <>
    <div className='w-screen h-screen flex justify-center items-center bg-f5f5f5 bg-white'>
        <div>
        <img className='w-[100%] h-[100%]'src={errorImg} alt='error404'/>
        </div>
        <div className=''> 
        <p className='w-[40%] h-[30%] text-9xl'>Oops!</p>
        <p className='pt-10'>We can't seem to find the page you're looking for.</p>
        <p className='text-lg'>Error code: 404</p>
        </div>
    </div>
    </>
  )
}
