import React from 'react'
import { CardHover } from './CardHover/CardHover'
import StaticCards from './StaticCards/StaticCards'

const RepuestosYHerramientas = () => {
  return (
    <div>
        <div className='lg:mt-[10rem] mt-[10rem]'>
             <h1 className='montserrat text-center lg:text-4xl lg:ml-[50rem] lg:hidden text-2xl'>Repuestos y herramientas</h1>
            <h1 className='montserrat text-center lg:text-4xl lg:ml-[75rem] hidden lg:flex'>Mas destacados</h1>
            <div className='lg:flex lg:mx-[5rem] hidden'>
            <div>
            <h1 className='lg:text-6xl montserrat'>Todo lo mejor en herramientas , repuestos y maquinarias </h1>
            
              <p className='lg:text-2xl montserrat text-rojo lg:my-10'>Encontralo acá</p>
            
              <a className='lg:bg-verde lg:rounded-xl lg:px-10 lg:py-5 lg:text-white montserrat' href="">Ver mas</a>
            </div>
            <CardHover/>
            </div>
      
            <div className='lg:hidden'>
            <StaticCards/>
            </div>
        </div>
    </div>
  )
}

export default RepuestosYHerramientas