'use client'
import { useEffect, useState } from 'react'

export default function ProvidersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const providers = [
    '/provedor1.png',
    '/provedor2.png',
    '/provedor3.png',
    '/provedor4.png',
    '/provedor5.jpg',
    '/provedor6.jpg',
    '/provedor7.png',
    '/provedor8.jpg',
    '/provedor9.png',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % providers.length)
    }, 3000) // Cambia cada 3 segundos

    return () => clearInterval(interval)
  }, [providers.length])

  const getVisibleProviders = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % providers.length
      result.push(providers[index])
    }
    return result
  }

  return (
    <section className="py-16 bg-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proveedores con los que Trabajamos
          </h2>
          <p className="text-gray-600">
            Colaboramos con las mejores marcas del mercado
          </p>
        </div>

        {/* Carrusel de proveedores */}
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center gap-8 md:gap-12">
            {getVisibleProviders().map((provider, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fadeIn"
              >
                <img
                  src={provider}
                  alt={`Proveedor ${index + 1}`}
                  className="max-w-[80%] max-h-[80%] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-8">
            {providers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-primary' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir a proveedor ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid estático para móviles */}
        <div className="grid grid-cols-3 gap-4 mt-12 md:hidden">
          {providers.map((provider, index) => (
            <div
              key={index}
              className="aspect-square flex items-center justify-center bg-white rounded-lg shadow-md p-4"
            >
              <img
                src={provider}
                alt={`Proveedor ${index + 1}`}
                className="max-w-full max-h-full object-contain filter grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
