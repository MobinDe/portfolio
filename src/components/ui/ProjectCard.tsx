import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../../types';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }: { project: Project }) => {
  const { t } = useTranslation();

  return (
    <article className="group bg-bg-soft dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* تصویر پروژه */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* overlay ظریف روی تصویر */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
      </div>

      {/* محتوای کارت */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* تگ‌های تکنولوژی */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="
                text-xs font-medium
                px-3 py-1 rounded-full
                bg-primary/10 text-primary
                dark:bg-primary-light/10 dark:text-primary-light
                border border-primary/10 dark:border-primary-light/10
                transition-colors
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* دکمه‌های اقدام */}
        <div className="mt-6 flex items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              bg-primary hover:bg-primary-light
              text-white text-sm font-medium
              px-5 py-2.5 rounded-xl
              transition-all duration-300
              shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30
              active:scale-95
            "
          >
            <ExternalLink size={16} />
            {t('projects.demo')}
          </a>
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              border-2 border-primary/20 dark:border-primary-light/20
              text-primary dark:text-primary-light
              hover:bg-primary hover:text-white dark:hover:bg-primary-light dark:hover:text-white
              text-sm font-medium
              px-5 py-2.5 rounded-xl
              transition-all duration-300
              active:scale-95
            "
          >
            <FaGithub size={16} />
            {t('projects.source')}
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;