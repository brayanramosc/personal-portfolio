import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { esTranslation, enTranslation } from "./constants/i18n";

const resources = {
    en: { translation: enTranslation },
    es: { translation: esTranslation }
}

i18n
    .use(initReactI18next)
    .init({
        resources: resources,
        lng: 'es',
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;
