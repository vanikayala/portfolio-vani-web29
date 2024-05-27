"use client";
import  {useTransition, useState} from 'react'

import TabButton from "../components/TabButton"
import Image from 'next/image';
const links = [
  { name: 'Contract', href: '#' },
  { name: 'Fulltime', href: '#' },
  { name: 'Freelance', href: '#' },
  { name: 'Parttime', href: '#' },
]
// const stats = [
//   { name: 'Offices worldwide', value: '12' },
//   { name: 'Full-time colleagues', value: '300+' },
//   { name: 'Hours per week', value: '40' },
//   { name: 'Paid time off', value: 'Unlimited' },
// ]
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
const About = () => {
   const [tab,setTab]=useState("education");
    
   const [isPending, startTransition]= useTransition();

const handleTabChange =(id)=>{
 startTransition(()=>{
    setTab(id);
 });
}  
  return (
  <>  <section className ="mt-16 py-9 mx-8 mb-9 grid grid-cols-1 md:grid-cols-12">
      <div className='col-span-5 place-self-center md:mt-7 mt-0 lg:mt-7'>
       <h2 className='md:text-4xl text-white pb-0 text-2xl font-extrabold  text-center md:text-center place-self-center'>About <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 ">
        Me</span>
       </h2>
      
       <div className=' rounded-full md:mt-8 md:w-[270px] md:h-[200px] w-[180px] h-[200px] lg:w-[360px] lg:h-[300px] relative'>
       
       <Image 
       src="/images/aboutme.jpg"
       alt="image"
       width={430}
       height={460} 
       className='absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
       />
       </div>
        </div>
    
        <div className="ml-4 py-4 col-span-7 text-center md:text-left place-self-center">
         {/* <h2 className='lg:text-4xl font-extrabold text-white'>About <span className='text-orange-400'>Me</span></h2> */}
          <p className='text-[#9fa2a4] mt-4 text-base lg:text-lg'>
            I am a full stack web developer with a passion for creating interactive and responsive
            web applications. I have experience working with javascript, React, Redux, Node.js, Express,
            PostgreSQL, HTML, CSS, and Git. I am a quick learner and I am always looking to expand
            my knowledge and skill set. I am a team player and I am excited to work with others to create amazing
            applications.
         </p>
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
        </div>
        
    </section>
       
    <section>

    
    <div className="">
      
      <div className="mx-auto text-center lg:mx-0">
        <div className="mx-auto text-center lg:mx-0">
          <h2 className="mt-0 text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-orange-200  via-orange-400 to-orange-800 sm:text-4xl">Work With <span className="text-white">Me</span></h2>
          <p className="mt-6 text-lg leading-8 text-[#ADB7BE]">
              I am excited to work with you to create amazing
            applications.
          </p>
          <p className=" mx-0 mt-4 text-sm text-white">Mail Me : kayalavani403@gmail.com , Call : +1 647-641-8264</p>
        </div>
        <div className="mt-9 mx-auto items-center">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white mb-7 sm:grid-cols-4 md:items-center ">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          
        </div>
      </div>
    </div></section>
    </>)
}

export default About