import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            'mono': ["Fira Mono", ...defaultTheme.fontFamily.mono],
            // 'chivo': ["Chivo Mono"]
        },
        colors: {
            'blue-purple': '#482fe5',
            'cyan' : '#33adcb',
            'yellow' : '#ffe603',
            'orange' : '#ff862f',
            'purple' : '#8300e0',
            'off-white' : '#ffdeee',
            'maroon': '#840e00',
            'red':'#ff1640',  
            "turquoise": "#1ec7bb",
            "indigo": "#3d56b1",
            // '' : '',
        },
        dropShadow: {
          'flat': '10px 10px rgba(0, 0, 0, 1)',
          'white': '0px 0px 5px rgba(255, 255, 255, 0.75)',
          'black': '0px 0px 5px rgba(0,0,0, 0.25)'
        },
        backgroundSize: {
            'size-200': '200% 200%',
        },
        backgroundPosition: {
            'pos-0': '0% 0%',
            'pos-100': '100% 100%',
        },
    },
    
    
  },
  plugins: [],
};
export default config;
