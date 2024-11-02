import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { getAllBlogPosts } from "@/lib/blog";

export default async function BlogPage() {
  const blogs = await getAllBlogPosts();

  return (
    <div className="py-20">
      <h1 className="text-4xl font-extrabold text-center mb-16">
        Zacherina's
      </h1>
      <div className="space-y-12">
        {blogs.map((blog) => (
          <Link 
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="block group"
          >
            <article className="space-y-4 p-6">
              <h2 className="text-3xl font-extrabold group-hover:text-muted-foreground transition-colors">
                {blog.title}
              </h2>
              <time className="text-sm text-muted-foreground block">
                {formatDate(blog.date)}
              </time>
              <p className="text-muted-foreground text-lg">
                {blog.description}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}