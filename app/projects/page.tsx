'use client'

import React from 'react'
import {useEffect} from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { ProjectList } from '@/app/data';
import { motion } from "framer-motion"
import Navbar from "@/components/navbar";
import Image from 'next/image'



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
        <div className="bg-off-white font-mono">
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
    );
}

function Project(props:any) {
    const project = props.proj
    return (
        <div id={project.path} key={project.path} className="bg-off-white">
            <div  className="text-gray-800">
                {project.index % 2 == 0 &&  
                    <div className="flex flex-row"> 
                        <DescriptionComponent exp={project}/>
                        <ImageComponent exp={project}/>
                    </div>
                }
                {project.index % 2 == 1 && 
                    <div className="flex flex-row"> 
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
        <div className="flex-1 p-8 ">               
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
        <div className="h-[500px] flex-1 bg-cyan drop-shadow-flat">   
            {project.img !== "" &&             
            <div className="relative h-full ">
                <Image
                src={require(`@/app/assets/${project.img}`)}
                fill={true}
                style={{objectFit: "cover"}}
                alt=""
                />
            </div>}
        </div>
    )
}



export default Page;