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
import { ProjectList } from "@/app/constants";


function Projects(props: any) {

    // todo: map each project into an accordion item
    // todo: add hover states
    
    return ( 
        <div className="text-black bg-off-white p-32">
            <div className="">
                <div className="text-6xl font-bold mb-2">
                    Projects
                </div>
                <div className="flex">
                    <div className="w-[800px]">
                        <div className="relative h-[400px] border-solid border-black border-4">
                            <Image
                            src={require("/public/nameify.png")}
                            fill={true}
                            style={{objectFit: "cover"}}
                            alt=""
                            />
                        </div>
                        <Accordion allowToggle className="border-solid border-black border-2 bg-white">
                        <AccordionItem>
                            <h2>
                            <AccordionButton className="text-4xl bg-white px-1">
                                <Box as="span" flex='1' textAlign='left' className="flex flex-row p-1">
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
                </div>
            </div>
        </div>
    );
}

export default Projects;