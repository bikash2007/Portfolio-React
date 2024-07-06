import React from 'react'
import { FaGithub ,FaLinkedin,FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <div className='w-full mb-20  flex justify-between mt-5 lg:px-24'>
        <div className='flex flex-shrink-0 text-white font-bold text-2xl tracking-tight'>
            <h1>BIKASH</h1>
        </div>
        <div className="flex gap-2 text-white">
             <FaGithub/>
             <FaLinkedin/>
             <FaInstagram/>
        </div>
    </div>
  )
}

export default Navbar