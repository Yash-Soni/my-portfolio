import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
      {imageUrl && <Image
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {githubUrl && <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          >
            GitHub
          </a>}
          {liveUrl && <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 dark:text-green-400 hover:text-green-500 dark:hover:text-green-500"
          >
            Live Demo
          </a>}
        </div>
      </div>
    </div>
  );
} 

export default ProjectCard;

