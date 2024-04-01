'use client'

import React from 'react';
import Image from 'next/image'
import { ProjectList } from "@/app/data";
import {Project} from '@/schema'
import {useRouter} from 'next/navigation'
import {motion} from 'framer-motion'

function Projects(props: any) {

    const router = useRouter()
    const handleClick = (e: any, index: number) => {
        e.preventDefault()
        if (index) {router.push(`/projects?target=${index}`)};
    }
    
    return ( 
        <div className="text-black bg-off-white py-20 px-4 lg:p-32 select-none">
            <div className="">
                <h1 className="lg:text-6xl text-4xl font-bold mb-2 underline decoration-blue-purple">
                    projects
                </h1>
                {/* project cards */}
                <div className="flex lg:flex-row flex-col gap-16 lg:overflow-hidden "> 
                    {ProjectList.map((project) => (
                        <ProjectCard 
                        project={project}
                        handleClick = {(e: React.ChangeEvent<HTMLInputElement>) => handleClick(e, project.index)} // doesn't work
                        />             
                    ))}
                </div>
            </div>
        </div>
    );
}


function ProjectCard(props:any) {
    const project = props.project
    return(
        <motion.div 
        key={project.name} 
        className="lg:w-[50vw] w-full drop-shadow-flat hover:filter-none p-4 cursor-pointer"
        whileHover = {{
            x:10,
            y:10,
            transition: { duration: 0.1, ease:"linear"},
        }}
        viewport={{ once: true, margin:"200px" }}
        whileTap={{ scale:0.97 }}
        initial={{ x: 0 , y: 300, opacity: 1}}
        whileInView={{  opacity: 1, y: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8
            }}}>
            <div 
            onClick = {(e) => props.handleClick(e, project.index)} 
            className="relative lg:h-[300px] h-[200px] border-solid border-black border-4">
                <Image
                src={require(`@/app/assets/${project.img}`)}
                fill={true}
                style={{objectFit: "cover"}}
                alt=""
                />
            </div>
            <div className="lg:w-[500px] border-solid border-black border-4 border-t-0 bg-white ">
                <h2 className="lg:text-4xl text-2xl bg-white flex flex-row p-1 pl-2 text-left">
                    {project.name}
                </h2>
            </div>
        </motion.div>
    )
}

export default Projects;