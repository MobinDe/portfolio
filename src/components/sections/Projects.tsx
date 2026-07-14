import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { projects } from '../../data/projects';
import ProjectCard from '../../components/ui/ProjectCard';
import { Filter } from 'lucide-react';

const Projects = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'fa';

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // استخراج همه تکنولوژی‌های یکتا
  const allTechs = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach(p => p.techs.forEach(t => techs.add(t)));
    return Array.from(techs).sort();
  }, []);

  // فیلتر پروژه‌ها بر اساس جستجو و تکنولوژی
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTech = !selectedTech || project.techs.includes(selectedTech);
      return matchesSearch && matchesTech;
    });
  }, [searchTerm, selectedTech]);

  // ساخت متن نمایش تعداد نتایج
  const resultsDescription = useMemo(() => {
    if (filteredProjects.length === 0) {
      return t('projects.noResults');
    }
    return selectedTech
      ? t('projects.resultsFiltered', { count: filteredProjects.length, tech: selectedTech })
      : t('projects.resultsAll', { count: filteredProjects.length });
  }, [filteredProjects.length, selectedTech, t]);

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-16 overflow-hidden bg-bg dark:bg-gray-900 transition-colors"
      id="projects"
    >
      {/* پس‌زمینه نقطه‌ای */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* عنوان */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold bg-linear-to-r from-primary to-primary-light bg-clip-text text-transparent relative inline-block">
            {t('projects.title')}
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full" />
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {resultsDescription}
          </p>
        </div>

        {/* نوار فیلتر تکنولوژی */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-center">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedTech(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
                !selectedTech
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <Filter size={14} />
              {t('projects.all')}
            </button>
            {allTechs.map(tech => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech === selectedTech ? null : tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  tech === selectedTech
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* شبکه پروژه‌ها */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Filter size={48} className="mx-auto text-gray-400 dark:text-gray-600 mb-4" />
            <p className="text-xl text-gray-500 dark:text-gray-400">
              {t('projects.noResults')}
            </p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedTech(null); }}
              className="mt-4 text-primary hover:underline"
            >
              {t('projects.clearFilters')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;