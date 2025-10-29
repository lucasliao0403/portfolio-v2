"use client";

import React from "react";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { AiFillMail } from "react-icons/ai";
import { FaLinkedin, FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";
import BackgroundTexture from "@/components/BackgroundTexture";

function Hero(props: any) {
  const [bannerPosition, setBannerPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const blockHoverAnimation = !isMobile
    ? {
        scale: 1.005,
        transition: { duration: 0.1, ease: "linear" },
      }
    : {};

  return (
    <>
      {/* <motion.div 
        className="text-black bg-gradient-to-tr from-rose-200 to-amber-50 lg:h-[100vh] flex flex-col justify-between select-none"
        > */}
      <motion.div className="text-black bg-turquoise min-h-screen flex flex-col justify-between select-none">
        <div className="">
          <Navbar color="black" />

          <div className="w-full flex flex-col justify-center items-center font-mono pt-16 mt-16 lg:pt-0 grow">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className=" flex flex-row justify-center items-center grow pb-16"
            >
              {/* Main container for the two-column layout (text on left, image on right) */}
              <div className="flex flex-col lg:flex-row items-stretch gap-6 px-4 lg:px-24 w-full max-w-screen-xl mx-auto">
                {/* Left Column: Text Blocks */}
                <div className="flex flex-col items-start gap-6 w-full lg:w-1/2">
                  {/* Block 1: Title, Tagline */}
                  <BackgroundTexture
                    className="p-4 bg-yellow drop-shadow-flat border-solid border-black border-4 w-fit"
                    scrollSpeedX={0}
                    scrollSpeedY={0}
                    dotRadius={0.5}
                  >
                    <motion.div
                      whileHover={blockHoverAnimation}
                      style={{ touchAction: "pan-y" }}
                    >
                      <div className="flex flex-col text-2xl lg:text-3xl text-left">
                        <div className="font-bold">
                          Hi, I'm <span className="text-black">Lucas Liao</span>!
                        </div>
                        <div className="text-lg italic">
                          I like building things.
                        </div>
                      </div>
                    </motion.div>
                  </BackgroundTexture>

                  {/* Block 2: Description */}
                  <BackgroundTexture
                    className="p-4 bg-yellow drop-shadow-flat border-solid border-black border-4 w-fit"
                    scrollSpeedX={0}
                    scrollSpeedY={100}
                    dotRadius={0.5}
                  >
                    <motion.div
                      whileHover={blockHoverAnimation}
                      style={{ touchAction: "pan-y" }}
                    >
                      <div className="text-sm lg:text-md">
                        <ul className="space-y-2">
                          <li className="relative pl-6">
                            <span className="absolute left-0 top-1 text-xl font-bold text-black">
                              •
                            </span>
                            I'm a software engineering student at the{" "}
                            <span className="font-bold">
                              University of Waterloo.
                            </span>
                          </li>
                          <li className="relative pl-6">
                            <span className="absolute left-0 top-1 text-xl font-bold text-black">
                              •
                            </span>
                            Incoming SWE at{" "}
                            <Link
                              href="https://windbornesystems.com/"
                              className="font-bold underline decoration-solid hover:decoration-wavy decoration-1 hover:decoration-1"
                              style={{ textDecorationColor: "#000000" }}
                            >
                              Windborne Systems
                            </Link>
                            , where I'll be building AI weather systems and trading platforms.
                          </li>
                          <li className="relative pl-6">
                            <span className="absolute left-0 top-1 text-xl font-bold text-black">
                              •
                            </span>
                            Previously at{" "}
                            <Link
                              href="https://ditchcarbon.com/"
                              className="font-bold underline decoration-solid hover:decoration-wavy decoration-1 hover:decoration-1"
                              style={{ textDecorationColor: "#000000" }}
                            >
                              DitchCarbon
                            </Link>
                            , building AI-native tools and agents to help companies reduce
                            their carbon footprint.
                          </li>
                          <li className="relative pl-6">
                            <span className="absolute left-0 top-1 text-xl font-bold text-black">
                              •
                            </span>

                          </li>
                          <li className="relative pl-6">
                            <span className="absolute left-0 top-1 text-xl font-bold text-black">
                              •
                            </span>
                            Reach out! I like meeting cool people building cool stuff.
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  </BackgroundTexture>
                </div>

                {/* Right Column: Image Block */}
                <motion.div
                  className="bg-yellow drop-shadow-flat border-solid border-black border-4 w-full lg:w-1/2 rounded-md overflow-hidden aspect-square"
                  whileHover={blockHoverAnimation}
                >
                  <div className="relative w-full h-full">
                    <Image
                      className="object-bottom"
                      src={require("@/app/assets/lucas.png")}
                      alt="Lucas Liao"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

function BannerElement({ children }: any) {
  return (
    <motion.div
      className="row-start-1 col-start-1  p-0"
      initial={{ x: -500 }}
      animate={{
        x: [-400, 1800],
      }}
      transition={{
        duration: 10,
        ease: "linear",
        times: [0, 1],
        repeat: Infinity,
        repeatDelay: 0.1,
      }}
    >
      {children}
    </motion.div>
  );
}

export default Hero;
