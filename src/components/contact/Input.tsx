import { HTMLInputTypeAttribute } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

type InputProps = {
    required?: boolean,
    type?: HTMLInputTypeAttribute,
    name: string,
    placeholder: string,
    index: number
}

const Input = ({ required = true, type = 'text', name, placeholder = '', index }: InputProps) => {
    const { t } = useTranslation();
    
    return (
        <motion.input
            required={required}
            type={type}
            name={name}
            placeholder={placeholder}
            className="
                rounded-xl p-2 text-base w-full
                bg-light-scheme-surface-variant text-light-scheme-on-surface-variant placeholder:text-light-scheme-on-surface
                dark:bg-dark-scheme-surface-variant dark:text-dark-scheme-on-surface-variant dark:placeholder:text-dark-scheme-on-surface
            "
            onInvalid={e => (e.target as HTMLInputElement).setCustomValidity(t('contactInputValidationMessage'))}
            onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .25, delay: .25 * index }}
        />
    )
}

export default Input;
