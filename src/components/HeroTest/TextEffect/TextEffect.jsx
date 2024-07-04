"use client";
import { TextGenerateEffect } from "../../../aceternity/ui/text-generate-effect";
 
const words = 'Repuestos y herramientas agrícolas de calidad para asegurar tu productividad';
 
export function TextEffect() {
  return <TextGenerateEffect words={words} />;
}