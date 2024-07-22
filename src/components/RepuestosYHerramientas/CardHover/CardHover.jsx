
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../../utils/cn";
import { Link } from "react-router-dom";
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
      <div className="lg:mx-5">
        
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="montserrat text-3xl">Repuestos</p>
        
      </DirectionAwareHover>
      </div>
      <div className="lg:mx-5">
      <DirectionAwareHover imageUrl={imageUrl2}>
        <p className="montserrat text-3xl text-white">Herramientas</p>
       
      </DirectionAwareHover>
      </div>
      <div className="lg:mx-5">
      <DirectionAwareHover imageUrl={imageUrl3}>
        <p className="montserrat text-3xl">Maquinarias</p>
    
      </DirectionAwareHover>
      </div>
    </div>
  );
}
