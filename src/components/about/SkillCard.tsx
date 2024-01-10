import { Variants, motion } from "framer-motion";

type SkillCardPros = {
    name: string,
    Icon: React.ReactNode,
    row: number,
    col: number
}

const itemVariants: Variants = {
    hidden: {
        y: 10,
        opacity: 0, 
    },
    visible: (delay: number) => ({
        y: 0, 
        opacity: 1, 
        transition: { duration: 0.3, delay: delay }
    })
};

const SkillCard = ({ name, Icon, row, col }: SkillCardPros) => {

    return (
        <motion.div
            className='flex flex-col gap-6 items-center p-4 border-solid border-2 rounded-lg'
            whileHover={{ scale: 1.1 }}
            custom={(row + col + 1) * 0.1}
            variants={itemVariants}
        >
            <div> {Icon} </div>

            <p className='text-lg'>
                {name}
            </p>
        </motion.div>
    )
}

export default SkillCard;
