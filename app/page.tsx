'use client'

import Image from "next/image";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experiences from "@/components/experiences";
import Footer from "@/components/footer";
import {motion, useScroll } from 'framer-motion'
import useWindowDimensions from "@/utils/useWindowDimensions.";

/*

TODO:
- use svg transform somewhere
- add cool scroll bar

*/
export default function Home() {
    return (
        <>
        {/* <head>
            <link rel="icon" href="/quag.ico" sizes="any" />  
            <link
                rel="icon"
                href="/icon?<generated>"
                type="image/<generated>"
                sizes="<generated>"
            />     
            <link
                rel="apple-touch-icon"
                href="/apple-icon?<generated>"
                type="image/<generated>"
                sizes="<generated>"
            />
        </head> */}
        <main className="font-mono text-white max-w-[100vw]">
            <Hero/>
            <About/>
            <Experiences/>
            <Projects/>
        </main>
        </>
    );
}
