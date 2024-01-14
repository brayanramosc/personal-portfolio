export type Tag = {
    name: string,
    icon: React.ReactNode
}

export type Project = {
    title: string,
    description: string,
    demoLink: string,
    githubLink: string,
    image: string,
    tags: Tag[]
}
