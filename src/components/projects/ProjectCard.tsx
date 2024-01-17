import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { Project } from "./types";
import ProjectImage from "./ProjectImage";

type ProjectCardProps = {
    project: Project,
    isGithubPublic?: boolean
}

const ProjectCard = ({ project, isGithubPublic = true }: ProjectCardProps) => {
    const { title, description, image, tags, demoLink, githubLink } = project;

    return (
        <motion.article
            className="
                border border-solid border-light-scheme-outline dark:border-dark-scheme-outline
                rounded-lg p-6 flex flex-col justify-between shadow-xl
                bg-light-scheme-surface-low
                dark:bg-dark-scheme-surface-low
            "
            initial={{ y: 100 }}
            whileInView={{ y: 0, transition: { duration: 0.25 } }}
            viewport={{ once: true }}
        >
            <h3 className="
                    text-2xl mb-2
                    text-light-scheme-secondary 
                    dark:text-dark-scheme-secondary
                "
            >
                {title}
            </h3>
            <p className="mb-4 max-w-[100ch] text-xl">
                {description}
            </p>

            <ul className="flex gap-2 flex-row mb-6 flex-wrap">
                {tags.map(tag =>
                    <li key={tag.name}>
                        <span className="
                                flex items-center gap-x-2 rounded-full py-1 px-4 w-fit font-semibold
                                border border-solid border-light-scheme-outline dark:border-dark-scheme-outline
                                text-light-scheme-primary hover:bg-light-scheme-primary hover:text-light-scheme-on-primary
                                dark:text-dark-scheme-primary dark:hover:bg-dark-scheme-primary dark:hover:text-dark-scheme-on-primary
                            "
                        >
                            {tag.icon}
                            {tag.name}
                        </span>
                    </li>
                )}
            </ul>

            <ProjectImage image={image} projectName={title} />

            <div className="flex flex-row justify-end gap-4">
                {isGithubPublic && <motion.a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                >
                    <FaGithub size={20} />
                </motion.a>}
                <motion.a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                >
                    <FaExternalLinkAlt size={20} />
                </motion.a>
            </div>
        </motion.article>
    )
}

export default ProjectCard;
