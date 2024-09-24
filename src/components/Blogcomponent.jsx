import React from 'react'

const Blogcomponent = (props) => {
  return (
    <>
      <div className='w-[80vw] h-auto border-2 border-white rounded-xl shadow-inner shadow-green-400 flex flex-col m-10 justify-center p-5 backdrop-blur-sm'>
        <div className='w-80vw'>
           <div className='flex justify-center items-start pb-2'>
              <p className='text-2xl text-white'></p> <p className='text-2xl text-orange-600 underline font-mono'>{props.title}</p>
           </div>
           <div className='flex justify-start items-start  pb-2'>
              <p className='text text-white font-mono'>Subject:</p> <p className='text text-orange-400 font-mono'>{props.body}</p>
           </div>
           <div className='flex justify-start items-start  pb-2'>
              <p className='text-2xl text-white'></p> <p className='font-mono text-[#] text-white'>{props.blog}</p>
           </div>
        </div>
      </div>
    </>
  )
}

export default Blogcomponent