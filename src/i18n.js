import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

import en from './locales/chi/translation.json'
import chi from './locales/en/translation.json'
const resources={
    en:{
        translation : en
    },
    chi:{
        translation : chi
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    keySeparator : false,
    interpolation:{
        escapeValue : false
    }
})

export default i18n