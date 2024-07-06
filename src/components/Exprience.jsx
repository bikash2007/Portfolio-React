import React from 'react'
import {EXPERIENCES} from '../constants/index'
import { motion } from 'framer-motion'

function Exprience() {
  return (
    <div className='pb-8 border-b border-neutral-800'>
        <motion.h1 whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:-30}}
          transition={{duration:0.5}} className='text-4xl text-center my-8'>Experience</motion.h1>
       
             {EXPERIENCES.map((experience,index)=>(
           <div key={index} className='flex flex-wrap lg:justify-center mb-8 w-full'>
                <div className="w-full lg:w-1/4 ">
                   <motion.p whileInView={{opacity:1,x:0}}initial={{opacity:0,x:-100}}transition={{duration:1}} className='mb-2 text-sm  text-neutral-400'>{experience.year}</motion.p >
                </div>
                <motion.div whileInView={{opacity:1,x:0}}initial={{opacity:0,x:100}}transition={{duration:1}} className="w-full  max-w-xl lg:w-3/4">
                         <h2 className='mb-2 font-semibold'>{experience.role}-<span className='text-sm text-purple-300'>{experience.company}</span></h2>
                         <p className='mb-2 text-sm text-neutral-400'>{experience.description}</p>
                         <div className="flex flex-wrap gap-4">

                         {experience.technologies.map((tech,index)=>(
                             <h6 key={index} className=' mt-4 text-sm bg-neutral-800 text-purple-800 font-medium rounded-2xl py-1 px-2'>{tech}</h6>
                            ))}
                            </div>
                </motion.div>
          </div>
             ))}

    </div>
  )
}

export default Exprience