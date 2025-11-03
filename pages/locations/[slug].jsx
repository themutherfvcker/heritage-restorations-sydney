import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'
import Link from 'next/link'

const CTAButton = ({ href, children }) => (
  <a
    href={href}
    className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 my-6"
  >
    {children}
  </a>
)

const components = { CTAButton }

export default function LocationPage({ source, frontmatter, relatedServices }) {
  if (!source) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Location Not Found</h1>
          <Link href="/locations" className="text-green-700 hover:underline">
            ← Back to Locations
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{frontmatter.metaTitle}</title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Head>
      
      <article className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6">
          <Link href="/" className="text-green-700 hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/locations" className="text-green-700 hover:underline">Locations</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600 capitalize">{frontmatter.location}</span>
        </nav>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {frontmatter.title}
        </h1>
        
        <div className="prose prose-lg max-w-none mb-12">
          <MDXRemote {...source} components={components} />
        </div>
        
        {/* Related Services for this Location */}
        {relatedServices && relatedServices.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Heritage Services in {frontmatter.location}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedServices.map((service) => (
                <div key={service.slug} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="text-green-700 font-semibold hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  )
}

// This tells Next.js which pages to generate
export async function getStaticPaths() {
  // For now, we'll manually define the paths to avoid conflicts
  // This ensures no duplicate paths are generated
  const paths = [
    { params: { slug: 'heritage-restoration-paddington' } },
    { params: { slug: 'heritage-restoration-balmain' } },
    { params: { slug: 'heritage-restoration-surry-hills' } },
    { params: { slug: 'heritage-restoration-woollahra' } },
  ]
  
  return { 
    paths,
    fallback: false // Return 404 for any slugs not in this list
  }
}

// This fetches the data for each page
export async function getStaticProps({ params }) {
  const fs = await import('fs')
  const path = await import('path')
  
  // Only process slugs that we explicitly defined above
  const validSlugs = [
    'heritage-restoration-paddington',
    'heritage-restoration-balmain', 
    'heritage-restoration-surry-hills',
    'heritage-restoration-woollahra'
  ]
  
  if (!validSlugs.includes(params.slug)) {
    return {
      notFound: true
    }
  }
  
  const locationPath = path.join(process.cwd(), 'content/locations', `${params.slug}.mdx`)
  
  try {
    const source = fs.readFileSync(locationPath, 'utf8')
    const mdxSource = await serialize(source, { parseFrontmatter: true })
    
    // Get related services for this location
    const servicesPath = path.join(process.cwd(), 'content/services')
    let relatedServices = []
    
    try {
      const serviceFiles = fs.readdirSync(servicesPath)
      
      relatedServices = await Promise.all(
        serviceFiles.map(async (filename) => {
          if (!filename.endsWith('.mdx')) return null
          
          const servicePath = path.join(servicesPath, filename)
          const serviceSource = fs.readFileSync(servicePath, 'utf8')
          const serviceMdx = await serialize(serviceSource, { parseFrontmatter: true })
          
          // Check if this service is related to the current location
          if (serviceMdx.frontmatter.locations?.includes(mdxSource.frontmatter.location)) {
            return {
              title: serviceMdx.frontmatter.title,
              slug: serviceMdx.frontmatter.slug,
              description: serviceMdx.frontmatter.metaDescription
            }
          }
          return null
        })
      ).then(services => services.filter(service => service !== null))
    } catch (error) {
      // Services directory might not exist yet
      relatedServices = []
    }

    return {
      props: {
        source: mdxSource,
        frontmatter: mdxSource.frontmatter,
        relatedServices
      }
    }
  } catch (error) {
    // If the file doesn't exist, return 404
    return {
      notFound: true
    }
  }
}
