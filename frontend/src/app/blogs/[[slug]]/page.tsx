// import { PageProps } from "next";
import { Blog } from "../page";

// type BlogPageProps = {
//   blog: Blog;
//   searchParams?: { [key: string]: string | string[] | undefined };
// };

function BlogPost({ blog }: { blog: Blog }) {
  // This is a placeholder. You would typically fetch the blog content based on the slug
  const displayBlog = {
    title: blog.title,
    content: blog.description,
    date: blog.date
  };

  return (
    <main className="max-w-4xl mx-auto pt-24 pb-4 px-4">
      <article className="prose dark:prose-invert lg:prose-xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{displayBlog.title}</h1>
        <div className="text-gray-600 dark:text-gray-400 mb-8">
          {new Date(blog.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
        <div className="mt-8">
          {displayBlog.content}
        </div>
      </article>
    </main>
  );
}

// This is optional but recommended for static pages
export async function generateStaticParams() {
  // In a real application, you would fetch this from your CMS or database
  const slugs = [
    "understanding-react-server-components",
    "power-of-nextjs-app-router",
    "mastering-typescript-react"
  ];

  return slugs.map((slug) => ({
    slug: slug,
  }));
} 

export default BlogPost;