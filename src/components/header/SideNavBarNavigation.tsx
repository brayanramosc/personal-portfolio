import { Variants, motion } from "framer-motion";
import { MenuOption } from "./SideNavBar";

import NavItem from "./NavItem";
import ConfigNavItems from "./ConfigNavItems";

const variants: Variants = {
    open: {
        height: '100vh',
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.01, staggerDirection: -1 }
    }
};

type SideNavBarNavigationProps = {
    menuOptions: Array<MenuOption>,
    isDarkMode: boolean,
    setIsDarkMode: (isDarkMode: boolean | ((isDarkMode: boolean) => boolean)) => void,
}

const SideNavBarNavigation = ({ menuOptions, isDarkMode, setIsDarkMode }: SideNavBarNavigationProps) => {

    return (
        <motion.ul
            variants={variants}
            className="flex flex-col justify-center gap-7 w-full items-center absolute"
        >
            {menuOptions.map(opt =>
                <NavItem menuOption={opt} key={opt.name} />
            )}

            <ConfigNavItems
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
            />
        </motion.ul>
    )
}

export default SideNavBarNavigation