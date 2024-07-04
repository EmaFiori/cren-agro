import React from 'react'
import Nosotros from './Nosotros/Nosotros'
import InteriorImg from './InteriorImg/InteriorImg'

const HeroTest = () => {
  return (
    <div className="bg-white">
    <section className="relative py-10 m-8 md:m-32  sm:mt-24 sm:py-1 lg:pb-40">
        <div className="absolute bottom-0 right-0 overflow-hidden">
            <img className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75" src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png" alt="" />
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
                <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
                    <h1 className="text-4xl font-bold leading-tight text-gris-oscuro sm:text-5xl sm:leading-tight uppercase lg:text-6xl lg:leading-tight montserrat">  Mantenemos tu <span className='text-verde'>Campo</span> en  <span></span>Movimiento </h1>
                    <p className="mt-2 text-lg text-gris-medio sm:mt-6 montserrat">Repuestos y herramientas agrícolas de calidad para asegurar tu productividad</p>

                    <a href="#" title="" className="inline-flex px-8 py-4 mt-8 text-lg montserrat text-gris-claro transition-all duration-200 bg-rojo border border-transparent rounded-xl sm:mt-10 font-pj hover:bg-verde hover:shadow-2xl hover:transition hover:translate-y-[-.5rem] hover:text-gris-claro focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                        Explorar
                    </a>

                 
                </div>

                <div className="mt-10 sm:mt-0  xl:col-span-1">
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