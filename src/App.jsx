import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StickySection from './components/StickySection/StickySection'
import Slider from './components/Slider/Slider'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
function App() {
  

  return (
    <>
    <Navbar/>
    <Hero/>
     {/* <Slider/>  */}
    <StickySection/>
    <Footer/>
    </>
  )
}

export default App
