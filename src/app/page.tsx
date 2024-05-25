import Image from "next/image";
import Herosection from "./components/Herosection"
// import Navbar from "./components/Navbar"
import Aboutme from "./components/Aboutme.jsx"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Experience from "./components/Experience"
import Technologies from "./components/Technologies"
import { Toaster } from "react-hot-toast";
export default function Home() {
  return (
  <main className="">
   {/* <Navbar /> */}
  
   <div className="mt-24 container px-12 mx-auto py-4 ">
    <Herosection />
    <Aboutme  /> 
    
    <Technologies />
    <Experience />
    
   <Contact />  
    
    <Footer /> 
  </div>
  
</main>
  );
}
