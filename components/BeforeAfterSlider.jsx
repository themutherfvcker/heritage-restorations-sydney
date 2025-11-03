'use client'
import { useState } from 'react'

export default function BeforeAfterSlider({ before, after, alt }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  
  return (
    <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg my-8">
      <div className="absolute inset-0">
        <img src={after} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img src={before} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={(e) => {
          const handleMove = (moveEvent) => {
            const rect = e.target.parentElement.getBoundingClientRect()
            const x = moveEvent.clientX - rect.left
            const percentage = (x / rect.width) * 100
            setSliderPosition(Math.min(Math.max(percentage, 0), 100))
          }
          
          document.addEventListener('mousemove', handleMove)
          document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleMove)
          }, { once: true })
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          ↔
        </div>
      </div>
    </div>
  )
}
