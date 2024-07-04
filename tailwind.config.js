/** @type {import('tailwindcss').Config} */
const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
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
      
    ),
    [
      addVariablesForColors,
      function ({ matchUtilities, theme }) {
        matchUtilities(
          {
            "bg-dot-thick": (value) => ({
              backgroundImage: `url("${svgToDataUri(
                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
              )}")`,
            }),
          },
          { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
        );
      },
    ],
  ],
}
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
