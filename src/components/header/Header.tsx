import { motion } from "framer-motion";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

import logo from "../../assets/logo.webp";
import spanishLogo from "../../assets/spain.png";
import englishLogo from "../../assets/united-kingdom.png";
import useThemeMode from "./hooks/useThemeMode";
import { useLanguage } from "../../hooks";
import SideNavBar from "./SideNavBar";

const Header = () => {
    const { t, language, handleChangeLanguage } = useLanguage();
    const { isDarkMode, setIsDarkMode } = useThemeMode();

    const menuOptions = [
        { name: t('navItem1'), path: '#about' },
        { name: t('navItem2'), path: '#projects' },
        { name: t('navItem3'), path: '#contact' },
    ]

    return (
        <header
            className="
                px-10 py-5 fixed w-full z-10
                bg-light-scheme-surface-low text-light-scheme-on-surface-variant
                dark:bg-dark-scheme-surface-low dark:text-dark-scheme-on-surface-variant
            "
        >
            <div className="flex justify-between max-w-6xl mx-auto">
                <a href="#">
                    <motion.img
                        src={logo}
                        alt="logo"
                        width={50}
                        className="h-[47px]"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                        viewport={{ once: true }}
                    />
                </a>
                <div className="sm:flex hidden flex-row items-center gap-10">
                    <ul className="flex flex-row gap-6">
                        {menuOptions.map((opt, index) =>
                            <motion.a
                                key={opt.name}
                                href={opt.path}
                                className="
                                    cursor-pointer relative font-semibold text-lg
                                    text-light-scheme-on-surface-variant 
                                    dark:text-dark-scheme-on-surface-variant 
                                    before:mt-1 before:w-full before:h-[1px] before:rounded-lg before:origin-right 
                                    before:transition-transform before:duration-300 before:scale-x-0 before:absolute 
                                    before:left-0 before:bottom-0 hover:before:scale-x-100 hover:before:origin-left
                                    before:bg-light-scheme-on-surface
                                    dark:before:bg-dark-scheme-on-surface
                                "
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: index * 0.3 } }}
                                viewport={{ once: true }}
                            >
                                {opt.name}
                            </motion.a>
                        )}
                    </ul>

                    <motion.div
                        className="flex flex-row gap-4 items-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: .9 } }}
                        viewport={{ once: true }}
                    >
                        <div
                            className={`cursor-pointer ${isDarkMode ? 'dark:text-dark-scheme-on-surface-variant' : 'text-light-scheme-on-surface-variant'}`}
                            onClick={() => setIsDarkMode(prevMode => !prevMode)}
                        >
                            {isDarkMode
                                ? <CiLight size={20} />
                                : <MdOutlineDarkMode size={20} />
                            }
                        </div>

                        <div className="cursor-pointer">
                            <img
                                src={language === 'es' ? englishLogo : spanishLogo}
                                onClick={handleChangeLanguage}
                                alt="language_logo"
                            />
                        </div>
                    </motion.div>
                </div>

                <SideNavBar
                    menuOptions={menuOptions}
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                />
            </div>
        </header>
    )
}

export default Header;
