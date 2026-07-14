import { useTranslation } from 'react-i18next';
import { skills } from '../../data/skills';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section className="py-8 md:py-24 px-4 sm:px-6 lg:px-8 bg-bg dark:bg-gray-900 transition-colors" id="skills">
      <div className="max-w-4xl mx-auto">
        {/* عنوان با گرادینت رنگی */}
        <h2 className="text-3xl font-bold text-center mb-20 tracking-tight">
          <span className="bg-linear-to-r from-primary to-primary-light bg-clip-text text-transparent">
            {t('skills.title')}
          </span>
        </h2>

        {/* ابر تگ‌ها */}
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="
                inline-block px-4 py-2 sm:px-5 sm:py-2.5
                text-xs sm:text-sm font-medium 
                text-primary dark:text-primary-light
                bg-primary/5 dark:bg-primary-light/5
                border border-primary/20 dark:border-primary-light/20
                rounded-full
                transition-all duration-300
                hover:bg-primary hover:text-white dark:hover:bg-primary-light dark:hover:text-white
                hover:border-primary hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-primary-light/20
                hover:-translate-y-0.5
                cursor-default backdrop-blur-sm
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;