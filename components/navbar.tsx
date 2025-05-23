'use client';

import React from 'react';
import {useEffect, useState} from 'react'
import {motion, useScroll } from 'framer-motion'
import {useRouter, usePathname} from 'next/navigation';
import { Select, Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import { MdClose } from "react-icons/md";
import { IoIosArrowDropdown } from "react-icons/io";

function Navbar(props: {color: string}) {
    const router = useRouter()
    const pathname = usePathname()

    const [tab, setTab] = useState(0) // 0 is home, 1 is experiences, 2 is projects
    const [contactHover, setContactHover] = useState(false)
    const { scrollYProgress } = useScroll();

    function handleClick() {
        const element = document.querySelector("#footer");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    useEffect(() => {
        if(pathname === "/projects") {
            setTab(2)
        } else if (pathname==="/experiences") {
            setTab(1)
        }
        else {
            setTab(0)
        }
    },[])

   

    const colorVariants = {
        'orange': 'bg-transparent hover:text-orange decoration-orange border-white hover:bg-white',
        'grey': 'hover:text-white text-slate-800 decoration-purple border-slate-800 hover:bg-slate-800',
        'black' : 'hover:text-gray-800 decoration-gray-800 border-gray-800 hover:bg-gray-800 text-black hover:text-white',
    }
    const colorVariantsReverse = {
        'orange': 'bg-orange hover:border-orange hover:text-orange',
        'grey': 'bg-slate-800 hover:border-slate-800 hover:border-dashed hover:text-white',
        'black' : 'bg-gray-800 hover:border-gray-800 hover:text-gray-800 text-white hover:text-black',
    }
    const tabVariants = {
        'orange': 'text-orange decoration-orange border-white bg-white',
        'grey': 'text-purple decoration-purple border-white bg-white',
        'black' : 'decoration-gray-800 border-gray-800 bg-gray-800 text-white',
    }

    const mobileVariants = {
        'orange': 'text-orange bg-white',
        'grey': 'text-black bg-white',
        'black' : 'bg-gray-800 text-white',
    }

    const mobileButtonVariants = {
        'orange': 'text-black hover:text-orange',
        'grey': 'text-black hover:text-black',
        'black' : 'text-white hover:text-red',
    }

    const borderVariants = {
        'orange': 'border-orange',
        'grey': 'border-purple',
        'black' : 'border-white',
    }

    return (
        <div>
            {/* Mobile Navbar */}
            <div className={`font-mono lg:hidden z-40 fixed w-[100vw] ${(mobileVariants as any)[props.color as keyof typeof mobileVariants]}`}>
                <Accordion allowMultiple>
                    <AccordionItem className="font-bold pl-2">
                        <h2 className="text-5xl">
                        <AccordionButton>
                            <Box className="" as="span" flex='1' textAlign='left'>
                                <div className="text-lg">LUCAS LIAO</div>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <motion.button 
                            onClick={() => router.push(`/`)}
                            className={`border-transparent text-left w-full pt-4 border-t-2 border-solid ${(borderVariants as any)[props.color as keyof typeof borderVariants]} py-1 ${(mobileButtonVariants as any)[props.color as keyof typeof mobileButtonVariants]}`}>
                                HOME
                            </motion.button>
                        </AccordionPanel>
                       
                    </AccordionItem>
                </Accordion>
            </div>
            {/* Scrollbar */}
            <motion.div className="lg:h-2 h-1 fixed bg-red origin-left w-[100vw] z-50" style={{ scaleX: scrollYProgress }}/> 

            <motion.div 
            initial={{ x: 0 , y: 0, opacity: -1}}
            whileInView={{ x: 0 , y: 0, opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0}}
            className="hidden lg:flex 
            py-4 mx-32 flex flex-row justify-between items-center text-white font-mono"> 
                <div className="flex flex-row text-lg gap-4">
                    {pathname !== '/' && (
                        <motion.button 
                        // whileHover={{ scale: 1, rotate: 3, }}
                        onClick={() => router.push(`/`)}
                        className={`flex font-bold my-auto py-2 px-6 align-middle justify-center decoration-4  
                        border-dashed border-2 ${(colorVariants as any)[props.color as keyof typeof colorVariants]} 
                        ${tab === 0 ? (tabVariants as any)[props.color as keyof typeof tabVariants]:""}`}>
                            HOME
                        </motion.button>
                    )}

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