"use client";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExperienceList } from "@/app/data";
import { Experience } from "@/schema";
import { v4 as uuid } from "uuid";

function Experiences(props: any) {
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);

  return (
    <div className="bg-orange border-solid border-b-4 border-t-4 border-white">
      <div className="flex justify-center flex-col">
        <h1 className="text-center lg:text-4xl text-2xl font-bold text-white py-8 underline decoration-8 decoration-cyan">
          experiences
        </h1>
        <div className=" px-20 pb-8 gap-4 flex flex-col items-center">
          {ExperienceList.map((experience, index) => (
            <ExperienceCard
              exp={experience}
              key={experience.path}
              isOpen={openCardIndex === index}
              onToggle={() =>
                setOpenCardIndex(openCardIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface ExperienceCardProps {
  exp: Experience;
  isOpen: boolean;
  onToggle: () => void;
}

function ExperienceCard({
  exp: experience,
  isOpen,
  onToggle,
}: ExperienceCardProps) {
  const baseClasses =
    "lg:w-[800px] w-[calc(100vw-4rem)] bg-gray-800 text-white font-bold lg:p-4 p-2 lg:px-6 cursor-pointer flex flex-col border-solid border-4";
  const dynamicClasses = isOpen
    ? "border-white filter-none border-b-0"
    : "border-transparent drop-shadow-flat hover:border-white hover:filter-none";

  return (
    <motion.div
      animate={{ x: isOpen ? 10 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformOrigin: "top left" }}
    >
      <motion.div
        className={`${baseClasses} ${dynamicClasses}`}
        onClick={onToggle}
        initial={{ x: 0, y: 300, opacity: 1 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
          },
        }}
        animate={isOpen ? { y: 10, scale: 1 } : { y: 0, scale: 1 }}
        whileHover={
          !isOpen
            ? { x: 10, y: 10, transition: { duration: 0.1, ease: "linear" } }
            : {}
        }
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        viewport={{ once: true, margin: "200px" }}
      >
        <div className="flex flex-col lg:flex-row lg:justify-between text-left lg:text-sm text-xs">
          <h2 className="lg:text-lg text-sm text-left">{experience.company}</h2>
          <h3 className="lg:text-sm text-xs italic lg:font-bold font-normal">
            {experience.type}
          </h3>
        </div>
        <div className="flex justify-between">
          <h2 className="lg:text-sm text-xs text-left">{experience.title}</h2>
          <h3 className="lg:text-sm text-xs font-normal lg:block hidden">
            {experience.date}
          </h3>
        </div>
      </motion.div>
      <AnimatePresence mode="popLayout">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0, scaleX: 1 }}
            animate={{ opacity: 1, scaleY: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ transformOrigin: "top" }}
            className="lg:w-[800px] w-[calc(100vw-4rem)] bg-gray-800 text-white p-4 mb-4 border-solid border-4 border-white"
          >
            <p className="whitespace-pre-line">{experience.desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Experiences;
