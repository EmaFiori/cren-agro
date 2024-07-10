import React from 'react';
import Nosotros from './Nosotros/Nosotros';
import InteriorImg from './InteriorImg/InteriorImg';
import { TextEffect } from './TextEffect/TextEffect';
import BgRojo from './BgRojo/BgRojo';
import BgVerde from './Bg-Verde/Bg-Verde';

const HeroTest = () => {
  return (
    <div className="bg-white relative">
      <div className="absolute mb-[1rem] ml-[-20rem] lg:mb-auto lg:mt-[20rem] lg:ml-[-2rem] bottom-0 right-0 overflow-hidden">
        <BgRojo />
      </div>
      <section className="relative py-10 m-8 md:m-32 sm:mt-24 sm:py-1 lg:pb-40">
        <div className="absolute ml-[7rem] bottom-0 right-0 overflow-hidden">
          <BgVerde />
        </div>
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:items-center lg:mt-[3rem]">
            <div className="text-center lg:text-left md:px-16 lg:px-0 mt-[-1rem] xl:pr-20">
              <h1 className="text-4xl font-bold leading-tight text-gris-oscuro sm:text-5xl lg:text-6xl uppercase montserrat">
                Mantenemos tu <span className='text-verde'>Campo</span> en <span></span>Movimiento
              </h1>
              <TextEffect />
              <div className="flex justify-center lg:ml-[2.8rem] lg:justify-start mt-8">
                <a href="#nosotros" className="inline-flex px-8 py-3 text-lg montserrat text-gris-claro bg-rojo border border-transparent rounded-xl transition-all duration-200 hover:bg-verde hover:border-verde hover:text-white hover:shadow-2xl hover:translate-y-[-.5rem] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  Explorar
                </a>
                <a href="https://wa.link/ws7g5i" target='_blank' className="inline-flex px-8 py-3 ml-4 text-lg montserrat text-gris-claro bg-verde border border-transparent rounded-xl transition-all duration-200 hover:bg-rojo hover:text-white hover:shadow-2xl hover:translate-y-[-.5rem] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  Contactar
                </a>
              </div>
            </div>
            <div className="mt-10 lg:mt-[1rem] lg:ml-[5rem]">
              <Nosotros />
              <InteriorImg />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroTest;
