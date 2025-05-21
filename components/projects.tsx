"use client";

import React from "react";
import Image from "next/image";
import { ProjectList } from "@/app/data";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

function Projects() {
  const router = useRouter();

  const handleClick = (
    e: React.ChangeEvent<HTMLInputElement>,
    path: string
  ) => {
    e.preventDefault();
    // Navigate to the dynamic route
    router.push(`/projects/${path}`);
  };

  return (
    <div className="text-black bg-off-white py-20 px-4 lg:p-32 select-none">
      <div>
        <h1 className="lg:text-5xl text-3xl font-bold mb-2 underline decoration-blue-purple">
          projects
        </h1>
        {/* project cards */}
        <div className="flex flex-wrap gap-4 justify-center">
          {ProjectList.map((project) => (
            <ProjectCard
              project={project}
              key={project.path}
              handleClick={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleClick(e, project.path)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard(props: any) {
  const project = props.project;
  return (
    <motion.div
      key={project.key}
      className="flex-grow lg:flex-grow-0 lg:basis-[48%] basis-full p-4 cursor-pointer"
      whileHover={{
        x: 10,
        y: 10,
        transition: { duration: 0.1, ease: "linear" },
      }}
      viewport={{ once: true, margin: "200px" }}
      whileTap={{ scale: 0.97 }}
      initial={{ x: 0, y: 300, opacity: 1 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { type: "spring", bounce: 0.4, duration: 0.8 },
      }}
    >
      {/* Image container */}
      <div
        onClick={(e) => props.handleClick(e, project.index)}
        className="relative border-solid border-black border-4"
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
      <div className="w-full border-solid border-black border-4 border-t-0 bg-white">
        <h2 className="lg:text-2xl text-xl bg-white flex flex-row p-1 pl-2 text-left font-bold">
          {project.name}
        </h2>
      </div>
    </motion.div>
  );
}

export default Projects;
