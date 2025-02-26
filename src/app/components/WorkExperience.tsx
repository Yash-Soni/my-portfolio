import React from 'react';

interface WorkExperience {
  title: string;
  date: string;
  company: string;
  description: string[];
  logoUrl?: string;
}

const WorkExperienceTimeline = ({ experiences }: { experiences: WorkExperience[] }) => {
  return (
    <div className="w-full mx-auto my-12 p-5 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-xl font-sans">
      <h2 className="text-Left mb-2 text-4xl font-semibold text-gray-800">Work Experience</h2>
      <p className="text-left mb-8 text-gray-600">My professional journey in frontend development</p>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>
        {experiences.map((experience: WorkExperience, index: number) => (
          <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative mb-10`}>
            {/* {experience.logoUrl && <div className="w-1/2 flex items-center justify-center">
              <img 
                src={experience.logoUrl} 
                alt={`${experience.company} logo`}
                className="w-24 h-24 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>} */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-1 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white z-10 shadow-lg"></div>
            <div 
              className={`w-1/2 py-6 ${index % 2 === 0 ? 'pr-12 pl-8 ml-6' : 'pl-12 pr-8 mr-6'} 
                bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-lg 
                border border-blue-100 hover:shadow-xl transition-all duration-300 
                hover:transform hover:scale-[1.02] hover:border-blue-200`}
            >
              <div className="mb-3 text-left">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{experience.title}</h3>
                <span className="text-sm text-blue-600 font-medium">{experience.date}</span>
              </div>
              <p className="mb-4 text-gray-700 font-semibold text-left">{experience.company}</p>
              <ul className="space-y-2 text-gray-600">
                {experience.description.map((desc: string, descIndex: number) => (
                  <li key={descIndex} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2"></span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperienceTimeline;