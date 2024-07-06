import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { PiFramerLogoFill } from "react-icons/pi";
import { TbBrandNextjs } from "react-icons/tb";
import { easeInOut, motion } from 'framer-motion';
import { MdOpacity } from 'react-icons/md';

 const iconVariants =(duration)=>({
   initial:{y:-10},
   animate:{
      y:[10,-10],
      transition:{
         duration:duration,
         easeInOut:"Linear",
         repeat:Infinity,
         repeatType:"reverse",
      }
   }
 })
function Technoly() {
  return (
    <div className='border-b  border-neutral-900 pb-10 lg:pb-24'>
        <motion.h2 whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:-100}}
          transition={{duration:0.5}}
           className='text-center my-20 text-4xl'>Technolgies</motion.h2>
        <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-400}}
          transition={{duration:2, delay:0.4}}
        className="flex flex-wrap items-center justify-center gap-4">
             <motion.div 
              variants={iconVariants(2)}
              initial="initial"
              animate='animate'
             className="border-4 border-neutral-800 rounded-2xl p-4">
                <RiReactjsLine className='text-cyan-400 text-7xl'/>
             </motion.div>
             <motion.div 
             variants={iconVariants(3.5)}
             initial="initial"
             animate='animate'
             className="border-4 border-neutral-800 rounded-2xl p-4">
                <RiTailwindCssFill className='text-cyan-400 text-7xl'/>
             </motion.div>
             <motion.div 
              variants={iconVariants(7)}
              initial="initial"
              animate='animate'
             className="border-4 border-neutral-800 rounded-2xl p-4">
                <FaHtml5 className='text-orange-600 text-7xl'/>
             </motion.div>
             <motion.div 
              variants={iconVariants(6)}
              initial="initial"
              animate='animate'
             className="border-4 border-neutral-800 rounded-2xl p-4">
                <PiFramerLogoFill className='text-neutral-200 text-7xl'/>
             </motion.div>
             <motion.div 
             
             variants={iconVariants(4)}
              initial="initial"
              animate='animate'className="border-4 border-neutral-800 rounded-2xl p-4">
                <TbBrandNextjs className='text-neutral-200 text-7xl'/>
             </motion.div>
        
        </motion.div>

    </div>
  )
}

export default Technoly