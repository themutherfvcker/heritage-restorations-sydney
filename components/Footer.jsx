// components/Footer.jsx
// A simple footer component for the site.

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Sydney Heritage Restoration. All rights reserved.</p>
      </div>
    </footer>
  )
}