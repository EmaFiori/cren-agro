import React from 'react';
import Video from '../Video/Video';

const Hero = () => {
  return (
    <div className='  relative mx-4 text-white bg-cover bg-center h-[calc(100vh-8rem)]'>
      <Video />
      <div className='mx-4 my-4 flex flex-col items-center justify-center rounded-3xl bg-cover bg-center text-white h-full relative gap-9'>
        <div className='relative z-10'>
          <h1 className='animate-fade-up text-center mx-50 text-7xl font-extrabold text-white md:text-xl lg:text-8xl'>
            Bienvenidos a CrenAgro
          </h1>
        </div>
        <a className="z-10 rounded-2xl bg-verde hover:bg-rojo transition-opacity duration-500 ease-in-out p-4 text-base font-bold text-white active:scale-95" href="https://wa.link/ws7g5i" target='_blank'>
          Contactar ahora
        </a>
      </div>
    </div>
  );
};

export default Hero;