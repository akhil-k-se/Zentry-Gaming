import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Features from './Components/Features'
import Story from './Components/Story'

const App = () => {
  return (
    <div className='relative min-h-screen w-screen overflow-x-hidden overflow-y-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Story/>
    </div>
  )
}

export default App
