import { fadeIn } from "@/variants"
import {motion} from "framer-motion"


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

export default function Example() {
  return (
    <section >
   {/* <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }} */}
          <div className="grid grid-col-1 grid-col-12 mx-auto text-center lg:mx-0">
          <motion
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }} 
          className="mx-auto text-center lg:mx-0">
          <h2 className="mt-0 text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-orange-200  via-orange-400 to-orange-800 sm:text-4xl">Work With <span className="text-white">Me</span></h2>
          <p className="mt-6 text-lg leading-8 text-[#ADB7BE]">
              I am excited to work with you to create amazing
            applications.
          </p>
          <p className="  mt-4 text-sm text-white">Mail Me: kayalavani403@gmail.com, Call : +1 647-641-8264 </p>
        </motion>
        <motion
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }} className="mt-9 mx-auto items-center">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white mb-7 sm:grid-cols-4 md:items-center ">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          
        </motion>
      </div>
    </section>
  )
}
