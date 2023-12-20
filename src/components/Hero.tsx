import { useTranslation } from "react-i18next";

import programmingLogo from "../assets/programming.svg";

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="h-[calc(80vh-87px)] pt-28 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-20 sm:gap-5 items-center">
            <aside className="flex flex-col justify-center">
                <h1 className="text-5xl sm:text-6xl">
                    {t('heading')}
                </h1>
                <h1 className="text-5xl sm:text-6xl">
                    {t('headingName')}
                </h1>
                <h3 className="text-3xl sm:text-4xl pt-10">
                    {t('headingSubtitle')}
                </h3>
            </aside>

            <img src={programmingLogo} alt='programming image' />
        </section>
    )
}

export default Hero;
