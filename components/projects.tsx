"use client";

import React from "react";
import Image from "next/image";
import { ProjectList } from "@/app/data";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import BackgroundTexture from "./BackgroundTexture";

function Projects() {
  const router = useRouter();

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    path: string
  ) => {
    e.preventDefault();
    // Navigate to the dynamic route
    router.push(`/projects/${path}`);
  };

  return (
    <BackgroundTexture
      className="bg-orange border-solid border-b-4 border-t-8 border-black select-none"
      scrollSpeedX={0}
      scrollSpeedY={0}
      dotRadius={0.5}
      dotOpacity={0.8}
    >
      <div className="flex justify-center flex-col">
        <h1 className="text-center lg:text-4xl text-2xl font-bold text-white py-8 underline decoration-8 decoration-cyan">
          projects
        </h1>
        {/* project cards */}
        <div className="px-4 md:px-8 lg:px-20 pb-8 gap-4 flex flex-wrap justify-center">
          {ProjectList.map((project) => (
            <ProjectCard
              project={project}
              key={project.path}
              handleClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                handleClick(e, project.path)
              }
            />
          ))}
        </div>
      </div>
    </BackgroundTexture>
  );
}

function ProjectCard(props: any) {
  const project = props.project;
  return (
    <motion.div
      key={project.key}
      className="flex-grow lg:flex-grow-0 lg:basis-[48%] basis-full cursor-pointer border-solid border-4 bg-gray-800 text-white drop-shadow-flat border-transparent hover:border-white hover:filter-none"
      whileHover={{
        x: 5,
        y: 5,
        transition: { duration: 0.1, ease: "linear" },
      }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut", delay: project.key * 0.1 },
      }}
    >
      {/* Image container */}
      <div
        onClick={(e) => props.handleClick(e, project.path)}
        className="relative"
        style={{ aspectRatio: "16 / 9" }}
      >
        <Image
          src={require(`@/app/assets/${project.img}`)}
          fill={true}
          style={{ objectFit: "cover" }}
          alt=""
        />
      </div>

      {/* Card description */}
      <div className="w-full p-2">
        <h2 className="lg:text-2xl text-xl flex flex-row text-left font-bold">
          {project.name}
        </h2>
      </div>
    </motion.div>
  );
}

export default Projects;
