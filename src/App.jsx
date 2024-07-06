import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technoly from './components/Technoly'
import Exprience from './components/Exprience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 selection:bg-cyan-600 '>
      <div className="fixed top-0 -z-10 h-full w-full ">

    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className='container mx-auto px-8'>

    <Navbar/>
    <Hero/>
    <About/>
    <Technoly/>
    <Exprience/>
    <Projects/>
    <Contact/>
      </div>
    </div>
  )
}

export default App