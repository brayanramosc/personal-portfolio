import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";

import programmingLogo from "../../assets/programming.svg";
import LinkButton from "./LinkButton";

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="min-h-[calc(100vh-80px)] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 sm:gap-5 items-center place-content-center">
            <aside className="flex flex-col justify-center">
                <motion.h1
                    className="text-5xl sm:text-6xl font-semibold"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                >
                    {t('heading')}
                </motion.h1>

                <motion.div
                    className="flex flex-col md:flex-row gap-2"
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-5xl sm:text-6xl font-semibold">
                        {t('headingName')}
                    </h1>
                    <h1 className="text-5xl sm:text-6xl font-semibold text-light-scheme-primary dark:text-dark-scheme-primary">
                        {'Brayan Ramos'}
                    </h1>
                </motion.div>

                <motion.h2
                    className="text-3xl sm:text-4xl pt-10"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3, type: 'just' } }}
                    transition={{ ease: 'easeInOut' }}
                    viewport={{ once: true }}
                >
                    {t('headingSubtitle')}
                </motion.h2>

                <div className="flex flex-row gap-6 justify-start items-center mt-10">
                    <LinkButton
                        name="Github"
                        href="https://github.com/brayanramosc"
                        delay={0}
                        Icon={<FaGithub size={25} />}
                    />
                    <LinkButton
                        name="Linkedin"
                        href="https://www.linkedin.com/in/brayan-ramos-caicedo/"
                        delay={0.3}
                        Icon={<FaLinkedin size={25} />}
                    />
                    <LinkButton
                        name="CV"
                        href="https://udeaeduco-my.sharepoint.com/:b:/g/personal/brayan_ramos_udea_edu_co/Ea9wA6SqVhNBmEGpozl3QUkB6-eCFQeZmsw-zurE6T2w7A?e=UlCacx"
                        delay={0.6}
                        Icon={<FaExternalLinkAlt size={23} />}
                    />
                </div>
            </aside>

            <motion.img
                src={programmingLogo}
                alt='programming image'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            />
        </section>
    )
}

export default Hero;
