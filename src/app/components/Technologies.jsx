import React from "react";

import { fadeIn } from "@/variants"
import {motion} from "framer-motion"

const Technologies = () => {
  return (
    <section>
     
     
     {/* <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
      > */}
       <div className="md:container m-auto mt-8 md:mt-12 px-0">
        <h2 className="text-3xl text-center text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-orange-400 to-orange-800 font-bold">Technologies</h2>
        <div className="mt-4 md:mt-11">
          <div>
            <div className="text-sm text-[#ADB7BE] w-[50%] mx-auto justify-between flex">
              <h2>HTML</h2>
              <span>99%</span> 
             {/* <p className="">Advanced</p> */}
            </div>
            <span className="w-[50%] mx-auto my-2 h-2 bg-gradient-to-r from-orange-300 to-orange-600 block rounded-md " />
          </div>
          <div>
            <div className="mt-7 text-[#ADB7BE] w-[50%] mx-auto text-sm justify-between flex">
              <h2>CSS,SASS && TAILWIND</h2>
        <span>96%</span>
              {/* <p className="">Advanced</p> */}
            </div>
            <span className="w-[47%] mx-auto my-2 h-2 bg-gradient-to-r from-orange-300 to-orange-600 block rounded-md " />
          </div>
          <div>
            <div className="mt-7 text-sm text-[#ADB7BE] w-[50%] mx-auto justify-between flex">
              <h2>JAVASCRIPT && JQUERY</h2>
              <span>86%</span>
              {/* <p className="p">Advanced</p> */}
            </div>
            <span className="w-[43%] mx-auto my-2 h-2 bg-gradient-to-r from-orange-300 to-orange-600 block rounded-md " />
          </div>
          <div>
            <div className="mt-7 text-sm text-[#ADB7BE] w-[50%] mx-auto justify-between flex">
              <h2>REACT</h2>
              <span>98%</span>
              {/* <p className="p">Advanced</p> */}
            </div>
            <span className="w-[49%] mx-auto  my-2 h-2 bg-gradient-to-r from-orange-300 to-orange-600 block rounded-md " />
          </div>
          <div>
            <div className="mt-7 text-sm text-[#ADB7BE] w-[50%] mx-auto justify-between flex">
              <h2>REDUX</h2>
              <span>80%</span> 
               {/* <p className="p">Advanced</p> */}
            </div>
            <span className="w-[40%] mx-auto my-2 h-2 bg-gradient-to-r from-orange-300 to-orange-600 block rounded-md " />
          </div>
          <div>
            <div className="mt-7 text-sm text-[#ADB7BE] w-[50%] mx-auto justify-between flex">
              <h2>BOOTSTRAP || MUI</h2>
              <span>94%</span>
              {/* <p className="p">Advanced</p> */}
            </div>
            <span className="w-[47%] mx-auto my-2  h-2 bg-gradient-to-r from-orange-300 to-orange-600 block rounded-md " />
          </div>
      
           
        </div>
     
      </div>
     
       <div
       className="container m-auto px-4 py-4">
        
        <h2 className="text-center my-4 font-semibold text-lg md:text-2xl text-white">Additional Technologies & Skills</h2>
        
         <div className="grid grid-cols-1 text-center  text-sm md:text-lg text-[#ADB7BE] sm:grid-cols-2 w-[50%] mx-auto mt-9 justify-between "> 
        <div className="">
          <p className="">Git</p>
        </div>
        <div className="">
          <p className="">Nextjs</p>
        </div>
        <div className="">
          <p className="">Restfull</p>
        </div>
        <div className="">
          <p className="">Graphql</p>
        </div>
        <div className="">
          <p className="">Expressjs</p>
        </div>
        <div className="">
          <p className="">nodejs</p>
        </div>
        {/* <div className="text-2xl">
          <p className="text-white before:w-4 before:h-4 before:bg-gradient-to-r before:from-orange-200 before:to-orange-600 before:block before:rounded-full before:mt-2 before:absolute relative left-3 before:-left-5 before:mr-7">nodejs</p>
        </div> */}
       
        
       
       
        </div> 
      </div>
      {/* </motion.div> */}
    </section>
  );
};

export default Technologies;
