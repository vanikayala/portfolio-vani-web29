"use client";
import React, {useTransition, useState} from 'react'
import { fadeIn } from "@/variants"
import {motion} from "framer-motion"
import TabButton from "./TabButton"
import Image from 'next/image';
const TAB_DATA= [
  {
    title:"Skills",
    id:"skills",
    content: (
      <ul>
        <li>React</li>
        <li>Redux</li>
        <li>Nodejs</li>
        <li>Tailwind</li>
      </ul>
    )
   },
   {
    title:"Education",
    id:"education",
    content: (
      <ul>
        <li>Masters Degree in Maths</li>
        
        <li>Computer Diplama NIIT(India)</li>
      </ul>
    )
  },

  {
    title:"Certifications",
    id:"certifications",
    content: (
      <ul>
        
        <li>Canadian</li>
      </ul>
    )
  },
]
const Aboutme = () => {
   const [tab,setTab]=useState("education");
    
   const [isPending, startTransition]= useTransition();

const handleTabChange =(id)=>{
 startTransition(()=>{
    setTab(id);
 });
}  
  return (
    <section className = " grid grid-cols-1 my-6 md:grid-cols-12">
      <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='col-span-5 place-self-center md:mt-7 mt-0 lg:mt-7'>
       <motion.h2 initial={{x:'-100vw'}} animate={{x:0}} className='md:text-4xl text-white pb-0 text-2xl font-extrabold  text-center md:text-center place-self-center'> About <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 ">
        Me</span>
       </motion.h2>
      
        <div className=' rounded-full md:mt-8 md:w-[270px] md:h-[200px] w-[180px] h-[200px] lg:w-[360px] lg:h-[300px] relative'>
       
        <Image  
        src="/images/aboutme.jpg"
        alt="image"
        width={430}
        height={460} 
        className='absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
        />
        </div>
        </motion.div>
    
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="ml-4 py-4 col-span-7 text-center md:text-left place-self-center">
         {/* <h2 className='lg:text-4xl font-extrabold text-white'>About <span className='text-orange-400'>Me</span></h2> */}
         <motion.p     
     initial={{opacity:0}}
     animate={{opacity:1}}
     transition={{delay:1.0,duration:4.5, stiffness:500}} className='text-[#9fa2a4] mt-4 text-base lg:text-lg'>
            I am a full stack web developer with a passion for creating interactive and responsive
            web applications. I have experience working with javascript, React, Redux, Node.js, Express,
            PostgreSQL, HTML, CSS, and Git. I am a quick learner and I am always looking to expand
            my knowledge and skill set. I am a team player and I am excited to work with others to create amazing
            applications.
             </motion.p>
         <div className='text-white flex flex-row mt-8'>
           
         <TabButton 
              selectTab = {()=> handleTabChange("certifications")} active={tab === "certifications"}> 
                {""} Work Status{""} 
             </TabButton>
              {/* <TabButton 
              selectTab = {()=> handleTabChange("skills")} active={tab === "skills"}> 
                {""} Skills{""} 
             </TabButton> */}

             <TabButton 
              selectTab = {()=> handleTabChange("education")} active={tab === "education"}> 
                {""} Education{""} 
             </TabButton>
             
            
                     
         </div>
         <div className='text-[#ADB7BE] text-left mt-4'>{TAB_DATA.find((t)=>t.id === tab).content}</div>
        </motion.div>
        
    </section>
       
  )
}

export default Aboutme