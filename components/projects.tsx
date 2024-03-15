'use client'

import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'
import Image from 'next/image'
import { ProjectList } from "@/app/data";
import {Project} from '@/schema'
import {useRouter} from 'next/navigation'

function Projects(props: any) {
    // todo: add hover states

    const router = useRouter()
    const handleClick = (e: any, path: String) => {
        e.preventDefault()
        if (path) {router.push(`/projects?target=${path}`)};
        // someting wong
    }
    
    return ( 
        <div className="text-black bg-off-white p-32">
            <div className="">
                <div className="text-6xl font-bold mb-2 underline decoration-blue-purple">
                    Projects
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
        <div key={project.name} className="w-[500px]">
            <div 
            // TODO: PUT SOMEWHERE ELSE --------------------------------------------
            onClick = {(e) => props.handleClick(e, project.path)} 
            className="relative h-[300px] border-solid border-black border-4">
                <Image
                src={require("/public/nameify.png")}
                fill={true}
                style={{objectFit: "cover"}}
                alt=""
                />
            </div>
            <Accordion allowToggle className="w-[500px] border-solid border-black border-2 bg-white">
            <AccordionItem>
                <h2>
                <AccordionButton className="text-4xl bg-white px-1">
                    <Box as="span"  textAlign='left' className="flex flex-row p-1">
                        Nameify
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel className="text-xl border-solid border-black border-t-2 p-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
        </div>
    )
}

export default Projects;