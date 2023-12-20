import { useRef } from "react";
import { useTranslation } from "react-i18next";

import contactImg from '../../assets/undraw_mail_re_duel.svg';
import useEmailForm from "./hooks/useEmailForm";
import Input from "./Input";

const Contact = () => {
    const { handleSubmit, placeholders } = useEmailForm();
    const formRef = useRef<HTMLFormElement>(null);
    const { t } = useTranslation();

    return (
        <section id="contact" className="max-w-6xl mt-60 mx-auto">
            <h1 className="text-4xl mb-6 font-bold text-light-scheme-primary dark:text-dark-scheme-primary">
                {t('contactTitle')}
            </h1>
            <p className="text-xl mb-10">
                {t('contactDesc')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <form
                    className="flex flex-col gap-4 items-center"
                    onSubmit={(e) => handleSubmit(e, formRef)}
                    ref={formRef}
                >
                    {placeholders.map(placeholder =>
                        placeholder.type !== 'textarea' && <Input
                            key={placeholder.id}
                            name={placeholder.name}
                            placeholder={placeholder.placeholder}
                        />
                    )}
                    <textarea
                        required
                        name={placeholders[placeholders.length - 1].name}
                        placeholder={placeholders[placeholders.length - 1].placeholder}
                        className="
                        rounded-xl p-2 text-base min-h-[7rem] w-full
                        bg-light-scheme-surface-variant text-light-scheme-on-surface-variant placeholder:text-light-scheme-on-surface
                        dark:bg-dark-scheme-surface-variant dark:text-dark-scheme-on-surface-variant dark:placeholder:text-dark-scheme-on-surface
                    "
                        onInvalid={e => (e.target as HTMLInputElement).setCustomValidity(t('contactInputValidationMessage'))}
                        onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                    />
                    <button
                        type="submit"
                        className="
                        rounded-xl py-2 col-span-2 font-bold text-lg w-52
                        bg-light-scheme-primary text-light-scheme-on-primary
                        dark:bg-dark-scheme-primary dark:text-dark-scheme-on-primary
                    "
                    >
                        Enviar mensaje
                    </button>
                </form>

                <img
                    src={contactImg}
                    alt={"contact"}
                    className="justify-self-end hidden sm:block"
                />
            </div>
        </section>
    )
}

export default Contact;
