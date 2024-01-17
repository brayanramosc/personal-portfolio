import { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import contactImg from '../../assets/undraw_mail_re_duel.svg';
import useEmailForm from "./hooks/useEmailForm";
import Input from "./Input";

const Contact = () => {
    const { handleSubmit, placeholders } = useEmailForm();
    const formRef = useRef<HTMLFormElement>(null);
    const { t } = useTranslation();

    return (
        <section
            id="contact"
            className="max-w-6xl mx-auto mb-20 -mt-30 pt-32"
        >
            <motion.h1
                className="text-4xl mb-8 font-bold text-light-scheme-primary dark:text-dark-scheme-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
                viewport={{ once: true }}
            >
                {t('contactTitle')}
            </motion.h1>
            <motion.p
                className="text-xl mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
                viewport={{ once: true }}
            >
                {t('contactDesc')}
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                <form
                    className="flex flex-col gap-4 items-center"
                    onSubmit={(e) => handleSubmit(e, formRef)}
                    ref={formRef}
                >
                    {placeholders.map((placeholder, index) =>
                        placeholder.type !== 'textarea' && <Input
                            key={placeholder.id}
                            name={placeholder.name}
                            placeholder={placeholder.placeholder}
                            index={index}
                        />
                    )}
                    <motion.textarea
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
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .25, delay: .25 * 3 }}
                    />
                    <motion.button
                        type="submit"
                        className="
                            rounded-xl py-2 col-span-2 font-bold text-lg w-52 mt-4
                            bg-light-scheme-primary text-light-scheme-on-primary
                            dark:bg-dark-scheme-primary dark:text-dark-scheme-on-primary
                        "
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: .5, delay: .25 * 4 }}
                    >
                        Enviar mensaje
                    </motion.button>
                </form>

                <motion.img
                    src={contactImg}
                    alt={"contact"}
                    className="justify-self-end hidden lg:block"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .5, delay: .25 * 4 }}
                />
            </div>
        </section>
    )
}

export default Contact;
