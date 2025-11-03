import Head from 'next/head'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      title: 'Heritage Roof Restoration',
      slug: 'heritage-roof-restoration-sydney',
      description: 'Specialist terracotta tile and slate roof repairs for period homes.',
    }
  ]

  return (
    <>
      <Head>
        <title>Heritage Restoration Services | Sydney Specialists</title>
        <meta name="description" content="Comprehensive heritage restoration services for Sydney's period homes. Roof restoration, timber windows, sandstone repair, and more." />
      </Head>
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Heritage Restoration Services
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.slug} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link 
                  href={`/services/${service.slug}`}
                  className="inline-block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors"
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
