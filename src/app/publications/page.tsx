import { getYamlData } from '@/lib/data';
import { BookOpen, ExternalLink, FileText } from 'lucide-react';
import GlowCard from '@/components/GlowCard';

type Publication = {
  title: string;
  authors: string[];
  date: string;
  journal: string;
  doi?: string;
  url?: string;
  preprint_doi?: string;
  preprint_url?: string;
  graphical_abstract?: string;
  abstract: string;
};

export default function Publications() {
  const publications = getYamlData<Publication[]>('publications.yml');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Publications</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
        My published research, preprints, and academic contributions.
      </p>
      
      <div className="space-y-8">
        {publications?.map((pub, idx) => (
          <GlowCard 
            key={idx} 
            className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/50 dark:border-slate-800/50 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {pub.title}
                </h2>
                
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  {pub.authors.map((author, i) => (
                    <span key={i} className={author === "Pedro Juan Royo" ? "font-semibold text-blue-600 dark:text-blue-400" : ""}>
                      {author}{i < pub.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                
                <div className="flex flex-wrap items-center gap-3 mb-6 text-sm">
                  <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full font-medium">
                    <BookOpen size={14} />
                    {pub.journal} ({pub.date})
                  </span>
                  
                  {pub.url && (
                    <a href={pub.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline">
                      <ExternalLink size={14} />
                      DOI: {pub.doi}
                    </a>
                  )}
                  
                  {pub.preprint_url && (
                    <a href={pub.preprint_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline">
                      <FileText size={14} />
                      Preprint
                    </a>
                  )}
                </div>
                
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wider">Abstract</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {pub.abstract}
                  </p>
                </div>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}
