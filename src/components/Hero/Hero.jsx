import React from 'react';
import Video from '../Video/Video';

const Hero = () => {
  return (
    <div className='  relative mx-4  md:mx-10 md:h-40vh text-white bg-cover bg-center h-[calc(96vh-8rem)] '>
      <Video />
      <div className='mx-4 my-28 lg:my-28  flex flex-col items-center justify-center rounded-3xl bg-cover bg-center text-white h-full relative gap-9'>
        <div className='relative  my-10'>
          <h1 className='animate-fade-up  text-center lg:mx-64 text-xl montserrat text-white md:text-xl lg:text-4xl'>
         Repuestos y Herramientas  Agrícolas de  Calidad para Mantener <br /> Tu Negocio en Movimiento. 
            </h1>
        
        </div>
        <a className=" rounded-2xl bg-verde hover:bg-rojo transition-opacity duration-500 ease-in-out p-4 text-base montserrat text-white active:scale-95" href="https://wa.link/ws7g5i" target='_blank'>
          Contactar ahora
        </a>
      </div>
    </div>
  );
};

export default Hero;