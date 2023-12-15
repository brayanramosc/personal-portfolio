import { useState } from "react";
import { useTranslation } from "react-i18next";

const useLanguage = () => {
    const { i18n, t } = useTranslation();
    const [language, setLanguage] = useState<string>(i18n.language);

    const handleChangeLanguage = () => {
        const newLangCode = language === 'es' ? 'en' : 'es';
        setLanguage(newLangCode);
        i18n.changeLanguage(newLangCode);
    }

    return {
        t,
        language,
        handleChangeLanguage
    }
}

export default useLanguage;
