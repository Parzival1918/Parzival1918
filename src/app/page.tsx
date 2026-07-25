import Image from 'next/image';
import Link from 'next/link';
import { getYamlData } from '@/lib/data';
import { GraduationCap } from 'lucide-react';
import { FaGithub, FaLinkedin, FaOrcid } from 'react-icons/fa6';
import GlowCard from '@/components/GlowCard';

export default function Home() {
  const projects = getYamlData<any[]>('projects.yml');
  const publications = getYamlData<any[]>('publications.yml');
  const links = getYamlData<{ social: { github: string; scholar: string; orcid: string; linkedin: string } }>('links.yml');

  return (
    <div>
      
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-32 sm:pb-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 animate-fade-in">
            Pedro Juan Royo
          </h1>
          <p className="text-xl sm:text-2xl font-light mb-2 text-slate-700 dark:text-slate-300">
            MEng Materials Science & Engineering
          </p>
          <p className="text-lg sm:text-xl font-medium text-slate-500 dark:text-slate-400">
            PhD Student Computational Chemistry @ Day Group
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-8">
            <a href={links.social?.scholar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all text-sm font-medium text-slate-700 dark:text-slate-300">
              <GraduationCap size={16} /> Scholar
            </a>
            <a href={links.social?.orcid} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-green-400 dark:hover:border-green-500 hover:shadow-md transition-all text-sm font-medium text-slate-700 dark:text-slate-300">
              <FaOrcid size={16} /> ORCID
            </a>
            <a href={links.social?.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-400 dark:hover:border-slate-500 hover:shadow-md transition-all text-sm font-medium text-slate-700 dark:text-slate-300">
              <FaGithub size={16} /> GitHub
            </a>
            <a href={links.social?.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-md transition-all text-sm font-medium text-slate-700 dark:text-slate-300">
              <FaLinkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative flex-shrink-0 group">
          {/* Glowing Blur Radius */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full border-4 border-white dark:border-slate-900 overflow-hidden shadow-2xl">
            <Image
              src="/pedro.jpg"
              alt="Pedro Juan Royo"
              fill
              className="object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
              priority
            />
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <GlowCard className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/50 dark:border-slate-800/50">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900 dark:text-white">Welcome to my space!</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-3xl">
            I explore the complex, fascinating energy landscapes of molecular crystals. Using advanced <strong className="text-blue-600 dark:text-blue-400 font-medium">Monte Carlo threshold algorithms</strong> and computational chemistry workflows, my research aims to push the boundaries of <strong className="text-purple-600 dark:text-purple-400 font-medium">crystal structure prediction</strong>. Feel free to explore my background, read my publications, or browse my projects!
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              About me &rarr;
            </Link>
            <Link href="/projects" className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 rounded-full font-medium transition-all shadow-sm hover:shadow-md text-slate-700 dark:text-slate-300">
              Projects
              <span className="bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs py-0.5 px-2 rounded-full">{projects?.length || 0}</span>
            </Link>
            <Link href="/publications" className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 rounded-full font-medium transition-all shadow-sm hover:shadow-md text-slate-700 dark:text-slate-300">
              Publications
              <span className="bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs py-0.5 px-2 rounded-full">{publications?.length || 0}</span>
            </Link>
            <a href="/CV.pdf" download className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 rounded-full font-medium transition-all shadow-md hover:shadow-lg">
              CV (PDF)
            </a>
          </div>
        </GlowCard>
      </div>
    </div>
  );
}
