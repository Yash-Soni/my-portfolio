import React from 'react';
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { GoCode } from "react-icons/go";

interface ProjectCardProps {
  title: string;
  description: string;
  keyPoints: string[];
  demoUrl: string;
  githubUrl: string;
  location: string;
  image: string;
  technologies: string[];
}

function ProjectDetailCard({
  title,
  description,
  keyPoints,
  demoUrl,
  githubUrl,
  location,
  technologies,
  // image
}: ProjectCardProps) {
  return (
    <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* {image && <div className="relative h-48 overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>} */}
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <div className="flex items-center text-gray-600 space-x-2">
            <HiLocationMarker size={18} />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-6">{description}</p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <AiFillStar size={18} className="text-yellow-500" />
            Key Features
          </h3>
          <ul className="space-y-2">
            {keyPoints?.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full" />
                <span className="text-gray-600">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <GoCode size={18} className="text-purple-500" />
            Tools/ Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies?.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {demoUrl && <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <FiExternalLink size={18} />
            Live Demo
          </a>}
          {githubUrl && <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
          >
            <FaGithub size={18} />
            View Code
          </a>}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailCard;