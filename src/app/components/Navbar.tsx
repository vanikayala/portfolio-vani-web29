

"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { XMarkIcon,Bars3Icon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
const navLinks= [
    {title:"Home", path:"/",},
    {title:"About", path:"/about",},
    {title:"Experience", path:"/experience"},
    {title:"Technologies", path:"/technologies"},
    {title:"Contact ", path:"/contact"},
    
]
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='text-white fixed my-0 mx-0 py-2 px-6 top-0 left-0 right-0 z-10 bg-[#383737] bg-opacity-90'>
       
       <div className='flex flex-wrap items-center active justify-between mx-auto py-4'>
        <Link href={"/"} className='text-white md:text-4xl text-lg font-bold'>
          Vani-Portfolio
        </Link>
        <div className="mobile-menu block md:hidden">

          {!navbarOpen ? (
            <button onClick={()=> setNavbarOpen(true)} className="hover:text-slate-400 text-slate-400 flex items-center px-3 py-3 border rounded"><Bars3Icon className="w-4 h-4" />     
            </button>
          ):(
            <button onClick={()=> setNavbarOpen(false)} className='flex px-3 py-3 rounded items-center '> <XMarkIcon className="w-4 h-4" /> </button>
          )}
        </div>
         <div className='menu hidden md:block md:w-auto' id="navbar">
          <ul className='flex flex-col p-auto md:flex-row md:p-0  md:space-x-8'>
            {navLinks.map((link, index)=>(
             <li key={index}  >
                <NavLink href={link.path} title={link.title} />
             </li>
            ))}
            </ul>  
        </div>
        </div>
        {navbarOpen ? <MenuOverlay links = {navLinks}/> : null} 
    </nav>
  )
}

export default Navbar