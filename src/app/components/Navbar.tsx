import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">
            Yash Soni
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
              About
            </Link>
            <Link href="/projects" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
              Contact
            </Link>
            <a
              href="/resume.pdf"
              download="YourName_Resume.pdf"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 