import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'

// Simple button component for MDX
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
  return (
    <>
      <Head>
        <title>{frontmatter.metaTitle}</title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Head>
      
      <article className="max-w-4xl mx-auto px-4 py-8">
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

// This tells Next.js which pages to generate
export async function getStaticPaths() {
  // We need to dynamically import the file system functions
  const fs = await import('fs')
  const path = await import('path')
  
  const servicesPath = path.join(process.cwd(), 'content/services')
  
  try {
    const filenames = fs.readdirSync(servicesPath)
    
    // Only include .mdx files, ignore .gitkeep and other files
    const mdxFiles = filenames.filter(filename => filename.endsWith('.mdx'))
    
    const paths = mdxFiles.map(filename => ({
      params: { slug: filename.replace(/\.mdx$/, '') }
    }))
    
    return { paths, fallback: false }
  } catch (error) {
    // If services directory doesn't exist yet, return empty paths
    return { paths: [], fallback: false }
  }
}

// This fetches the data for each page
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
    // If the file doesn't exist, return 404
    return {
      notFound: true
    }
  }
}
