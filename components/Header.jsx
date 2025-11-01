// components/Header.jsx
// The site header with logo and navigation links. Includes responsive mobile menu.

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold text-forest-green">
            Sydney Heritage Restoration
          </Link>
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-charcoal hover:text-forest-green transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-charcoal hover:text-forest-green transition-colors">
              Services
            </Link>
            <Link href="/locations" className="text-charcoal hover:text-forest-green transition-colors">
              Locations
            </Link>
            <Link href="/blog" className="text-charcoal hover:text-forest-green transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="bg-forest-green text-white px-4 py-2 rounded hover:bg-forest-green/90 transition-colors">
              Get a Quote
            </Link>
          </nav>
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
        </div>
        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4 pb-4">
            <Link href="/" className="block text-charcoal hover:text-forest-green">
              Home
            </Link>
            <Link href="/services" className="block text-charcoal hover:text-forest-green">
              Services
            </Link>
            <Link href="/locations" className="block text-charcoal hover:text-forest-green">
              Locations
            </Link>
            <Link href="/blog" className="block text-charcoal hover:text-forest-green">
              Blog
            </Link>
            <Link href="/contact" className="block bg-forest-green text-white px-4 py-2 rounded text-center">
              Get a Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}