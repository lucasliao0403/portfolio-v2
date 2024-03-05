import React from 'react';
import { FaRegUser } from "react-icons/fa";

function About(props: any) {
    return (
        <div className="bg-cyan p-32 pb-48 flex flex-col">
            
            <div className="text-5xl flex flex-row gap-4">
                <FaRegUser className="mt-1 flex justify-items-center items-center"/>
                <h1 className="text-6xl mb-2">About Me </h1>
            </div>
            <div className="border-solid border-white border-[20px] p-4 text-xl">
                Hi! I'm a student developer from Markham, Ontario, and I love building software and working with new technologies. I specialize in developing interactive web applications using NextJS and React, and I'm always eager to learn. Feel free to explore my page and don't hesitate to contact me - I'd love to talk!
            </div>
        </div>
    );
}

export default About;