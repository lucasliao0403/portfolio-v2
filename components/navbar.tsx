'use client';

import React from 'react';
import { motion } from "framer-motion"

function Navbar(props: any) {
    return (
        <div className="h-[100px] flex flex-row justify-between items-center"> {/* navbar */}

        <div>

        </div>

        <div className="flex flex-row text-xl font-bold mr-4 h-12">

            <div className="flex m-auto align-middle justify-center w-32">
                <h2 className="font-bold"> Contact </h2>
            </div>

            <div className="flex align-middle justify-center"> {/* TODO: WHY NOT VERTICALLY CENTER?? */}
                <motion.button 
                whileHover={{ scale: 1.1, rotate: 10.0, }}
                className="flex items-center justify-center rounded-3xl w-32 bg-purple hover:cursor-pointer ">
                    <h2>Contact</h2>
                </motion.button >
            </div>
        </div>
      </div>
    );
}

export default Navbar;