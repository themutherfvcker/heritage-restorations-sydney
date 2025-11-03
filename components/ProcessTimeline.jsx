export default function ProcessTimeline({ steps }) {
  return (
    <section className="my-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-16 text-center">
          Our Restoration Process
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-green-200 transform md:-translate-x-1/2"></div>
          
          {steps.map((step, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-start mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} mb-4 md:mb-0`}>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="text-3xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
              
              {/* Step indicator */}
              <div className="absolute left-6 md:left-1/2 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg transform md:-translate-x-1/2 border-4 border-white shadow-lg">
                {step.step}
              </div>
              
              {/* Spacer for alternating sides */}
              <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
