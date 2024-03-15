import { Project, Experience } from "@/schema";

export const ProjectList: Project[] = [
    {
        name: "Nameify",
        desc: "AI Generated Playlist Names",
        img: "nameify.png",
        github: "https://github.com/lucasliao0403/nameify",
        link: "https://nameify.vercel.app/",
        path:"nameify",
        index: 0,
        date: "July 2023",
        pitch: "",
    }, 
    {
        name: "AI Responder",
        desc: "responder",
        img: "nameify.png",
        github: "https://github.com/lucasliao0403/nameify",
        link: "https://nameify.vercel.app/",
        path: "AIResponder",
        index: 1,
        date: "September 2023",
        pitch: "",
    },
    
]

export const ExperienceList: Experience[] = [
    {
        company:"Slime Scholars",
        title:"Full Stack Developer",
        type:"Internship",
        date:"Jan 2024 - Present",
        path:"slimeScholars",
        index: 0,
        pitch: "EdTech Startup",
        desc: "Slime Scholars is an an EdTech start-up focusing on modernizing education, inspired by game-like elements in Khan Academy and Prodigy. \n\n ● Optimized Next.js image loading, decreasing load times by 120%. \n ● Designed home and gacha page UI in Figma. \n ● Implemented designs in frontend using React, NextJS, and Tailwind. \n ● Produced background music for Forest, Plains and Neon City themes.",
        // add on: spearheaded classrooms feature ...
    }, 

    {
        company:"Markville App Dev. Club",
        title:"Co-President",
        type:"Extracurricular",
        date:"Sept 2023 - Present",
        path:"markvilleAppDev",
        index: 1,
        desc: "Markville Secondary's App/Web Development club is dedicated to fostering a community of students passionate about App Dev. \n\nWith our team, we planned and taught an exemplary personal portfolio website in HTML, leading 50+ members through its step-by-step creation.",
        pitch: "",
    }, 
]