'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { ProjectList } from '@/app/data';
import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import BackgroundTexture from '@/components/BackgroundTexture';

function Page() {
    const { path } = useParams();
    const project = ProjectList.find((p) => p.path === path);

    if (!project) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Project not found.</p>
            </div>
        );
    }

    return (
        <BackgroundTexture
            className="bg-white font-sans text-black min-h-screen"
            scrollSpeedX={0}
            scrollSpeedY={0}
            dotRadius={1}
            dotOpacity={0.1}
        >
            <Navbar />
            <div className="lg:mx-32 mx-4 pb-16 pt-24 lg:pt-16">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-16">
                    <h1 className="font-bold lg:text-6xl text-4xl mb-4 text-black">{project.name}</h1>
                    <p className="italic text-black lg:text-xl text-lg">{project.pitch}</p>

                    {/* Links and Date */}
                    <div className="flex flex-row justify-center items-center gap-2 mt-4 lg:text-3xl text-xl">
                        <span className="text-black text-lg lg:text-xl ml-4">{project.date} —</span>
                        <div className = "flex flex-row gap-1">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:scale-105 text-black">
                                    <FaGithub />
                                </a>
                            )}
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:scale-105 text-black">
                                    <FaExternalLinkAlt />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <motion.div
                    className="relative w-full lg:h-[600px] h-[300px] overflow-hidden mb-16 border-4 border-black"
                    whileHover={{ scale: 1.01, transition: { duration: 0.3, ease: 'easeInOut' } }}
                >
                    <Image
                        src={project.img}
                        fill={true}
                        style={{ objectFit: 'cover' }}
                        alt={`${project.name} screenshot`}
                        priority
                    />
                </motion.div>

                {/* Content Section */}
                <div className="w-full flex flex-col lg:flex-row items-start gap-4 text-black">
                    {/* Tags */}
                    <div className="bg-white border-4 border-black p-6 lg:w-1/3 h-fit">
                        <h2 className="font-bold text-2xl mb-6 text-black border-b-2 border-black pb-2">Tags</h2>
                        <div className="flex flex-wrap gap-3">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="py-2 px-4 bg-white border-2 border-black select-none font-medium text-black hover:bg-black hover:text-white transition-colors"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Overview */}
                    <div
                        className="bg-white border-4 border-black p-6 lg:w-2/3"
                    >
                        <h2 className="font-bold text-2xl mb-6 text-black border-b-2 border-black pb-2">Overview</h2>
                        <p className="text-lg text-black whitespace-pre-line leading-relaxed">{project.desc}</p>
                    </div>
                </div>
            </div>
        </BackgroundTexture>
    );
}

export default Page;
