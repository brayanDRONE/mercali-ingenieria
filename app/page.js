import Link from 'next/link'
import ProvidersCarousel from './components/ProvidersCarousel'

export default function Home() {
  const servicios = [
    {
      title: 'Diseño de Sistemas Eléctricos',
      description: 'Planos y certificaciones para sistemas eléctricos industriales y comerciales.',
      icon: '⚡',
    },
    {
      title: 'Mantenimiento, Mediciones y Reparación',
      description: 'Servicio integral de mantenimiento preventivo, mediciones eléctricas y reparaciones.',
      icon: '🔧',
    },
    {
      title: 'Optimización Energética',
      description: 'Análisis y mejora de la eficiencia energética para reducir costos operacionales.',
      icon: '💡',
    },
    {
      title: 'Proyectos Destacados',
      description: 'Soluciones personalizadas para proyectos de gran envergadura.',
      icon: '🏗️',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center text-white overflow-hidden">
        {/* Grid de imágenes de fondo */}
        <div className="absolute inset-0 w-full h-full flex flex-row gap-1 bg-white">
          <div className="flex-1 overflow-hidden">
            <img 
              src="/foto1.jpeg" 
              alt="Mercali Ingeniería - Proyecto 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 overflow-hidden">
            <img 
              src="/foto2.jpeg" 
              alt="Mercali Ingeniería - Proyecto 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 overflow-hidden">
            <img 
              src="/foto4.jpeg" 
              alt="Mercali Ingeniería - Proyecto 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Contenido */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-black/60 backdrop-blur-sm px-12 py-8 rounded-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">
              Soluciones en Ingeniería Eléctrica
            </h1>
            <p className="text-xl text-white max-w-3xl text-center">
              Innovación y excelencia en cada proyecto
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Grid de 3 columnas: Misión, Servicios, Visión */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            {/* Nuestra Misión */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Misión</h3>
              <p className="text-gray-600">
                Ser el líder en soluciones de ingeniería eléctrica, brindando a nuestros clientes servicios de alta calidad.
              </p>
            </div>

            {/* Nuestros Servicios */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Nuestros Servicios</h3>
              <p className="text-gray-600">
                Contamos con un equipo profesional que te entregará una atención de <span className="font-semibold text-primary">calidad y personalizada</span>.
              </p>
            </div>

            {/* Nuestra Visión */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Visión</h3>
              <p className="text-gray-600">
                Convertirnos en el socio de confianza preferido en la industria de la ingeniería eléctrica.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-primary mb-8">Nuestros Valores</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-3">🤝</div>
                <h4 className="font-bold text-primary">Compromiso</h4>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-3">⭐</div>
                <h4 className="font-bold text-primary">Excelencia</h4>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-3">💡</div>
                <h4 className="font-bold text-primary">Innovación</h4>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-3">🛡️</div>
                <h4 className="font-bold text-primary">Seguridad</h4>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 bg-white h-80 group cursor-pointer hover:-translate-y-2 hover:scale-105"
              >
                {/* Imagen de fondo */}
                {(index === 0 || index === 1 || index === 2 || index === 3) && (
                  <>
                    <div className="absolute inset-0">
                      <img 
                        src={index === 0 ? "/foto11.jpeg" : index === 1 ? "/foto7.jpeg" : index === 2 ? "/foto12.png" : "/foto8.jpeg"}
                        alt={servicio.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay oscuro para mejorar legibilidad */}
                      <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                  </>
                )}
                
                <div className="relative h-full flex flex-col p-6">
                  {/* Título y descripción agrupados en la parte inferior */}
                  <div className="mt-auto">
                    <h3 className={`text-xl font-bold mb-3 ${(index === 0 || index === 1 || index === 2 || index === 3) ? 'text-white' : 'text-primary'}`}
                      style={(index === 0 || index === 1 || index === 2 || index === 3) ? {
                        textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.7)'
                      } : {}}>
                      {servicio.title}
                    </h3>
                    
                    {/* Descripción animada desde abajo - visible en móvil, hover en desktop */}
                    <div className={`${(index === 0 || index === 1 || index === 2 || index === 3) ? 'text-white' : 'text-gray-600'} text-sm transition-all duration-300 transform 
                      md:translate-y-full md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100
                      translate-y-0 opacity-100`}>
                      <p>{servicio.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/servicios"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-smooth"
            >
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Carrusel de Proveedores */}
      <ProvidersCarousel />

      {/* Experiencia y Ubicación Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Ubicación - Lado Izquierdo */}
            <div className="animate-fadeInLeft">
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Dónde Ubicarnos
                </h2>
                <p className="text-gray-600">
                  Visítanos en nuestra oficina o agenda una reunión para conversar sobre tu proyecto
                </p>
              </div>
              
              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.4076961873647!2d-70.6506!3d-33.4489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI2JzU2LjAiUyA3MMKwMzknMDIuMiJX!5e0!3m2!1ses!2scl!4v1234567890"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
              
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg mt-6">
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Dirección</h3>
                    <p className="text-gray-600">Pedrero Lote A1 Número 06, Graneros, Chile</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Estadísticas - Lado Derecho */}
            <div className="animate-fadeInRight">
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Nuestra Experiencia
                </h2>
                <p className="text-gray-600">
                  Respaldados por años de éxito y clientes satisfechos
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {/* Años de Experiencia */}
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-5xl md:text-6xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                        5
                      </div>
                      <p className="text-lg font-semibold text-gray-700">Años de Experiencia</p>
                      <p className="text-sm text-gray-600 mt-2">Construyendo soluciones de calidad</p>
                    </div>
                    <div className="text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Proyectos Realizados */}
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-5xl md:text-6xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                        400+
                      </div>
                      <p className="text-lg font-semibold text-gray-700">Proyectos Realizados</p>
                      <p className="text-sm text-gray-600 mt-2">Cada uno único y exitoso</p>
                    </div>
                    <div className="text-secondary/20 group-hover:text-secondary/40 transition-colors duration-300">
                      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Clientes Satisfechos */}
                <div className="bg-gradient-to-br from-green-100 to-green-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-5xl md:text-6xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                        100%
                      </div>
                      <p className="text-lg font-semibold text-gray-700">Clientes Satisfechos</p>
                      <p className="text-sm text-gray-600 mt-2">Comprometidos con tu éxito</p>
                    </div>
                    <div className="text-green-200 group-hover:text-green-300 transition-colors duration-300">
                      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Contáctanos y obtén una cotización personalizada sin compromiso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-secondary hover:bg-secondary-dark text-primary font-bold py-3 px-8 rounded-lg transition-smooth"
            >
              Contactar Ahora
            </Link>
            <a
              href="https://wa.me/56999824057"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-smooth"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
