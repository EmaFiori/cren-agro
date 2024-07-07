import React from 'react'
import Nosotros from './Nosotros/Nosotros'
import InteriorImg from './InteriorImg/InteriorImg'
import { TextEffect } from './TextEffect/TextEffect'
import BgRojo from './BgRojo/BgRojo'
import BgVerde from './Bg-Verde/Bg-Verde'

const HeroTest = () => {
  return (
    <div className="bg-white">
          <div className="absolute mb-[1rem] ml-[-20rem] lg:mb-auto lg:mt-[20rem] lg:ml-[-2rem] bottom-0 right-0 overflow-hidden">
           <BgRojo/>
        </div>
    <section className="relative py-10 m-8 md:m-32  sm:mt-24 sm:py-1 lg:pb-40">
  
        <div className="absolute ml-[7rem] bottom-0 right-0 overflow-hidden">
        <BgVerde/>
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
                <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
                 
                   
                    <h1 className="text-4xl font-bold leading-tight text-gris-oscuro sm:text-5xl sm:leading-tight uppercase lg:text-6xl lg:leading-tight montserrat">  Mantenemos tu <span className='text-verde'>Campo</span> en  <span></span>Movimiento </h1>
                    <TextEffect/> 
                    {/* <p className="mt-2 text-lg text-gris-medio sm:mt-6 montserrat">Repuestos y herramientas agrícolas de calidad para asegurar tu productividad</p> */}
                    <div className='button'>
                    <a href="#" title="" className="inline-flex lg:px-10 px-8 lg:py-4 py-3 ml-20 lg:ml-1 mt-8 text-lg montserrat text-gris-claro transition-all duration-200 bg-rojo border border-transparent rounded-xl sm:mt-10 font-pj hover:bg-verde hover:border-verde hover:text-white hover:shadow-2xl hover:transition hover:translate-y-[-.5rem] hover:text-gris-claro focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                   
                        Explorar
                       
                    </a>
                    </div>
                 
                </div>

                <div className="mt-10 sm:mt-4 lg:ml-[5rem]  xl:col-span-1">
                    <Nosotros/>
                    <InteriorImg/>
                    </div>
            </div>
        </div>
    </section>
</div>

    )
}


export default HeroTest