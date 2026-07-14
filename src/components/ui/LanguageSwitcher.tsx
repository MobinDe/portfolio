import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'fa' ? 'en' : 'fa';
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded border bg-gray-100 dark:bg-gray-800 text-sm"
    >
      {i18n.language === 'fa' ? 'EN' : 'فا'}
    </button>
  );
};

export default LanguageSwitcher;