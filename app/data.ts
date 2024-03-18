import { Project, Experience } from "@/schema";

export const ProjectList: Project[] = [
    {
        name: "Nameify",
        img: "nameify.png",
        github: "https://github.com/lucasliao0403/nameify",
        link: "https://nameify.vercel.app/",
        path:"nameify",
        index: 0,
        date: "July 2023",
        pitch: "AI Generated Playlist Names",
        desc: "Nameify uses Spotify's Audio Features to analyze track properties such as danceability, energy, and valence. The properties are normalized through a percentile distribution and a sigmoid transform, then passed into GPT-3.5 along with the prompt to generate playlist names. \n\nBuilt using React, NextJS, Node, and Express.",
        tags: ["Full-Stack Development", "Data Analysis", "ChatGPT", "Node.js", "Express", "Next.js", "React"],
    }, 
    {
        name: "AI Responder",
        pitch: "AI-Powered 911 Responder",
        img: "airesponder.png",
        github: "https://github.com/lucasliao0403/ai-responder/tree/master/pages",
        link: "",
        path: "AIResponder",
        index: 1,
        date: "September 2023",
        desc: "An AI-powered 911 responder application and dashboard. Built to optimize slow emergency response times, AI Responder answers first and records crucial data before a human responder is able to intercept and take control of a response. I utilized ChatGPT for text generation and Twilio for call services. \n\nDashboard built using NextJS, and backend built with Node, Express, and Mongoose.",
        tags: ["Full-Stack Development", "Twilio", "ChatGPT", "MongoDB", "Node.js", "Next.js", "React"],
    },
    
]

 // TODO: ADD TAGS!!!!!! -----------------------------------------------------

export const ExperienceList: Experience[] = [
    {
        company:"Slime Scholars",
        title:"Full Stack Developer",
        img:"slimeScholars.png",
        type:"Internship",
        date:"Jan 2024 - Present",
        path:"slimeScholars",
        index: 0,
        pitch: "EdTech Startup",
        link: "https://www.slimescholars.com",
        github: "https://github.com/SlimeScholars/slime-scholars",
        desc: "Slime Scholars is an an EdTech start-up focusing on modernizing education, inspired by game-like elements in Khan Academy and Prodigy. \n\n ● Optimized Next.js image loading, decreasing load times by 120%. \n ● Designed home and gacha page UI in Figma. \n ● Implemented designs in frontend using React, NextJS, and Tailwind. \n ● Produced background music for Forest, Plains and Neon City themes.",
        // add on: spearheaded classrooms feature ...
        tags:["Full-Stack Development", "UI Design", "Product Design", "Next.js API", "Node.js", "React", "Tailwind CSS"]
    }, 
    {
        company:"Markville App Dev. Club",
        title:"Co-President",
        img:"", // TODO
        type:"Extracurricular",
        date:"Sept 2023 - Present",
        path:"markvilleAppDev",
        index: 1,
        pitch: "",
        github:"",
        link:"",
        desc: "Markville Secondary's App/Web Development club is dedicated to fostering a community of students passionate about App Dev. \n\nWith our team, we planned and taught an exemplary personal portfolio website in HTML, leading 50+ members through its step-by-step creation.",
        tags:["Front-End Development", "HTML/CSS", "JavaScript", "React", "Teaching"],
    }, 
    {
        company:"Platform For Youth Creativity",
        title:"Tech Lead",
        img:"pyc.png", 
        type:"Extracurricular",
        date:"Aug 2023 - Present",
        path:"pyc",
        index: 2,
        pitch: "",
        github:"",
        link:"",
        desc: "Platform For Youth Creativity (PYC) is a nonprofit dedicated to promoting teenage arts in Markham, Ontario. \n\nAs our Tech Lead, I built a council website, and I manage event equipment and logistics. In December 2023, we co-hosted Solstice, a semi-formal arts event and hosted over 150 attendees.",
        tags:["Front-End Development", "Next.js", "React"],
    }, 
]