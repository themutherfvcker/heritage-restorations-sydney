export async function getStaticPaths() {
  const fs = await import('fs')
  const path = await import('path')
  
  const locationsPath = path.join(process.cwd(), 'content/locations')
  
  try {
    const filenames = fs.readdirSync(locationsPath)
    
    // Only include .mdx files, explicitly exclude any other file types
    const mdxFiles = filenames.filter(filename => 
      filename.endsWith('.mdx') && 
      !filename.startsWith('.') && // exclude hidden files
      filename !== '.gitkeep' // exclude gitkeep if it exists
    )
    
    console.log('Found location files:', mdxFiles) // This will show in build logs
    
    const paths = mdxFiles.map(filename => ({
      params: { slug: filename.replace(/\.mdx$/, '') }
    }))
    
    console.log('Generated paths:', paths) // This will show in build logs
    
    return { paths, fallback: false }
  } catch (error) {
    console.log('Error reading locations directory:', error)
    return { paths: [], fallback: false }
  }
}
