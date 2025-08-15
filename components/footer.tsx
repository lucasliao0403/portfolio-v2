'use client'

import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import {motion} from 'framer-motion'
import webringLogo from '../app/assets/webring-logo.svg'

function Footer(props:any) {
    return (
        <div id="footer" className="flex flex-row justify-between bg-gradient-to-tr from-gray-800 to-blue-purple py-4 text-white font-mono select-none lg:px-20 px-4">
            <div className=" flex items-center justify-center font-bold text-sm">
                <span className="italic">Lucas Liao.</span> 2025
            </div>
            <Link 
                href="https://se-webring.xyz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
            >
                <Image 
                    src={webringLogo} 
                    alt="SE Webring" 
                    width={24} 
                    height={24}
                    className="filter brightness-0 invert"
                />
                <span className="text-sm pl-2">SE Webring</span>
            </Link>
        </div>
    );
}

export default Footer;