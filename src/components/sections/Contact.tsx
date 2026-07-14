import { useTranslation } from 'react-i18next';
import { social } from '../../data/social';
import { Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'fa';

  return (
    <section
      className="bg-primary text-white border-t border-gray-200 dark:border-gray-800 py-3 px-4"
      id="contact"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 text-sm h-full">
        {/* اطلاعات تماس */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href={`mailto:${social.email}`}
            className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"
            aria-label={t('contact.email_label')}
          >
            <Mail size={18} />
            <span className="hidden sm:inline">{social.email}</span>
            <span className="sm:hidden">{t('contact.email_label')}</span>
          </a>
          <span className="flex items-center gap-2 text-gray-300" aria-label={t('contact.location_label')}>
            <MapPin size={18} />
            <span>{t('contact.location_value')}</span>
          </span>
        </div>

        {/* شبکه‌های اجتماعی */}
        <div className="flex items-center gap-4">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 transition-colors"
            aria-label={t('header.aria.github')}
          >
            <FaGithub size={20} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 transition-colors"
            aria-label={t('header.aria.linkedin')}
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;