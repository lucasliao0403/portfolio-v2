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
        'orange': 'hover:text-orange decoration-orange border-white hover:bg-white',
        'purple': 'hover:text-purple decoration-purple border-white hover:bg-white',
        'black' : 'hover:text-gray-800 decoration-gray-800 border-gray-800 hover:bg-gray-800 text-black hover:text-white',
    }
    const colorVariantsReverse = {
        'orange': 'bg-orange hover:border-orange hover:text-orange',
        'purple': 'bg-purple hover:border-purple hover:text-purple',
        'black' : 'bg-gray-800 hover:border-gray-800 hover:text-gray-800 text-white hover:text-black',
    }
    const tabVariants = {
        'orange': 'text-orange decoration-orange border-white bg-white',
        'purple': 'text-purple decoration-purple border-white bg-white',
        'black' : 'decoration-gray-800 border-gray-800 bg-gray-800 text-white',
    }

    const mobileVariants = {
        'orange': 'text-orange bg-white',
        'purple': 'text-purple bg-white',
        'black' : 'bg-gray-800 text-white',
    }

    const mobileButtonVariants = {
        'orange': '',
        'purple': '',
        'black' : 'text-white',
    }

    return (
        <div  className="">       
            {/* scrollbar */}
            <motion.div className="font-mono fixed bg-red origin-left w-[100vw] z-50" style={{ scaleX: scrollYProgress }}/> 

            <div className={`lg:hidden z-40 fixed w-[100vw] ${(mobileVariants as any)[props.color as keyof typeof mobileVariants]}`}>
                <Accordion allowMultiple>
                    <AccordionItem className="font-bold ml-2">
                        <h2 className="text-5xl">
                        <AccordionButton>
                            <Box  as="span" flex='1' textAlign='left'>
                                <div className="text-lg">LUCAS LIAO</div>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <motion.button 
                            onClick={() => router.push(`/`)}
                            className={`${(mobileButtonVariants as any)[props.color as keyof typeof mobileButtonVariants]} 
                            ${tab === 0 ? (tabVariants as any)[props.color as keyof typeof tabVariants]:""}`}>
                                HOME
                            </motion.button>
                        </AccordionPanel>
                        <AccordionPanel>
                            <motion.button 
                            // whileHover={{ scale: 1, rotate: 3, }}
                            onClick={() => router.push(`/experiences`)}
                            className={`${(mobileButtonVariants as any)[props.color as keyof typeof mobileButtonVariants]} 
                            ${tab === 1 ? (tabVariants as any)[props.color as keyof typeof tabVariants]:""}`}>
                                EXPERIENCES
                            </motion.button>
                        </AccordionPanel>
                        <AccordionPanel >
                            <motion.button 
                            // whileHover={{ scale: 1, rotate: 15, }}
                            onClick={() => router.push(`/projects`)}
                            className={`${(mobileButtonVariants as any)[props.color as keyof typeof mobileButtonVariants]} 
                            ${tab === 2 ? (tabVariants as any)[props.color as keyof typeof tabVariants]:""}`}>
                                PROJECTS
                            </motion.button>
                        </AccordionPanel>
                        <AccordionPanel>
                            <motion.button 
                            onClick = {handleClick}
                            className={` ${(mobileButtonVariants as any)[props.color as keyof typeof mobileButtonVariants]} `}>
                                    <div>CONTACT</div>
                            </motion.button >
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>

            <motion.div 
            initial={{ x: 0 , y: 0, opacity: -1}}
            whileInView={{ x: 0 , y: 0, opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0}}
            className="hidden lg:flex
            lg:h-[110px] lg:h-[50px] mx-32 flex flex-row justify-between items-center text-white font-mono"> 
                <div className="flex flex-row text-2xl gap-4">
                    <motion.button 
                    // whileHover={{ scale: 1, rotate: 3, }}
                    onClick={() => router.push(`/`)}
                    className={`flex font-bold my-auto py-4 px-8 align-middle justify-center decoration-4  
                    border-dashed border-2 ${(colorVariants as any)[props.color as keyof typeof colorVariants]} 
                    ${tab === 0 ? (tabVariants as any)[props.color as keyof typeof tabVariants]:""}`}>
                        HOME
                    </motion.button>

                    <motion.button 
                    // whileHover={{ scale: 1, rotate: 3, }}
                    onClick={() => router.push(`/experiences`)}
                    className={`flex font-bold my-auto py-4 px-8 align-middle justify-center decoration-4  
                    border-dashed border-2 ${(colorVariants as any)[props.color as keyof typeof colorVariants]} 
                    ${tab === 1 ? (tabVariants as any)[props.color as keyof typeof tabVariants]:""}`}>
                        EXPERIENCES
                    </motion.button>

                    <motion.button 
                    // whileHover={{ scale: 1, rotate: 15, }}
                    onClick={() => router.push(`/projects`)}
                    className={`flex font-bold my-auto py-4 px-8 align-middle justify-center decoration-4  
                    border-dashed border-2 ${(colorVariants as any)[props.color as keyof typeof colorVariants]} 
                    ${tab === 2 ? (tabVariants as any)[props.color as keyof typeof tabVariants]:""}`}>
                        PROJECTS
                    </motion.button>
                </div>

                <div className="flex flex-row text-2xl font-bold h-12">
                    <div className="flex justify-center items-center"> 
                        <motion.button 
                        onHoverStart={() => setContactHover(true)}
                        onHoverEnd={() => setContactHover(false)}
                        whileHover={{ scale: 1, rotate: 0, }}
                        onClick = {handleClick}
                        className={`max-w-[8vw] max-h-[8vh] flex items-center rounded-md justify-center border-2 border-transparent overflow-hidden
                        hover:cursor-pointer py-4 px-8 border-dashed hover:bg-transparent ${(colorVariantsReverse as any)[props.color as keyof typeof colorVariantsReverse]}`}>
                            {contactHover ? 
                            <motion.div
                            className="flex justify-center align-center text-3xl rounded-full bg-white px-8 py-6"
                            animate={{ rotate: 360, scale: [1.5, 3, 1.5], x:[0, 100, 0, -100, 0]}}
                            transition={{ ease: "linear", duration: 2, repeat: Infinity }}>
                                <div>CONTACT</div>
                            </motion.div> : <>CONTACT</>}
                        </motion.button >
                    </div>
                </div>
        </motion.div>
      </div>
    );
}

export default Navbar;