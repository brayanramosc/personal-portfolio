import { motion } from "framer-motion";
import React from "react";

type LinkButtonProps = {
    href: string,
    name: string,
    Icon: React.ReactNode,
    delay: number,
}

const LinkButton = ({ href, delay, name, Icon }: LinkButtonProps) => {
    return (
        <motion.a
            target="_blank"
            className="flex flex-row gap-2"
            href={href}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: delay, type: 'just', duration: 0.5 } }}
            transition={{ ease: 'easeInOut' }}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true }}
        >
            {Icon}

            <p className="text-base">
                {name}
            </p>
        </motion.a>
    )
}

export default LinkButton