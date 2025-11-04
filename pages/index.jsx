import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Stone Texture */}
      <section className="relative min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 overflow-hidden">
        {/* Stone Texture Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-stone-400 to-stone-600" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl"></div>
        
        {/* Content */}
        <div className="relative h-screen flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <div className="mb-8">
              <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                Sydney Heritage<br />
                <span className="text-green-400">Restoration</span>
              </h1>
              <p className="text-xl md:text-2xl text-stone-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Preserving the character and craftsmanship of Sydney's most beautiful period homes with expert restoration services.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/services" 
                className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                View Our Services
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="/contact" 
                className="group bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Get Free Assessment
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 text-stone-300">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Heritage Council Approved</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Traditional Techniques</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Sydney Local Experts</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-green-600 mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Specialist Heritage Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From roof restoration to timber windows, we preserve the unique character of your heritage property with traditional techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Heritage Roof Restoration',
                description: 'Terracotta tile and slate roof repairs using traditional methods and materials.',
                icon: '🏠',
                color: 'from-blue-500 to-blue-600',
                href: '/services/heritage-roof-restoration'
              },
              {
                title: 'Timber Window Restoration',
                description: 'Preserve original sash windows with expert craftsmanship and period-appropriate techniques.',
                icon: '🪟',
                color: 'from-amber-500 to-amber-600',
                href: '/services/timber-window-restoration'
              },
              {
                title: 'Sandstone Repair & Restoration',
                description: 'Expert stonework restoration for heritage buildings using traditional methods.',
                icon: '🧱',
                color: 'from-stone-500 to-stone-600',
                href: '/services/sandstone-repair'
              },
              {
                title: 'Heritage Painting & Finishes',
                description: 'Period-appropriate colour restoration using traditional materials and techniques.',
                icon: '🎨',
                color: 'from-green-500 to-green-600',
                href: '/services/heritage-painting'
              },
              {
                title: 'Structural Restoration',
                description: 'Address structural issues while preserving historical integrity and character.',
                icon: '🏗️',
                color: 'from-red-500 to-red-600',
                href: '/services/structural-restoration'
              },
              {
                title: 'Decorative Plasterwork',
                description: 'Repair and replicate cornices, ceiling roses, and ornamental plaster details.',
                icon: '✨',
                color: 'from-purple-500 to-purple-600',
                href: '/services/plasterwork-restoration'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-105"
              >
                {/* Icon Header */}
                <div className={`bg-gradient-to-r ${service.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-4 right-4 text-white/20 text-6xl">{service.icon}</div>
                  <div className="relative">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Link 
                    href={service.href}
                    className="inline-flex items-center text-green-700 font-semibold hover:text-green-800 group-hover:translate-x-2 transition-transform"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services" className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors group">
              View All Services
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-stone-100 relative overflow-hidden">
        {/* Subtle Texture */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-green-600 mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Local Heritage Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Serving Sydney's most beautiful heritage suburbs with local council expertise and suburb-specific knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { name: 'Paddington', council: 'Woollahra Council', icon: '🏛️' },
              { name: 'Balmain', council: 'Inner West Council', icon: '🏡' },
              { name: 'Surry Hills', council: 'City of Sydney', icon: '🏭' },
              { name: 'Woollahra', council: 'Woollahra Council', icon: '💎' }
            ].map((location, index) => (
              <div 
                key={location.name}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group hover:scale-105 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-green-200 group-hover:to-green-300 transition-colors">
                  <span className="text-2xl">{location.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{location.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{location.council}</p>
                <Link 
                  href={`/locations/${location.name.toLowerCase().replace(' ', '-')}`}
                  className="inline-flex items-center text-green-700 text-sm font-semibold hover:text-green-800"
                >
                  View Services
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/locations" className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors group">
              Explore All Locations
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-stone-900 to-stone-800 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-600/10 rounded-full -translate-x-32 -translate-y-32 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full translate-x-32 translate-y-32 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Restore Your Heritage Home?
          </h2>
          <p className="text-xl mb-8 text-stone-200 max-w-2xl mx-auto">
            Get expert advice and quotes from Sydney's trusted heritage restoration specialists. Free assessments and heritage compliance guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors hover:scale-105 shadow-lg"
            >
              Get Free Assessment
            </Link>
            <Link 
              href="/services" 
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors hover:scale-105"
            >
              Browse Services
            </Link>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-stone-300 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Heritage Council Approved
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Traditional Craftsmanship
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Local Sydney Experts
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Free Assessments
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
