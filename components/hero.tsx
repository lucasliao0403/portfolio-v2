'use client';

import React from 'react';
import {motion} from 'framer-motion';
import { useState, useEffect } from 'react';
import useWindowDimensions from '@/utils/useWindowDimensions.'

function Hero(props: any) {
    const [bannerPosition, setBannerPosition] = useState(0)


    

    return (
        <div className="flex flex-col bg-blue-purple h-[calc(100vh-300px)] pt-4">
            <div className="border-solid border-white border-2 border-x-0 py-2">
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
            <div>
                <div className="flex-1 flex items-center justify-center">
                    
                </div>
            </div>
            <div className = "flex-1">
                
            </div>
        </div>
    );
}

export default Hero;