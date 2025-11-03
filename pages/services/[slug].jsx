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

export default function ServicePage({ source, frontmatter }) {
  if (!source) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link href="/services" className="text-green-700 hover:underline">
            ← Back to Services
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
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-6">
          <Link href="/" className="text-green-700 hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="text-green-700 hover:underline">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">{frontmatter.title}</span>
        </nav>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
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
  const fs = await import('fs')
  const path = await import('path')
  
  const servicesPath = path.join(process.cwd(), 'content/services')
  
  try {
    const filenames = fs.readdirSync(servicesPath)
    const mdxFiles = filenames.filter(filename => filename.endsWith('.mdx'))
    
    const paths = mdxFiles.map(filename => ({
      params: { slug: filename.replace(/\.mdx$/, '') }
    }))
    
    return { paths, fallback: false }
  } catch (error) {
    return { paths: [], fallback: false }
  }
}

export async function getStaticProps({ params }) {
  const fs = await import('fs')
  const path = await import('path')
  
  const servicePath = path.join(process.cwd(), 'content/services', `${params.slug}.mdx`)
  
  try {
    const source = fs.readFileSync(servicePath, 'utf8')
    const mdxSource = await serialize(source, { 
      parseFrontmatter: true 
    })
    
    return {
      props: {
        source: mdxSource,
        frontmatter: mdxSource.frontmatter
      }
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}
