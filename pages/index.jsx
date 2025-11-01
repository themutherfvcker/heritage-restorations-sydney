// pages/index.jsx
// Home page for the heritage restoration site. This page provides an overview and links to services and locations.

import Head from 'next/head'
import Link from 'next/link'
import CTAButton from '../components/CTAButton'

export default function Home() {
  return (
    <>
      <Head>
        <title>Heritage Restoration Experts | Sydney</title>
        <meta
          name="description"
          content="Specialist heritage restoration services for Sydney's period homes. Roof restoration, timber windows, sandstone repair, and more."
        />
      </Head>
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6">
            Preserve Your Heritage Home
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            We connect you with trusted tradespeople who specialize in restoring Sydney's unique period properties. From roofs and windows to sandstone and ironwork, our experts bring heritage homes back to life.
          </p>
          <CTAButton href="/contact" variant="dark">
            Get Your Free Quote
          </CTAButton>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-serif font-semibold text-charcoal mb-3">Services</h2>
            <p className="text-gray-600 mb-4">Explore our comprehensive range of heritage restoration services.</p>
            <Link href="/services" className="text-forest-green font-semibold hover:underline">
              View Services →
            </Link>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-serif font-semibold text-charcoal mb-3">Locations</h2>
            <p className="text-gray-600 mb-4">See where we operate and how we tailor our services to each area.</p>
            <Link href="/locations" className="text-forest-green font-semibold hover:underline">
              View Locations →
            </Link>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-serif font-semibold text-charcoal mb-3">Blog</h2>
            <p className="text-gray-600 mb-4">Read expert tips and insights on heritage restoration.</p>
            <Link href="/blog" className="text-forest-green font-semibold hover:underline">
              View Blog →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}