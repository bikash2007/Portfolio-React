import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <div className='pb-4 border-b border-neutral-800 '>
        <motion.h1 whileInView={{opacity:1,y:0}}  initial={{opacity:0,y:-30}} transition={{duration:0.5}} className='my-8 text-center text-4xl'>Projects</motion.h1>
        <div>{PROJECTS.map((project,index)=>(
            <div key={index} className='flex flex-wrap lg:justify-center pb-8'>
            <div className="w-full lg:w-1/4 mb-2">
                  <div className='flex justify-start items-center '>
                        <motion.img whileInView={{opacity:1,x:0}}initial={{opacity:0,x:-100}}transition={{duration:1}}  src={project.image} alt={project.title} height={150} width={150} />
                  </div>
            </div>
         <motion.div whileInView={{opacity:1,x:0}}initial={{opacity:0,x:100}}transition={{duration:1}} className="w-full lg:w-3/4 max-w-xl">
             <h6 className='font-semibold mb-2'>{project.title}</h6>
              <h6 className='text-sm text-neutral-400 '>{project.description}</h6>
             <div className="flex flex-wrap gap-3">

                {project.technologies.map((tech,index)=>(
                    <h6 key={index} className=' mt-4 text-sm bg-neutral-800 text-purple-800 font-medium rounded-2xl py-1 px-2'>{tech}</h6>
                ))}
             </div>
        </motion.div>
</div>
           
        ))}</div>
    </div>
  )
}

export default Projects