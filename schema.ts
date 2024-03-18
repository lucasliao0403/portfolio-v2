export interface Project {
    name: string,
    desc: string,
    img: string,
    github: string,
    link: string,
    date: string,
    index: number,
    path: string, // for routing
    pitch: string,
    tags: string[],
}

export interface Experience {
    company: string,
    img: string,
    title: string, // job title
    pitch: string, // short description: NOT NECESSARY - REMOVE?
    desc: string, // long description
    type: string, 
    date: string,
    path: string, // for routing
    index: number,
    // add later
    github: any,
    link: any,
    tags: string[],
}