import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useCycle, motion, Variants } from "framer-motion";

import { useRef } from "react";
import { useDimensions } from "./hooks/useDimensions";
import SideNavBarNavigation from "./SideNavBarNavigation";

const sidebar: Variants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 160px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 160px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

export interface MenuOption {
    name: string,
    path: string
}

type SideNavBarProps = {
    menuOptions: Array<MenuOption>,
    isDarkMode: boolean,
    setIsDarkMode: (isDarkMode: boolean | ((isDarkMode: boolean) => boolean)) => void,
}

const SideNavBar = ({ menuOptions, isDarkMode, setIsDarkMode }: SideNavBarProps): JSX.Element => {
    const [isSideBarOpen, toggleSideBarOpen] = useCycle(false, true);
    const containerRef = useRef<HTMLElement>(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.nav
            className="absolute top-0 right-0 min-w-[200px] sm:hidden flex"
            initial={false}
            animate={isSideBarOpen ? 'open' : 'closed'}
            custom={height}
            ref={containerRef}
        >
            <motion.div
                className="
                    top-0 right-0 bottom-0 h-screen min-w-[200px] absolute 
                    bg-light-scheme-surface-high text-light-scheme-on-surface-variant
                    dark:bg-dark-scheme-surface-high dark:text-dark-scheme-on-surface-variant
                "
                variants={sidebar}
            />

            <SideNavBarNavigation
                menuOptions={menuOptions}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
            />

            <div
                onClick={() => toggleSideBarOpen()}
                className="flex cursor-pointer items-center absolute top-6 right-6"
            >
                {isSideBarOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </div>
        </motion.nav>
    )
}

export default SideNavBar;
