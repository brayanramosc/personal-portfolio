import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import profileImg from '../../assets/profile.webp';
import Skills from "./Skills";

const About = () => {
    const { t } = useTranslation();

    const hobbieList = [
        { id: 0, name: t('aboutHobbie1') },
        { id: 1, name: t('aboutHobbie2') },
        { id: 2, name: t('aboutHobbie3') },
    ]

    return (
        <section
            id="about"
            className="max-w-6xl mx-auto -mt-30 pt-32 mb-10"
        >
            <motion.article
                className="flex flex-col lg:flex-row gap-10 items-center"
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <aside>
                    <img
                        src={profileImg}
                        alt="profile"
                        className="rounded-full sm:max-w-md lg:max-w-full"
                    />
                </aside>

                <section className="max-w-[100ch] lg:max-w-[70ch]">
                    <h1 className="text-4xl mb-8 font-bold text-light-scheme-primary dark:text-dark-scheme-primary">
                        {t('aboutTitle')}
                    </h1>
                    <p className="text-xl">
                        {t('aboutContent')}
                    </p>
                    <p className="text-xl mt-8">
                        {t('aboutHobbiesDesc')}
                    </p>

                    <ul className="ml-8 mt-4">
                        {hobbieList.map(hobby =>
                            <li key={hobby.id} className="text-xl flex flex-row items-center gap-2 mt-2">
                                <div className="font-bold text-light-scheme-primary dark:text-dark-scheme-primary">
                                    <FaCode />
                                </div>
                                {hobby.name}
                            </li>
                        )}
                    </ul>
                </section>
            </motion.article>

            <Skills />
        </section>
    )
}

export default About;
