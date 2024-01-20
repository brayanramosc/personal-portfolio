import { SiTypescript, SiFirebase, SiTailwindcss, SiMongodb, SiMui } from "react-icons/si";
import { FaHtml5, FaReact, FaGitAlt, FaPython, FaCss3Alt } from "react-icons/fa";
import { FaNodeJs, FaGolang } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { TbBrandNextjs } from "react-icons/tb";
import { GoDatabase } from "react-icons/go";

import SkillCard from "./SkillCard";
import { useWindowSize } from "../../hooks";

const skillItems = [
    { name: 'HTML', icon: <FaHtml5 size={100} /> },
    { name: 'CSS', icon: <FaCss3Alt size={100} /> },
    { name: 'Javascript', icon: <IoLogoJavascript size={100} /> },
    { name: 'Typescript', icon: <SiTypescript size={100} /> },
    { name: 'React', icon: <FaReact size={100} /> },
    { name: 'Material UI', icon: <SiMui size={100} /> },
    { name: 'Tailwind', icon: <SiTailwindcss size={100} /> },
    { name: 'Git', icon: <FaGitAlt size={100} /> },
    { name: 'NextJS', icon: <TbBrandNextjs size={100} /> },
    { name: 'NodeJS', icon: <FaNodeJs size={100} /> },
    { name: 'SQL', icon: <GoDatabase size={100} /> },
    { name: 'MongoDB', icon: <SiMongodb size={100} /> },
    { name: 'Firebase', icon: <SiFirebase size={100} /> },
    { name: 'Python', icon: <FaPython size={100} /> },
    { name: 'Golang', icon: <FaGolang size={100} /> },
]

const Skills = () => {
    const { windowSize } = useWindowSize();
    const controls = useAnimation();
    const { t } = useTranslation();

    return (
        <article className="mt-20">
            <motion.h2
                className="
                    text-4xl mb-10 font-semibold text-center
                    text-light-scheme-primary 
                    dark:text-dark-scheme-primary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: .5 }}
                viewport={{ once: true }}
            >
                {t('skillsTitle')}
            </motion.h2>

            <motion.section
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10"
                initial='hidden'
                animate={controls}
                whileInView={'visible'}
                viewport={{ once: true }}
            >
                {skillItems.map((skill, index) => {
                    const windowWidth = windowSize.width;
                    const totalColumns = windowWidth > 1024
                        ? 5 : windowWidth > 640
                            ? 3 : 2;
                    // const totalRows = Math.ceil(skillItems.length / totalColumns);
                    const currentRow = Math.floor(index / totalColumns);
                    const currentColumn = index - (currentRow * totalColumns)

                    return (
                        <SkillCard
                            key={skill.name}
                            name={skill.name}
                            Icon={skill.icon}
                            row={currentRow}
                            col={currentColumn}
                        />
                    )
                }
                )}
            </motion.section>
        </article>
    )
}

export default Skills;
