import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import { getBlogBySlug } from "@/lib/blog";
import { MDXRemote } from 'next-mdx-remote/rsc'
import '@/app/styles/markdown.css'

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="py-20">
      <div className="max-w-2xl mx-auto px-4">
        <div className="space-y-2">
          <h1 className="text-[28px] font-black tracking-tight text-foreground font-montserrat">
            {blog.title}
          </h1>
          <time className="text-[13px] text-muted-foreground block">
            {formatDate(blog.date)}
          </time>
          {blog.description && (
            <p className="mt-1 text-muted-foreground">
              {blog.description}
            </p>
          )}
        </div>
        <div className="mt-8 markdown">
          <MDXRemote source={blog.content} />
        </div>
      </div>
    </article>
  );
}