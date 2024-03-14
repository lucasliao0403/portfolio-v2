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
    type: string,
    date: string,
    path: string, // for routing
    index: number,
    // add later:
    // desc: String,
    // github: String,
    // link: String,
}