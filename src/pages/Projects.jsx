import React from 'react'
import { Navbar } from '../components/Navbar'
import { Procomponent } from '../components/Procomponent'
import headsortailspro from '../assets/img/headsortailspro.jpg'
import contactpro from '../assets/img/contactpro.png'
import libpro from '../assets/img/libpro.png'
import pizzapro from '../assets/img/pizzapro.png'
import calc from '../assets/img/calc.png'
export const Projects = () => {
  return (
    <div>
        <Navbar />
        <div className=" overflow-auto backdrop-blur-sm">
          <p className='font-serif text-3xl text-orange-400'>JAVA</p>
          <div className='inline-block'>
          <Procomponent img={libpro} name={"Library management system-JAVA , Postgres"} link={"https://github.com/Abishek00ujj/Library-management-system-Java-"}/>
          </div>
        </div>
    </div>
  )
}
