import React from 'react'
import { CardHover } from '../CardHover/CardHover'

const RepuestosYHerramientas = () => {
  return (
    <div>
        <div className='lg:mt-[10rem] mt-[10rem]'>
            <h1 className='montserrat text-center lg:text-4xl text-2xl'>Repuestos y Herramientas</h1>
            <div className='lg:flex lg:mx-16 hidden'>
            <CardHover/>
            </div>
        </div>
    </div>
  )
}

export default RepuestosYHerramientas