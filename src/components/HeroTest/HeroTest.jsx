import React from 'react';
import Nosotros from './Nosotros/Nosotros';
import InteriorImg from './InteriorImg/InteriorImg';
import { TextEffect } from './TextEffect/TextEffect';
import BgRojo from './BgRojo/BgRojo';
import BgVerde from './Bg-Verde/Bg-Verde';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Asegúrate de importar los estilos de AOS
const HeroTest = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Inicia AOS con una duración de animación de 1 segundo
  }, []); // El array vacío hace que esto se ejecute solo una vez cuando el componente se monta

  return (
    <div className="bg-white relative">
      <div  data-aos="fade-down-right" className="absolute mb-[1rem] ml-[-20rem] lg:mb-auto lg:mt-[20rem] lg:ml-[-2rem] bottom-0 right-0 overflow-hidden">
        <BgRojo />
      </div>
      <section className="relative py-10 m-8 md:m-32 sm:mt-24 sm:py-1 lg:pb-40">
        <div  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="absolute ml-[7rem] bottom-0 right-0 overflow-hidden">
          <BgVerde />
        </div>
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:items-center lg:mt-[4rem]">
            <div data-aos="fade-right" className="text-center lg:text-left md:px-16 lg:px-0 mt-[-1rem] xl:pr-20">
              <h1 className="text-4xl font-bold leading-tight text-gris-oscuro sm:text-5xl lg:text-6xl uppercase montserrat">
                Mantenemos tu <span className='text-verde'>Campo</span> en <span></span>Movimiento
              </h1>
              <TextEffect />
              <div className="flex justify-center lg:ml-[2.8rem] lg:justify-start mt-8">
                <a href="#repuestosyherramientas" className="inline-flex px-8 py-3 text-lg montserrat text-gris-claro bg-verde border border-transparent rounded-xl transition-all duration-200 hover:bg-rojo hover:border-verde hover:text-white hover:shadow-2xl hover:translate-y-[-.5rem] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  Explorar
                </a>
                <a href="https://wa.link/aarkex" className="inline-flex px-8 py-3 ml-4 text-lg montserrat text-gris-claro bg-rojo border border-transparent rounded-xl transition-all duration-200 hover:bg-verde hover:text-white hover:shadow-2xl hover:translate-y-[-.5rem] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  Contactar
                </a>
              </div>
            </div>
            <div data-aos="fade-left" className="mt-10 lg:mt-[1rem] lg:ml-[5rem]">
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
