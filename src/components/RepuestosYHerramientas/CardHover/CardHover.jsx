
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../../utils/cn";
import { DirectionAwareHover } from "../../../aceternity/ui/direction-aware-hover";

export function CardHover() {
    const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const imageUrl2 = "https://static2.aastatic.com.ar/files/variants/500/52a51bc5dc3f40ec9dbc82aec25d3fb4.jpg";
    const imageUrl3 = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    
    <div className="h-[40rem] relative  flex items-center justify-center">
      <div className="lg:mx-5">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="montserrat text-3xl">Repuestos</p>
        
      </DirectionAwareHover>
      </div>
      <div className="lg:mx-5">
      <DirectionAwareHover imageUrl={imageUrl2}>
        <p className="montserrat text-3xl text-white">Maquinarias</p>
       
      </DirectionAwareHover>
      </div>
      <div className="lg:mx-5">
      <DirectionAwareHover imageUrl={imageUrl3}>
        <p className="montserrat text-3xl">Herramientas</p>
    
      </DirectionAwareHover>
      </div>
    </div>
  );
}
