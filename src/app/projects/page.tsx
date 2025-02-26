import ProjectDetailCard from "../components/ProjectDetailCard";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  keyPoints: string[];
  link?: string;
  github?: string;
  location: string;
  image?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Internal Tool for Website Editing",
      description: "Built an internal tool for our editing team to edit our clients' websites.",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      keyPoints: [
        "Streamlined website editing process",
        "Improved team productivity",
        "Real-time preview capabilities"
      ],
      link: "https://raft-staging.zoca.ai",
      location: "Zoca (Timely.ai)",
    },
    {
      title: "Built Website Templates",
      description: "Built a few website templates for our SMBs clients, so that they can easily get onboard their offline business to online business.",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      keyPoints: [
        "Customizable templates",
        "Enhanced user experience",
        "Responsive design"
      ],
      link: "https://fusion.zoca.com",
      // github: "https://github.com/yourusername/project1",
      location: "Zoca (Timely.ai)",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Deactivation, Deletion and Reactivation of Organizations",
      description: "Built a feature for our product at Viva Goals, so that our clients can deactivate, delete and reactivate organizations for their users.",
      technologies: ["React", "TypeScript", "Ruby on Rails"],
      keyPoints: [
        "Streamlined organization management in UI",
        "Improved user experience",
        "Enhanced security"
      ],
      location: "Microsoft Viva Goals",
    },
    {
      title: "First Run Experience",
      description: "Built a setup guide for our product, so that our clients can get started with our product on their own after onboarding.",
      technologies: ["React.js", "TypeScript", "Ruby on Rails"],
      keyPoints: [
        "Simplified onboarding process",
        "Improved user satisfaction",
        "Enhanced product adoption"
      ],
      location: "Microsoft Viva Goals",
    },
    // Add more projects as needed
  ];

  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto py-20">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <ProjectDetailCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              keyPoints={project.keyPoints}
              demoUrl={project.link || ''}
              githubUrl={project.github || ''}
              location={project.location}
              image={project.image || ''}
            />
          ))}
        </div>
      </main>
    </div>
  );
} 