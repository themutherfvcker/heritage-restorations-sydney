// components/Gallery.jsx
// A placeholder gallery component. Update this to display project images.

export default function Gallery({ images = [] }) {
  if (images.length === 0) {
    // Render nothing if no images provided
    return null
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
      {images.map((src, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="Gallery image" className="w-full h-48 object-cover" />
        </div>
      ))}
    </div>
  )
}