'use client'

import React from 'react'
import {useEffect} from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { ExperienceList } from '@/app/constants';
import { motion } from "framer-motion"
import Navbar from "@/components/navbar";
import Image from 'next/image'



function Page(props:any) {
    const router = useRouter();
    const searchParams = useSearchParams()

    const exp = searchParams.get('exp')

    useEffect(() => {
        if (exp) {
            const element = document.querySelector("#" + exp); // works
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <div className="bg-gray-800">
            <Navbar color="orange"/>
            <div>
                <div className="text-center mb-8 text-5xl font-bold text-white py-8 underline decoration-8 decoration-cyan">Experiences</div>
            </div>
            <div className="mx-32 flex flex-col gap-16">
                {ExperienceList.map((experience) => 
                    <Experience exp={experience}/>
                )}
            </div>
        </div>
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
    return (
        <div className="flex-1 p-8">               
            <div className="flex flex-col mb-8">
                <div className="flex flex-row justify-between">
                    <h1 className="text-5xl font-bold">{experience.company}</h1>
                    
                    <div className=" text-nowrap">
                        <p className="text-right font-bold text-xl">{experience.date}</p>
                        {/* <p className="text-right text-lg">{experience.title}</p> */}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    
                    <p className="text-xl">
                        {experience.title !== "" && experience.title}
                    </p>
                </div>
            </div>
            
        <div>
                <p>
                    {experience.desc}
                </p>
            </div>
        </div>
    )
}

function ImageComponent(props:any) {
    const experience = props.exp
    return (
        <div className="h-[500px] flex-1 bg-cyan drop-shadow-flat">               
            <div className="relative h-full border-solid border-white border-4">
                <Image
                src={require("/public/nameify.png")}
                fill={true}
                style={{objectFit: "cover"}}
                alt=""
                />
            </div>
        </div>
    )
}



export default Page;