import { Project, Experience } from "@/schema";

export const ProjectList: Project[] = [
    {
        name: "WhaleBeing",
        img: "whalebeing.png",
        github: "https://github.com/lucasliao0403/nameify",
        link: "https://www.whalebeing.co/",
        path:"whalebeing",
        index: 0,
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
        index: 1,
        date: "July 2023",
        pitch: "AI Generated Playlist Names",
        desc: "Nameify uses Spotify's Audio Features to analyze track properties such as danceability, energy, and valence. The properties are normalized through a percentile distribution and a sigmoid transform, then passed into GPT-3.5 along with the prompt to generate playlist names. \n\nBuilt using React, NextJS, Node, and Express.",
        tags: ["Full-Stack Development", "Data Analysis", "OpenAI API", "Node.js", "Express", "Next.js", "React"],
    }, 
    
]

export const ExperienceList: Experience[] = [
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
        desc: `Slime Scholars is an an EdTech start-up focusing on modernizing education, inspired by game-like elements in Khan Academy and Prodigy. \
I built wireframes of pages in Figma and implemented designs using our MERN stack, and I worked with our product design group to spearhead our classrooms feature.`,
        tags:["Full-Stack Development", "UI Design", "Product Design", "Next.js API", "Node.js", "React", "Tailwind CSS"]
    }, 
    // {
    //     company:"Waterloo Aerial Robotics Group",
    //     title:"Autonomy Team Developer",
    //     img:"appDev.png", 
    //     type:"Extracurricular",
    //     date:"October 2024 - Present",
    //     path:"markvilleAppDev",
    //     index: 2,
    //     pitch: "",
    //     github:"",
    //     link:"",
    //     desc: `Markville Secondary's App/Web Development club is dedicated to fostering a community of students passionate about App Dev. \n\nWith our team, we planned and taught an exemplary personal portfolio website in HTML, leading 50+ members through its step-by-step creation.`,
    //     tags:["Front-End Development", "HTML/CSS", "JavaScript", "React", "Teaching"],
    // }, 
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
        desc: "Platform For Youth Creativity (PYC) is a nonprofit dedicated to promoting teenage arts in Markham, Ontario. \n\nAs our Tech Lead, I built a council website, and I manage event equipment and logistics. In December 2023, we co-hosted Solstice, a semi-formal arts event and hosted over 150 attendees.",
        tags:["Front-End Development", "Next.js", "React"],
    }, 
]