import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StickySection from './components/StickySection/StickySection'
import Slider from './components/Slider/Slider'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import {Marcas}  from './components/Marcas/Marcas'
import HeroTest from './components/HeroTest/HeroTest'

import RepuestosYHerramientas from './components/RepuestosYHerramientas/RepuestosYHerramientas'
function App() {
  

  return (
    <div className=''>
    <Navbar/>
    <div id='inicio'>
      <HeroTest/>
    {/* <Hero/> */}
    </div>
     {/* <Slider/>  */}
     <div id='nosotros'>
    <StickySection/>
    </div>
    <div id='marcas'>
    <Marcas/>
    </div>
    <div id='repuestosyherramientas'>
      <RepuestosYHerramientas/>
    </div>
    <Footer/>
    </div>
  )
}

export default App
