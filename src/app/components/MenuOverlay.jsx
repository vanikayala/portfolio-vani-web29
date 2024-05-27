import React, { useState } from 'react'
import NavLink from './NavLink'
const MenuOverlay = ({ links}) => {
 
  //  const [navbarOpen,setNavbarOpen]=useState(false);
  return (
    <ul className="flex flex-col md:hidden items-end py-4  ">
       {links.map((link, index)=>(
        <li key={index} ><NavLink href={link.path} title={link.title} /></li>
       ))} 
         </ul>
  )
}

export default MenuOverlay