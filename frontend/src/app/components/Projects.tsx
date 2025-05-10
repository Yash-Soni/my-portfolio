import Link from 'next/link';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "Performance Optimization of Zoca Websites",
      description: "Optimized the performance of Zoca websites to PageSpeed Insights score 90+ from 65 by removing the unused code and images.",
      technologies: ["Next.js", "Lighthouse", "PageSpeed Insights", "Core Web Vitals"],
      liveUrl: "https://test.zoca.com",
    },
    {
      title: "Internal Tool for Website Editing",
      description: "Built an internal tool for our editing team to edit our clients' websites.",
      technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
      // liveUrl: "https://raft-staging.zoca.ai",
    },
    {
      title: "Built Website Templates",
      description: "Built a few website templates for our SMBs clients, so that they can easily get onboard their offline business to online business.",
      technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
      liveUrl: "https://fusion.zoca.com",
      // github: "https://github.com/yourusername/project1",
    },
    // {
    //   title: "First Run Experience",
    //   description: "Built a setup guide for our product, so that our clients can get started with our product on their own after onboarding.",
    //   technologies: ["React.js", "TypeScript"],
    //   link: "https://project2.com",
    //   github: "https://github.com/yourusername/project2",
    // },
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
      <div className="flex justify-center mt-6">
        <Link href="/projects" className="text-blue-500 hover:text-blue-600">
          View All Projects
        </Link>
      </div>
    </section>
  );
} 