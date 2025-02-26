import Experience from '@/app/components/Experience';
import Projects from '@/app/components/Projects';
import Header from '@/app/components/Header';
import SkillSection from './components/SkillSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl mx-auto backdrop-blur-sm">
        <Header />

        <Experience />
        <Projects />
        <SkillSection />

        {/* <section className="py-10 px-6 backdrop-blur-md bg-white/50 dark:bg-gray-800/50 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {['React', 'Next.js', 'TypeScript', 'Node.js'].map((skill) => (
              <span 
                key={skill} 
                className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </section> */}
      </main>
    </div>
  );
}
