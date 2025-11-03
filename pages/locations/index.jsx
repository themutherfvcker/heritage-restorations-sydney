import Head from 'next/head'
import Link from 'next/link'

export default function LocationsPage() {
  const locations = [
    {
      name: 'Paddington',
      slug: 'paddington',
      description: 'Victorian terrace specialists with expertise in Woollahra Council heritage requirements.',
      council: 'Woollahra Council',
      image: '/images/paddington-hero.jpg',
      specialties: ['Iron lacework', 'Sandstone foundations', 'Original shingle roofs'],
      period: 'Victorian & Federation'
    },
    {
      name: 'Balmain',
      slug: 'balmain',
      description: 'Cottage and terrace experts understanding Inner West Council heritage controls.',
      council: 'Inner West Council', 
      image: '/images/balmain-hero.jpg',
      specialties: ['Weatherboard cladding', 'Timber verandahs', 'Federation brickwork'],
      period: 'Victorian & Workers Cottages'
    },
    {
      name: 'Surry Hills',
      slug: 'surry-hills',
      description: 'Terrace and warehouse specialists navigating City of Sydney heritage frameworks.',
      council: 'City of Sydney Council',
      image: '/images/surry-hills-hero.jpg',
      specialties: ['Warehouse conversions', 'Original brickwork', 'Industrial heritage'],
      period: 'Victorian & Industrial'
    },
    {
      name: 'Woollahra',
      slug: 'woollahra',
      description: 'Federation and Victorian experts for premium heritage restoration and conservation.',
      council: 'Woollahra Council',
      image: '/images/woollahra-hero.jpg',
      specialties: ['Stained glass', 'Detailed joinery', 'Ornamental plasterwork'],
      period: 'Federation & Victorian'
    }
  ]

  return (
    <>
      <Head>
        <title>Heritage Restoration Locations | Sydney Suburb Specialists</title>
        <meta name="description" content="Local heritage restoration experts across Sydney's inner suburbs. Paddington, Balmain, Surry Hills, Woollahra and more." />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Local Heritage Experts
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Specialist heritage restoration services across Sydney's most beautiful inner suburbs, with local council expertise and suburb-specific knowledge.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div 
                key={location.slug}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 text-white">
                    <span className="text-sm font-semibold bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                      {location.period}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                        {location.name}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium">
                        {location.council}
                      </p>
                    </div>
                    <div className="text-2xl">
                      {index === 0 && '🏛️'}
                      {index === 1 && '🏡'} 
                      {index === 2 && '🏭'}
                      {index === 3 && '💎'}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {location.description}
                  </p>
                  
                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                      Local Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {location.specialties.map((specialty, idx) => (
                        <span 
                          key={idx}
                          className="inline-block bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full border border-blue-200"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <Link 
                    href={`/locations/${location.slug}`}
                    className="inline-flex items-center justify-center w-full bg-gray-900 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors group"
                  >
                    View {location.name} Services
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map/Service Area Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Sydney's Heritage Heart
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our network of specialist tradespeople covers Sydney's most significant heritage suburbs with local knowledge and council expertise.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {locations.map((location) => (
                <div key={location.slug} className="group">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                    <span className="text-2xl">
                      {location.name === 'Paddington' && '🏛️'}
                      {location.name === 'Balmain' && '🏡'}
                      {location.name === 'Surry Hills' && '🏭'}
                      {location.name === 'Woollahra' && '💎'}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{location.name}</h3>
                  <p className="text-sm text-gray-500">{location.council}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
