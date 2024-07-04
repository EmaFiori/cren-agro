/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    colors:{
    "rojo":"#C9333C",
    "verde":"#66BB6A",
    "gris-claro":"#F0F0F0",
    "gris-medio":"#6D6D6D",
    "gris-oscuro":"#333333",

    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-animated'
      
    )
  ],
}

