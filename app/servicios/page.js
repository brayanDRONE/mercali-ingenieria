export default function Servicios() {
  const servicios = [
    {
      title: 'Proyectos Eléctricos Industriales',
      description: 'Diseño, cálculo y ejecución de proyectos eléctricos industriales en alta y baja tensión. Incluye ingeniería de detalle, planos, memorias de cálculo y tramitación ante la SEC.',
      features: [
        'Proyectos de alta tensión',
        'Proyectos de baja tensión',
        'Cálculo de cortocircuito',
        'Estudios de coordinación de protecciones',
        'Tramitación SEC',
      ],
    },
    {
      title: 'Mantenimiento Eléctrico',
      description: 'Programas de mantenimiento preventivo y correctivo para instalaciones eléctricas industriales y comerciales, asegurando la continuidad operacional de su empresa.',
      features: [
        'Mantenimiento preventivo programado',
        'Mantenimiento correctivo',
        'Termografía infrarroja',
        'Mediciones eléctricas',
        'Inspección de tableros',
      ],
    },
    {
      title: 'Automatización Industrial',
      description: 'Diseño e implementación de sistemas de control y automatización industrial utilizando PLC, HMI y sistemas SCADA para optimizar procesos productivos.',
      features: [
        'Programación de PLC',
        'Desarrollo de HMI',
        'Sistemas SCADA',
        'Integración de sistemas',
        'Redes industriales',
      ],
    },
    {
      title: 'Iluminación LED',
      description: 'Proyectos de iluminación eficiente con tecnología LED para espacios industriales, comerciales y públicos, logrando ahorros de hasta 70% en consumo energético.',
      features: [
        'Diseño lumínico',
        'Cálculo de iluminación',
        'Instalación LED',
        'Análisis de ahorro energético',
        'Iluminación inteligente',
      ],
    },
    {
      title: 'Eficiencia Energética',
      description: 'Auditorías energéticas y asesoría para la optimización del consumo eléctrico, identificando oportunidades de ahorro y mejora en la gestión de la energía.',
      features: [
        'Auditorías energéticas',
        'Medición y análisis de consumos',
        'Propuestas de mejora',
        'Implementación de soluciones',
        'Certificación energética',
      ],
    },
    {
      title: 'Puesta a Tierra y Pararrayos',
      description: 'Diseño, instalación y medición de sistemas de puesta a tierra y protección contra descargas atmosféricas según normativa vigente.',
      features: [
        'Diseño de sistemas de PAT',
        'Medición de resistividad del terreno',
        'Instalación de puestas a tierra',
        'Sistemas de protección contra rayos',
        'Certificación de instalaciones',
      ],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/foto_portada_grande.jpeg" 
            alt="Servicios Mercali Ingeniería"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-black/60 backdrop-blur-sm px-12 py-8 rounded-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-white max-w-3xl text-center">
              Soluciones integrales en ingeniería eléctrica para industrias, comercios y proyectos de infraestructura
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Detallados */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 p-8 hover:-translate-y-2 hover:bg-gray-50 cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {servicio.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {servicio.description}
                </p>
                <ul className="space-y-2">
                  {servicio.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesitas más información?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Contacta con nuestros especialistas para una asesoría personalizada
          </p>
          <a
            href="/contacto"
            className="inline-block bg-secondary hover:bg-secondary-dark text-primary font-bold py-3 px-8 rounded-lg transition-smooth"
          >
            Solicitar Cotización
          </a>
        </div>
      </section>
    </>
  )
}
