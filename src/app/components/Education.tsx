import React from 'react';

interface Qualification {
  degree: string;
  date: string;
  institution: string;
  description?: string;
}

const EducationTimeline = ({ qualifications }: { qualifications: Qualification[] }) => {
  return (
    <div className="w-full mx-auto my-12 p-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-xl font-sans">
      <h2 className="text-left mb-8 text-3xl font-extrabold text-gray-800 tracking-wide">
        Educational Journey
      </h2>
      <div className="relative md:pl-8">
        {/* <div className="absolute top-0 bottom-0 left-3 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div> */}
        {qualifications?.map((qualification: Qualification, index: number) => (
          <div
            key={index}
            className="relative mb-12 pl-10"
          >
            <div className="absolute top-1 left-[-10px] w-6 h-6 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full border-2 border-white shadow"></div>
            <div className="w-full left-0">
              <div className="flex justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-800 w-[80%]">
                  {qualification.degree}
                </h3>
                <span className="text-gray-600">{qualification.date}</span>
              </div>
              <p className="mb-2 text-gray-700 italic">
                {qualification.institution}
              </p>
              <p className="text-gray-700">{qualification.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="w-24 h-0.5 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-gray-600 mb-6">Let&apos;s connect and discuss opportunities!</p>
        <div className="flex justify-center gap-4">
          <a 
            href="https://linkedin.com/in/ysoni264" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-[#0077b5] hover:bg-[#006396] 
              text-white font-medium rounded-lg transition-all duration-200 hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>Connect on LinkedIn</span>
          </a>
          <a 
            href="https://github.com/Yash-Soni" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-[#24292e] hover:bg-[#1b1f23] 
              text-white font-medium rounded-lg transition-all duration-200 hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>View My Projects</span>
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Open to exciting opportunities and collaborations
        </p>
      </div>
    </div>
  );
};

export default EducationTimeline;