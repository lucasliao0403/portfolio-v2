'use client'

import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import {motion} from 'framer-motion'

function Footer(props:any) {
    return (
        <div id="footer" className="flex flex-row justify-between bg-gradient-to-tr from-gray-800 to-blue-purple py-4 text-white font-mono select-none lg:px-20 px-4">
            <div className=" flex items-center justify-center font-bold text-sm">
                <span className="italic">Lucas Liao.</span> 2024
            </div>
            
        </div>
    );
}

export default Footer;