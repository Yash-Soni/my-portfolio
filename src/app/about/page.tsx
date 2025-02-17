'use client'

import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiPython,
  SiGit,
  SiDocker,
  SiMysql,
  SiMongodb 
} from 'react-icons/si';

export default function About() {
  const technologies = [
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    // { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    // { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    // { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    // { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  ];

  return (
    <div className="min-h-screen p-8">
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
      <main className="max-w-4xl mx-auto py-20">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="prose dark:prose-invert">
          <p>
            I am a Senior Frontend Engineer at Zoca, where I build products for SMBs based out of USA. I am a passionate developer who loves to build products that are useful and impactful. 
            I am a quick learner and I am always looking to learn new technologies and frameworks.
            Currently, the technologies I am working with are React, TypeScript, TailwindCSS, Next.js.
          </p>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Languages & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
              {technologies.map((tech) => (
                <div 
                  key={tech.name}
                  className="group relative flex flex-wrap items-center justify-center"
                >
                  <tech.icon 
                    className="w-12 h-12 md:w-20 md:h-20 transition-transform duration-300 ease-in-out group-hover:scale-110 animate-[float_1s_ease-in-out_infinite]" 
                    style={{ color: tech.color }}
                  />
                  <span className="absolute -bottom-6 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 