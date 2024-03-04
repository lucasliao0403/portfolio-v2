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
            'orange' : '#ff6e30',
            'purple' : '#8300e0',
            'off-white' : '#ffdeee',
            // '' : '',
        },
    },
    
    
  },
  plugins: [],
};
export default config;
