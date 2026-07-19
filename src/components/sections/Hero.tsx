import { useEffect, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { FileDown, ChevronDown } from 'lucide-react';
import profilePic from '/images/profile.jpg';

const roles = [
  'Front-End Developer',
  'React Specialist',
  'TypeScript Lover',
  'UI Engineer',
];

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'fa';

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 0);
    } else {
      timer = setTimeout(
        () => {
          setText(currentRole.slice(0, isDeleting ? text.length - 1 : text.length + 1));
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  useEffect(() => {
    const interval = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg dark:bg-gray-900 transition-colors">
      {/* ذرات پس‌زمینه */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* حلقه‌های تزئینی */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-light/5 dark:bg-primary-light/10 rounded-full blur-3xl animate-pulse pointer-events-none" />

      {/* محتوای اصلی */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 md:gap-24 lg:gap-32">
        {/* عکس سمت چپ (در RTL به‌طور خودکار جابه‌جا می‌شود) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative group w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary-light/10 dark:from-primary/30 dark:to-primary-light/20 rounded-3xl rotate-6 transition-transform duration-500 group-hover:rotate-3" />
            <div className="absolute -inset-3 border-2 border-dashed border-primary/40 dark:border-primary-light/40 rounded-3xl -rotate-3 transition-transform duration-500 group-hover:rotate-0" />
            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl shadow-primary/30 dark:shadow-primary-light/20 rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <img
                src={profilePic}
                alt={t('hero.image_alt')}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
           
          </div>
        </div>

        {/* متن معرفی */}
        <div className={`w-full md:w-1/2 text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
          {/* وضعیت آماده به کار */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-sm font-medium mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            {t('hero.available')}
          </div>

          {/* نام و احوالپرسی */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            <Trans
              i18nKey="hero.greeting"
              components={{
                1: <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent" />,
              }}
            />
          </h1>

          {/* تایپ رایتر (عناوین شغلی) */}
          <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6 h-12">
            <span>{text}</span>
            <span className={`text-primary dark:text-primary-light ${blink ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
              |
            </span>
          </div>

          {/* توضیح کوتاه */}
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed mb-8">
            <Trans
              i18nKey="hero.description"
              components={{
                1: <span className="text-primary dark:text-primary-light font-semibold" />,
                3: <span className="text-primary dark:text-primary-light font-semibold" />,
              }}
            />
          </p>

          {/* دکمه‌ها */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 bg-primary hover:bg-primary-light text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:translate-y-0"
            >
              {t('hero.cta_projects')}
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-3 border-2 border-primary dark:border-primary-light text-primary dark:text-primary-light font-semibold px-8 py-4 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
            >
              <FileDown size={20} className="group-hover:animate-bounce" />
              {t('hero.cta_resume')}
            </a>
          </div>
        </div>
      </div>

      {/* اسکرول داون */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#projects" className="text-gray-400 dark:text-gray-600 hover:text-primary dark:hover:text-primary-light transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;