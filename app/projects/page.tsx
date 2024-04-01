'use client'

import React from 'react'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { ProjectList } from '@/app/data';
import { motion } from "framer-motion"
import Navbar from "@/components/navbar";
import Image from 'next/image'
import { Suspense } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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
                <div className="lg:mx-32 mx-4 flex flex-col gap-24 pb-8 pt-8 lg:pt-0">
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
        <div id={`i${project.index}`} key={project.path} className="bg-white rounded-3xl drop-shadow-black bg-gradient-to-bl from-gray-100  to-white">
            <div  className="text-gray-800">
                {project.index % 2 == 0 &&  
                    <div className="flex lg:flex-row flex-col gap-8"> 
                        <DescriptionComponent exp={project}/>
                        <ImageComponent exp={project}/>
                    </div>
                }
                {project.index % 2 == 1 && 
                    <div className="flex lg:flex-row flex-col gap-8"> 
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
        className="flex-1 grid overflow-hidden max-h-[500px] rounded-3xl">  
            <div className="col-start-1 row-start-1 z-40 p-8">  
                <div className="flex flex-col lg:mb-8 mb-2">
                    <div className="flex flex-row items-start justify-between">
                        <div className="flex flex-row text-5xl gap-0">
                            <h1 className="font-bold italic lg:text-5xl">{project.name} </h1>
                            {project.github !== "" && 
                                <motion.div whileHover = {{y:-5, transition: { duration: 0.1, ease:"linear"}}}>
                                    <Link className="lg:text-5xl text-4xl" href={project.github}><FaGithub/></Link>
                                </motion.div>
                            }
                            
                        </div>
                        
                        <div className="h-full flex flex-row text-4xl justify-center gap-4">
                            {project.link !== "" && 
                                <motion.div whileHover = {{y:-5, transition: { duration: 0.1, ease:"linear"}}}>
                                    <Link href={project.link}><FaExternalLinkAlt/></Link>
                                </motion.div>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col justify-center lg:mt-2 text-gray-500 font-bold">
                        <p className="lg:text-2xl text-md italic">
                            {project.pitch !== "" && project.pitch}
                        </p>
                    </div>
                    <div className="flex flex-row flex-wrap gap-2 mt-2">
                    {project.tags.map((tag: String) => (
                        <div key={"key:" + tag} className="lg:text-lg text-sm py-2 px-4 bg-gray-200 rounded-full hover:bg-gray-300 select-none font-bold">
                            <p>{tag}</p>
                        </div>
                    ))}
                </div>
                </div>
                
                <div>
                    <p className="lg:text-xl text-md text-black">
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
        className=" flex-1 bg-cyan drop-shadow-black rounded-3xl overflow-hidden">   
            {project.img !== "" &&             
            <div className="relative h-full lg:h-[500px] h-[200px]">
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