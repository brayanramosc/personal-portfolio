import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer
            className="
                mt-10 px-10 pt-5 w-full pb-10 sm:pb-5
                bg-light-scheme-surface-low text-light-scheme-on-surface-variant
                dark:bg-dark-scheme-surface-low dark:text-dark-scheme-on-surface-variant
            "
        >
            <div className="max-w-6xl mx-auto flex flex-col gap-4 sm:flex-row justify-between items-center">
                <div className="flex flex-row gap-2">
                    <p className="text-lg">
                        {t('footerTextMadeBy')}
                    </p>
                    <a
                        href="https://github.com/brayanramosc"
                        className="text-lg underline decoration-dotted"
                        target="_blank"
                    >
                        {t('footerLinkMadeBy')}
                    </a>
                </div>

                <div className="flex flex-row gap-6 items-center">
                    <a href="https://github.com/brayanramosc" target="_blank">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/brayan-ramos-caicedo/" target="_blank">
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
