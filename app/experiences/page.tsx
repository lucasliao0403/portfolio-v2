'use client'

import React from 'react'
import {useEffect, useState} from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { ExperienceList } from '@/app/data';
import { motion } from "framer-motion"
import Navbar from "@/components/navbar";
import Image from 'next/image'
import { Suspense } from "react";



function Page(props:any) {
    const router = useRouter();
    const searchParams = useSearchParams()

    const exp = searchParams.get('target')

    useEffect(() => {
        if (exp) {
            const element = document.querySelector("#" + exp); // works
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-gradient-to-tr from-gray-800 via-gray-600 to-gray-400 font-sans">
            <Navbar color="orange"/>
            <div>
                <div className="text-center mb-8 text-5xl font-bold text-white py-8 underline decoration-8 decoration-cyan">Experiences</div>
            </div>
            <div className="mx-24 flex flex-col gap-24 pb-8">
                {ExperienceList.map((experience) => 
                    <Experience exp={experience}/>
                )}
            </div>
        </div>
        </Suspense>
    );
}

function Experience(props:any) {
    const experience = props.exp
    return (
        <div id={experience.path} key={experience.path}>
            <div  className=" text-white bg-gray-800">
                {experience.index % 2 == 0 &&  
                    <div className="flex flex-row"> 
                        <DescriptionComponent exp={experience}/>
                        <ImageComponent exp={experience}/>
                    </div>
                }
                {experience.index % 2 == 1 && 
                    <div className="flex flex-row"> 
                        <ImageComponent exp={experience}/>
                        <DescriptionComponent exp={experience}/>
                    </div>
                }
                
            </div>
        </div>
    );
}

function DescriptionComponent(props:any) {
    const experience = props.exp
    const [hover, setHover] = useState(false) // incomplete
    return (
        <motion.div 
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        className="flex-1 p-8 "> 
                   
            <div className="flex flex-col mb-8 col-start-1 row-start-1">
                <div className="flex flex-row justify-between">
                    <h1 className="text-5xl font-bold">{experience.title}</h1>
                    
                    <div className=" text-nowrap">
                        <p className="text-right font-bold text-xl mt-2">{experience.date}</p>
                        {/* <p className="text-right text-lg">{experience.title}</p> */}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    
                    <p className="text-2xl font-bold italic">
                        {experience.company}
                    </p>
                </div>
            </div>
            
            <div>
                <p className="text-xl">
                    {experience.desc}
                </p>
            </div>
        </motion.div>
    )
}

function ImageComponent(props:any) {
    const experience = props.exp
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
        className="h-[500px] flex-1 bg-cyan drop-shadow-flat">       
            {experience.img !== "" && 
                <div className="relative h-full border-solid border-white border-4">
                    <Image
                    src={require(`@/app/assets/${experience.img}`)}
                    fill={true}
                    style={{objectFit: "cover"}}
                    alt=""
                    />
                </div>}
        </motion.div>      
    )
}



export default Page;