'use client'

import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiPostman,
} from 'react-icons/si';
import WorkExperienceTimeline from '../components/WorkExperience';
import Education from '../components/Education';

export default function About() {
  const technologies = [
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    // { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    // { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    // { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    // { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  ];

  const experienceData = [
    {
      title: 'Senior Frontend Developer',
      date: 'Nov, 2024 - Present',
      company: 'Zoca',
      description: [
        'Led team of 3 developers in building responsive web applications',
        'Implemented modern frontend architecture using React and TypeScript',
        'Improved site performance by 40% through optimization techniques',
      ],
    },
    {
      title: 'Software Engineer',
      date: 'Nov, 2021 - June, 2024',
      company: 'Microsoft Viva Goals',
      description: [
        'Developed and maintained multiple client websites',
        'Created reusable component library using Vue.js',
        'Collaborated with UX team to implement responsive designs',
      ],
    },
    {
      title: 'Software Engineer',
      date: 'June, 2021 - Oct, 2021',
      company: 'Ally.io',
      description: [
        'Built and maintained client websites using HTML, CSS, and JavaScript',
        'Implemented responsive designs and mobile-first approaches',
        'Assisted in the development of internal tools and applications',
      ],
    },
  ];

  const educationData = [
    {
      degree: 'Master of Science in Computer Science',
      date: '2019 - 2021',
      institution: 'Indian Institute of Technology, Guwahati',
      // description: 'Specialized in Artificial Intelligence and Machine Learning.',
    },
    {
      degree: 'Bachelor of Engineering in Computer Science and Engineering',
      date: '2015 - 2019',
      institution: 'Shri Vaishnav Institute of Technology and Science, Indore',
      // description: 'Focused on web development and database management.',
    },
    // {
    //   degree: 'Higher Secondary',
    //   date: '2015',
    //   institution: 'Vindhyachal Academy, Dewas (M.P.)',
      // description: 'Completed with honors in Science stream.',
    // },
  ];

  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto pt-20 pb-4">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="prose dark:prose-invert">
          <p>
            I am a Senior Frontend Engineer at Zoca, where I build products for SMBs based out of USA. I am a passionate developer who loves to build products that are useful and impactful. 
            I am a quick learner and I am always looking to learn new technologies and frameworks.
            Currently, the technologies I am working with are React, TypeScript, TailwindCSS, Next.js.
          </p>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-8">Languages & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
              {technologies.map((tech) => (
                <div 
                  key={tech.name}
                  className="group relative flex flex-col items-center justify-center p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300"
                >
                  <tech.icon 
                    className="w-12 h-12 md:w-16 md:h-16 transition-all duration-300 group-hover:scale-110 group-hover:transform" 
                    style={{ color: tech.color }}
                  />
                  <span className="mt-3 text-sm font-medium opacity-100 transition-opacity duration-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <WorkExperienceTimeline experiences={experienceData} />

          <Education qualifications={educationData} />

        </div>
      </main>
    </div>
  );
} 