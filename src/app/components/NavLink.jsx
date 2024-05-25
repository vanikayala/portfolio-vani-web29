import Link from 'next/link'
import React, {useState} from 'react'

const NavLink = ({ href,title }) => {
 
    // const [navbarOpen,setNavbarOpen]=useState();
  return (
    <Link 
    //  onClick={()=>setNavbarOpen(!navbarOpen)} 
     className='block py-2 pr-4t bg-clip-text font-semibold text-transparent bg-gradient-to-br from-orange-200 via-orange-300 to-orange-500 active sm:text-xl md:p-0 hover:text-orange-400'
     href={href}     
    >
        {title}
        </Link>
  )
}

export default NavLink