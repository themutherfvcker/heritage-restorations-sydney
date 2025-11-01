// pages/blog/index.jsx
// Lists all blog posts.

import { serialize } from 'next-mdx-remote/serialize'
import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Link from 'next/link'

export default function BlogPage({ posts }) {
  return (
    <>
      <Head>
        <title>Heritage Restoration Blog | Tips & News</title>
        <meta
          name="description"
          content="Read the latest tips, guides, and news about heritage restoration in Sydney."
        />
      </Head>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif font-bold text-charcoal mb-8">
          Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.metaDescription}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block bg-forest-green text-white px-4 py-2 rounded hover:bg-forest-green/90 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const blogPath = path.join(process.cwd(), 'content/blog')
  const filenames = fs.readdirSync(blogPath)
  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const postPath = path.join(blogPath, filename)
      const source = fs.readFileSync(postPath, 'utf8')
      const mdxSource = await serialize(source, { parseFrontmatter: true })
      return {
        title: mdxSource.frontmatter.title,
        slug: mdxSource.frontmatter.slug,
        metaDescription: mdxSource.frontmatter.metaDescription,
      }
    }),
  )
  return {
    props: {
      posts,
    },
  }
}