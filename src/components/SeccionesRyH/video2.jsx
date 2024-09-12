import React from 'react';
import video from '../../assets/crenagro3.mp4';

const video2 = () => (
  <div className=' '>
  <video autoPlay loop muted className=" absolute hidden h-full w-full rounded-3xl object-cover md:inline-block">
    <source className='px-20 ' src={video} type="video/mp4" />
  </video>
  </div>
);

export default video2;