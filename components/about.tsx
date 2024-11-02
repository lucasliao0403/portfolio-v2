'use client'

import React from 'react';
import Link from 'next/link'
import { FaRegUser, FaReact, FaPython } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { DiMongodb } from "react-icons/di";


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


function Icon(props:any) {
    // console.log(props)
    return (
        <motion.div 
        initial={{ y: "10vh"}} whileInView={{ x: 0 , y: 0}} transition={{ duration: 1, delay: 0, bounce: 0.5, type: "spring",}} viewport={{ once: true }} whileHover={{scale: 1.0, x:10, y:10, transition: { duration: 0.1, ease:"linear"},}}
        className=" p-1 bg-yellow drop-shadow-flat text-black border-solid border-black border-4 hover:filter-none text-5xl ">
            <Link href={props.link} className="">
            {props.children}
            </Link>
        </motion.div>
    )
}
function About(props: any) {
    const[open, setOpen] = useState(false)

    return (
        <div className="bg-turquoise flex flex-col border-solid border-y-4 border-white ">
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
                    <div className="text-2xl lg:text-4xl flex flex-row gap-0 border-solid border-black border-b-4 mb-2 ">
                        <FaRegUser className="mt-1 flex justify-items-center items-center"/>
                        <h1 className="text-3xl lg:text-5xl mb-2 font-bold text-nowrap text-left"> About Me</h1>
                    </div>
                    <div className="text-md lg:text-md ">
                        Hi! I'm a student at the 
                        <span className="font-bold"> University of Waterloo</span>
                        , and I love building software and working with new tech.  
                        <br/>Most recently, I worked with 
                        <span className="font-bold"> Slime Scholars, an upcoming EdTech startup</span>
                        , where I did 
                        <span className="font-bold"> full-stack development</span>
                        , 
                        <span className="font-bold"> UI design </span>
                        and
                        <span className="font-bold"> product design.</span>
                        <br/><br/>
                        On the side, I play 
                        <span className="font-bold"> varsity ultimate frisbee</span>, and I'm a
                        <span className="font-bold"> huge music nerd!</span>
                    </div>
                </motion.div>
                <div className="flex flex-row gap-4">
                   <Icon link={"https://react.dev/"}><FaReact/></Icon>
                   <Icon link={"https://nextjs.org/"}><TbBrandNextjs/></Icon>
                   <Icon link={"https://www.mongodb.com/"}><DiMongodb/></Icon>
                   <Icon link={"https://www.python.org/"}><FaPython/></Icon>
                   <Icon link={"https://tailwindcss.com/"}><SiTailwindcss/></Icon>

                </div>

            </div>
            <div className="flex-1 flex flex-row justify-between bg-indigo border-solid border-white border-t-4 py-32 px-24">
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
            </div>
        </div>
        
    );
}

export default About;