import React from 'react'
export const Procomponent = (props) => {
  return (
    <div className='pl-2 pr-2 w-[350px] h-[400px] ml-10 rounded-lg'>
        <div className='border  w-[350px] h-[300px] rounded-lg'>
            <img src={props.img} className='w-[100%] h-[100%] rounded-lg'/>
        </div>
        <div className=' flex-col font-serif text-white'>
         <h1>{props.name}</h1>
         <div className='flex font-serif'>
         <h1>Git repository:</h1>
         <a href={props.link} className='pl-3 text-orange-400'>Click</a>
         </div>
         {
          props.Preview &&
         (<p>Preview: <a href='' className='pl-3 text-orange-400'>Click</a></p>)
         }
        </div>
    </div>
  )
}
