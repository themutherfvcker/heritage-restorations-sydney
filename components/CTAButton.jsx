// components/CTAButton.jsx
// A simple call‑to‑action button component used throughout the site.
// It renders a styled link with customizable text and href.

export default function CTAButton({ href, children, variant = 'dark' }) {
  const variantClasses = {
    dark: 'bg-forest-green hover:bg-forest-green/90 text-white',
    light: 'bg-white hover:bg-gray-100 text-forest-green border border-forest-green',
  }
  return (
    <a
      href={href}
      className={`inline-block font-semibold py-3 px-6 rounded-lg transition-colors duration-200 ${variantClasses[variant]}`}
    >
      {children}
    </a>
  )
}