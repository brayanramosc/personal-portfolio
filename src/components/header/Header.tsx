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
        { name: t('navItem1'), path: '#' },
        { name: t('navItem2'), path: '#' },
        { name: t('navItem3'), path: '#' },
    ]

    return (
        <div className="px-10 py-5 bg-dark-mixed-100 bg-opacity-10">
            <div className="flex justify-between max-w-6xl mx-auto">
                <img src={logo} alt="logo" width={50} className="h-[47px]" />
                <div className="sm:flex hidden flex-row items-center gap-10">
                    <ul className="flex flex-row gap-6">
                        {menuOptions.map(opt =>
                            <a key={opt.name} href={opt.path} className="cursor-pointer dark:text-white">
                                {opt.name}
                            </a>
                        )}
                    </ul>

                    <div className="flex flex-row gap-4 items-center">
                        <div
                            className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'}`}
                            onClick={() => setIsDarkMode(prevMode => !prevMode)}
                        >
                            {isDarkMode
                                ? <CiLight />
                                : <MdOutlineDarkMode />
                            }
                        </div>

                        <div className="cursor-pointer">
                            <img
                                src={language === 'es' ? englishLogo : spanishLogo}
                                onClick={handleChangeLanguage}
                                alt="language_logo"
                            />
                        </div>
                    </div>
                </div>

                <SideNavBar
                    menuOptions={menuOptions}
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                />
            </div>
        </div>
    )
}

export default Header;