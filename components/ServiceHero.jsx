export default function ServiceHero({ title, description, image }) {
  return (
    <section className="relative h-96 bg-gray-900">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image || '/images/service-hero-placeholder.jpg'})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-gray-900/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white">
        <div className="max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            {title}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
