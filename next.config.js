// next.config.js
// This configuration enables MDX support in Next.js.

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    // Update this array to include any external image domains you plan to use.
    domains: ['your-image-cdn.com'],
  },
}

module.exports = withMDX(nextConfig)