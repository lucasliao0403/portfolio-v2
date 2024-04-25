'use client'

import React from 'react';
import { FaRegUser, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

import Image from 'next/image'
import {useState} from 'react'
import { motion, Variants } from "framer-motion"

const itemVariants: Variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, x: 20, transition: { duration: 0.2 } }
  };


function Icon({children}:any) {
    return (
        <motion.div 
        initial={{ y: "10vh"}} whileInView={{ x: 0 , y: 0}} transition={{ duration: 1, delay: 0, bounce: 0.5, type: "spring",}} viewport={{ once: true }} whileHover={{scale: 1.0, x:10, y:10, transition: { duration: 0.1, ease:"linear"},}}
        className=" p-1 bg-yellow drop-shadow-flat text-black border-solid border-black border-4 hover:filter-none text-5xl"
    >
        {children}
        </motion.div>
    )
}
function About(props: any) {
    const[open, setOpen] = useState(false)

    return (
        <div className="bg-cyan flex flex-col lg:flex-row border-solid border-y-4 border-white ">
            <div className="flex-1 lg:py-32 lg:px-24 px-4 py-4">
                <motion.div 
                    initial={{ x: -300 , y: 0, opacity: -1}}
                    whileInView={{ x: 0 , y: 0, opacity: 1}}
                    transition={{ duration: 1, delay: 0, bounce: 0.5, type: "spring",}}
                    viewport={{ once: true }}
                    onClick = {() => setOpen(!open)}
                    whileHover={{
                        scale: 1.0,
                        x:10,
                        y:10,
                        transition: { duration: 0.1, ease:"linear"},}}
                    className=" p-4 bg-yellow drop-shadow-flat text-black border-solid border-black border-4 hover:filter-none mb-8"
                >
                    <div className="text-4xl lg:text-5xl flex flex-row gap-4 border-solid border-black border-b-4 mb-2">
                        <FaRegUser className="mt-1 flex justify-items-center items-center"/>
                        <h1 className="text-4xl lg:text-6xl mb-2 font-bold"> About Me</h1>
                    </div>
                    <div className="text-md lg:text-lg ">
                        Hi! I'm a student developer from Markham, Ontario, and I love building software and working with new technologies. I develop interactive web apps using NextJS and React, 
                        but I'm always eager to work with any exciting technologies that come my way; I'm interested in anything from product design to data analysis. Feel free to explore my page and don't hesitate to contact me - I'd love to talk!
                    </div>
                </motion.div>
                <div className="flex flex-row gap-4">
                   <Icon><FaReact/></Icon>
                   <Icon><TbBrandNextjs/></Icon>
                   <Icon><SiTailwindcss/></Icon>
                </div>

            </div>
            <div className="flex-1 flex flex-row justify-between bg-purple border-solid border-white lg:border-l-4 lg:border-t-0 border-t-4 py-32 px-24">
                <motion.div 
                className=""
                initial={{ x: -300 , y: 0, opacity: -1}}
                whileInView={{ x: 0 , y: 0, opacity: 1}}
                transition={{ duration: 1, delay: 0, bounce: 0.5, type: "spring",}}
                viewport={{ once: true }}
                whileHover={{scale: 1.0, x:10, y:10,transition: { duration: 0.1, ease:"linear"}, }}>
                    <div className="bg-white p-4 border-solid border-black border-4 drop-shadow-flat hover:filter-none ">
                        <div className="relative h-[18vw] w-[12vw]">
                            <Image
                            src={require("@/app/assets/lucas.png")}
                            fill={true}
                            style={{objectFit: "cover"}}
                            alt=""
                            />
                        </div>
                    </div>                     
                </motion.div>
                <div className="flex flex-col gap-[2vw]">
                    <motion.div
                    initial={{ x: -300 , y: 0, opacity: -1}}
                    whileInView={{ x: 0 , y: 0, opacity: 1}}
                    transition={{ duration: 1, delay: 0, bounce: 0.5, type: "spring",}}
                    viewport={{ once: true }} 
                    className=""
                    whileHover={{scale: 1.0, x:10, y:10,transition: { duration: 0.1, ease:"linear"}, }}>
                        <div className="bg-white p-4 border-solid border-black border-4 drop-shadow-flat hover:filter-none ">
                            <div className="relative h-[9vw] w-[18vw]">
                                <Image
                                src={require("/public/nextjs.png")}
                                fill={true}
                                style={{objectFit: "cover"}}
                                alt=""
                                />
                            </div>
                        </div>                     
                    </motion.div>
                    <motion.div 
                    initial={{ x: -300 , y: 0, opacity: -1}}
                    whileInView={{ x: 0 , y: 0, opacity: 1}}
                    transition={{ duration: 1, delay: 0, bounce: 0.5, type: "spring",}}
                    viewport={{ once: true }}
                    className=""
                    whileHover={{scale: 1.0, x:10, y:10,transition: { duration: 0.1, ease:"linear"}, }}>
                        <div className="bg-white p-4 border-solid border-black border-4 drop-shadow-flat hover:filter-none ">
                            <div className="relative h-[9vw] w-[18vw]">
                                <Image
                                src={require("/public/react.png")}
                                fill={true}
                                style={{objectFit: "cover"}}
                                alt=""
                                />
                            </div>
                        </div>                     
                    </motion.div>
                </div>
            </div>

        </div>
    );
}

export default About;