'use client';

import React from 'react';
import { motion } from "framer-motion"
import {useRouter} from 'next/navigation';

function Navbar(props: any) {
    const router = useRouter()
    return (
        <div className="h-[100px] mx-32 flex flex-row justify-between items-center"> {/* navbar */}

        <div className="flex flex-row text-2xl gap-4">
            <motion.button 
            // whileHover={{ scale: 1, rotate: 3, }}
            onClick={() => router.push(`/experiences`)}
            className="flex font-bold my-auto py-4 px-8 align-middle justify-center decoration-4 decoration-orange 
            border-white border-dashed border-2 hover:bg-white hover:text-purple">
                Experiences
            </motion.button>
            <motion.button 
            // whileHover={{ scale: 1, rotate: 15, }}
            onClick={() => router.push(`/projects`)}
            className="flex font-bold my-auto py-4 px-8 align-middle justify-center decoration-4 decoration-orange 
            border-white border-dashed border-2 hover:bg-white hover:text-purple">
                Projects
            </motion.button>
        </div>

        <div className="flex flex-row text-2xl font-bold mr-24 h-12">
            <div className="flex align-middle justify-center items-center"> 
                <motion.button 
                whileHover={{ scale: 1, rotate: 0, }}
                className="flex items-center rounded-md justify-center border-2 border-transparent bg-purple 
                hover:cursor-pointer text-white py-4 px-8 border-dashed hover:border-purple hover:text-purple hover:bg-transparent">
                    Contact
                </motion.button >
            </div>
        </div>
      </div>
    );
}

export default Navbar;