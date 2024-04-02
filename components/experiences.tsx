'use client'
import { useRouter } from 'next/navigation'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react';
import { motion } from "framer-motion"
import { ExperienceList } from '@/app/data';
import { Experience } from '@/schema';
import { uuid } from 'uuidv4';



function Experiences(props: any) {
    const router = useRouter()
    const handleClick = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        e.preventDefault()
        router.push(`/experiences?target=${index}`);
    }
    
    return ( 
        <div className="bg-orange border-solid border-b-4 border-white">
            <div className="flex justify-center flex-col">
                <h1 className="text-center lg:text-5xl text-3xl font-bold text-white py-8 underline decoration-8 decoration-cyan">Experiences</h1>
                <div className=" px-20 pb-8 gap-4 flex flex-col items-center">
                    {ExperienceList.map((experience) => 
                        <ExperienceCard 
                        exp={experience}
                        key={uuid()}
                        handleClick = {(e: React.ChangeEvent<HTMLInputElement>) => handleClick(e, experience.index)}
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
            viewport={{ once: true, margin:"200px" }}
            whileTap={{ scale:0.97 }}
            initial={{ x: 0 , y: 300, opacity: 1}}
            whileInView={{  opacity: 1, y: 0,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8
                }}}
            onClick = {(e) => props.handleClick(e, experience.path)}
            className="drop-shadow-flat lg:w-[1000px] w-[calc(100vw-4rem)] bg-gray-800 text-white font-bold lg:p-4 cursor-pointer
            flex flex-col border-solid border-4 border-transparent hover:border-white hover:filter-none">
            <div className="flex flex-col lg:flex-row lg:justify-between text-left">
                <h2 className='lg:ml-0 ml-[-0.125rem] lg:text-4xl text-xl text-left'> {experience.company} </h2>
                <h3 className='lg:text-xl text-sm italic font-normal'> {experience.type} </h3>
            </div>
            <div className="flex justify-between">
                <h2 className='lg:text-xl text-sm'> {experience.title} </h2>
                <h3 className='lg:text-xl text-sm'> {experience.date} </h3>
            </div>
        </motion.div>
    )
}

export default Experiences;