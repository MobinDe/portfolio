import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { social } from '../../data/social';
import ThemeToggle from '../../components/ui/ThemeToggle';

// آیکون کره زمین (برای استفاده در دکمه)
const GlobeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const navItems = [
  { href: '#about', labelKey: 'header.nav.about' },
  { href: '#projects', labelKey: 'header.nav.projects' },
  { href: '#skills', labelKey: 'header.nav.skills' },
  { href: '#contact', labelKey: 'header.nav.contact' },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'fa' ? 'en' : 'fa';
    i18n.changeLanguage(nextLang);
  };

  return (
    <header
      dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
      className="sticky top-0 z-50 bg-primary text-white shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-8">
        {/* لوگو و آواتار */}
        <div className="flex items-center gap-3">
          <div className="cursor-pointer" onClick={() => setShowProfile(true)}>
            <img
              src="/images/profile.jpg"
              alt={t('header.aria.user_avatar')}
              className="w-10 h-10 rounded-full object-cover border-2 border-white/30 hover:border-white/60 transition-colors"
            />
          </div>
          <a href="#" className="relative text-2xl text-white font-extrabold tracking-tight group">
            <span className="absolute inset-0 bg-gradient-to-r from-white via-teal-300 to-white bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              {t('header.logo')}
            </span>
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              {t('header.logo')}
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-light group-hover:w-full transition-all duration-500 rounded-full" />
            <span className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r from-primary-light to-primary" />
          </a>
        </div>

        {/* منوی دسکتاپ */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              {t(item.labelKey)}
            </a>
          ))}
          <div className="flex items-center gap-6">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('header.aria.github')}
              className="hover:text-cyan-400 transition-colors"
            >
              <FaGithub size={30} />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('header.aria.linkedin')}
              className="hover:text-cyan-400 transition-colors"
            >
              <FaLinkedin size={30} />
            </a>
            <ThemeToggle />
            {/* دکمهٔ تغییر زبان – نمایش زبان مقابل */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/30 hover:border-cyan-400 hover:text-cyan-400 transition-colors text-white text-sm font-medium"
              aria-label={i18n.language === 'fa' ? 'Switch to English' : 'تغییر به فارسی'}
            >
              <GlobeIcon className="w-4 h-4" />
              <span>{i18n.language === 'fa' ? 'English' : 'فارسی'}</span>
            </button>
          </div>
        </nav>

        {/* بخش موبایل */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('header.aria.github')}
            className="hover:text-cyan-400 transition-colors"
          >
            <FaGithub size={30} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('header.aria.linkedin')}
            className="hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin size={30} />
          </a>
          <ThemeToggle />
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2 py-1 rounded-full border border-white/30 hover:border-cyan-400 hover:text-cyan-400 text-sm font-medium"
            aria-label={i18n.language === 'fa' ? 'Switch to English' : 'تغییر به فارسی'}
          >
            <GlobeIcon className="w-4 h-4" />
            <span className="hidden sm:inline">{i18n.language === 'fa' ? 'English' : 'فارسی'}</span>
          </button>
          <button
            className="text-white hover:text-cyan-400 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={t('header.aria.toggle_menu')}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* منوی موبایل */}
      {mobileOpen && (
        <div className="bg-primary md:hidden px-6 pb-6 pt-2 space-y-4">
          {navItems
            .filter((item) => item.href !== '#about' && item.href !== '#contact')
            .map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-white/90 border-t pt-2 border-white/20 hover:text-white text-lg font-medium"
              >
                {t(item.labelKey)}
              </a>
            ))}
        </div>
      )}

      {/* مودال عکس پروفایل */}
      {showProfile && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setShowProfile(false)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <button
              className="absolute -top-10 right-0 text-white hover:text-cyan-400 transition-colors text-3xl font-bold"
              onClick={() => setShowProfile(false)}
              aria-label={t('header.aria.close_profile')}
            >
              ×
            </button>
            <img
              src="/images/profile.jpg"
              alt="Mobin Ghalvazi"
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;