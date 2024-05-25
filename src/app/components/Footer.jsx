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

export default function Example() {
  return (
    <div >
      
      <div className="mx-auto text-center lg:mx-0">
        <div className="mx-auto text-center lg:mx-0">
          <h2 className="mt-0 text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-orange-200  via-orange-400 to-orange-800 sm:text-4xl">Work With <span className="text-white">Me</span></h2>
          <p className="mt-6 text-lg leading-8 text-[#ADB7BE]">
              I am excited to work with you to create amazing
            applications.
          </p>
          <p className="  mt-4 text-sm text-white">Mail Me: kayalavani403@gmail . com (OR) Call : 6476418264 (CANADA)</p>
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
  )
}
