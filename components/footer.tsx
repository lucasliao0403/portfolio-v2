'use client'

import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import {motion} from 'framer-motion'
import BackgroundTexture from './BackgroundTexture';
import { lastUpdated } from '@/app/data';

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
                    src="/quagsire.gif"
                    alt="Quagsire"
                    width={60}
                    height={60}
                />
            </div>
            
            <div className="flex flex-col items-start justify-center">
                <span className="font-bold text-md mb-[-2px]">Lucas Liao</span>
                <span className="font-normal text-sm">lucasliao0403[@]gmail[.]com</span>
                <span className="text-xs opacity-60 ml-0">Version {lastUpdated}</span>
            </div>
            
            
            
        </BackgroundTexture>
    );
}

export default Footer;