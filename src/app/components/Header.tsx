'use client';  // Add this at the top to mark as Client Component

import ResumeButton from './ResumeButton';
import { useState, useEffect, useMemo } from 'react';

export default function Header() {
  const titles = useMemo(() => [
    "Senior Frontend Engineer",
    "UI-UX Developer",
    "React Specialist",
    "Web Developer"
  ], []);
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    if (isTyping) {
      if (displayText.length < currentTitle.length) {
        const timeoutId = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeoutId);
      } else {
        const timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Increased pause time to 2 seconds after completing the word
        return () => clearTimeout(timeoutId);
      }
    } else {
      if (displayText.length === 0) {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      } else {
        const timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [displayText, isTyping, currentTitleIndex, titles]);

  return (
    <section className="py-32 text-center relative">
      {/* Decorative background element */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-900">
        {/* Grid overlay with interactive cells */}
        <div className="w-full h-full grid" style={{ gridTemplateColumns: 'repeat(auto-fill, 24px)', gridTemplateRows: 'repeat(auto-fill, 24px)' }}>
          {[...Array(1000)].map((_, i) => (
            <div
              key={i}
              className="border border-[#8080800a] cursor-pointer hover:bg-black/10 dark:hover:bg-white/10"
              style={{
                backgroundColor: 'transparent',
                transition: 'background-color 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Main content */}
      <div className="space-y-8">
        {/* Name and role */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Yash Soni
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 tracking-wide">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Brief introduction */}
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Crafting exceptional digital experiences with a perfect blend of code and design. 
          Specialized in building modern, responsive, and accessible web applications.
        </p>

        {/* Quick stats/highlights */}
        <div className="flex justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-blue-600 dark:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <span className="text-gray-700 dark:text-gray-300">3+ Years Experience</span>
          </div>
          {/* <div className="flex items-center gap-2">
            <span className="text-blue-600 dark:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </span>
            <span className="text-gray-700 dark:text-gray-300">50+ Projects Delivered</span>
          </div> */}
          {/* <div className="flex items-center gap-2">
            <span className="text-blue-600 dark:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <span className="text-gray-700 dark:text-gray-300">Freelance Available</span>
          </div> */}
        </div>
        {/* Skills section */}
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "React", "TypeScript", "Next.js", "JavaScript", "Tailwind CSS", "REST API",
              "Git", "Docker"
            ].map((skill, index) => (
              <span
                key={skill}
                className={`
                  px-4 py-2 rounded-full text-sm relative overflow-hidden
                  bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                  dark:from-blue-500/20 dark:to-purple-500/20
                  text-gray-700 dark:text-gray-200
                  hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20
                  transform transition-all duration-300 ease-in-out
                  border border-blue-200/30 dark:border-purple-500/30
                  backdrop-blur-sm
                `}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <span className="relative z-10">{skill}</span>
                <div 
                  className={`absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 
                            hover:from-blue-600/10 hover:to-purple-600/10 
                            dark:hover:from-blue-400/20 dark:hover:to-purple-400/20 
                            transition-all duration-300`}
                />
              </span>
            ))}
          </div>
        </div>

        <ResumeButton />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
} 