'use client'

import React from 'react';
import { motion } from "framer-motion"
import { ExperienceList } from '@/app/constants';

function Experiences(props: any) {
    return ( // slime scholars, app dev (with photos)
        <div className="bg-orange">
            <div className="flex justify-center flex-col">
                <div className="text-center text-5xl font-bold text-white py-8 underline decoration-8 decoration-cyan">Experiences</div>
                <div className=" px-20 pb-8 gap-4 flex flex-col items-center">
                    {ExperienceList.map((experience) => 
                        <Experience 
                        company = {experience.company}
                        title = {experience.title}
                        type = {experience.type}
                        date = {experience.date}
                        />
                    )}
                    
                </div>
            </div>
        </div>
    );
}

function Experience(props:any) {
    return (
        <motion.div 
            // whileHover = {{scale:1.1,}}
            className="w-[1000px] bg-white text-black font-bold p-4 cursor-pointer
            flex flex-col border-solid border-4 border-transparent hover:border-black">
            <div className="flex justify-between">
                <h2 className='text-4xl'> {props.company} </h2>
                <h3 className='text-xl'> {props.type} </h3>
            </div>
            <div className="flex justify-between">
                <h2 className='text-xl'> {props.title} </h2>
                <h3 className='text-xl'> {props.date} </h3>
            </div>
        </motion.div>
    )
}

export default Experiences;