export default function ResumeButton() {
  return (
    <a 
      href="/Yash_Resume_March_25.pdf" 
      download="Yash_Resume.pdf"
      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 
        hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg 
        transition-all duration-200 ease-in-out transform hover:scale-105
        hover:shadow-lg shadow-md shadow-blue-500/30 hover:shadow-blue-600/40
        group relative overflow-hidden"
    >
      {/* Shine effect overlay */}
      <div className="absolute inset-0 w-[10%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent 
        -translate-x-full group-hover:translate-x-[1000%] transition-transform duration-1000 ease-in-out">
      </div>

      {/* Button content */}
      <span className="font-semibold relative z-10">My Resume</span>
      <svg 
        className="w-5 h-5 ml-2 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 
          transition-transform duration-200 relative z-10" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    </a>
  );
} 