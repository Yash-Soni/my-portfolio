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
        '<strong>Team Leadership:</strong> Led a team of three developers to build responsive websites for US-based SMBs.',
        '<strong>Modern Frontend Architecture:</strong> Built scalable solutions using Next.js and TypeScript.',
        '<strong>Performance Optimization:</strong> Improved LCP, FCP, and SEO for better website speed and visibility.',
        '<strong>Internal Tool Development:</strong> Created a website management tool for website administration.',
      ],
    },
    {
      title: 'Software Engineer',
      date: 'Nov, 2021 - June, 2024',
      company: 'Microsoft Viva Goals',
      description: [
        '<strong>Development:</strong> Developed and maintained critical UI features for the Viva Goals webapp',
        '<strong>Leadership:</strong> Spearheaded First Run Experience, Audit Logging in Viva Goals, Organizations Lifecycle UI and many other critical features',
        '<strong>Performance:</strong> Improved webapp performance by 20% through React profiler optimization and efficient hook implementations',
        '<strong>Patent:</strong> Registered a patent for the React Migration feature',
      ],
    },
    {
      title: 'Software Engineer',
      date: 'June, 2021 - Oct, 2021',
      company: 'Ally.io',
      description: [
        '<strong>Development:</strong> Worked as Software Engineer for a SaaS based startup',
        '<strong>Localization:</strong> Worked on Localization/ Globalization of the webapp for different languages',
        '<strong>Migration:</strong> Worked on migrating the legacy codebase in Angular to modern architecture in React',
      ],
    },
  ];

  const educationData = [
    {
      degree: 'Master of Technology in Computer Science',
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
        <h1 className="text-4xl font-bold mb-8 relative animate-fade-in-down">
          <span className="relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full 
              animate-[width-expand_1s_ease-out]"></span>
          </span>
        </h1>
        <div className="prose dark:prose-invert">
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 shadow-lg border border-gray-200 
            dark:border-gray-700 hover:shadow-xl transition-all duration-300 
            animate-fade-in-up hover:scale-[1.02] hover:border-blue-500/50">
            <p className="text-lg leading-relaxed space-y-4 relative">
              <span className="block font-medium text-blue-600 dark:text-blue-400 text-xl mb-4 
                hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300
                before:content-[''] before:absolute before:-left-4 before:top-2 before:w-2 before:h-8 
                before:bg-blue-500/50 before:rounded-full">
                👋 Hello!
              </span>
              <span className="block transition-all duration-500 hover:translate-x-2">
                I am a Senior Frontend Engineer at Zoca, where I build products for SMBs based out of USA.
              </span>
              <span className="block mt-4 transition-all duration-500 hover:translate-x-2">
                I am a passionate developer who loves to build products that are useful and impactful. 
                I am a quick learner and I am always looking to learn new technologies and frameworks.
              </span>
              <span className="block mt-4 transition-all duration-500 hover:translate-x-2">
                {`With over 3 years of experience at companies like Microsoft and Ally.io, I've led teams, 
                developed critical features, and even registered a patent. My expertise spans from building 
                scalable frontend architectures to optimizing web performance and leading complex migrations.`}
              </span>
              <span className="block mt-4 transition-all duration-500 hover:translate-x-2">
                {`I hold a Master's degree in Computer Science from IIT Guwahati and a Bachelor's in Computer 
                Science Engineering, providing me with a strong foundation in both theoretical concepts and 
                practical applications.`}
              </span>
              <span className="block mt-4 font-medium text-gray-600 dark:text-gray-300 
                backdrop-blur-sm bg-white/5 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                Currently working with: 
                <span className="text-blue-500 dark:text-blue-400 ml-2 inline-flex gap-2">
                  <span className="hover:scale-110 transition-transform duration-200">React</span> •
                  <span className="hover:scale-110 transition-transform duration-200">Next.js</span> •
                  <span className="hover:scale-110 transition-transform duration-200">TypeScript</span> •
                  <span className="hover:scale-110 transition-transform duration-200">TailwindCSS</span> •
                </span>
              </span>
            </p>
          </div>

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