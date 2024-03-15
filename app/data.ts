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
    }, 
    {
        name: "AI Responder",
        pitch: "AI-Powered 911 Responder",
        img: "nameify.png",
        github: "",
        link: "",
        path: "AIResponder",
        index: 1,
        date: "September 2023",
        desc: "An AI-powered 911 responder application and dashboard. Built to optimize slow emergency response times, AI Responder answers first and records crucial data before a human responder is able to intercept and take control of a response. I utilized ChatGPT for text generation and Twilio for call services. \n\nDashboard built using NextJS, and backend built with Node, Express, and Mongoose.",
    },
    
]

 // TODO: ADD TAGS!!!!!! -----------------------------------------------------

export const ExperienceList: Experience[] = [
    {
        company:"Slime Scholars",
        title:"Full Stack Developer",
        type:"Internship",
        date:"Jan 2024 - Present",
        path:"slimeScholars",
        index: 0,
        pitch: "EdTech Startup",
        link: "https://www.slimescholars.com",
        github: "https://github.com/SlimeScholars/slime-scholars",
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
        pitch: "",
        github:"",
        link:"",
        desc: "Markville Secondary's App/Web Development club is dedicated to fostering a community of students passionate about App Dev. \n\nWith our team, we planned and taught an exemplary personal portfolio website in HTML, leading 50+ members through its step-by-step creation.",
        
    }, 
]