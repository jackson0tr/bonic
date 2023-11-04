import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import translationEN from './locale/En.json'
import translationAR from './locale/Ar.json'


const resources = {
    en: {
        translation: translationEN
    },
    ar: {
        translation: translationAR
    }
}

i18n 

.use(initReactI18next)
.init({
    resources,
    lang: 'en',
    interpolation: {
        escapeValue: false
    },
    react:{
        useSuspense: false
    }
})

export default i18n;