'use client';

import React from 'react';
import {useState} from 'react'
import {motion, useScroll } from 'framer-motion'

function Navbar() {
    const [contactHover, setContactHover] = useState(false)
    const { scrollYProgress } = useScroll();

    function handleClick() {
        const element = document.querySelector("#footer");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div>
            {/* Scrollbar */}
            <motion.div className="lg:h-2 h-1 fixed bg-red origin-left w-[100vw] z-50" style={{ scaleX: scrollYProgress }}/> 

            <motion.div 
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="hidden lg:flex 
            py-4 mx-32 flex flex-row justify-between items-center text-white font-mono"> 
                <div className="flex flex-row text-lg gap-4">

                    {/* <motion.button 
                    // whileHover={{ scale: 1, rotate: 3, }}
                    onClick={() => router.push(`/experiences`)}
                    className={`flex font-bold my-auto py-2 px-6 align-middle justify-center decoration-4  
                    border-dashed border-2 ${(colorVariants as any)[props.color as keyof typeof colorVariants]} 
                    ${tab === 1 ? (tabVariants as any)[props.color as keyof typeof tabVariants]:""}`}>
                        EXPERIENCES
                    </motion.button>

                    <motion.button 
                    // whileHover={{ scale: 1, rotate: 15, }}
                    onClick={() => router.push(`/projects`)}
                    className={`flex font-bold my-auto py-2 px-6 align-middle justify-center decoration-4  
                    border-dashed border-2 ${(colorVariants as any)[props.color as keyof typeof colorVariants]} 
                    ${tab === 2 ? (tabVariants as any)[props.color as keyof typeof tabVariants]:""}`}>
                        PROJECTS
                    </motion.button> */}
                </div>


                {/* Funny Contact Button */}

                {/* <div className="flex flex-row text-lg font-bold h-12">
                    <div className="flex justify-center items-center"> 
                        <motion.button 
                        onHoverStart={() => setContactHover(true)}
                        onHoverEnd={() => setContactHover(false)}
                        whileHover={{ scale: 1, rotate: 0, }}
                        onClick = {handleClick}
                        className={`max-w-[8vw] max-h-[8vh] flex items-center rounded-md justify-center border-transparent overflow-hidden
                        hover:cursor-pointer py-2 px-6 border-dashed hover:bg-transparent ${(colorVariantsReverse as any)[props.color as keyof typeof colorVariantsReverse]}`}>
                            {contactHover ? 
                            <motion.div
                            className="flex justify-center align-center text-xl bg-slate-800 rounded-md text-white px-2"
                            animate={{ rotate: 360, scale: [1.5, 3, 1.5], x:[0, 75, 0, -75, 0]}}
                            transition={{ ease: "linear", duration: 2, repeat: Infinity }}>
                                <div>CONTACT</div>
                            </motion.div> : <>CONTACT</>}
                        </motion.button >
                    </div>
                </div> */}
        </motion.div>
      </div>
    );
}

export default Navbar;