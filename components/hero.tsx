'use client';

import React from 'react';
import {motion} from 'framer-motion';
import { useState, useEffect } from 'react';
import useWindowDimensions from '@/utils/useWindowDimensions.'
import Navbar from "@/components/navbar";

function Hero(props: any) {
    const [bannerPosition, setBannerPosition] = useState(0)

    return (
        <>
        <div className="bg-gradient-to-r from-blue-purple to-white">
        <Navbar/>
        <div className="flex flex-col h-[calc(100vh-100px)] pt-4 border-solid border-white border-b-4 ">
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
            <div className="flex flex-row h-100%">
                <div className="text-right flex-1 flex flex-col items-end justify-items-center px-4">
                    <div>
                        <h1 className="text-right text-8xl font-bold">Lucas Liao</h1>
                        <p className="text-right text-3xl"> Yo Momma </p>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center px-4">
                    d
                </div>
            </div>
        </div>
        </div>
        </>
        
    );
}

export default Hero;