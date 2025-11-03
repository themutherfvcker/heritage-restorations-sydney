import Head from 'next/head'
import Link from 'next/link'

export default function LocationsPage() {
  const locations = [
    {
      name: 'Paddington',
      slug: 'paddington', // ← Match your actual filename
      description: 'Victorian terrace specialists for Woollahra Council heritage properties.',
      council: 'Woollahra Council'
    },
    {
      name: 'Balmain',
      slug: 'balmain', // ← Match your actual filename
      description: 'Cottage and terrace experts for Inner West Council heritage homes.',
      council: 'Inner West Council'
    },
    {
      name: 'Surry Hills',
      slug: 'surry-hills', // ← Match your actual filename  
      description: 'Terrace and warehouse specialists for City of Sydney Council.',
      council: 'City of Sydney Council'
    },
    {
      name: 'Woollahra',
      slug: 'woollahra', // ← Match your actual filename
      description: 'Federation and Victorian experts for premium heritage restoration.',
      council: 'Woollahra Council'
    }
  ]

  return (
    <>
      <Head>
        <title>Heritage Restoration Locations | Sydney Suburb Specialists</title>
        <meta name="description" content="Heritage restoration services across Sydney's inner suburbs. Paddington, Balmain, Surry Hills, Woollahra and more." />
      </Head>
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Heritage Restoration Locations
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          Local heritage restoration expertise across Sydney's inner suburbs. 
          Our specialists understand each council's heritage requirements and local architectural character.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div key={location.slug} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  {location.name}
                </h2>
                <p className="text-gray-600 mb-2">
                  {location.description}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Council: {location.council}
                </p>
                <Link 
                  href={`/locations/${location.slug}`}
                  className="inline-block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors"
                >
                  View {location.name} Services
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
