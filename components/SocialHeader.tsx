'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { AiFillMail } from "react-icons/ai";
import { FaLinkedin, FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";

export default function SocialHeader() {
    const { scrollYProgress } = useScroll();
    const backgroundX = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '150%']);

    const iconHoverAnimation = {
    y: -5,
    transition: { duration: 0.1, ease: "linear" },
    };

    return (
    <div className="fixed top-3 left-0 right-0 z-50">
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
          <motion.div
            className="flex gap-2 px-4 py-2 bg-white border-4 border-black rounded-full relative overflow-hidden"
            style={{
              backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.15) 1px, transparent 1px)`,
              backgroundSize: '10px 10px',
              backgroundPositionX: backgroundX,
              backgroundPositionY: backgroundY
            }}
          >
            <motion.div whileHover={iconHoverAnimation} whileTap={{ scale: 0.9 }}>
              <Link href="https://github.com/lucasliao0403" className="text-2xl hover:opacity-80 transition-opacity">
                <FaSquareGithub className="text-black" />
              </Link>
            </motion.div>
            <motion.div whileHover={iconHoverAnimation} whileTap={{ scale: 0.9 }}>
              <Link href="https://www.linkedin.com/in/lucas-liao-570a19278/" className="text-2xl hover:opacity-80 transition-opacity">
                <FaLinkedin className="text-black" />
              </Link>
            </motion.div>
            <motion.div whileHover={iconHoverAnimation} whileTap={{ scale: 0.9 }}>
              <Link href="https://x.com/liao_lucas" className="text-2xl hover:opacity-80 transition-opacity">
                <FaSquareXTwitter className="text-black" />
              </Link>
            </motion.div>
            <motion.div whileHover={iconHoverAnimation} whileTap={{ scale: 0.9 }}>
              <Link href="mailto:lucasliao0403@gmail.com" className="text-2xl hover:opacity-80 transition-opacity">
                <AiFillMail className="text-black" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
