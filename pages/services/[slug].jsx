// pages/services/[slug].jsx
// Dynamic route for individual service pages.

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import CTAButton from '../../components/CTAButton'
import Testimonial from '../../components/Testimonial'
import Gallery from '../../components/Gallery'

const components = { CTAButton, Testimonial, Gallery }

export default function ServicePage({ source, frontmatter }) {
  return (
    <>
      <Head>
        <title>{frontmatter.metaTitle}</title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Head>
      <article className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
          {frontmatter.title}
        </h1>
        <div className="prose prose-lg max-w-none">
          <MDXRemote {...source} components={components} />
        </div>
      </article>
    </>
  )
}

export async function getStaticPaths() {
  const servicesPath = path.join(process.cwd(), 'content/services')
  const filenames = fs.readdirSync(servicesPath)
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.mdx$/, '') },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const servicesPath = path.join(process.cwd(), 'content/services', `${params.slug}.mdx`)
  const source = fs.readFileSync(servicesPath, 'utf8')
  const mdxSource = await serialize(source, { parseFrontmatter: true })
  return {
    props: {
      source: mdxSource,
      frontmatter: mdxSource.frontmatter,
    },
  }
}