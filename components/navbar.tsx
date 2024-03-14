'use client';

import React from 'react';
import { motion } from "framer-motion"
import {useRouter} from 'next/navigation';

function Navbar(props: {color: string}) {
    const router = useRouter()

    const colorVariants = {
        'orange': 'hover:text-orange decoration-orange',
        'purple': 'hover:text-purple decoration-purple',
        // yellow: 'bg-yellow-300 hover:bg-yellow-400 text-black',
    }

    const colorVariantsReverse = {
        'orange': 'bg-orange hover:border-orange hover:text-orange',
        'purple': 'bg-purple hover:border-purple hover:text-purple',
        // yellow: 'bg-yellow-300 hover:bg-yellow-400 text-black',
    }
    return (
        <div className="h-[100px] mx-32 flex flex-row justify-between items-center text-white font-mono"> 
            <div className="flex flex-row text-2xl gap-4">
                <motion.button 
                // whileHover={{ scale: 1, rotate: 3, }}
                onClick={() => router.push(`/`)}
                className={`flex font-bold my-auto py-4 px-8 align-middle justify-center decoration-4  
                border-white border-dashed border-2 hover:bg-white ${(colorVariants as any)[props.color as keyof typeof colorVariants]}`}>
                    Home
                </motion.button>

                <motion.button 
                // whileHover={{ scale: 1, rotate: 3, }}
                onClick={() => router.push(`/experiences`)}
                className={`flex font-bold my-auto py-4 px-8 align-middle justify-center decoration-4 
                border-white border-dashed border-2 hover:bg-white ${(colorVariants as any)[props.color as keyof typeof colorVariants]} `}>
                    Experiences
                </motion.button>

                <motion.button 
                // whileHover={{ scale: 1, rotate: 15, }}
                onClick={() => router.push(`/projects`)}
                className={`flex font-bold my-auto py-4 px-8 align-middle justify-center decoration-4 
                border-white border-dashed border-2 hover:bg-white ${(colorVariants as any)[props.color as keyof typeof colorVariants]}`}>
                    Projects
                </motion.button>
            </div>

            <div className="flex flex-row text-2xl font-bold h-12">
                <div className="flex justify-center items-center"> 
                    <motion.button 
                    whileHover={{ scale: 1, rotate: 0, }}
                    className={`flex items-center rounded-md justify-center border-2 border-transparent 
                    hover:cursor-pointer text-white py-4 px-8 border-dashed hover:bg-transparent ${(colorVariantsReverse as any)[props.color as keyof typeof colorVariantsReverse]}`}>
                        Contact
                    </motion.button >
                </div>
            </div>
      </div>
    );
}

export default Navbar;