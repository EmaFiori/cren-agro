import React from 'react';
import video from '../../assets/crenagro3.mp4';

const Video = () => (
  <div className=' '>
  <video autoPlay loop muted className=" animate-fade-left animate-duration-1000 animate-delay-200 w-[28rem] lg:w-[40rem] max-w-none lg:mx-auto rounded-xl lg:rounded-2xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]">
    <source className='px-20 ' src={video} type="video/mp4" />
  </video>
  </div>
);

export default Video;