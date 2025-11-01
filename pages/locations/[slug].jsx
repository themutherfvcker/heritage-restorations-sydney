// pages/locations/[slug].jsx
// Dynamic route for individual location pages. Displays related services.

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Link from 'next/link'
import CTAButton from '../../components/CTAButton'
import Testimonial from '../../components/Testimonial'
import ServiceGrid from '../../components/ServiceGrid'

const components = { CTAButton, Testimonial, ServiceGrid }

export default function LocationPage({ source, frontmatter, relatedServices }) {
  return (
    <>
      <Head>
        <title>{frontmatter.metaTitle}</title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Head>
      <article className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6">
          <Link href="/" className="text-forest-green hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/locations" className="text-forest-green hover:underline">Locations</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600 capitalize">{frontmatter.location}</span>
        </nav>
        <h1 className="text-4xl font-serif font-bold text-charcoal mb-6">
          {frontmatter.title}
        </h1>
        <div className="prose prose-lg max-w-none mb-12">
          <MDXRemote {...source} components={components} />
        </div>
        {/* Related Services for this Location */}
        {relatedServices.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-8">
              Heritage Services in {frontmatter.location}
            </h2>
            <ServiceGrid services={relatedServices} />
          </section>
        )}
      </article>
    </>
  )
}

export async function getStaticPaths() {
  const locationsPath = path.join(process.cwd(), 'content/locations')
  const filenames = fs.readdirSync(locationsPath)
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.mdx$/, '') },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // Load location content
  const locationsPath = path.join(process.cwd(), 'content/locations', `${params.slug}.mdx`)
  const source = fs.readFileSync(locationsPath, 'utf8')
  const mdxSource = await serialize(source, { parseFrontmatter: true })
  // Load related services
  const servicesPath = path.join(process.cwd(), 'content/services')
  const serviceFiles = fs.readdirSync(servicesPath)
  const relatedServices = await Promise.all(
    serviceFiles.map(async (filename) => {
      const servicePath = path.join(servicesPath, filename)
      const serviceSource = fs.readFileSync(servicePath, 'utf8')
      const serviceMdx = await serialize(serviceSource, { parseFrontmatter: true })
      if (serviceMdx.frontmatter.locations?.includes(mdxSource.frontmatter.location)) {
        return {
          title: serviceMdx.frontmatter.title,
          slug: serviceMdx.frontmatter.slug,
          description: serviceMdx.frontmatter.metaDescription,
          type: serviceMdx.frontmatter.serviceType,
        }
      }
      return null
    }),
  ).then((services) => services.filter((service) => service !== null))
  return {
    props: {
      source: mdxSource,
      frontmatter: mdxSource.frontmatter,
      relatedServices,
    },
  }
}