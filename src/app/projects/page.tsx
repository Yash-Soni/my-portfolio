interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Internal Tool for Website Editing",
      description: "Built an internal tool for our editing team to edit our clients' websites.",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      link: "https://raft-staging.zoca.ai",
    },
    {
      title: "Built Website Templates",
      description: "Built a few website templates for our SMBs clients, so that they can easily get onboard their offline business to online business.",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      link: "https://fusion.zoca.com",
      github: "https://github.com/yourusername/project1",
    },
    {
      title: "First Run Experience",
      description: "Built a setup guide for our product, so that our clients can get started with our product on their own after onboarding.",
      technologies: ["React.js", "TypeScript"],
      link: "https://project2.com",
      github: "https://github.com/yourusername/project2",
    },
    // Add more projects as needed
  ];

  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto py-20">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                  >
                    Live Demo →
                  </a>
                )}
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 