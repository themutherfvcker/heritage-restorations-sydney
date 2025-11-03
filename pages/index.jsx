// Missing this line at the top:
import Link from 'next/link'
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6 text-center">
          Sydney Heritage Restoration Specialists
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Preserving the character and craftsmanship of Sydney's period homes through expert restoration services.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Heritage Roof Restoration</h3>
            <p className="text-gray-600">Specialist terracotta tile and slate roof repairs for period homes.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Timber Window Restoration</h3>
            <p className="text-gray-600">Preserving original sash windows with period-appropriate techniques.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Sandstone Repair</h3>
            <p className="text-gray-600">Expert stonework restoration for Sydney's heritage buildings.</p>
          </div>
{/* Add this to your existing grid in pages/index.jsx */}
<div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
  <h3 className="text-xl font-semibold mb-3">Location Specialists</h3>
  <p className="text-gray-600 mb-4">Heritage experts across Sydney's inner suburbs including Paddington, Balmain, and Surry Hills.</p>
  <Link href="/locations" className="text-green-700 font-semibold hover:underline">
    View Locations →
  </Link>
</div>

          
        </div>

        <div className="text-center">
          <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Get a Heritage Assessment
          </button>
        </div>
      </main>
    </div>
  )
}
