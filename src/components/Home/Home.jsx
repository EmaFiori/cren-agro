import { useState } from 'react'
import StickySection from '../StickySection/StickySection'

import {Marcas}  from '../Marcas/Marcas'
import HeroTest from '../HeroTest/HeroTest'

import RepuestosYHerramientas from '../RepuestosYHerramientas/RepuestosYHerramientas'

function Home() {
  

  return (
    <div className=''>
      
    <div id='inicio'>
      <HeroTest/>
    {/* <Hero/> */}
    </div>
     {/* <Slider/>  */}
     <div id='nosotros'>
    <StickySection/>
    </div>
    <div id='repuestosyherramientas'>
      <RepuestosYHerramientas/>
    </div>
    <div id='marcas'>
    <Marcas/>
    </div>
   
    </div>
  )
}

export default Home