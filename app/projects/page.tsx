'use client'

import React from 'react'
import {useEffect, useState} from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { ProjectList } from '@/app/data';
import { motion } from "framer-motion"
import Navbar from "@/components/navbar";
import Image from 'next/image'
import { Suspense } from "react";


function Page(props:any) {
    const router = useRouter();
    const searchParams = useSearchParams()

    const proj = searchParams.get('target')

    useEffect(() => {
        if (proj) {
            const element = document.querySelector("#i" + proj);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="bg-gradient-to-r from-off-white via-off-white to-gray-100 font-sans">
                <Navbar color="black"/>
                <div>
                    <div className="text-center mb-8 text-5xl font-bold text-black py-8 underline decoration-8 decoration-cyan">Projects</div>
                </div>
                <div className="mx-32 flex flex-col gap-24 pb-8">
                    {ProjectList.map((project) => 
                        <Project proj={project}/>
                    )}
                </div>
            </div>
        </Suspense>
    );
}

function Project(props:any) {
    const project = props.proj
    return (
        <div id={`i${project.index}`} key={project.path} className="bg-off-white">
            <div  className="text-gray-800">
                {project.index % 2 == 0 &&  
                    <div className="flex flex-row gap-8"> 
                        <DescriptionComponent exp={project}/>
                        <ImageComponent exp={project}/>
                    </div>
                }
                {project.index % 2 == 1 && 
                    <div className="flex flex-row gap-8"> 
                        <ImageComponent exp={project}/>
                        <DescriptionComponent exp={project}/>
                    </div>
                }
            </div>
        </div>
    );
}

function DescriptionComponent(props:any) {
    const project = props.exp
    const [hover, setHover] = useState(false)
    return (
        <motion.div 
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        className="flex-1 grid overflow-hidden max-h-[500px] rounded-3xl drop-shadow-black">  
            {hover ?  
                <motion.div
                className="col-start-1 row-start-1 bg-gradient-to-tr from-gray-100 via-cyan to-gray-100 h-[1000px]" 
                animate={{  y:[0, -500, 0]}}
                transition={{ ease: "easeInOut", duration: 4, repeat: Infinity }}/>
                
                :<div className="bg-gradient-to-bl from-gray-100  to-white w-full h-full col-start-1 row-start-1"/>
            }   
            <div className="col-start-1 row-start-1 z-40 p-8">  
                <div className="flex flex-col mb-8">
                    <div className="flex flex-row justify-between">
                        <h1 className="text-5xl font-bold italic">{project.name}</h1>
                        
                        <div className=" text-nowrap">
                            <p className="text-right font-bold text-xl mt-2">{project.date}</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mt-2 text-gray-500 font-bold">
                        <p className="text-2xl italic">
                            {project.pitch !== "" && project.pitch}
                        </p>
                    </div>
                </div>
                
                <div>
                    <p className="text-xl text-black">
                        {project.desc}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

function ImageComponent(props:any) {
    const project = props.exp
    return (
        <motion.div 
        whileHover = {{
            x:10,
            y:10,
            transition: { duration: 0.1, ease:"linear"},
        }}
        initial={{ x: 0 , y: 100, opacity: 1}}
        whileInView={{  opacity: 1, y: 0, 
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.5
        }}}
        
        viewport={{ once: true, margin:"200px" }}
        className="h-[500px] flex-1 bg-cyan drop-shadow-black rounded-3xl overflow-hidden">   
            {project.img !== "" &&             
            <div className="relative h-full ">
                <Image
                src={require(`@/app/assets/${project.img}`)}
                fill={true}
                style={{objectFit: "cover"}}
                alt=""
                />
            </div>}
        </motion.div>
    )
}



export default Page;