import { getYamlData } from '@/lib/data';

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
      <h1 className="text-4xl font-bold mb-12 text-slate-900 dark:text-white">About Me</h1>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-2">Education</h2>
        <div className="space-y-8">
          {cv.education?.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow">
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
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-2">Experience</h2>
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {cv.experience?.map((item, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow">
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
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-2">Honours & Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cv.honours_awards?.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
              <h3 className="font-bold text-slate-900 dark:text-slate-100">{item.title}</h3>
              <div className="text-slate-500 dark:text-slate-400 text-sm mb-2">{item.institution} ({item.date})</div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-2">Skills</h2>
          <div className="flex flex-col gap-4">
            {cv.skills?.map((skill, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-slate-800 dark:text-slate-200">{skill.name}</h3>
                <p className="text-slate-600 dark:text-slate-400">{skill.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-2">Languages</h2>
          <div className="flex flex-wrap gap-3">
            {cv.Languages?.map((lang, idx) => (
              <div key={idx} className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-lg font-medium text-slate-700 dark:text-slate-300">
                {lang.name} <span className="opacity-70 text-sm ml-1">{lang.level}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
