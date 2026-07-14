import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import fa from './locales/fa.json';
import en from './locales/en.json';

const resources = {
  fa: { translation: fa },
  en: { translation: en },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',            // ← زبان اولیه صریحاً انگلیسی
    fallbackLng: 'en',    // ← پشتیبان هم انگلیسی
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;