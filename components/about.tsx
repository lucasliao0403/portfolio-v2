'use client'

import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
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

function About(props: any) {

    const[open, setOpen] = useState(false)
    console.log(open)

    return (
        <div className="bg-cyan flex flex-row border-solid border-y-4 border-white">
            <div className="flex-1">
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
                    className=" p-4 my-32 mx-24 bg-yellow drop-shadow-flat text-black border-solid border-black border-4 hover:filter-none"
                >
                    <div className="text-5xl flex flex-row gap-4 border-solid border-black border-b-4 mb-2">
                        <FaRegUser className="mt-1 flex justify-items-center items-center"/>
                        <h1 className="text-6xl mb-2 font-bold">About Me </h1>
                    </div>
                    <div className="text-xl">
                        Hi! I'm a student developer from Markham, Ontario, and I love building software and working with new technologies. I specialize in developing interactive web applications using NextJS and React, and I'm always eager to learn. Feel free to explore my page and don't hesitate to contact me - I'd love to talk!
                    </div>
                </motion.div>

            </div>
            <div className="flex-1 bg-purple  border-solid border-white border-l-4">
                <div className="flex flex-row ">
                    <motion.div 
                    className="my-32 mx-24"
                    whileHover={{
                        scale: 1.0,
                        x:10,
                        y:10,
                        
                        transition: { duration: 0.1, ease:"linear"},
                        
                    }}>
                        <Card className="bg-white p-4 border-solid border-black border-4 drop-shadow-flat hover:filter-none">
                            <CardHeader>
                                <div className="relative h-[300px] w-[200px]">
                                    <Image
                                    src={require("/public/figma.png")}
                                    fill={true}
                                    style={{objectFit: "cover"}}
                                    alt=""
                                    />
                                </div>
                            </CardHeader>
                        </Card>                     
                    </motion.div>
                </div>
            </div>

        </div>
    );
}

export default About;