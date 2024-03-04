'use client';

import React from 'react';
import {motion} from 'framer-motion';
import { useState, useEffect } from 'react';
import useWindowDimensions from '@/utils/useWindowDimensions.'

function Hero(props: any) {
    const [bannerPosition, setBannerPosition] = useState(0)


    

    return (
        <div className="flex flex-col bg-blue-purple h-[calc(100vh-300px)] pt-4">
            <div className="border-solid border-white border-2 border-x-0 py-2 mb-12">
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
                <div className="text-right bg-cyan flex-1 flex flex-col items-center justify-items-center px-4">
                    <div>
                        <h1 className="text-8xl font-bold">Lucas Liao</h1>
                        <p className="text-3xl"> Yo Momma </p>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center px-4">
                    d
                </div>
            </div>
        </div>
    );
}

export default Hero;