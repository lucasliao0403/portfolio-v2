'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { ExperienceList } from '@/app/data';
import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import Image from 'next/image';

function Page() {
    const { path } = useParams(); // Get the dynamic URL parameter
    const [experience, setExperience] = useState<typeof ExperienceList[0] | undefined>(undefined);

    useEffect(() => {
        if (path) {
            const foundExperience = ExperienceList.find((exp) => exp.path === path);
            setExperience(foundExperience);
        }
    }, [path]);

    if (!experience) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-tr from-gray-900 via-gray-950 to-gray-800 font-mono text-white min-h-screen">
            <Navbar color="orange" />
            <div className="lg:mx-32 mx-4 pb-16 pt-16">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-16">
                    <h1 className="font-bold lg:text-6xl text-4xl mb-4">{experience.title}</h1>
                    <p className="italic text-orange-400 lg:text-xl text-lg">{experience.company}</p>
                    <p className="text-gray-300 text-md lg:text-lg">{experience.date}</p>
                </div>

                {/* Image Section */}
                <motion.div
                    className="relative w-full lg:h-[500px] h-[300px] rounded-xl overflow-hidden drop-shadow-lg mb-16"
                    whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: 'easeInOut' } }}
                >
                    {experience.img && (
                        <Image
                            src={require(`@/app/assets/${experience.img}`)}
                            fill
                            style={{ objectFit: 'cover' }}
                            alt={`${experience.company} image`}
                        />
                    )}
                </motion.div>

                {/* Content Section */}
                <div className="flex flex-col gap-12 text-gray-300">
                    {/* Tags */}
                    <div>
                        <h2 className="font-bold text-2xl mb-4 text-gray-100">Tags</h2>
                        <div className="flex flex-wrap gap-2">
                            {experience.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-sm py-1 px-3 bg-orange-500 text-white rounded-full hover:bg-orange-400 select-none font-semibold"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <h2 className="font-bold text-2xl mb-4 text-gray-100">Overview</h2>
                        <p className="text-lg whitespace-pre-line">{experience.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
