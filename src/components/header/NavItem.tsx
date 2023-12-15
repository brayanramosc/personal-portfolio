import { Variants, motion } from "framer-motion";
import { MenuOption } from "./SideNavBar";

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

type NavItemProps = {
    menuOption: MenuOption
}

const NavItem = ({ menuOption }: NavItemProps) => {
    return (
        <motion.a
            href={menuOption.path}
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer flex items-center dark:text-white"
        >
            {menuOption.name}
        </motion.a>
    )
}

export default NavItem