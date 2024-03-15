'use client';

import React from 'react';
import { motion } from "framer-motion"
import {useRouter} from 'next/navigation';

function Navbar(props: {color: string}) {
    const router = useRouter()

    const colorVariants = {
        'orange': 'hover:text-orange decoration-orange border-white hover:bg-white',
        'purple': 'hover:text-purple decoration-purple border-white hover:bg-white',
        'black' : 'hover:text-gray-800 decoration-gray-800 border-gray-800 hover:bg-gray-800 text-black hover:text-white',

    }

    const colorVariantsReverse = {
        'orange': 'bg-orange hover:border-orange hover:text-orange',
        'purple': 'bg-purple hover:border-purple hover:text-purple',
        'black' : 'bg-gray-800 hover:border-gray-800 hover:text-gray-800 text-white hover:text-black',
    }
    return (
        <div className="h-[100px] mx-32 flex flex-row justify-between items-center text-white font-mono"> 
            <div className="flex flex-row text-2xl gap-4">
                <motion.button 
                // whileHover={{ scale: 1, rotate: 3, }}
                onClick={() => router.push(`/`)}
                className={`flex font-bold my-auto py-4 px-8 align-middle justify-center decoration-4  
                 border-dashed border-2 ${(colorVariants as any)[props.color as keyof typeof colorVariants]}`}>
                    Home
                </motion.button>

                <motion.button 
                // whileHover={{ scale: 1, rotate: 3, }}
                onClick={() => router.push(`/experiences`)}
                className={`flex font-bold my-auto py-4 px-8 align-middle justify-center decoration-4 
                border-white border-dashed border-2 ${(colorVariants as any)[props.color as keyof typeof colorVariants]} `}>
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
                    hover:cursor-pointer py-4 px-8 border-dashed hover:bg-transparent ${(colorVariantsReverse as any)[props.color as keyof typeof colorVariantsReverse]}`}>
                        Contact
                    </motion.button >
                </div>
            </div>
      </div>
    );
}

export default Navbar;