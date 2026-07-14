import { useTranslation, Trans } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'fa';

  const stats = [
    { value: '+3', labelKey: 'about.stats.experience' },
    { value: '+15', labelKey: 'about.stats.projects' },
    { value: '+50', labelKey: 'about.stats.clients' },
  ];

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      className="relative py-14 px-4 sm:px-6 lg:px-8 overflow-hidden bg-bg dark:bg-gray-900 transition-colors"
      id="about"
    >
      {/* پس‌زمینه تزئینی: کدهای محو */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.03] dark:opacity-[0.05] text-6xl font-mono font-bold text-gray-900 dark:text-white whitespace-nowrap overflow-hidden">
        <span className="absolute top-10 right-10 rotate-12">{`<div>`}</span>
        <span className="absolute bottom-20 left-10 -rotate-12">{`</>`}</span>
        <span className="absolute top-1/3 left-1/4 rotate-45">{`{...}`}</span>
        <span className="absolute bottom-1/3 right-1/4 -rotate-6">{`() =>`}</span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* عنوان با خط زیرین */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold bg-linear-to-r from-primary to-primary-light bg-clip-text text-transparent relative inline-block">
            {t('about.title')}
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full" />
          </h2>
        </div>

        {/* محتوای اصلی: دو ستون (متن + آمار) */}
        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* ستون متن (۳/۵ عرض) */}
          <div className="md:col-span-3 space-y-6">
            <div className={`space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-loose text-justify ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
              <p>
                <Trans
                  i18nKey="about.text1"
                  components={{
                    1: <bdi className="font-semibold text-primary dark:text-primary-light bg-primary/5 dark:bg-primary-light/5 px-1 rounded" />,
                    3: <bdi className="font-semibold text-primary dark:text-primary-light" />,
                    5: <bdi className="font-semibold text-primary dark:text-primary-light bg-primary/5 dark:bg-primary-light/5 px-1 rounded" />,
                    7: <bdi className="font-semibold" />,
                  }}
                />
              </p>
              <p>
                <Trans
                  i18nKey="about.text2"
                  components={{
                    1: <bdi className="font-semibold text-primary dark:text-primary-light" />,
                    3: <bdi className="font-semibold" />,
                    5: <bdi className="font-semibold" />,
                    7: <bdi className="font-semibold" />,
                    9: <bdi className="font-semibold text-primary dark:text-primary-light" />,
                  }}
                />
              </p>
              <p>
                <Trans
                  i18nKey="about.text3"
                  components={{
                    1: <bdi className="font-semibold text-primary dark:text-primary-light" />,
                    3: <bdi className="font-semibold" />,
                    5: <bdi className="font-semibold" />,
                    7: <bdi className="font-semibold" />,
                  }}
                />
              </p>
            </div>
          </div>

          {/* ستون آمار (۲/۵ عرض) */}
          <div className="md:col-span-2 space-y-6">
            {stats.map((stat, index) => (
              <div
                key={stat.labelKey}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/30"
              >
                <span className="absolute -top-1 -left-1 text-6xl font-black text-primary/5 dark:text-primary-light/5 select-none group-hover:text-primary/10 dark:group-hover:text-primary-light/10 transition">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="block text-4xl font-extrabold text-primary dark:text-primary-light mb-1">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {t(stat.labelKey)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;