import { HTMLInputTypeAttribute } from "react";
import { useTranslation } from "react-i18next";

type InputProps = {
    required?: boolean,
    type?: HTMLInputTypeAttribute,
    name: string,
    placeholder: string
}

const Input = ({ required = true, type = 'text', name, placeholder = '' }: InputProps) => {
    const { t } = useTranslation();
    
    return (
        <input
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
        />
    )
}

export default Input;
