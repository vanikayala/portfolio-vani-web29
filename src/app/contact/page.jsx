"use client";
import  { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

 import toast,{Toaster} from 'react-hot-toast';
const links = [
  { name: 'Contract', href: '#' },
  { name: 'Fulltime', href: '#' },
  { name: 'Freelance', href: '#' },
  { name: 'Parttime', href: '#' },
]

const Contact = () =>{ 

  const form =useRef();
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
})
  
  // const [message,setMessage]=useState("");
  // useEffect(()=>{
  //   const time= setTimeout(()=>{setMessage("message"), 5000});
  //   return ()=>clearTimeout(time);
  // },[message])
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
          toast.success("Eamail sent successfully!")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    
    <>
    <section className='grid mt-16 grid-cols-1 lg:mx-14 py-16  md:grid-cols-12'>
    <Toaster position="top-right" />
    <div className=' lg:container lg:mx-16 col-span-6'>
    <h2 className='text-white text-2xl text-center pb-4 mb-4  md:text-4xl font-extrabold'>
     <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600'>let us connect
     </span>
     </h2>
     <p className='mx-9 text-[#ADB7BE]'>
     
     Feel free to get in touch with me. I am always open to discussing  new projects, creative ideas
     or oppotunities to be part of your vision.
      </p>
     
       <p className=" mx-9 mt-4 text-sm text-white">Mail Me: kayalavani403@gmail . com</p>
              

       <div>  <p className="mx-9 text-sm mt-2 text-white">Call Me: +1 6476418264 </p></div>
     <div className='py-6 text-center'>
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
    <div className='col-span-6 text-center mx-auto p-3 text-orange-300 '>
    
     
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
 
    
    {/* <Toaster position="bottom-center" /> */}
 {/* {message && (
    <p className='text-orange-400'>Email sent successfully!</p>
)} */}
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
          <p className=" mx-0 mt-4 text-sm text-white">Mail Me: kayalavani403@gmail . com (OR) Call : 6476418264 (CANADA)</p>
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
   
    </section></>
    );
}

export default Contact