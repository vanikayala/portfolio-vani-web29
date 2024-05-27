// import React from 'react'

const links = [
  { name: 'Contract', href: '#' },
  { name: 'Fulltime', href: '#' },
  { name: 'Freelance', href: '#' },
  { name: 'Parttime', href: '#' },
]
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]

const experience = () => {
  return (
    <><section>
      <div className="lg:px-68 sm:px-16 container mt-16 mx-auto py-16">
        <h2 className="text-2xl md:text-4xl text-center font-semibold  bg-clip-text text-transparent bg-gradient-to-br from-yellow-200  via-orange-400 to-orange-600">
          My Experience
        </h2>
        <div className="text-white mt-8 relative before:absolute before:top-0 before:left-0 before:bottom-0 before:bg-white before:w-1">
          <div className="relative pl-10 before:w-3 before:h-3 before:bg-gradient-to-br before:from-orange-300 before:to-orange-700 before:rounded-full before:-left-[4px] before:absolute">
           <h2 className="absolute -left-12">2021</h2>
           
           
           <p className=" ">WNG (Wellman Next Generation) is a Well Life-Cycle Project, Cost, Data application that provides the Well data management solutions to the Global clients
           
           </p>
          <div className="ml-0 text-[#ADB7BE] PY-4">Environment: React, Nodejs, Redux, express, MongoDB, Enzymes, jest,Js,ES6, TS, HTML5,CSS,AWS</div>
          </div>
          <div className="relative pl-10 before:w-3 before:h-3 before:bg-gradient-to-r before:from-orange-300 before:to-orange-700 before:rounded-full before:-left-[4px] before:absolute">
           <h2 className="absolute -left-12">2020</h2>
            <p className="mt-4"> Todays Shopping Choice (also known as TSC) is a Canadian English language home shopping television channel owned by Rogers Media. The channel showcases various products which viewers can purchase either by telephone or internet.  
           </p>
           <div className="text-[#ADB7BE] PY-4">Environment: ReactJS, JavaScript, HTML5, ES6 features, Rest API, SCSS, MongoDB, Material UI, Azure, Jest, Enzymes, AJAX, JSON, Express.js, Node.js, Responsive Web Design (RWD), NPM, jQuery, GIT, GitHub, Agile.
           </div>
          </div>
          <div className="relative pl-10 before:w-3 before:h-3 before:bg-gradient-to-r before:from-orange-300 before:to-orange-700 before:rounded-full before:-left-[4px] before:absolute">
           <h2 className="absolute -left-12">2017</h2>
           <p className="mt-4"> Retail Investment Platform (RIP) is a UI application designed for Retail Branch Banking sales advisers. RIP is a sales application that supports account maintenance for PS&I Investment Accounts. RIP will support the maintenance of RSP and TFSA accounts.
           
           </p>
          
          <div className="text-[#ADB7BE] PY-4">Environment : Java, AJAX, Servlets, JSP, jQuery, JavaScript, Reactjs ,HTML5, Restful, ES5, MUI, CSS3, Junit, IDE - Eclipse, SQL, MYSQL, Windows.</div>
          </div>
       
        </div>
      </div>
    
      </section>
      
      <section>
      <div className="">
      
      <div className="mx-auto mt-8 text-center lg:mx-0">
        <div className="mx-auto text-center lg:mx-0">
          <h2 className="mt-0 text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-orange-200  via-orange-400 to-orange-800 sm:text-4xl">Work With <span className="text-white">Me</span></h2>
          <p className="mt-6 text-lg leading-8 text-[#ADB7BE]">
              I am excited to work with you to create amazing
            applications.
          </p>
          <p className=" mx-0 mt-4 text-sm text-white">Mail Me : kayalavani403@gmail . com ,Call :+1 647-641-8264</p>
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
    </div>
      </section>
      </>
)
}

export default experience