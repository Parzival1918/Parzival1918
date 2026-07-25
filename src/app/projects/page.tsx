import { getYamlData } from '@/lib/data';
import { ExternalLink, Code, GitPullRequest, BarChart, Atom, Book } from 'lucide-react';
import GlowCard from '@/components/GlowCard';

type Project = {
  title: string;
  url: string;
  description: string;
  icon?: string;
  tags?: string[];
};

type Contribution = {
  title: string;
  url: string;
  project: string;
  description: string;
  date: string;
};

const iconMap: Record<string, React.ElementType> = {
  'fa-solid fa-chart-bar': BarChart,
  'fa-solid fa-atom': Atom,
  'fa-solid fa-book': Book,
};

export default function Projects() {
  const projects = getYamlData<Project[]>('projects.yml');
  const contributions = getYamlData<Contribution[]>('contributions.yml');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Projects</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
        A collection of my open-source work and personal projects.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {projects?.map((project, idx) => {
          const Icon = project.icon && iconMap[project.icon] ? iconMap[project.icon] : Code;
          return (
            <a 
              key={idx} 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <GlowCard className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 shadow-sm border border-slate-200/50 dark:border-slate-800/50 hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl group-hover:scale-110 transition-transform">
                    <Icon size={24} />
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
                        className="text-xs font-medium bg-slate-100 dark:bg-slate-800/50 dark:border dark:border-slate-700/50 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </GlowCard>
            </a>
          );
        })}
      </div>

      {contributions && contributions.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-2">
            Open Source Contributions
          </h2>
          <div className="space-y-4">
            {contributions.map((contribution, idx) => (
              <a 
                key={idx} 
                href={contribution.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block"
              >
                <GlowCard className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl p-5 shadow-sm border border-slate-200/50 dark:border-slate-800/50 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-3 gap-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg">
                        <GitPullRequest size={20} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {contribution.project}
                      </h3>
                    </div>
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-full w-fit">
                      {contribution.date}
                    </div>
                  </div>
                  
                  <div className="ml-0 sm:ml-12">
                    <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-1">{contribution.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {contribution.description}
                    </p>
                  </div>
                </GlowCard>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
