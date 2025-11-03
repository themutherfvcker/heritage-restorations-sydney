import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'
import Link from 'next/link'

// Import all components with proper paths
import BeforeAfterSlider from '../../components/BeforeAfterSlider'
import MaterialsTable from '../../components/MaterialsTable'
import ComparisonTable from '../../components/ComparisonTable'
import ServiceHero from '../../components/ServiceHero'
import TextWithImage from '../../components/TextWithImage'
import MaterialsGallery from '../../components/MaterialsGallery'
import ProcessTimeline from '../../components/ProcessTimeline'
import ProjectGallery from '../../components/ProjectGallery'

const CTAButton = ({ href, children }) => (
  <a
    href={href}
    className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 my-6"
  >
    {children}
  </a>
)

// Include ALL components
const components = { 
  CTAButton, 
  BeforeAfterSlider,
  MaterialsTable, 
  ComparisonTable,
  ServiceHero,
  TextWithImage,
  MaterialsGallery,
  ProcessTimeline,
  ProjectGallery
}

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
      
      <article className="min-h-screen">
        <MDXRemote {...source} components={components} />
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
