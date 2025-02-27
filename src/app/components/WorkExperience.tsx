import React from 'react';
import { motion } from 'framer-motion';

interface WorkExperience {
  title: string;
  date: string;
  company: string;
  description: string[];
  logoUrl?: string;
}

const WorkExperienceTimeline = ({ experiences }: { experiences: WorkExperience[] }) => {
  return (
    <div className="w-full mx-auto my-12 p-4 md:p-5 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-xl font-sans">
      <h2 className="text-Left mb-2 text-3xl md:text-4xl font-semibold text-gray-800">Work Experience</h2>
      <p className="text-left mb-8 text-gray-600">My professional journey in frontend development</p>
      <div className="relative">
        {/* Timeline line - hidden on mobile, visible on desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>
        
        {experiences.map((experience: WorkExperience, index: number) => (
          <motion.div 
            key={index} 
            className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} relative mb-8 md:mb-10`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.5,
                delay: 0.1 * index
              }
            }}
            viewport={{ once: true, margin: "-40px" }}
          >
            {/* Timeline dot - hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-1 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white z-10 shadow-lg"></div>
            
            <div 
              className={`w-full md:w-1/2 py-4 md:py-6 px-4 
                ${index % 2 === 0 ? 'md:pr-12 md:pl-8 md:ml-6' : 'md:pl-12 md:pr-8 md:mr-6'} 
                bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-lg 
                border border-blue-100 hover:shadow-xl transition-all duration-300 
                hover:transform hover:scale-[1.02] hover:border-blue-200`}
            >
              <div className="mb-3 text-left">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">{experience.title}</h3>
                <span className="text-sm text-blue-600 font-medium">{experience.date}</span>
              </div>
              <p className="mb-4 text-gray-700 font-semibold text-left">{experience.company}</p>
              <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                {experience.description.map((desc: string, descIndex: number) => (
                  <li key={descIndex} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span className="text-left" dangerouslySetInnerHTML={{ __html: desc }}></span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperienceTimeline;