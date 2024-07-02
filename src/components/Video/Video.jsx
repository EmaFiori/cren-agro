import React from 'react';
import video from '../../assets/crenagro2.mp4';

const Video = () => (
  <div className=' '>
  <video autoPlay loop muted className=" absolute  top-0 left-0 h-full lg:h-1rem w-full object-cover rounded-2xl">
    <source className='px-20 ' src={video} type="video/mp4" />
  </video>
  </div>
);

export default Video;