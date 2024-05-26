"use client";
import React from 'react'
import { TypeAnimation } from 'react-type-animation';


const Herosection = () => {
  return (
    <section>
    <div className='pb-0 grid grid-cols-1 md:grid-cols-12'> 
     <div className='col-span-7 text-center md:text-left place-self-center'>
      
       <p className="pb-4 text-[#ADB7BE]" >WELCOME TO MY WORLD</p>  
     <h2 className='text-white text-2xl mb-4  md:text-4xl font-extrabold'>
     <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600'>
      Hello, I am {}
      </span>
      
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'React Developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        2000,
        'Front End Developer',
        2000,
        'Sortware Developer',
        3000
      ]}
      wrapper="span"
      speed={20}
      // style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
      </h2>
     <p className="text-[#ADB7BE] py-4 text-sm md:text-xl">
      
      
      I am a web designer & front-end developer focused on crafting clean & user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
     
     </p>
     
     <div className=''>
     <button 
       className='text-white rounded-full bg-white bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-600 mr-4 mt-4 w-auto py-2 px-2 '>
       <span className='rounded-full px-9 py-2 block bg-[#4a4949f6] hover:bg-slate-900'>
        <a href="https://www.linkedin.com/in/vani-ka-364159226/"
        target="_blank"
        > Linked In</a></span>
       </button>
     <button 
         className='text-white rounded-full bg-white bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-600 mt-4 py-2 px-2 w-auto '>
        <span className='rounded-full block bg-[#464444fc] px-9 py-2 hover:bg-slate-900'><a href="download/Vani_CV.docx" alt="vani_cv">Download CV</a> </span>
      </button>
     </div>
     </div>
     <div className='col-span-5 place-self-center ml-0 p md:px-6 lg:mt-0'>
        <div className='rounded-full w-[180px] h-[200px] md:w-[270px] md:h-[200px] lg:w-[360px] lg:h-[300px] relative'>
       <img 
        src="images/girl2.jpg"
        alt="image"
        width={430}
        height={430} 
        className='absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
        />
        </div>
     </div>
     </div>
     </section>
  )
}

export default Herosection