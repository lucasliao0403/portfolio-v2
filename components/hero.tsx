'use client';

import React from 'react';
import Image from 'next/image'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Navbar from "@/components/navbar";
import Link from 'next/link';
import { AiFillMail } from "react-icons/ai";
import { FaLinkedin, FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";

function Hero(props: any) {
    const [bannerPosition, setBannerPosition] = useState(0)
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const blockHoverAnimation = !isMobile ? {
        scale: 1.02,
        transition: { duration: 0.1, ease: "linear" },
    } : {};

    const iconHoverAnimation = !isMobile ? {
        y: -5,
        transition: { duration: 0.1, ease: "linear" }
    } : {};

    return (
        <>
        
        {/* <motion.div 
        className="text-black bg-gradient-to-tr from-rose-200 to-amber-50 lg:h-[100vh] flex flex-col justify-between select-none"
        > */}
        <motion.div 
        className="text-black bg-turquoise min-h-screen flex flex-col justify-between select-none"
        >
            <div className="">
                <Navbar color="black"/>

                <div className="w-full flex flex-col justify-center items-centerfont-mono pt-16 mt-16 lg:pt-0 grow">
                    <motion.div 
                    initial={{ x: 0 , y: 0, opacity: -1}}
                    whileInView={{ x: 0 , y: 0, opacity: 1}}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0}}
                    className=" flex flex-row flex justify-center items-center grow">
                        {/* Main container for the two-column layout (text on left, image on right) */}
                        <div className="flex flex-col lg:flex-row items-stretch gap-6 px-4 lg:mx-80 mx-8 w-full">
                            {/* Left Column: Text Blocks */}
                            <div className="flex flex-col items-start gap-6 w-full lg:w-1/2">
                                {/* Block 1: Title, Tagline, Socials */}
                                <motion.div
                                    className="p-4 bg-yellow drop-shadow-flat border-solid border-black border-4 w-fit"
                                    whileHover={blockHoverAnimation}
                                    style={{ touchAction: 'pan-y' }}
                                >
                                    <div className="flex flex-col text-3xl lg:text-4xl text-left">
                                        <div className="font-bold">
                                            Hi, I'm <span className="text-black">Lucas Liao</span>!
                                        </div>
                                        <div className="text-lg italic">
                                            I love to build things.
                                        </div>
                                        <div className="flex flex-row text-2xl gap-1">
                                                <motion.div whileHover={iconHoverAnimation}>
                                                    <Link href = "https://github.com/lucasliao0403"><FaSquareGithub/></Link>
                                                </motion.div>
                                                <motion.div whileHover={iconHoverAnimation}>
                                                    <Link href = "https://www.linkedin.com/in/lucas-liao-570a19278/"><FaLinkedin/></Link>
                                                </motion.div>
                                                <motion.div whileHover={iconHoverAnimation}>
                                                    <Link href = "https://x.com/liao_lucas"><FaSquareXTwitter/></Link>
                                                </motion.div>
                                                <motion.div whileHover={iconHoverAnimation}>
                                                    <Link href = "mailto: lucasliao0403@gmail.com"><AiFillMail/></Link>
                                                </motion.div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Block 2: Description */}
                                <motion.div
                                    className="p-4 bg-yellow drop-shadow-flat border-solid border-black border-4 w-fit"
                                    whileHover={blockHoverAnimation}
                                    style={{ touchAction: 'pan-y' }}
                                >
                                    <div className="text-sm lg:text-xl">
                                        I'm a<span className="font-bold"> software engineering </span>
                                        student at the University of Waterloo, and I'm interested in anything tech.
                                        <br/><br/>
                                        I'm currently working with{" "}
                                        <Link 
                                            href = "https://ditchcarbon.com/" 
                                            className="font-bold underline decoration-wavy hover:decoration-solid decoration-1 hover:decoration-2"
                                            style={{ textDecorationColor: '#cc5500' }}
                                        >
                                            DitchCarbon
                                        </Link>
                                        , building data pipelines to help companies reduce their Scope 3 emissions.
                                        <br/><br/>
                                        On the side, I play
                                        <span className=""> varsity ultimate frisbee</span>, and I'm a
                                        <span className=""> huge music nerd!</span>
                                        <br/><br/>
                                        Explore my page and don't hesitate to contact me - I'd love to talk!
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Column: Image Block */}
                            <motion.div
                                className="bg-yellow drop-shadow-flat border-solid border-black border-4 w-full lg:w-1/2 rounded-md overflow-hidden aspect-square"
                                whileHover={blockHoverAnimation}
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        className="object-bottom"
                                        src={require("@/app/assets/lucas.png")}
                                        alt="Lucas Liao"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="flex justify-center w-[100vw]">
                <motion.div
                    style={{ scale: 1}}
                    // animate={{rotate: [0, 180, 180, 180, 180, 360]}}
                    // transition={{
                    //     duration: .6,
                    //     ease: "easeInOut",
                    //     times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                    //     repeat: Infinity,
                    //     repeatDelay: 1
                    //   }}
                    initial={{rotate: 180}}
                    whileInView={{ rotate: 0}}
                    transition={{duration: .2,}}
                    viewport={{ once: true }}
                >
                    <div className="relative h-[50px] w-[50px]">
                        <Image
                        src={require("/public/arrow.png")}
                        fill={true}
                        style={{objectFit: "cover"}}
                        alt=""
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
        </>
        
    );
}

function BannerElement({children}: any) {
    return (
        <motion.div 
        className="row-start-1 col-start-1  p-0"
        initial = {{x:-500}}
        animate={{
        x:[-400, 1800],
        }}
        transition={{
            duration: 10,
            ease: "linear",
            times: [0, 1],
            repeat: Infinity,
            repeatDelay: 0.1,
        }}>
            {children}
        </motion.div>
    )
}

export default Hero;