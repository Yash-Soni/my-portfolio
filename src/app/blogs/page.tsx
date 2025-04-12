import BlogCard from '../components/BlogCard';

// This would typically come from your CMS or API
const blogs = [
  {
    title: "Understanding React Server Components",
    description: "React Server Components are a new feature that allows you to write components that run only on the server. This can help reduce the bundle size and improve performance.",
    slug: "understanding-react-server-components"
  },
  {
    title: "The Power of Next.js App Router",
    description: "Next.js 13 introduced a new App Router with revolutionary features like nested layouts, server components, streaming, and more. Let's explore how it transforms web development.",
    slug: "power-of-nextjs-app-router"
  },
  {
    title: "Mastering TypeScript for React",
    description: "TypeScript has become an essential tool for React developers. Learn how to leverage TypeScript's type system to write more maintainable and error-free React applications.",
    slug: "mastering-typescript-react"
  }
];

export default function Blogs() {
  return (
    <main className="max-w-4xl mx-auto pt-24 pb-4 px-4">
      <h1 className="text-4xl font-bold mb-8 relative animate-fade-in-down">
        <span className="relative inline-block">
          Blog Posts
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full 
            animate-[width-expand_1s_ease-out]"></span>
        </span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.slug}
            title={blog.title}
            description={blog.description}
            slug={blog.slug}
          />
        ))}
      </div>
    </main>
  );
}
