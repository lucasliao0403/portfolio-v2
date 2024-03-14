'use client'

import React from 'react'
import {useEffect} from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { ExperienceList } from '@/app/constants';
import { motion } from "framer-motion"


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
        <div className="bg-orange">
            <div>
                <div className="text-center text-5xl font-bold text-white py-8 underline decoration-8 decoration-cyan">Experiences</div>
            </div>
            <div className="flex flex-col gap-4">
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
        <div id={experience.path}>
            <div  className="m-12 h-[60vh] text-white bg-gray-800">
                <h1 className="text-4xl font-bold">{experience.company}</h1>
            </div>
        </div>
    );
}


export default Page;