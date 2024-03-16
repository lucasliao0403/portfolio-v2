'use client';

import React from 'react';
import Image from 'next/image'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Navbar from "@/components/navbar";

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
        className="bg-gradient-to-r from-blue-purple to-white h-[calc(100vh)] flex flex-col justify-between select-none"
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
                    className="flex flex-row h-100%">
                        <div className="text-right flex-1 flex flex-col items-end justify-items-center px-4">
                            <div>
                                <h1 className="text-right text-8xl font-bold">Lucas Liao</h1>
                                <p className="text-right text-3xl"> Developer </p>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center justify-center px-4">
                            d
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