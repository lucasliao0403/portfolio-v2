'use client'

import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import Image from 'next/image'
import { motion } from "framer-motion"

function About(props: any) {
    return (
        <div className="bg-cyan flex flex-row border-solid border-b-4 border-white">
            <div className="flex-1 py-32 px-24">
                <div className="text-5xl flex flex-row gap-4">
                    <FaRegUser className="mt-1 flex justify-items-center items-center"/>
                    <h1 className="text-6xl mb-2">About Me </h1>
                </div>
                <div className="border-solid border-white border-[10px] p-4 text-xl">
                    Hi! I'm a student developer from Markham, Ontario, and I love building software and working with new technologies. I specialize in developing interactive web applications using NextJS and React, and I'm always eager to learn. Feel free to explore my page and don't hesitate to contact me - I'd love to talk!
                </div>
            </div>
            <div className="flex-1 bg-purple py-32 px-24">
                <div className="flex flex-row">
                    <motion.div 
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