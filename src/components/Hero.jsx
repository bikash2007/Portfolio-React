import React from 'react'
import { HERO_CONTENT } from '../constants'
import Profile from '../assets/A.jpg'
import { delay, motion } from "framer-motion"
function Hero() {
  return (
    <div className='border-b border-neutral-800 pb-10 mb-2 lg:mb-35'>
           <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2">
                 <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    
                     initial={{opacity:0,x:-100 }}
                    animate={{ opacity:1,x:0 }}
                    transition={{duration:1, delay:0.4}}
                     className='text-5xl border-b border-neutral-200 font-thin lg:text-8xl mb-2'>Bikash Bhandari</motion.h1>
                    <motion.span 
                      initial={{x:-100, opacity:0}}
                      animate={{ x: 0,opacity:1 }}
                      transition={{duration:1, delay:1}} className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500  bg-clip-text text-transparent text-4xl tracking-tight'>Front-End Developer</motion.span>
                    <motion.p
                      initial={{x:-100, opacity:0}}
                      animate={{ x: 0 ,opacity:1 }}
                      transition={{duration:1, delay:1.3}}
                       className='my-2 max-w-xl tracking-tighter font-light py-6'>{ HERO_CONTENT}</motion.p>
                 </div>
              </div>
              <div className="w-full lg:w-1/2 lg:px-8">
                  <div className="flex justify-center ">
                      <motion.img   
                      initial={{x:50, opacity:0}}
                      animate={{ opacity:1,x: 0  }}
                      transition={{duration:1, delay:1.5}} className='bg-zinc-900 rounded-lg' src={Profile} height={400} width={400} alt="" />
                  </div>
              </div>
           </div>
    </div>
  )
}

export default Hero