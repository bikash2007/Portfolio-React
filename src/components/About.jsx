import React from 'react'
import aboutphoto from '../assets/B.jpg'
import { ABOUT_TEXT } from '../constants'
import {motion} from 'framer-motion'

function About() {
  return (
    <div className='border-b  pb-10 lg:mt-16 border-neutral-800'>
        <div className='flex justify-center my-8 lg:pb-24'>
      <motion.h2 whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:-100}}
          transition={{duration:0.5}} className='text-4xl'>About <span className='text-neutral-700'>me</span> </motion.h2>

        </div>
        <div className='flex  flex-wrap '>
            <div className="w-full lg:w-1/2 lg:px-8">
               <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                 transition={{duration:1}}
               className="flex justify-center items-center">
                   <img className='bg-black' src={aboutphoto} height={400} width={400} alt="About" />
               </motion.div>
            </div>
            <div className="w-full lg:w-1/2 mb-4 lg:px-8">
                  <motion.div 
                   whileInView={{opacity:1,x:0}}
                   initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                  className="flex-col mt-7 lg:mt-0">
                     <p className='font-light px-4 max-w-xl tracking-tight'>{ABOUT_TEXT}</p>
                  </motion.div>
            </div>

        </div>
    </div>
  )
}

export default About