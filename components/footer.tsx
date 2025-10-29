'use client'

import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import {motion} from 'framer-motion'
import BackgroundTexture from './BackgroundTexture';

function Footer(props:any) {
    return (
        <BackgroundTexture
            id="footer"
            className="flex flex-row gap-1 justify-left bg-white py-4 text-black font-mono lg:px-20 px-4"
            scrollSpeedX={0}
            scrollSpeedY={0}
            dotRadius={1}
            dotOpacity={0.1}
        >
            <div>
                <Image
                    src="/quagsire.png"
                    alt="Quagsire"
                    width={80}
                    height={80}
                />
            </div>
            
            <div className="flex flex-col items-start justify-center font-bold text-sm">
                <span className="">Lucas Liao</span>
                <span className="">lucasliao0403[@]gmail[.]com</span>
                <span>2025</span>
            </div>
            
            
            
        </BackgroundTexture>
    );
}

export default Footer;