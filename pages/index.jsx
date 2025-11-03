import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Sydney Heritage Restoration
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Preserving the character and craftsmanship of Sydney's most beautiful period homes with expert restoration services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services" 
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View Our Services
            </Link>
            <Link 
              href="/locations" 
              className="bg-white hover:bg-gray-50 text-green-700 border border-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Find Local Experts
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialist Heritage Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From roof restoration to timber windows, we preserve the unique character of your heritage property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Roof Restoration</h3>
              <p className="text-gray-600 mb-4">Terracotta tile and slate roof repairs using traditional methods.</p>
              <Link href="/services/heritage-roof-restoration" className="text-green-700 font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🪟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Window Restoration</h3>
              <p className="text-gray-600 mb-4">Preserve original sash windows with expert craftsmanship.</p>
              <Link href="/services/timber-window-restoration" className="text-green-700 font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🧱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sandstone Repair</h3>
              <p className="text-gray-600 mb-4">Expert stonework restoration for heritage buildings.</p>
              <Link href="/services/sandstone-repair" className="text-green-700 font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link href="/services" className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Local Heritage Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Serving Sydney's most beautiful heritage suburbs with local council expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {['Paddington', 'Balmain', 'Surry Hills', 'Woollahra'].map((suburb) => (
              <div key={suburb} className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{suburb}</h3>
                <p className="text-sm text-gray-600 mb-4">Heritage Specialists</p>
                <Link 
                  href={`/locations/${suburb.toLowerCase().replace(' ', '-')}`}
                  className="text-green-700 text-sm font-semibold hover:underline"
                >
                  View Services
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/locations" className="inline-block bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore All Locations
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Restore Your Heritage Home?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert advice and quotes from Sydney's trusted heritage restoration specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services" 
              className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Browse Services
            </Link>
            <Link 
              href="/locations" 
              className="bg-transparent hover:bg-green-600 border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Find Local Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
