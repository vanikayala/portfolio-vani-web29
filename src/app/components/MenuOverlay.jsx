import React, { useState } from 'react'
import NavLink from './NavLink'
import {motion} from "framer-motion"

const MenuOverlay = ({ links}) => {
 
  //  const [navbarOpen,setNavbarOpen]=useState(false);
  return (
    <ul className="flex flex-col md:hidden items-end py-4  ">
       {links.map((link, index)=>(
         <motion.li     
           whileHover={{ scale: 1.2,originX :0.7, color:"#f8e112"}} key={index} ><NavLink href={link.path} title={link.title} /></motion.li>
       ))} 
         </ul>
  )
}

export default MenuOverlay