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
            className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 font-sans text-black min-h-screen"
            scrollSpeedX={0}
            scrollSpeedY={0}
            dotRadius={1.5}
            dotOpacity={0.08}
        >
            <Navbar color="black" />
            <div className="lg:mx-32 mx-4 pb-16 pt-24 lg:pt-16">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-16">
                    <h1 className="font-bold lg:text-6xl text-4xl mb-4">{project.name}</h1>
                    <p className="italic text-gray-500 lg:text-xl text-lg">{project.pitch}</p>
                    
                    {/* Links and Date */}
                    <div className="flex flex-row justify-center items-center gap-2 mt-4 lg:text-3xl text-xl">
                        <span className="text-gray-600 text-lg lg:text-xl ml-4">{project.date} —</span>
                        <div className = "flex flex-row gap-1">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:scale-105">
                                    <FaGithub />
                                </a>
                            )}
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:scale-105">
                                    <FaExternalLinkAlt />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <motion.div
                    className="relative w-full lg:h-[600px] h-[300px] rounded-xl overflow-hidden drop-shadow-lg mb-16 border-4 border-black"
                    whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: 'easeInOut' } }}
                >
                    <Image
                        src={require(`@/app/assets/${project.img}`)}
                        fill={true}
                        style={{ objectFit: 'cover' }}
                        alt={`${project.name} screenshot`}
                    />
                </motion.div>

                {/* Content Section */}
                <div className="flex flex-col gap-12 text-gray-800">
                    {/* Tags */}
                    <div>
                        <h2 className="font-bold text-2xl mb-4 text-gray-700">Tags</h2>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-sm py-1 px-3 bg-gray-200 rounded-full hover:bg-gray-300 select-none font-medium text-gray-700"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Overview */}
                    <div>
                        <h2 className="font-bold text-2xl mb-4 text-gray-700">Overview</h2>
                        <p className="text-lg text-gray-600 whitespace-pre-line">{project.desc}</p>
                    </div>
                </div>
            </div>
        </BackgroundTexture>
    );
}

export default Page;
