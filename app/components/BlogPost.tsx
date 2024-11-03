import { MDXRemote } from 'next-mdx-remote/rsc'
import { formatDate } from "@/lib/utils"
import remarkSmartypants from "remark-smartypants"
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from "rehype-pretty-code"
import '@/app/styles/markdown.css'
import { Pre } from '@/app/components/Pre'

const components = {
  pre: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => (
    <Pre {...props}>{props.children}</Pre>
  ),
  table: (props: any) => (
    <div className="my-6 w-full overflow-x-auto">
      <table className="w-full border-collapse" {...props} />
    </div>
  ),
  td: (props: any) => (
    <td className="border border-border px-4 py-2 text-sm" {...props} />
  ),
  th: (props: any) => (
    <th className="border border-border bg-muted px-4 py-2 text-sm font-semibold" {...props} />
  ),
}

interface BlogPostProps {
  title: string;
  date: string;
  description?: string;
  content: string;
}

export default function BlogPost({ title, date, description, content }: BlogPostProps) {
  return (
    <article className="py-20">
      <div className="max-w-2xl mx-auto px-4">
        <div className="space-y-2">
          <h1 className="text-[28px] font-black tracking-tight text-foreground font-montserrat">
            {title}
          </h1>
          <time className="text-[13px] text-muted-foreground block">
            {formatDate(date)}
          </time>
          {description && (
            <p className="mt-1 text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        <div className="mt-8 markdown">
          <MDXRemote 
            source={content}
            components={components}
            options={{
              mdxOptions: {
                remarkPlugins: [
                  remarkSmartypants,
                  remarkGfm
                ],
                rehypePlugins: [
                  [rehypePrettyCode, {
                    theme: 'github-dark',
                    keepBackground: true,
                  }]
                ]
              }
            }}
          />
        </div>
      </div>
    </article>
  )
}