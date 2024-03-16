import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function Footer(props:any) {
    return (
        <div id="footer" className="flex flex-row justify-between bg-blue-purple py-4 text-white font-mono select-none">
            <div className="ml-20 flex items-center justify-center font-bold text-xl">
                <span className="italic">Lucas Liao.</span> 2023
            </div>
            <div className="flex flex-row text-5xl gap-1 mr-20"> 
                <Link href = "https://github.com/lucasliao0403"><FaGithub/></Link>
                <Link href = "https://www.linkedin.com/in/lucas-liao-570a19278/"><CiLinkedin/></Link>
                <Link href = "mailto: lucasliao0403@gmail.com"><MdOutlineMailOutline/></Link>
            </div>
        </div>
    );
}

export default Footer;