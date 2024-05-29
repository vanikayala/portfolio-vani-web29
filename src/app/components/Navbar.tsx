
"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { XMarkIcon,Bars3Icon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'

import {motion} from "framer-motion"
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
    <nav className='text-white fixed my-0 mx- py-2 px-6 top-0 left-0 right-0 z-10 bg-[#383737] bg-opacity-90'>
       
       <div className='flex flex-wrap items-center active justify-between mx-auto py-4'>
        <motion.div initial={{ y:-250}}  animate={{ y:-20 }} transition={{delay:0.4, type:"spring"}}> <Link  href={"/"} className='text-white md:text-4xl text-lg font-bold'>
          Portfolio
        </Link></motion.div>
        <div className="mobile-menu block md:hidden">

          {!navbarOpen ? (
            <button onClick={()=> setNavbarOpen(true)} className="hover:text-slate-400 text-slate-400 flex items-center px-3 py-3 border rounded"><Bars3Icon className="w-4 h-4" />     
            </button>
          ):(
            <button onClick={()=> setNavbarOpen(false)} className='flex px-3 py-3 rounded items-center '> <XMarkIcon className="w-4 h-4" /> </button>
          )}
        </div>
         <div className='menu hidden md:block md:w-auto' id="navbar">
          <ul className='flex flex-col p-auto md:flex-row md:p-4  md:space-x-4'>
            {navLinks.map((link, index)=>(
             <motion.li
             whileHover={{ scale: 0.9,originX :0, color:"#f8e112"}}
             transition={{type:"spring", stiffness:300}} key={index}  >
                <NavLink href={link.path} title={link.title} />
          </motion.li>
            ))}
            </ul>  
        </div>
        </div>
        {navbarOpen ? <MenuOverlay links = {navLinks}/> : null} 
    </nav>
  )
}

export default Navbar