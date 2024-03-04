'use client';

import React from 'react';
import {motion} from 'framer-motion';
import { useState } from 'react';

function Hero(props: any) {
    let [bannerPosition, setBannerPosition] = useState(0)


    return (
        <div className="flex flex-row bg-blue-purple h-[calc(100vh-300px)]">
            <div className="flex-1 flex items-center justify-center">
                <motion.div animate={{
                // scale: [1, 1, 1, 1, 1],
                // rotate: [0, 0, 360, 180, 0],
                // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                x:[-500, 0, 500, 1000, 1500, 2000],

                }}
                transition={{
                    duration: 10,
                    // ease: "easeInOut",
                    times: [0, 1/6, 2/6, 3/6, 4/6, 5/6],
                    repeat: Infinity,
                    repeatDelay: 0
                  }}>
                    <h2 className="text-4xl">
                        test
                    </h2>
                </motion.div>
            </div>
            <div className = "flex-1">
                
            </div>
        </div>
    );
}

export default Hero;