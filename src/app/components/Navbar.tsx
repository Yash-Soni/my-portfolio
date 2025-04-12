'use client';

import Link from 'next/link';
import ResumeButton from './ResumeButton';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">
            Yash Soni
          </Link>
          
          {/* Hamburger button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
              About Me
            </Link>
            <Link href="/projects" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
              Projects
            </Link>
            {/* <Link href="/contact" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
              Contact
            </Link> */}
            {/* <Link href="/blogs" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
              Blogs
            </Link> */}
            <ResumeButton />
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 md:hidden">
              <div className="flex flex-col justify-center items-center p-4 space-y-4">
              <Link 
                  href="/" 
                  className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Me
                </Link>
                <Link 
                  href="/projects" 
                  className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                {/* <Link 
                  href="/contact" 
                  className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link> */}
                <div onClick={() => setIsMenuOpen(false)}>
                  <ResumeButton />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
} 