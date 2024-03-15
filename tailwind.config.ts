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
        },
        colors: {
            'blue-purple': '#482fe5',
            'cyan' : '#33adcb',
            'yellow' : '#ffe603',
            'orange' : '#ff862f',
            'purple' : '#8300e0',
            'off-white' : '#ffdeee',
            'maroon': '#840e00',
            'red':'#ff1640'
            // '' : '',
        },
        dropShadow: {
          'flat': '10px 10px rgba(0, 0, 0, 1)',
          'flatXL': '20px 20px rgba(0, 0, 0, 1)',
        }
    },
    
    
  },
  plugins: [],
};
export default config;
