import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/lib/blog";
import BlogPost from "@/app/components/BlogPost";

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return <BlogPost {...blog} />;
}