import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Experience } from "./types";
import ExperienceItem from "./ExperienceItem";

const Experiences = () => {
    const { t } = useTranslation();

    const experienceList: Experience[] = [
        {
            dateRange: t('experienceDate2'),
            title: t('experienceTitle2'),
            companyName: t('experienceCompany2'),
            description: t('experienceDescription2')
        },
        {
            dateRange: t('experienceDate1'),
            title: t('experienceTitle1'),
            companyName: t('experienceCompany1'),
            description: t('experienceDescription1')
        },
    ]

    return (
        <section className="mt-20">
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
                {t('experienceTitle')}
            </motion.h2>

            <ol
                className="
                    relative
                    border-light-scheme-primary-container border-s-2
                    dark:border-light-scheme-primary-container dark:border-s
                "
            >
                {experienceList.map((experience, index) =>
                    <ExperienceItem
                        key={experience.title}
                        experience={experience}
                        index={index}
                    />
                )}
            </ol>
        </section>
    )
}

export default Experiences;
