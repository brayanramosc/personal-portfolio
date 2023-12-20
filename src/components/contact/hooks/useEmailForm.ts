import { useTranslation } from "react-i18next";
import { FormEvent, RefObject } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const useEmailForm = () => {
    const { t } = useTranslation();

    const placeholders = [
        { id: 0, type: 'input', name: 'user_name', placeholder: t('contactPlaceholder1') },
        { id: 1, type: 'email', name: 'user_email', placeholder: t('contactPlaceholder2') },
        { id: 2, type: 'input', name: 'subject', placeholder: t('contactPlaceholder3') },
        { id: 3, type: 'textarea', name: 'message', placeholder: t('contactPlaceholder4') },
    ]

    const handleSubmit = (event: FormEvent<HTMLFormElement>, formRef: RefObject<HTMLFormElement>) => {
        event.preventDefault();
        const currentForm = formRef.current;
        if (currentForm === null) return;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, currentForm, PUBLIC_KEY)
            .then(() => {
                toast(t('contactSuccessEmailSent'),
                    {
                        position: 'bottom-right',
                        className: 'text-base font-bold bg-light-scheme-surface-high text-light-scheme-on-surface dark:bg-dark-scheme-surface-high dark:text-dark-scheme-on-surface'
                    }
                );
            }, (error) => {
                console.log(error.text);
                toast(
                    t('contactErrorEmailSent'),
                    {
                        position: 'bottom-right',
                        className: 'text-base font-bold bg-light-scheme-error-container text-light-scheme-on-error-container dark:bg-dark-scheme-error-container dark:text-dark-scheme-on-error-container'
                    }
                );
            });
    }

    return {
        placeholders,
        handleSubmit
    }
}

export default useEmailForm;
