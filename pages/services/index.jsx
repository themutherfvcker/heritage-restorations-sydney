import Head from 'next/head'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      title: 'Heritage Roof Restoration',
      slug: 'heritage-roof-restoration',
      description: 'Terracotta tile and slate roof repairs using traditional methods and materials.',
      icon: '🏠',
      color: 'from-blue-500 to-blue-600',
      features: ['Terracotta tile repair', 'Slate replacement', 'Traditional mortar techniques']
    },
    {
      title: 'Timber Window Restoration',
      slug: 'timber-window-restoration',
      description: 'Preserve original sash windows with expert craftsmanship and period-appropriate techniques.',
      icon: '🪟',
      color: 'from-amber-500 to-amber-600',
      features: ['Sash cord replacement', 'Period glass preservation', 'Traditional putty work']
    },
    {
      title: 'Sandstone Repair & Restoration',
      slug: 'sandstone-repair',
      description: 'Expert stonework restoration for heritage buildings using traditional methods.',
      icon: '🧱',
      color: 'from-stone-500 to-stone-600',
      features: ['Lime mortar repointing', 'Stone replacement', 'Structural stabilization']
    },
    {
      title: 'Heritage Painting & Finishes',
      slug: 'heritage-painting',
      description: 'Period-appropriate colour restoration using traditional materials and techniques.',
      icon: '🎨',
      color: 'from-green-500 to-green-600',
      features: ['Heritage colour matching', 'Traditional paint removal', 'Breathable finishes']
    },
    {
      title: 'Structural Restoration',
      slug: 'structural-restoration',
      description: 'Address structural issues while preserving historical integrity and character.',
      icon: '🏗️',
      color: 'from-red-500 to-red-600',
      features: ['Foundation repair', 'Timber framing', 'Sympathetic reinforcement']
    },
    {
      title: 'Decorative Plasterwork',
      slug: 'plasterwork-restoration',
      description: 'Repair and replicate cornices, ceiling roses, and ornamental plaster details.',
      icon: '✨',
      color: 'from-purple-500 to-purple-600',
      features: ['Cornice replication', 'Ceiling rose repair', 'Ornamental plaster']
    }
  ]

  return (
    <>
      <Head>
        <title>Heritage Restoration Services | Sydney Specialists</title>
        <meta name="description" content="Comprehensive heritage restoration services for Sydney's period homes. Expert roof, window, stone, and structural restoration." />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Heritage Restoration Services
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Preserving Sydney's architectural heritage with expert craftsmanship, traditional techniques, and period-appropriate materials.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.slug} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-105 group"
              >
                {/* Icon Header */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                      Heritage Specialist
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <Link 
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors group-hover:bg-green-700"
                  >
                    Learn More
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

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Expert Heritage Advice?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Get a free assessment from Sydney's most trusted heritage restoration specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Free Assessment
            </Link>
            <Link 
              href="/locations" 
              className="bg-transparent hover:bg-gray-800 border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Find Local Experts
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
