
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../../utils/cn";
import { Link,NavLink } from "react-router-dom";
import { DirectionAwareHover } from "../../../aceternity/ui/direction-aware-hover";
import jorgeImage from '../../../assets/jorge.png';
import tractor from '../../../assets/tractor.jpg';
export function CardHover() {
    const imageUrl =
    tractor;
    const imageUrl2 = "https://static2.aastatic.com.ar/files/variants/500/52a51bc5dc3f40ec9dbc82aec25d3fb4.jpg";
    const imageUrl3 = jorgeImage;
  return (
    
    <div className="lg:h-[35rem] lg:ml-[20rem] lg:w-[50vw] lg:shadow-lg lg:rounded-xl relative  flex items-center justify-center">
      <div className="lg:mx-5">
        <Link to="/repuestos" >
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="montserrat text-3xl">Repuestos</p>
      </DirectionAwareHover>
      <div className="lg:mt-5">
      <span className="montserrat">$1.500.000 ARS</span>
      </div>
      <div className="lg:flex-col lg:mt-3 ">
      <span className="lg:bg-black lg:text-white lg:p-1.5 lg:rounded-xl montserrat "> ver mas</span>
      </div>
      </Link>
      </div>
      <div className="lg:mx-5">
        <Link to="/herramientas" >
      <DirectionAwareHover imageUrl={imageUrl2}>
        <p className="montserrat text-3xl text-white">Herramientas</p>
       
      </DirectionAwareHover>
      <div className="lg:mt-5">
      <span className="montserrat">$1.500.000 ARS</span>
      </div>
      <div className="lg:flex-col lg:mt-3 ">
      <span className="lg:bg-black lg:text-white lg:p-1.5 lg:rounded-xl montserrat "> ver mas</span>
      </div>
      </Link>
      </div>
      <div className="lg:mx-5">
      <Link to="/maquinarias">
      <DirectionAwareHover imageUrl={imageUrl3}>
        <p className="montserrat text-3xl">Maquinarias</p>
      </DirectionAwareHover>
      </Link>
      <div className="lg:mt-5">
      <span className="montserrat">$1.500.000 ARS</span>
      </div>
      <div className="lg:flex-col lg:mt-3 ">
      <span className="lg:bg-black lg:text-white lg:p-1.5 lg:rounded-xl montserrat "> ver mas</span>
      </div>
      </div>
    </div>

  );
}
