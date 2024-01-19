import { motion } from "framer-motion";

import { Experience } from "./types";

type ExperienceItemProps = {
    experience: Experience,
    index: number
}

const ExperienceItem = ({ experience, index }: ExperienceItemProps) => {
    const { dateRange, title, companyName, description } = experience;

    return (
        <li className="mb-10 ms-6">
            <div
                className="
                    absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 
                    border border-light-scheme-primary bg-light-scheme-primary-container
                    dark:border-dark-scheme-primary dark:bg-dark-scheme-on-primary-container
                "
            />
            <motion.article
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: .25 * index }}
                viewport={{ once: true }}
            >
                <time
                    className="
                    mb-1 text-lg font-semibold leading-none 
                    text-light-scheme-secondary 
                    dark:text-dark-scheme-secondary
                "
                >
                    {dateRange}
                </time>
                <div className="flex flex-col md:flex-row justify-between mb-4">
                    <h3
                        className="
                        text-2xl font-semibold 
                        text-light-scheme-secondary 
                        dark:text-dark-scheme-secondary
                    "
                    >
                        {title}
                    </h3>
                    <h4
                        className="
                        text-lg font-semibold 
                        text-light-scheme-secondary 
                        dark:text-dark-scheme-secondary
                    "
                    >
                        {companyName}
                    </h4>
                </div>
                <p className="mb-4 font-normal max-w-[80ch] text-lg">
                    {description}
                </p>
            </motion.article>
        </li>
    )
}

export default ExperienceItem;
