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
        className="text-black bg-gradient-to-tr from-rose-200 to-amber-50 lg:h-[100vh] flex flex-col justify-between select-none"
        >
            <div>
            <Navbar color="purple"/>

                <div className="h-full w-full flex flex-col justify-center items-centerfont-mono pt-16 lg:pt-0 grow">
                    {/* scrolling banner: doesn't show in mobile */}
                    {/* <div className="hidden lg:block font-bold text-3xl bg-black border-solid border-white border-2 border-x-0 mb-12 py-2 grid bg-gradient-to-tr from-black to-gray-700">
                       <BannerElement>  LUCAS LIAO </BannerElement>
                    </div> */}

                    <motion.div 
                    initial={{ x: 0 , y: 0, opacity: -1}}
                    whileInView={{ x: 0 , y: 0, opacity: 1}}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0}}
                    className=" flex flex-row lg:h-full flex justify-center items-center grow">
                        <div className=" flex flex-col gap-4 px-4 lg:mx-80 mx-8">
                            <div className="flex flex-col text-3xl text-left">
                                <div className="font-bold">
                                    Hi, I'm <span className="text-black">Lucas Liao</span>!
                                </div>
                                <div className="text-lg italic">
                                    I love to build things.
                                </div>
                            </div>
                            <div className="">
                                Most recently, I worked with Slime Scholars, an upcoming EdTech startup, where I did full-stack development, UI design and product design.
                            </div>
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