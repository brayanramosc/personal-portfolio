import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    const hobbieList = [
        { id: 0, name: t('aboutHobbie1') },
        { id: 1, name: t('aboutHobbie2') },
        { id: 2, name: t('aboutHobbie3') },
    ]

    return (
        <motion.section
            id="about"
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5 }}
            className="max-w-6xl mx-auto mt-60 pb-10"
        >
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
                    <li key={hobby.id} className="text-xl list-disc">
                        {hobby.name}
                    </li>
                )}
            </ul>
        </motion.section>
    )
}

export default About;
