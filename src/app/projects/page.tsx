import { getYamlData } from '@/lib/data';
import { ExternalLink, Code } from 'lucide-react';

type Project = {
  title: string;
  url: string;
  description: string;
  icon?: string;
  tags?: string[];
};

export default function Projects() {
  const projects = getYamlData<Project[]>('projects.yml');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Projects</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
        A collection of my open-source work and personal projects.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects?.map((project, idx) => (
          <a 
            key={idx} 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl group-hover:scale-110 transition-transform">
                <Code size={24} />
              </div>
              <ExternalLink size={20} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm flex-grow">
              {project.description}
            </p>
            
            {project.tags && (
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
