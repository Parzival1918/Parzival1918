'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

type NavItem = {
  name: string;
  link: string;
};

export function Navbar({ navItems }: { navItems: NavItem[] }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-4 z-50 w-full max-w-3xl mx-auto px-4 sm:px-6">
      <div className="backdrop-blur-xl bg-white/40 dark:bg-slate-900/40 border border-white/40 dark:border-slate-800/60 shadow-lg shadow-black/5 rounded-3xl px-6 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between sm:rounded-full">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-slate-100 drop-shadow-sm" onClick={() => setIsOpen(false)}>
            PJR
          </Link>
          <div className="flex items-center sm:hidden gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="relative px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors rounded-full hover:text-slate-900 dark:hover:text-white"
            >
              <span className="relative z-10">{item.name}</span>
              {pathname === item.link && (
                <motion.div
                  layoutId="active-blur"
                  className="absolute inset-0 bg-blue-500/30 dark:bg-blue-400/30 blur-md rounded-full -z-0"
                />
              )}
            </Link>
          ))}
          <div className="pl-4 ml-2 border-l border-slate-300/50 dark:border-slate-700/50">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="sm:hidden overflow-hidden flex flex-col space-y-2 mt-4"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
                    pathname === item.link
                      ? 'bg-blue-500/10 text-blue-700 dark:text-blue-300'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
