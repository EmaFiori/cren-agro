import React from 'react'
import repuestos from "../../src/assets/crenagro3.mp4";
import maquinarias from"../../src/assets/crenagro.mp4";
import herramientas from "../../src/assets/crenagro2.mp4";
const StaticCards = () => {
  return (
    <div className='text-center mt-[2rem]'>
        <div className='my-5'>
            <video autoPlay loop muted className="w-10/12 h-10/12 rounded-xl ml-[2rem]"   src={repuestos} alt="" />
         
            <p className="montserrat text-2xl text-white absolute mt-[-2rem] ml-[3rem]">Repuestos</p>
        </div>
        <div className='my-5'>
        <video autoPlay loop muted className="w-10/12 h-10/12 rounded-xl ml-[2rem]"   src={maquinarias} alt="" />
            <p className="montserrat text-2xl text-white absolute mt-[-2rem] ml-[3rem]">Maquinarias</p>
        </div>
        <div className='my-5'>
        <video autoPlay loop muted className="w-10/12 h-10/12 rounded-xl ml-[2rem]"   src={herramientas} alt="" />
            <p className="montserrat text-2xl text-white absolute mt-[-2rem] ml-[3rem]">Herramientas</p>
        </div>
    </div>
  )
}

export default StaticCards