import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between items-center pt-3 mr-40 ml-40 mb-3'>
        <Link href='/'>
        <svg className="h-5 w-5 ml-3 mr-1 inline-block text-gray-500"  width="24" height="24" 
        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
        fill="none" stroke-linecap="round" stroke-linejoin="round">  
        <path stroke="none" d="M0 0h24v24H0z"/> 
        <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /> 
        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
            Home</Link>
        <Link href='/'>
        navbar navbar-expand-md navbar-light d-print-none
            <span>Interface</span>

        </Link>
      </nav>
    </div>
  )
}

export default Navbar
