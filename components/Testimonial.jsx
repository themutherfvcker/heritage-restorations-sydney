// components/Testimonial.jsx
// Renders a testimonial with an author initial avatar and location.

export default function Testimonial({ author, location, text }) {
  const initial = author ? author.charAt(0) : ''
  return (
    <blockquote className="bg-gray-50 rounded-xl p-8 my-8 border-l-4 border-forest-green">
      <div className="text-2xl text-charcoal mb-4">“</div>
      <p className="text-lg text-gray-700 italic mb-6">
        {text}
      </p>
      <footer className="flex items-center">
        <div className="w-12 h-12 bg-forest-green rounded-full flex items-center justify-center text-white font-bold mr-4">
          {initial}
        </div>
        <div>
          <div className="font-semibold text-charcoal">{author}</div>
          <div className="text-gray-600">{location}</div>
        </div>
      </footer>
    </blockquote>
  )
}