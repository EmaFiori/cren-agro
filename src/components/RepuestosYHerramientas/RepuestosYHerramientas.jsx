import React from 'react'
import { CardHover } from './CardHover/CardHover'
import StaticCards from './StaticCards/StaticCards'

const RepuestosYHerramientas = () => {
  return (
    <div>
        <div className='lg:mt-[10rem] mt-[10rem]'>
            <h1 className='montserrat text-center lg:text-4xl text-2xl'>Repuestos y Herramientas</h1>
            <div className='lg:flex lg:mx-[19rem] hidden'>
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