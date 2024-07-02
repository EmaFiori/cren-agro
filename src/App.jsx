import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StickySection from './components/StickySection/StickySection'
import Slider from './components/Slider/Slider'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import {Marcas}  from './components/Marcas/Marcas'
import Numeros from './components/Numeros/Numeros'
function App() {
  

  return (
    <>
    <Navbar/>
    <div id='inicio'>
    <Hero/>
    </div>
    <div id='marcas'>
    <Marcas/>
    </div>
     {/* <Slider/>  */}
     <div id='nosotros'>
    <StickySection/>
    </div>
    <Numeros/>
    <Footer/>
    </>
  )
}

export default App
