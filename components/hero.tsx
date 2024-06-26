'use client';

import React from 'react';
import Image from 'next/image'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Navbar from "@/components/navbar";
import { TypeAnimation } from 'react-type-animation';

import { IoLogoFigma } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";

function Hero(props: any) {
    const [bannerPosition, setBannerPosition] = useState(0)

    return (
        <>
        
        <motion.div 
        className="bg-gradient-to-tr from-gray-800 to-blue-purple lg:h-[100vh] flex flex-col justify-between select-none"
        >
            <div>
            <Navbar color="purple"/>

                <div className="flex flex-col font-mono pt-16 lg:pt-0">
                    {/* scrolling banner: doesn't show in mobile */}
                    <div className="hidden lg:block font-bold text-3xl bg-black border-solid border-white border-2 border-x-0 mb-12 py-2 grid bg-gradient-to-tr from-black to-gray-700">
                        {/* TODO: add multiple elements */}
                       <BannerElement>  LUCAS LIAO </BannerElement>
                    </div>

                    <motion.div 
                    initial={{ x: 0 , y: 0, opacity: -1}}
                    whileInView={{ x: 0 , y: 0, opacity: 1}}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0}}
                    className="flex flex-row lg:h-auto h-[400px] ">
                        <div className=" flex flex-col gap-1 items-center justify-start lg:justify-center px-4">
                            <TypeAnimation
                            className="text-left lg:text-6xl text-3xl font-bold w-[90vw] lg:pb-0 mb-8"
                                sequence={[
                                1500,
                                "HI, I'M LUCAS LIAO\n\n",
                                1500,
                                "HI, I'M LUCAS LIAO\n\nI'M A STUDENT DEVELOPER BASED IN TORONTO",
                                1000,
                                "HI, I'M LUCAS LIAO\n\nI'M A STUDENT DEVELOPER BASED IN TORONTO\n\nGET TO KNOW MORE ABOUT ME BELOW ↓",
                                ]}
                                speed={50}
                                repeat={0}
                            />
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