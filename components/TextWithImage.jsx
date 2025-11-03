export default function TextWithImage({ image, alt, side = 'left', children }) {
  return (
    <div className={`my-16 flex flex-col ${side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}>
      <div className="md:w-1/2">
        <div className="relative">
          <img 
            src={image} 
            alt={alt}
            className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-600 rounded-xl -z-10"></div>
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </div>
    </div>
  )
}
