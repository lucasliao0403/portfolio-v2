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
        <div id="footer" className="flex flex-row justify-between bg-gradient-to-tr from-gray-800 to-blue-purple py-4 text-white font-mono select-none">
            <div className="ml-20 flex items-center justify-center font-bold text-xl">
                <span className="italic">Lucas Liao.</span> 2024
            </div>
            <div className="flex flex-row text-5xl gap-1 mr-20"> 
                <motion.div whileHover = {{y:-5, transition: { duration: 0.1, ease:"linear"}}}>
                    <Link href = "https://github.com/lucasliao0403"><FaGithub/></Link>
                </motion.div>

                <motion.div whileHover = {{y:-5, transition: { duration: 0.1, ease:"linear"}}}>
                    <Link href = "https://www.linkedin.com/in/lucas-liao-570a19278/"><CiLinkedin/></Link>
                </motion.div>

                <motion.div whileHover = {{y:-5, transition: { duration: 0.1, ease:"linear"}}}>
                    <Link href = "mailto: lucasliao0403@gmail.com"><MdOutlineMailOutline/></Link>
                </motion.div>
            </div>
        </div>
    );
}

export default Footer;