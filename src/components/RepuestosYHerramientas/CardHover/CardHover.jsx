
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
    
    <div className="h-[40rem] relative  flex items-center justify-center">
      <div className="lg:mx-10">
        
      <DirectionAwareHover imageUrl={imageUrl}>
        <NavLink to="/repuestos" className="montserrat text-3xl">Repuestos</NavLink>
      </DirectionAwareHover>

      </div>
      <div className="lg:mx-5">
      <DirectionAwareHover imageUrl={imageUrl2}>
        <NavLink to="/herramientas" className="montserrat text-3xl text-white">Herramientas</NavLink>
       
      </DirectionAwareHover>
      </div>
      <div className="lg:mx-5">
      <DirectionAwareHover imageUrl={imageUrl3}>
        <NavLink to="/maquinarias" className="montserrat text-3xl">Maquinarias</NavLink>
    
      </DirectionAwareHover>
      </div>
    </div>
  );
}
