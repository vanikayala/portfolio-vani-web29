import React from "react";



import { fadeIn } from "@/variants"
import {motion} from "framer-motion"

// const containerVariants={
//   hidden:{opacity: 0,x: '100vw'}, visible: { opacity: 1, x:0,transition:{ type: "spring", delay: 0.5}}
// }
const Experience = () => {
  return (
  
  <section >
      <div
          className="container mx-auto p-4">
        <h2 className=" text-lg md:text-4xl text-center font-semibold  bg-clip-text text-transparent bg-gradient-to-br from-yellow-200  via-orange-400 to-orange-600">
           My Experience
        </h2>
        <div className="text-white mt-7 relative before:absolute before:top-0 before:left-0 before:bottom-0 before:bg-white before:w-1">
          <div className="relative md:pl-10 before:w-3 before:h-3 before:bg-gradient-to-br before:from-orange-300 before:to-orange-700 before:rounded-full before:-left-[4px] before:absolute">
           <h2 className="absolute -left-12">2021</h2>
           
           
           <p
             className="ml-3 text-orange-300 font-semibold">RES</p><p className="ml-4 my-4">WNG (Wellman Next Generation) is a Well Life-Cycle Project, Cost, Data application that provides the Well data management solutions to the Global clients
           
           </p>
           <div className="ml-4 text-[#ADB7BE] PY-4">Environment: React, Nodejs, Redux, express, MongoDB, Enzymes, jest,Js,ES6, TS, HTML5,CSS, AWS</div>
           {/* <div className="ml-4 text-[#ADB7BE] PY-4">Environment: ReactJS (Hooks), NodeJS, Redux,  ExpressJs ,MongoDB, Enzymes, Jest, JavaScript, ES6, TypeScript, HTML5,BootStrap5,JQuery, CSS3, Material UI, JSON, Responsive Web Design (RWD), NPM, GIT, GitHub, GraphQL, Agile, AWS.</div> */}
          </div>
          <div className="relative md:pl-10 before:w-3 before:h-3 before:bg-gradient-to-r before:from-orange-300 before:to-orange-700 before:rounded-full before:-left-[4px] before:absolute">
           <h2 className="absolute -left-12">2020</h2>
            
            <p className="ml-3 py-4 text-orange-300 font-semibold">ROGERS</p><p className="ml-4 my-0"> Todays Shopping Choice (also known as TSC) is a Canadian English language home shopping television channel owned by Rogers Media. The channel showcases various products which viewers can purchase either by telephone or internet.  
           </p>
           <div className="ml-4 text-[#ADB7BE] py-4">Environment: ReactJS, JavaScript, HTML5, ES6 features, Rest API’, SCSS, MongoDB, Material UI, Azure, Jest, Enzymes, AJAX, JSON, Express.js, Node.js, Responsive Web Design (RWD), NPM, jQuery, GIT, GitHub, Agile.
           </div>
          </div>
          <div className=" relative md:pl-10 before:w-3 before:h-3 before:bg-gradient-to-r before:from-orange-300 before:to-orange-700 before:rounded-full before:-left-[4px] before:absolute">
           <h2 className="absolute -left-12">2017</h2>
            <p className="text-orange-300 ml-3 font-semibold">BMO</p><p className="my-4 ml-4"> Retail Investment Platform (RIP) is a UI application designed for Retail Branch Banking sales advisers. RIP is a sales application that supports account maintenance for PS&I Investment Accounts. RIP will support the maintenance of RSP and TFSA accounts.
           
           </p>
          
          <div className="ml-4 text-[#ADB7BE] PY-4">Environment: Java, AJAX, Servlets, JSP, jQuery, JavaScript, Reactjs ,HTML5, Restful, ES5, MUI, CSS3, Junit, IDE - Eclipse, SQL, MYSQL, Windows.</div>
          </div>
       
        </div>
      </div>
    </section>
  );
};

export default Experience;
