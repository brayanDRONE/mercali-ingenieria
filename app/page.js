import Link from 'next/link'

export default function Home() {
  const servicios = [
    {
      title: 'Proyectos Eléctricos',
      description: 'Diseño y ejecución de proyectos eléctricos industriales y comerciales de alta y baja tensión.',
      icon: '⚡',
    },
    {
      title: 'Mantenimiento Industrial',
      description: 'Servicio de mantenimiento preventivo y correctivo para instalaciones eléctricas industriales.',
      icon: '🔧',
    },
    {
      title: 'Asesoría Técnica',
      description: 'Consultoría especializada en eficiencia energética y normativa eléctrica vigente.',
      icon: '📋',
    },
    {
      title: 'Automatización',
      description: 'Implementación de sistemas de control y automatización industrial modernos.',
      icon: '🤖',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Soluciones en Ingeniería Eléctrica
            </h1>
            <p className="text-xl text-white max-w-3xl">
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
                Proporcionar soluciones de ingeniería eléctrica innovadoras y confiables, garantizando la seguridad y eficiencia en cada proyecto que realizamos.
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
                Ser reconocidos como líderes en ingeniería eléctrica, destacando por nuestra excelencia técnica, compromiso con la innovación y satisfacción del cliente.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Experiencia Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">5+</div>
              <p className="text-gray-600">Años de Experiencia</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">100+</div>
              <p className="text-gray-600">Proyectos Realizados</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <p className="text-gray-600">Clientes Satisfechos</p>
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
              href="https://wa.me/56982039177"
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
