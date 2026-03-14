import { Project, Experience } from "@/schema";
import whalebeingImg from "@/app/assets/whalebeing.png";
import overseerImg from "@/app/assets/overseer.png";
import slimeScholarsImg from "@/app/assets/slimeScholars.png";
import pycImg from "@/app/assets/pyc.png";

export const lastUpdated = "2025/11";

export const ProjectList: Project[] = [
    {
        name: "WhaleBeing",
        img: whalebeingImg,
        github: "https://github.com/lucasliao0403/nameify",
        link: "https://www.whalebeing.co/",
        path: "whalebeing",
        index: 0,
        date: "Jan 2025",
        pitch: "Prediction model for whale-ship collisions.",
        desc: "Won 1st place overall at DeltaHacks 2024. \n\nWhaleBeing uses a dynamic prediction model to display how ship routes interact with blue whale habitats. The core of our model is based off a 2019 UCSD research paper and predicts daily, year-round habitat suitability for blue whales off the coast of California. \n\nBuilt using React, Flask, and Python.",
        tags: ["Machine Learning", "Data Analysis", "Python", "Flask", "React",],
    },
    {
        name: "Overseer",
        img: overseerImg,
        github: "https://github.com/lucasliao0403/overseer",
        link: "https://devpost.com/software/overseer-vn8fpc",
        path: "overseer",
        index: 1,
        date: "April 2025",
        pitch: "Mitigating bias in hiring by filtering training data for fairness.",
        desc: "Overseer mitigates bias in hiring by pruning over-represented groups in hiring datasets.\n\nData is transformed into text embeddings, then clusters are generated to find over-represented groups, which are pruned so no single demographic dominates the training set.\n\nThis balanced dataset can be fed into downstream ML or LLM pipelines, giving recruiters a fairer signal and reducing gender- or ethnicity-based bias in ML-based hiring. Built with a Flask back-end (Cohere API, Scikit-Learn) and a Next.js/Three.js front-end. Overseer won \"Best DEI AI Hack\" at GenAI Genesis 2025.",
        tags: ["Data Processing", "LLM", "Three.js", "Python", "Flask", "React",],
    },

]

export const ExperienceList: Experience[] = [
    {
        company: "DitchCarbon",
        title: "Software Engineer Intern",
        img: "",
        type: "Internship",
        date: "March 2025 - Present",
        path: "ditchCarbon",
        index: 1,
        pitch: "Automated Scope 3 Emissions Calculations",
        link: "https://ditchcarbon.com/",
        github: "https://github.com/ditchcarbon",
        desc: `Building data pipelines for automated Scope 3 emissions calculations.`,
        tags: ["Full-Stack Development", "UI Design", "Product Design", "Next.js API", "Node.js", "React", "Tailwind CSS"]
    },
    {
        company: "Slime Scholars",
        title: "Full-Stack Developer Intern",
        img: "slimeScholars.png",
        type: "Internship",
        date: "March 2024 - August 2024",
        path: "slimeScholars",
        index: 1,
        pitch: "EdTech Startup",
        link: "https://www.slimescholars.com",
        github: "https://github.com/SlimeScholars/slime-scholars",
        desc: "Spearheaded the classrooms feature using Next.js, TypeScript, and Node.js/MongoDB, designed Figma wireframes, and did lots of product design.",
        tags: ["Full-Stack Development", "UI Design", "Product Design", "Next.js API", "Node.js", "React", "Tailwind CSS"]
    },

    {
        company: "Platform For Youth Creativity",
        title: "Tech Lead",
        img: "pyc.png",
        type: "Non-Profit",
        date: "Aug 2023 - Aug 2024",
        path: "pyc",
        index: 3,
        pitch: "",
        github: "",
        link: "",
        desc: "Platform For Youth Creativity (PYC) is a nonprofit dedicated to promoting teenage arts in Markham, Canada. I managed event equipment and logistics, built a council website, and planned events.",
        tags: ["Front-End Development", "Next.js", "React"],
    },
]