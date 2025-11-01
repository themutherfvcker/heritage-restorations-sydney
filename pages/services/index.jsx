// pages/services/index.jsx
// Lists all available services with a card grid.

import { serialize } from 'next-mdx-remote/serialize'
import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Link from 'next/link'

export default function ServicesPage({ services }) {
  return (
    <>
      <Head>
        <title>Heritage Restoration Services | Sydney Specialists</title>
        <meta
          name="description"
          content="Comprehensive heritage restoration services for Sydney's period homes. Roof restoration, timber windows, sandstone repair, and more."
        />
      </Head>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif font-bold text-charcoal mb-8">
          Heritage Restoration Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {service.metaDescription}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-block bg-forest-green text-white px-4 py-2 rounded hover:bg-forest-green/90 transition-colors"
                >
                  Learn More
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
  const servicesPath = path.join(process.cwd(), 'content/services')
  const filenames = fs.readdirSync(servicesPath)
  const services = await Promise.all(
    filenames.map(async (filename) => {
      const servicePath = path.join(servicesPath, filename)
      const source = fs.readFileSync(servicePath, 'utf8')
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
      services,
    },
  }
}