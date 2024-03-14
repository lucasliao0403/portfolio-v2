'use client'
import { useRouter } from 'next/navigation'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react';
import { motion } from "framer-motion"
import { ExperienceList } from '@/app/constants';
import { Experience } from '@/schema';

function Experiences(props: any) {
    const router = useRouter()

    const handleClick = (e: React.ChangeEvent<HTMLInputElement>, path: String) => {
        e.preventDefault()
        router.push(`/experiences?exp=${path}`);
    }
    

    return ( // slime scholars, app dev (with photos)
        <div className="bg-orange">
            <div className="flex justify-center flex-col">
                <div className="text-center text-5xl font-bold text-white py-8 underline decoration-8 decoration-cyan">Experiences</div>
                <div className=" px-20 pb-8 gap-4 flex flex-col items-center">
                    {ExperienceList.map((experience) => 
                        <ExperienceCard 
                        exp={experience}
                        handleClick = {(e: React.ChangeEvent<HTMLInputElement>) => handleClick(e, experience.path)}
                        />
                    )}
                    
                </div>
            </div>
        </div>
    );
}

function ExperienceCard(props:any) {
    const experience = props.exp
    return (
        <motion.div 
            whileHover = {{
                x:10,
                y:10,
                transition: { duration: 0.1, ease:"linear"},
            }}
            onClick = {(e) => props.handleClick(e, experience.path)}
            className="drop-shadow-flat w-[1000px] bg-gray-800 text-white font-bold p-4 cursor-pointer
            flex flex-col border-solid border-4 border-transparent hover:border-white hover:filter-none">
            <div className="flex justify-between">
                <h2 className='text-4xl'> {experience.company} </h2>
                <h3 className='text-xl'> {experience.type} </h3>
            </div>
            <div className="flex justify-between">
                <h2 className='text-xl'> {experience.title} </h2>
                <h3 className='text-xl'> {experience.date} </h3>
            </div>
        </motion.div>
    )
}

export default Experiences;