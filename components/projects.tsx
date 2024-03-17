'use client'

import React from 'react';
import Image from 'next/image'
import { ProjectList } from "@/app/data";
import {Project} from '@/schema'
import {useRouter} from 'next/navigation'
import {motion} from 'framer-motion'

function Projects(props: any) {
    // todo: add hover states

    const router = useRouter()
    const handleClick = (e: any, path: String) => {
        e.preventDefault()
        if (path) {router.push(`/projects?target=${path}`)};
        // someting wong
    }
    
    return ( 
        <div className="text-black bg-off-white p-32 select-none">
            <div className="">
                <div className="text-6xl font-bold mb-2 underline decoration-blue-purple">
                    projects
                </div>
                <div className="flex gap-16 overflow-x-scroll"> {/* project card */}
                    {ProjectList.map((project) => (
                        <ProjectCard 
                        project={project}
                        handleClick = {(e: React.ChangeEvent<HTMLInputElement>) => handleClick(e, project.path)}
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
        className="w-[50vw] drop-shadow-flat hover:filter-none p-4 cursor-pointer"
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
            onClick = {(e) => props.handleClick(e, project.path)} 
            className="relative h-[300px] border-solid border-black border-4">
                <Image
                src={require(`@/app/assets/${project.img}`)}
                fill={true}
                style={{objectFit: "cover"}}
                alt=""
                />
            </div>
            <div className="w-[500px] border-solid border-black border-4 border-t-0 bg-white">
                <div className="text-4xl bg-white flex flex-row p-1 text-left">
                    {project.name}
                </div>
            </div>
        </motion.div>
    )
}

export default Projects;