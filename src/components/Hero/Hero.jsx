import React from 'react';

const Hero = () => {
  return (
    <div>
      <div className='mx-4 my-4 flex flex-col items-center justify-center rounded-3xl bg-[url(https://s1.1zoom.me/b5041/155/Fields_2013-17_Case_IH_Steiger_620_HD_Tractor_527365_1920x1080.jpg)] bg-cover bg-center text-white h-[calc(100vh-8rem)] relative gap-9'>
        <video autoPlay loop muted className="absolute h-full w-full rounded-3xl object-cover md:block">
          <source src=".\src\assets\crenagro.mp4" type="video/mp4" />
        </video>
        <div className='relative'>
          <h1 className='text-center mx-20 text-xl font-extrabold mix-blend-difference md:text-xl lg:text-3xl'>
            Bienvenido/a a CrenAgro!
          </h1>
        </div>
        <a class="z-50 rounded-2xl bg-white p-4 text-base font-bold text-black active:scale-95" href="#">Contactar ahora</a>
      </div>
    </div>
  );
};

export default Hero;