import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className='pb-20 border-b border-neutral-900'>
        <motion.h1 whileInView={{opacity:1,y:0}}  initial={{opacity:0,y:-30}} transition={{duration:0.5}} className='my-8 text-4xl text-center'>Get in Touch</motion.h1>
         <div className='flex-col flex justify-center items-center gap-4'>
              <motion.h1 whileInView={{opacity:1,y:0}}  initial={{opacity:0,y:-30}} transition={{duration:0.5, delay:0.8}}>+977 9745384280</motion.h1>
              <motion.h1 whileInView={{opacity:1,y:0}}  initial={{opacity:0,y:-30}} transition={{duration:0.5 ,delay:1.3}}>bikashbhandari@gmail.com</motion.h1>
         </div>
    </div>
  )
}

export default Contact