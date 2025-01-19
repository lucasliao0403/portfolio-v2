'use client'

import React from 'react'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams, useParams } from 'next/navigation'
import { ProjectList } from '@/app/data';
import { motion } from "framer-motion"
import Navbar from "@/components/navbar";
import Image from 'next/image'
import { Suspense } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Project } from '@/schema';

function Page(props:any) {
    const router = useRouter();
    const { path } = useParams();
    const [project, setProject] = useState<Project | undefined>(undefined);
    console.log(project)

    useEffect(() => {
        if (path) {
            setProject(ProjectList.find((project) => project.path == path))
        }
    }, [path]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="bg-gradient-to-r from-off-white via-off-white to-gray-100 font-sans">
                <Navbar color="black"/>
                <div className="lg:mx-32 mx-4 flex flex-col gap-24 pb-8 pt-24 lg:pt-0">
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
        <div id={`i${project.index}`} key={project.path} className="bg-gray-100 rounded-3xl drop-shadow-black ">
            <div className="text-gray-800 hidden lg:block">
                {project.index % 2 == 0 &&  
                    <div className="flex lg:flex-row flex-col gap-8"> 
                        <ImageComponent exp={project}/>
                        <DescriptionComponent exp={project}/>
                    </div>
                }
                {project.index % 2 == 1 && 
                    <div className="flex lg:flex-row flex-col gap-8"> 
                        <DescriptionComponent exp={project}/>
                        <ImageComponent exp={project}/>
                    </div>
                }
            </div>

            {/* mobile view */}
            <div className="text-gray-800 lg:hidden">
                    <div className="flex lg:flex-row flex-col gap-8"> 
                        <DescriptionComponent exp={project}/>
                        <div className="">
                            <div className="block relative h-[300px] rounded-md">
                                    <Image
                                    src={require(`@/app/assets/${project.img}`)}
                                    fill={true}
                                    style={{objectFit: "cover"}}
                                    alt=""
                                    className="drop-shadow-black rounded-3xl"
                                    />
                            </div>
                        </div>
                    </div>
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
        className="flex-1 grid overflow-hidden rounded-3xl">  
            <div className="col-start-1 row-start-1 z-40 p-8">  
                <div className="flex flex-col lg:mb-8 mb-2">
                    <div className="flex flex-row items-start justify-between">
                        <div className="flex flex-row gap-0">
                            <h1 className="font-bold lg:text-3xl text-xl">{project.name} </h1>
                            {project.github !== "" && 
                                <motion.div whileHover = {{y:-5, transition: { duration: 0.1, ease:"linear"}}}>
                                    <Link className="lg:text-4xl text-xl" href={project.github}><FaGithub/></Link>
                                </motion.div>
                            }
                            
                        </div>
                        
                        <div className="h-full flex flex-row text-3xl justify-center gap-4">
                            {project.link !== "" && 
                                <motion.div whileHover = {{y:-5, transition: { duration: 0.1, ease:"linear"}}}>
                                    <Link href={project.link}><FaExternalLinkAlt/></Link>
                                </motion.div>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col justify-center lg:mt-2 text-gray-500 font-bold">
                        <p className="lg:text-lg text-sm italic">
                            {project.pitch !== "" && project.pitch}
                        </p>
                    </div>
                    <div className="flex flex-row flex-wrap gap-2 mt-2">
                    {project.tags.map((tag: String) => (
                        <div key={"key:" + tag} className="lg:text-sm text-xs py-1 px-3 bg-gray-200 rounded-full hover:bg-gray-300 select-none font-bold">
                            <p>{tag}</p>
                        </div>
                    ))}
                    </div>
                </div>
                
                <div>
                    <p className="lg:text-lg text-sm text-black">
                        {project.desc}
                    </p>
                </div>
                
            </div>
        </motion.div>
    )
}

function ImageComponent(props:any) {
    const project = props.exp
    if(project.img === "") {
        console.log("image not found")
    }
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
        
        viewport={{ once: true, margin:"" }}
        className=" flex-1 bg-cyan drop-shadow-black rounded-3xl overflow-hidden">   
            {project.img !== "" &&             
            <div className="block relative h-[500px]">
                <div className="lg:h-[600px]">
                <Image
                src={require(`@/app/assets/${project.img}`)}
                fill={true}
                style={{objectFit: "cover"}}
                alt=""
                />
                </div>
            </div>
            }
            
        </motion.div>
    )
}



export default Page;