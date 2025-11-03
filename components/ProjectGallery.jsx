export default function ProjectGallery({ projects }) {
  return (
    <section className="my-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-16 text-center">
          Heritage Restoration Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  Before/After Gallery
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>{project.location}</span>
                  <span>{project.duration}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
