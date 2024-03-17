'use client'

import React from 'react'
import {useEffect} from 'react'
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
            const element = document.querySelector("#" + proj);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="bg-gradient-to-r from-off-white via-off-white to-gray-100 font-mono">
                <Navbar color="black"/>
                <div>
                    <div className="text-center mb-8 text-5xl font-bold text-black py-8 underline decoration-8 decoration-cyan">Projects</div>
                </div>
                <div className="mx-32 flex flex-col gap-16 pb-8">
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
        <div id={project.path} key={project.path} className="bg-off-white">
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
    return (
        <div className="bg-gradient-to-t from-gray-100 via-cyan to-gray-100 flex-1 p-8 bg-white border-solid border-2 border-gray-800">               
            <div className="flex flex-col mb-8">
                <div className="flex flex-row justify-between">
                    <h1 className="text-5xl font-bold">{project.name}</h1>
                    
                    <div className=" text-nowrap">
                        <p className="text-right font-bold text-xl mt-2">{project.date}</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    
                    <p className="text-2xl">
                        {project.pitch !== "" && project.pitch}
                    </p>
                </div>
            </div>
            
        <div>
                <p className="text-xl">
                    {project.desc}
                </p>
            </div>
        </div>
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
        initial={{ x: 0 , y: 300, opacity: 1}}
        whileInView={{  opacity: 1, y: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.5
        }}}
        className="h-[500px] flex-1 bg-cyan drop-shadow-flat border-solid border-4 border-cyan hover:filter-none">   
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