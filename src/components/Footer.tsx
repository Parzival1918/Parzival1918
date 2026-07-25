import { GraduationCap } from 'lucide-react';
import { FaGithub, FaLinkedin, FaOrcid } from 'react-icons/fa6';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Pedro Juan Royo. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/Parzival1918"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://uk.linkedin.com/in/pedro-juan-royo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://scholar.google.com/citations?user=Cv8tC88AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="Google Scholar"
          >
            <GraduationCap size={20} />
          </a>
          <a
            href="https://orcid.org/0009-0008-5419-1857"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="ORCID"
          >
            <FaOrcid size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
