import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

interface BlogPost {
  title: string
  date: string
  description: string
  slug: string
  content: string
}

const BLOGS_PATH = path.join(process.cwd(), 'content/blogs')

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const files = await fs.readdir(BLOGS_PATH)
  
  const posts = await Promise.all(files.map(async (fileName) => {
    const slug = fileName.replace('.mdx', '')
    const filePath = path.join(BLOGS_PATH, fileName)
    const fileContent = await fs.readFile(filePath, 'utf8')
    const { data, content } = matter(fileContent)
    
    return {
      ...data,
      slug,
      content,
    } as BlogPost
  }))

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOGS_PATH, `${slug}.mdx`)
    const fileContent = await fs.readFile(filePath, 'utf8')
    const { data, content } = matter(fileContent)
    
    return {
      ...data,
      slug,
      content,
    } as BlogPost
  } catch {
    return null
  }
}