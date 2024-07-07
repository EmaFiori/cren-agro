import React from 'react'

const StaticCards = () => {
  return (
    <div className='text-center mt-[2rem]'>
        <div className='my-5'>
            <video autoPlay loop muted className="w-10/12 h-10/12 rounded-xl ml-[2rem]"   src="../../src/assets/crenagro3.mp4" alt="" />
         
            <p className="montserrat text-2xl text-white absolute mt-[-2rem] ml-[3rem]">Repuestos</p>
        </div>
        <div className='my-5'>
        <video autoPlay loop muted className="w-10/12 h-10/12 rounded-xl ml-[2rem]"   src="../../src/assets/crenagro.mp4" alt="" />
            <p className="montserrat text-2xl text-white absolute mt-[-2rem] ml-[3rem]">Maquinarias</p>
        </div>
        <div className='my-5'>
        <video autoPlay loop muted className="w-10/12 h-10/12 rounded-xl ml-[2rem]"   src="../../src/assets/crenagro2.mp4" alt="" />
            <p className="montserrat text-2xl text-white absolute mt-[-2rem] ml-[3rem]">Herramientas</p>
        </div>
    </div>
  )
}

export default StaticCards