const Footer = () => {
  return (
    <footer className="max-w-4xl mx-auto mt-16 py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Yash Soni. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a
            href="https://github.com/Yash-Soni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ysoni264"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:yashjpsoni264@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 