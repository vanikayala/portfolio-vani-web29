"use client";
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';


import toast, {Toaster} from "react-hot-toast"

const Contact = () =>{ 

  const form =useRef();
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
})
  
  // const [message,setMessage]=useState("");
    const sendEmail = (e) => {
    e.preventDefault();
  const {name,email,message}={name:e.target.name.value, email:e.target.name.value,message:e.target.name.value}
    
   
     emailjs.sendForm('service_5436rrc', 'template_04hpnhs', form.current, {
        publicKey: 'SS0A0sre3CJ5ZSFUB',
      })
      .then(
        () => {         
          
          // setMessage("message"); 
          setUser({name:"",email:"",message:""})
          console.log('SUCCESS!');
          toast.success("Eamail sent successfully..")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    
    
    <section className='grid grid-cols-1 py-7 mt-7  md:grid-cols-12'>
    
    <div className=' col-span-6'>
    <h2 className='text-white text-2xl text-center pb-4 mb-4  md:text-4xl font-extrabold'>
     <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600'>let Us connect
     </span>
     </h2>
     <p className='md:mx-9 text-[#ADB7BE]'>
     
     Feel free to get in touch with me. I am always open to discussing  new projects, creative ideas
     or oppotunities to be part of your vision.
      </p>
     
       <p className="px-0 md:mx-9 mt-4 text-sm mx-auto text-white">Mail Me: kayalavani403@gmail . com</p>
              

       <div>  <p className="sm:mx-9 text-sm mt-2 text-white">Call Me: +1 6476418264 </p></div>
     <div className='py-6 text-center'>
      <Toaster position='top-right'/>
      <button 
       className='text-white rounded-full bg-white bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-600 mr-4 mt-4 w-auto py-2 px-2 '>
       <span className='rounded-full px-9 py-2 block bg-[#4a4949f6] hover:bg-slate-900'>
       <a href="https://www.linkedin.com/in/vani-ka-364159226/"
        target="_blank"
        > Linked In</a></span>
       </button>
     <button 
         className='text-white rounded-full bg-white bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-600 mt-4 py-2 px-2 w-auto '>
        <span className='rounded-full block bg-[#464444fc] px-6 py-2 hover:bg-slate-900'><a href="download/Vani_CV.docx" alt="vani_cv">Download CV</a> </span>
      </button>
     </div>
    </div>
    <div className='col-span-6 text-center mx-auto py-3 text-orange-300 '>
     {/* {toast}  */}
     <form ref={form} onSubmit={sendEmail}>
   
      <label className='text-md pr-3 '>Name</label>
      <input 
      className="border border-orange-600 rounded-md h-8 mt-2 w-full mb-3 text-slate-700" 
       required type="text" name="user_name" value={user.name}
       onChange={(e)=> setUser({...user, name:e.target.value})}/>
      <br/><label>Email</label>
      <input 
      required
      className="border border-orange-600 rounded-md h-8 mt-2 w-full mb-3 text-slate-700" type="email" name="user_email" value={user.email}
      onChange={(e)=> setUser({...user, email:e.target.value})} />
      <br/><label>Message</label>
      <textarea required
       value={user.message}
       onChange={(e)=> setUser({...user, message:e.target.value})} className="border border-orange-600 rounded-md h-32 w-full mb-3 text-slate-700"
      name="message" /><br/>
      <input className="border border-orange-600 rounded-md hover:text-orange-600 hover:cursor-pointer h-8 w-full mb-3 text-orange-400" type="submit" value="Send" />   
                 
    </form>
{/* {message && (
    <p className='text-orange-400'>Email sent successfully!</p>
)} */}
     </div>
   
   </section>
    
    
    );
}

export default Contact