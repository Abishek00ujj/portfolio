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
        <div className="">
          <p className='font-serif text-3xl text-white'>JAVA</p>
          <div className='flex w-full overflow-scroll'>
          <Procomponent img={headsortailspro} name={"Heads or Tails App-Java"} link={"https://github.com/Abishek00ujj/Heads-or-Tails-APP-using-JAVA"}/>
          <Procomponent img={libpro} name={"Library management system-JAVA , Postgres"} link={"https://github.com/Abishek00ujj/Library-management-system-Java-"}/>
          <Procomponent img={contactpro} name={"Contact Management System-JAVA"} link={"https://github.com/Abishek00ujj/Conatact-management-system-ConsoleBased"}/>
          <Procomponent img={pizzapro} name={"Pizza Shop bill generator-JAVA"} link={"https://github.com/Abishek00ujj/PizzaShopBillGeneratorConsoleBased-JAVA"}/>
          <Procomponent img={calc} name={"Calculator (Math,Science)-JAVA"} link={"https://github.com/Abishek00ujj/Conatact-management-system-ConsoleBased"}/>
          
          </div>
          <p className='font-serif text-3xl text-white'>JAVA SCRIPT</p>
          <div className='flex w-full overflow-scroll'>
          <Procomponent img={calc} name={"Calculator (Math,Science)-JAVA"} link={"https://github.com/Abishek00ujj/Conatact-management-system-ConsoleBased"} preview={"https://github.com/Abishek00ujj/Conatact-management-system-ConsoleBased"}/>
          <Procomponent/>
          <Procomponent/>
          </div>
          <p>JAVA</p>
          <div className='flex w-full overflow-scroll'>
          <Procomponent/>
          <Procomponent/>
          <Procomponent/>
          </div>
        </div>
    </div>
  )
}
