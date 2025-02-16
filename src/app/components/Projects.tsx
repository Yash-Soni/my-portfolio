import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "Built Website Templates",
      description: "Built a few website templates for our SMBs clients, so that they can easily get onboard their offline business to online business.",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      liveUrl: "https://fusion.zoca.com",
      // github: "https://github.com/yourusername/project1",
    },
    {
      title: "First Run Experience",
      description: "Built a setup guide for our product, so that our clients can get started with our product on their own after onboarding.",
      technologies: ["React.js", "TypeScript"],
      link: "https://project2.com",
      github: "https://github.com/yourusername/project2",
    },
    // {
    //   title: "Project 2",
    //   description: "A brief description of project 2",
    //   technologies: ["Next.js", "Node.js", "MongoDB"],
    //   imageUrl: "/project2.jpg",
    //   githubUrl: "https://github.com/yourusername/project2",
    //   liveUrl: "https://project2.com"
    // }
  ];

  return (
    <section className="py-10 px-6 backdrop-blur-md bg-white/50 dark:bg-gray-800/50 rounded-xl shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
} 