'use client';

import React from 'react';
import Image from 'next/image'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Navbar from "@/components/navbar";
import { TypeAnimation } from 'react-type-animation';


function Hero(props: any) {
    const [bannerPosition, setBannerPosition] = useState(0)
    // const [repeat, setRepeat] = useState(Infinity) // for spinning arrow
    // const ref = useRef(null);

    // const { scrollYProgress } = useScroll({
    //     target: ref,
    // });

    // const [hookedYPosition, setHookedYPosition] = useState(0);
    // useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //     setHookedYPosition(latest);
    // })

    // useEffect(() => {
    //     console.log(hookedYPosition)
    //     if (hookedYPosition == 0) {
    //         setRepeat(Infinity)
    //     }
    //     else {
    //         setRepeat(0)
    //     }
    // }, [hookedYPosition])

    return (
        <>
        
        <motion.div 
        className="bg-gradient-to-tr from-gray-800 to-blue-purple h-[calc(100vh)] flex flex-col justify-between select-none"
        >

            <div>
            <Navbar color="purple"/>

                <div className="flex flex-col font-mono">
                    <div className="bg-black border-solid border-white border-2 border-x-0 py-2 mb-12">
                        <motion.div 
                        
                        animate={{
                        // TODO: make this change dynamically based on page width
                        x:[-500, 1800],

                        }}
                        transition={{
                            duration: 10,
                            ease: "linear",
                            times: [0, 1],
                            repeat: Infinity,
                            repeatDelay: 0.1,
                        }}>
                            <h2 className="text-4xl">
                                test
                            </h2>
                        </motion.div>
                    </div>
                    <motion.div 
                    initial={{ x: 0 , y: 0, opacity: -1}}
                    whileInView={{ x: 0 , y: 0, opacity: 1}}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0}}
                    className="flex flex-row h-100% justify-center">
                        <div className="text-left flex flex-col gap-1items-center justify-items-center px-4">
                            <TypeAnimation
                            className="text-left text-6xl font-bold w-[1200px]"
                                sequence={[
                                1500,
                                "HI, I'M LUCAS LIAO\n\n",
                                3000,
                                "HI, I'M LUCAS LIAO\n\nI'M A STUDENT DEVELOPER AND\nDESIGNER BASED IN TORONTO",
                                1000,
                                "HI, I'M LUCAS LIAO\n\nI'M A STUDENT DEVELOPER AND\nDESIGNER BASED IN TORONTO\nAND I LOVE TO BUILD COOL SOFTWARE",
                                1000,
                                "HI, I'M LUCAS LIAO\n\nI'M A STUDENT DEVELOPER AND\nDESIGNER BASED IN TORONTO\nAND I LOVE TO BUILD COOL SOFTWARE\n\nGET TO KNOW MORE ABOUT ME BELOW ↓",
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

export default Hero;