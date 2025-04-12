import Link from 'next/link';

interface BlogCardProps {
  title: string;
  description: string;
  slug: string;
}

export default function BlogCard({ title, description, slug }: BlogCardProps) {
  return (
    <Link 
      href={`/blogs/${slug}`}
      className="block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-200 dark:border-gray-700"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            {title}
          </h2>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
        <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
} 