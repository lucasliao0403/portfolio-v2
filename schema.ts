export interface Project {
    name: string,
    desc: string,
    img: string,
    github: string,
    link: string,
}

export interface Experience {
    company: string,
    title: string,
    pitch: string, // short description
    desc: string, // long description
    type: string,
    date: string,
    path: string, // for routing
    index: number,
    // add later:
    
    // github: String,
    // link: String,
}