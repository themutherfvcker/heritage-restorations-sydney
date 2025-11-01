// pages/blog/[slug].jsx
// Dynamic route for individual blog posts.

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Link from 'next/link'
import CTAButton from '../../components/CTAButton'
import Testimonial from '../../components/Testimonial'

const components = { CTAButton, Testimonial }

export default function BlogPost({ source, frontmatter }) {
  return (
    <>
      <Head>
        <title>{frontmatter.metaTitle}</title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Head>
      <article className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-6">
          <Link href="/" className="text-forest-green hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="text-forest-green hover:underline">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">{frontmatter.title}</span>
        </nav>
        <h1 className="text-4xl font-serif font-bold text-charcoal mb-4">
          {frontmatter.title}
        </h1>
        <div className="text-gray-600 mb-8">Published {frontmatter.publishedDate}</div>
        <div className="prose prose-lg max-w-none">
          <MDXRemote {...source} components={components} />
        </div>
      </article>
    </>
  )
}

export async function getStaticPaths() {
  const blogPath = path.join(process.cwd(), 'content/blog')
  const filenames = fs.readdirSync(blogPath)
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.mdx$/, '') },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const blogPath = path.join(process.cwd(), 'content/blog', `${params.slug}.mdx`)
  const source = fs.readFileSync(blogPath, 'utf8')
  const mdxSource = await serialize(source, { parseFrontmatter: true })
  return {
    props: {
      source: mdxSource,
      frontmatter: mdxSource.frontmatter,
    },
  }
}