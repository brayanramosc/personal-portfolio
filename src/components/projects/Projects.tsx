import { SiRedux, SiTypescript, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

import { Project, Tag } from "./types";
import ProjectCard from "./ProjectCard";

const TAGS: { [key: string]: Tag } = {
    'react': { name: 'React', icon: <FaReact size={20} /> },
    'typescript': { name: 'Typescript', icon: <SiTypescript size={20} /> },
    'tailwind': { name: 'Tailwind', icon: <SiTailwindcss size={20} /> },
    'next': { name: 'NextJS', icon: <TbBrandNextjs size={20} /> },
    'redux': { name: 'Redux', icon: <SiRedux size={20} /> },
}

const Projects = () => {
    const { t } = useTranslation();

    const projects: Project[] = [
        {
            title: t('projectTitle5'),
            description: t('projectDescription5'),
            demoLink: 'https://pypconstruccioneseingenieria.com.co',
            githubLink: '',
            image: '/projects/p&p.webp',
            tags: [TAGS.react, TAGS.typescript, TAGS.tailwind]
        },
        {
            title: t('projectTitle4'),
            description: t('projectDescription4'),
            demoLink: 'https://share-prompts-ten-orpin.vercel.app',
            githubLink: 'https://github.com/brayanramosc/share_prompts',
            image: '/projects/prompterino.webp',
            tags: [TAGS.react, TAGS.typescript, TAGS.tailwind]
        },
        {
            title: t('projectTitle3'),
            description: t('projectDescription3'),
            demoLink: 'https://pokedux-site.netlify.app',
            githubLink: 'https://github.com/brayanramosc/pokedux',
            image: '/projects/pokedux.webp',
            tags: [TAGS.react, TAGS.redux]
        },
        {
            title: t('projectTitle2'),
            description: t('projectDescription2'),
            demoLink: 'https://anime-vault-two-taupe.vercel.app',
            githubLink: 'https://github.com/brayanramosc/anime_vault',
            image: '/projects/anime_vault.webp',
            tags: [TAGS.react, TAGS.typescript, TAGS.tailwind]
        },
        {
            title: t('projectTitle1'),
            description: t('projectDescription1'),
            demoLink: '#',
            githubLink: 'https://github.com/brayanramosc/personal-portfolio',
            image: '/projects/portfolio.webp',
            tags: [TAGS.react, TAGS.typescript, TAGS.tailwind]
        },
    ]

    return (
        <section
            id="projects"
            className="max-w-6xl mx-auto -mt-30 pt-32 mb-10"
        >
            <motion.h2
                className="text-4xl mb-8 font-bold text-light-scheme-primary dark:text-dark-scheme-primary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: .5 }}
                viewport={{ once: true }}
            >
                {t('projectsTitle')}
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project: Project) =>
                    <ProjectCard
                        key={project.title}
                        project={project}
                        isGithubPublic={project.githubLink !== ''}
                    />
                )}
            </div>
        </section>
    )
}

export default Projects;
