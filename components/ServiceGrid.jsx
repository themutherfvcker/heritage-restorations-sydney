// components/ServiceGrid.jsx
// Displays a grid of service cards, each linking to its detailed page.

import Link from 'next/link'

export default function ServiceGrid({ services = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <div key={service.slug} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-serif font-semibold text-charcoal mb-3">
            {service.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {service.description}
          </p>
          <Link
            href={`/services/${service.slug}`}
            className="text-forest-green font-semibold hover:underline"
          >
            Learn More →
          </Link>
        </div>
      ))}
    </div>
  )
}