import { getYamlData } from '@/lib/data';
import GlowCard from '@/components/GlowCard';

type CVData = {
  experience: any[];
  education: any[];
  honours_awards: any[];
  skills: any[];
  Languages: any[];
};

export default function About() {
  const cv = getYamlData<CVData>('cv.yml');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-0">About Me</h1>
        <a className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-sm hover:shadow-md shrink-0" href="/CV.pdf" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
          Download Full CV (PDF)
        </a>
      </div>
      
      <div className="mb-16">
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Hello! I&apos;m <strong className="text-slate-900 dark:text-white font-semibold">Pedro Juan Royo</strong>, a PhD student in Computational Chemistry at the Day Group in Southampton (UK). I hold a Master of Engineering in Materials Science & Engineering from the University of Sheffield. My research focuses on using the Monte Carlo threshold algorithm to explore the crystal packing energy landscapes of molecular crystals, and see how we can use this information in a crystal structure prediction workflow.
        </p>
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
          In addition to my research, I have a strong interest in scientific programming and open-source software development. During my time in the <a className="text-blue-600 dark:text-blue-400 font-medium hover:underline decoration-2 underline-offset-4" href="https://mol-cspy.gitlab.io/daygroup-site/" target="_blank" rel="noopener noreferrer">Day Group</a>, I have contributed to the <a className="text-blue-600 dark:text-blue-400 font-medium hover:underline decoration-2 underline-offset-4" href="https://gitlab.com/mol-cspy/mol-cspy" target="_blank" rel="noopener noreferrer">mol-CSPy</a> codebase and lead group meetings to discuss code development. Some of my other projects can be found on my <a className="text-blue-600 dark:text-blue-400 font-medium hover:underline decoration-2 underline-offset-4" href="https://github.com/Parzival1918" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-2">Education</h2>
        <div className="space-y-8">
          {cv.education?.map((item, idx) => (
            <GlowCard key={idx} className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 shadow-sm border border-slate-200/50 dark:border-slate-800/50 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{item.degree}</h3>
              <div className="text-slate-600 dark:text-slate-400 font-medium mb-3 flex justify-between items-center flex-wrap gap-2">
                <span>{item.institution}</span>
                <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full">
                  {item.start_date} - {item.end_date}
                </span>
              </div>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                {item.details?.map((detail: string, i: number) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </GlowCard>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-2">Experience</h2>
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {cv.experience?.map((item, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200/50 dark:border-slate-800/50 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-3 h-3 bg-blue-500 rounded-full shadow-sm"></div>
              </div>
              
              <GlowCard className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl shadow-sm border border-slate-200/50 dark:border-slate-800/50 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row justify-between mb-2">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg">{item.position}</h3>
                </div>
                <div className="text-slate-500 dark:text-slate-400 font-medium mb-3">
                  {item.location} &bull; <span className="text-sm">{item.start_date} - {item.end_date}</span>
                </div>
                <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 text-sm">
                  {item.details?.map((detail: string, i: number) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </GlowCard>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-2">Honours & Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cv.honours_awards?.map((item, idx) => (
            <GlowCard key={idx} className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-xl p-5 shadow-sm border border-slate-200/50 dark:border-slate-800/50 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
              <h3 className="font-bold text-slate-900 dark:text-slate-100">{item.title}</h3>
              <div className="text-slate-500 dark:text-slate-400 text-sm mb-2">{item.institution} ({item.date})</div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.details}</p>
            </GlowCard>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-2">Skills</h2>
          <div className="flex flex-col gap-4">
            {cv.skills?.map((skill, idx) => (
              <GlowCard key={idx} className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-xl p-5 shadow-sm border border-slate-200/50 dark:border-slate-800/50 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">{skill.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{skill.details}</p>
              </GlowCard>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-2">Languages</h2>
          <div className="flex flex-wrap gap-3">
            {cv.Languages?.map((lang, idx) => (
              <GlowCard key={idx} className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 px-4 py-2 rounded-xl font-medium text-slate-700 dark:text-slate-300 shadow-sm">
                {lang.name} <span className="opacity-70 text-sm ml-1">{lang.level}</span>
              </GlowCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
