import { formatDate } from "@/lib/utils";

interface BlogPostProps {
  title: string;
  date: string;
  children: React.ReactNode;
}

export function BlogPost({ title, date, children }: BlogPostProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <time className="text-muted-foreground">
          {formatDate(date)}
        </time>
      </header>
      <div className="prose dark:prose-invert max-w-none">
        {children}
      </div>
    </article>
  );
}