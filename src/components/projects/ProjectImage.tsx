import { useRef, useState } from "react";
import { motion, useDomEvent, useMotionValue } from "framer-motion";

type PropjectImageProps = {
    image: string,
    projectName: string
}

const ProjectImage = ({ image, projectName }: PropjectImageProps) => {
    const [isOpen, setOpen] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);
    const zIndex = useMotionValue(0);

    useDomEvent(useRef(window), "scroll", () => isOpen && setOpen(false));

    const handleLayoutAnimationStart = () => {
        if (isOpen) {
            zIndex.set(30);
            return;
        }
    }

    const handleLayoutAnimationComplete = () => {
        if (!isOpen) zIndex.set(0);
    }

    return (
        <div
            className={`w-full relative ${isOpen ? 'mb-6' : 'mb-0'}`}
            style={{ height: (imgRef.current && isOpen) ? imgRef.current.height : 'auto' }}
        >
            <motion.div
                className={`
                    fixed top-0 left-0 right-0 bottom-0 opacity-0 -z-10 bg-light-scheme-on-secondary-container/90
                    ${isOpen ? ' z-20' : ' -z-10'}
                `}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ damping: 25, stiffness: 120, type: 'spring' }}
                onClick={() => setOpen(false)}
            />
            <motion.img
                src={image}
                alt={projectName}
                ref={imgRef}
                className={`
                        rounded shadow-2xl top-0 left-0 right-0 bottom-0
                        ${isOpen ? 'cursor-auto fixed h-auto m-auto w-10/12 ' : 'cursor-pointer mb-6 w-full relative'}
                    `
                }
                layout
                style={{ zIndex }}
                onClick={() => setOpen(!isOpen)}
                whileHover={{ scale: !isOpen ? 1.1 : 1 }}
                onLayoutAnimationStart={handleLayoutAnimationStart}
                onLayoutAnimationComplete={handleLayoutAnimationComplete}
                transition={{ damping: 25, stiffness: 120, type: 'spring' }}
            />
        </div>
    )
}

export default ProjectImage;
