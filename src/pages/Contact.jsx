import React from 'react'
import { Navbar } from '../components/Navbar'
export const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center w-screen h-screen">
    <form className="flex flex-col items-center justify-center p-10 border bg-slate-100 rounded-xl">
            <h3 className='font-serif text-black-400 text-2xl pb-10'>Get in touch with me!</h3>
            <input className="border-2 border-solid border-purple-600 p-2.5 mb-10 rounded-md placeholder-slate-500" type="text" placeholder="NAME"/>
            <input className="border-2 p-2.5 mb-10 rounded-md border-purple-600 placeholder-slate-500" type="text" placeholder="EMAIL"/>
            <textarea className="border-2 p-2.5 mb-10 rounded-md border-purple-600 placeholder-slate-500" type="" placeholder="COMMENTS"/>
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">SEND</button>
    </form>
</div>
</>
  )
}
