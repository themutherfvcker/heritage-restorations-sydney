export default function MaterialsGallery({ materials }) {
  return (
    <section className="my-20 bg-gray-50 py-16 rounded-2xl">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12 text-center">
          Heritage Materials We Master
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {materials.map((material, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:translate-y-1">
              <div className="h-48 bg-gradient-to-br from-stone-200 to-stone-300 relative flex items-center justify-center">
                <div className="text-4xl text-stone-600">{material.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">{material.name}</h3>
                <p className="text-sm text-green-600 font-medium mb-2">{material.period}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{material.characteristics}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
