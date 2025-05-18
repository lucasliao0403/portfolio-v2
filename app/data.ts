import { Project, Experience } from "@/schema";

export const ProjectList: Project[] = [
    {
        name: "Overseer",
        img: "overseer.png",
        github: "https://github.com/lucasliao0403/overseer",
        link: "https://devpost.com/software/overseer-vn8fpc",
        path:"overseer",
        index: 0,
        date: "April 2025",
        pitch: "Mitigating bias in hiring by filtering training data for fairness.",
        desc: "Overseer mitigates bias in hiring by pruning over-represented groups in hiring datasets.\n\nData is transformed into text embeddings, then clusters are generated to find over-represented groups, which are pruned so no single demographic dominates the training set.\n\nThis balanced dataset can be fed into downstream ML or LLM pipelines, giving recruiters a fairer signal and reducing gender- or ethnicity-based bias in ML-based hiring. Built with a Flask back-end (Cohere API, Scikit-Learn) and a Next.js/Three.js front-end. Oveerseer won \"Best DEI AI Hack\" at GenAI Genesis 2025.",
        tags: ["Data Processing", "LLM", "Three.js", "Python", "Flask", "React",],
    }, 
    {
        name: "WhaleBeing",
        img: "whalebeing.png",
        github: "https://github.com/lucasliao0403/nameify",
        link: "https://www.whalebeing.co/",
        path:"whalebeing",
        index: 1,
        date: "Jan 2025",
        pitch: "Prediction model for whale-ship collisions.",
        desc: "Won 1st place overall at DeltaHacks 2024. \n\nWhaleBeing uses a dynamic prediction model to display how ship routes interact with blue whale habitats. The core of our model is based off a 2019 UCSD research paper and predicts daily, year-round habitat suitability for blue whales off the coast of California. \n\nBuilt using React, Flask, and Python.",
        tags: ["Machine Learning", "Data Analysis", "Python", "Flask", "React",],
    }, 

    // TODO: add speechassist

    {
        name: "Nameify",
        img: "nameify.png",
        github: "https://github.com/lucasliao0403/nameify",
        link: "https://nameify.vercel.app/",
        path:"nameify",
        index: 2,
        date: "July 2023",
        pitch: "AI Generated Playlist Names",
        desc: "Nameify uses Spotify's Audio Features to analyze track properties such as danceability, energy, and valence. The properties are normalized through a percentile distribution and a sigmoid transform, then passed into GPT-3.5 along with the prompt to generate playlist names. \n\nBuilt using React, NextJS, Node, and Express.",
        tags: ["Full-Stack Development", "LLM","Data Analysis", "OpenAI API", "Node.js", "Express", "Next.js", "React"],
    }, 
    
]

export const ExperienceList: Experience[] = [
    {
        company:"DitchCarbon",
        title:"Software Engineer Intern",
        img:"",
        type:"Internship",
        date:"March 2025 - Present",
        path:"ditchCarbon",
        index: 1,
        pitch: "Automated Scope 3 Emissions Calculations",
        link: "https://ditchcarbon.com/",
        github: "https://github.com/ditchcarbon",
        desc: `Building data pipelines for automated Scope 3 emissions calculations.`,
        tags:["Full-Stack Development", "UI Design", "Product Design", "Next.js API", "Node.js", "React", "Tailwind CSS"]
    }, 
    {
        company:"Slime Scholars",
        title:"Full-Stack Developer",
        img:"slimeScholars.png",
        type:"Internship",
        date:"March 2024 - August 2024",
        path:"slimeScholars",
        index: 1,
        pitch: "EdTech Startup",
        link: "https://www.slimescholars.com",
        github: "https://github.com/SlimeScholars/slime-scholars",
        desc: "Spearheaded the classrooms feature using Next.js, TypeScript, and Node.js/MongoDB, designed Figma wireframes, and improved lesson design.",
        tags:["Full-Stack Development", "UI Design", "Product Design", "Next.js API", "Node.js", "React", "Tailwind CSS"]
    }, 

    {
        company:"Platform For Youth Creativity",
        title:"Tech Lead",
        img:"pyc.png", 
        type:"Extracurricular",
        date:"Aug 2023 - Aug 2024",
        path:"pyc",
        index: 3,
        pitch: "",
        github:"",
        link:"",
        desc: "Platform For Youth Creativity (PYC) is a nonprofit dedicated to promoting teenage arts in Markham, Ontario. As Tech Lead, I built a council website, and I manage event equipment and logistics.",
        tags:["Front-End Development", "Next.js", "React"],
    }, 
]