import { MdOutlineDarkMode } from "react-icons/md";
import { Variants, motion } from "framer-motion";
import { CiLight } from "react-icons/ci";

import { useLanguage } from "../../hooks";
import spanishLogo from "../../assets/spain.png";
import englishLogo from "../../assets/united-kingdom.png";

const optVariants: Variants = {
    open: {
        pointerEvents: 'auto',
        cursor: 'pointer'
    },
    closed: {
        pointerEvents: 'none',
        cursor: 'default'
    }
};

const variants: Variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

type ConfigNavItemsProps = {
    isDarkMode: boolean,
    setIsDarkMode: (isDarkMode: boolean | ((isDarkMode: boolean) => boolean)) => void,
}

const ConfigNavItems = ({ isDarkMode, setIsDarkMode }: ConfigNavItemsProps) => {
    const { language, handleChangeLanguage } = useLanguage();

    return (
        <motion.div
            className="flex flex-row gap-4 justify-center items-center mt-6"
            variants={variants}
        >
            <motion.div
                className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'}`}
                onClick={() => setIsDarkMode((prevMode: boolean) => !prevMode)}
                variants={optVariants}
            >
                {isDarkMode
                    ? <CiLight size={20} />
                    : <MdOutlineDarkMode size={20} />
                }
            </motion.div>

            <motion.div className="cursor-pointer flex items-center dark:text-white">
                <motion.img
                    src={language === 'es' ? englishLogo : spanishLogo}
                    onClick={handleChangeLanguage}
                    variants={optVariants}
                    alt="language_logo"
                />
            </motion.div>
        </motion.div>
    )
}

export default ConfigNavItems;
