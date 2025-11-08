'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillMail } from "react-icons/ai";
import { FaLinkedin, FaSquareXTwitter, FaSquareGithub, FaFile } from "react-icons/fa6";
import BackgroundTexture from "./BackgroundTexture";

export default function SocialHeader() {
    const iconHoverAnimation = {
    y: -5,
    transition: { duration: 0.1, ease: "linear" },
    };

    const tooltipStyles = `
      .tooltip-wrapper {
        position: relative;
      }
      .tooltip-text {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(4px);
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        white-space: nowrap;
        pointer-events: none;
        transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
        z-index: 100;
      }
      .tooltip-wrapper:hover .tooltip-text {
        visibility: visible;
        opacity: 1;
      }
    `;

    return (
    <div className="fixed top-3 left-0 right-0 z-50 pointer-events-none">
      <style>{tooltipStyles}</style>
      {/* Red scroll bar */}
      {/* <div className="h-1 bg-red-500 w-full"></div> */}

      {/* Links container */}
      <motion.div
        className="bg-transparent"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="flex justify-center">
          <BackgroundTexture
            className="flex gap-2 px-4 py-2 bg-white border-4 border-black rounded-full relative overflow-visible pointer-events-auto"
            scrollSpeedX={50}
            scrollSpeedY={150}
            // dotRadius={1}
            dotOpacity={0}
          >
            <motion.div whileHover={iconHoverAnimation} whileTap={{ scale: 0.9 }} className="tooltip-wrapper">
              <Link href="https://github.com/lucasliao0403" className="text-2xl hover:opacity-80 transition-opacity">
                <FaSquareGithub className="text-black" />
              </Link>
              <span className="tooltip-text">GitHub</span>
            </motion.div>
            <motion.div whileHover={iconHoverAnimation} whileTap={{ scale: 0.9 }} className="tooltip-wrapper">
              <Link href="https://www.linkedin.com/in/lucas-liao-570a19278/" className="text-2xl hover:opacity-80 transition-opacity">
                <FaLinkedin className="text-black" />
              </Link>
              <span className="tooltip-text">LinkedIn</span>
            </motion.div>
            <motion.div whileHover={iconHoverAnimation} whileTap={{ scale: 0.9 }} className="tooltip-wrapper">
              <Link href="https://x.com/liao_lucas" className="text-2xl hover:opacity-80 transition-opacity">
                <FaSquareXTwitter className="text-black" />
              </Link>
              <span className="tooltip-text">X</span>
            </motion.div>
            <motion.div whileHover={iconHoverAnimation} whileTap={{ scale: 0.9 }} className="tooltip-wrapper">
              <Link href="mailto:lucasliao0403@gmail.com" className="text-2xl hover:opacity-80 transition-opacity">
                <AiFillMail className="text-black" />
              </Link>
              <span className="tooltip-text">Email</span>
            </motion.div>
            <motion.div whileHover={iconHoverAnimation} whileTap={{ scale: 0.9 }} className="tooltip-wrapper">
              <Link href="/documents/resume.pdf" target="_blank" className="text-2xl hover:opacity-80 transition-opacity">
                <FaFile className="text-black" />
              </Link>
              <span className="tooltip-text">Resume</span>
            </motion.div>
          </BackgroundTexture>
        </div>
      </motion.div>
    </div>
  );
}
