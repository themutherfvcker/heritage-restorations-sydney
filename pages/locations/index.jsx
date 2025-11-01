// pages/locations/index.jsx
// Lists all available location pages.

import { serialize } from 'next-mdx-remote/serialize'
import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Link from 'next/link'

export default function LocationsPage({ locations }) {
  return (
    <>
      <Head>
        <title>Heritage Restoration Locations | Sydney</title>
        <meta
          name="description"
          content="Discover heritage restoration services across Sydney's suburbs, including Paddington, Surry Hills, and Balmain."
        />
      </Head>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif font-bold text-charcoal mb-8">
          Locations
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((loc) => (
            <div
              key={loc.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-3">
                  {loc.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {loc.metaDescription}
                </p>
                <Link
                  href={`/locations/${loc.slug}`}
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
  const locationsPath = path.join(process.cwd(), 'content/locations')
  const filenames = fs.readdirSync(locationsPath)
  const locations = await Promise.all(
    filenames.map(async (filename) => {
      const locationPath = path.join(locationsPath, filename)
      const source = fs.readFileSync(locationPath, 'utf8')
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
      locations,
    },
  }
}