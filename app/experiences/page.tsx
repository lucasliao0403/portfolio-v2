'use client'

import React from 'react'
import {useEffect, useState} from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { ExperienceList } from '@/app/data';
import { motion } from "framer-motion"
import Navbar from "@/components/navbar";
import Image from 'next/image'
import { Suspense } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion"


function Page(props:any) {
    const router = useRouter();
    const searchParams = useSearchParams()
    const [hydrated, setHydrated] = useState(false);
    const [hookedYPos, setHookedYPos] = useState(0);
    const [prevYPos, setPrevYPos] = useState(0);
    const [scrollIndex, setScrollIndex] = useState(0);

    const exp = searchParams.get('target')

    useEffect(() => {
        if (exp) {
            const element = document.querySelector("#i" + exp); 
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-gradient-to-tr from-gray-950 via-gray-950 to-gray-700 font-sans">
            <Navbar color="orange"/>
            {/* <div>
                <div className="text-center mb-8 text-5xl font-bold text-white py-8 underline decoration-8 decoration-cyan">Experiences</div>
            </div> */}
            <div className="lg:mx-24 lg:text-md text-sm flex flex-col gap-24 pb-8 pt-8 lg:pt-8">
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
        <div id={`i${experience.index}`} key={experience.path}>
            <div  className="text-white">
                {experience.index % 2 == 1 &&  
                    <div className="flex flex-col lg:flex-row lg:gap-4"> 
                        <DescriptionComponent exp={experience}/>
                        <ImageComponent exp={experience}/>
                    </div>
                }
                {experience.index % 2 == 0 && 
                    <div className="flex flex-col lg:flex-row lg:gap-4"> 
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
                   
            <div className="flex flex-col mb-8 col-start-1 row-start-1 ">
                <div className="flex flex-row justify-between">
                    <h1 className="lg:text-4xl font-bold">{experience.title}</h1>
                    
                    <div className=" text-nowrap">
                        <p className="text-right font-bold lg:text-xl mt-2">{experience.date}</p>
                        {/* <p className="text-right text-lg">{experience.title}</p> */}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <p className="lg:text-xl text-lg font-bold italic text-gray-100">
                        {experience.company}
                    </p>
                </div>
                <div className="flex flex-row flex-wrap gap-2 mt-2">
                    {experience.tags.map((tag: String) => (
                        <div key={"key:" + tag} className="py-2 px-4 bg-gray-800 rounded-full hover:bg-gray-600 select-none">
                            <p>{tag}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div>
                <p className="lg:text-xl">
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
        initial={{ x: 0 , y: 100, opacity: 1}}
        whileInView={{  opacity: 1, y: 0,
            transition: {
            type: "spring",
            bounce: 0.6,
            duration: 0.5
        }}}
        viewport={{ once: true, margin:"100px"}}
        className="lg:mx-0 mx-8 bg-cyan drop-shadow-white rounded-3xl overflow-hidden flex-1">       
            {experience.img !== "" && 
                <div className="relative lg:h-[500px] h-[200px]">
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