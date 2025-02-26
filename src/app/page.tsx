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

      <footer className="max-w-4xl mx-auto mt-16 py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Yash Soni. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/Yash-Soni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ysoni264"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:yashjpsoni264@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
