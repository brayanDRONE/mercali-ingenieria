export default function Proyectos() {
  const proyectos = [
    {
      title: 'Reemplazo variadores de frecuencia',
      category: 'Industrial',
      description: 'Se realiza reemplazo de variadores de frecuencia por nuevos powerflex 525 y 753 pasando a su vez de controlnet a ethernet, además de fabricación de bastidor montando tablero inox neumático para golpeadores y para variador de frecuencia 55kW, canalización en canastillos inoxidables, se finaliza con éxito.',
      year: '2024',
      videoId: 'wklvqaLpIVI',
    },
    {
      title: 'Modificación de canalización y cableado carro transportador de pallet salida paletizaje robots',
      category: 'Industrial',
      description: 'Modificación de canalización y cableado carro transportador de pallet salida paletizaje robots, logrando que canalizado no impida modificar altura de paletizaje para optimizar espacio en entrega final del producto en embarques (exportación) aprovechando el espacio eficientemente.',
      year: '2024',
      videoId: 'CGMlk-ZGVbY',
    },
    {
      title: 'Proyecto de corrección de luminosidad en áreas críticas',
      category: 'Industrial',
      description: 'Proyecto de corrección de luminosidad en áreas críticas área digestor en importante planta de alimentos, montando, instalando y conexionado de 40 nuevas luminarias en diferentes sectores del área, concluyendo con éxito y logrando el objetivo con calidad y excelencia.',
      year: '2024',
      videoId: '8W4mEGLuzSk',
    },
    {
      title: 'Cambio de TTA 400 A',
      category: 'Industrial',
      description: 'Se realiza cambio de tablero de transferencia de 250 A a uno de 400 A, además de retirar cableado antiguo e instalar uno de mayor sección para soportar la nominal máxima del generador y la carga, se instala breaker principal en tablero para barra auxiliar (TTA) y finalmente se instala bandeja zincada para su cableado.',
      year: '2024',
      videoId: 'hpqMqbHMfrM',
    },
    {
      title: 'Proyecto munsters y vex',
      category: 'Industrial',
      description: 'Mega proyecto canalización, cableado, montaje y conexión de 4 equipos VEX (extractores) y 2 equipos munters (unidad de mantenimiento de aire) donde incluye soportación, sensores de presión diferencial, sensores de temperatura y humedad, switch de seguridad de puerta, seccionadores, caja de conexiones etc. Casi 20 días trabajando en este desafío y hoy concluye con la puesta en marcha con total éxito.',
      year: '2024',
      videoId: 'etUUrMMWplk',
    },
    {
      title: 'Montaje eléctrico',
      category: 'Industrial',
      description: 'Montaje de bandejas eléctricas BPC, fabricación de soporte tablero, fabricación de arco metálico, cableado de control y fuerza, para futura mejora en empresa multinacional.',
      year: '2024',
      videoId: 'OwwGlPIGZdw',
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
            alt="Proyectos Mercali Ingeniería"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-black/60 backdrop-blur-sm px-12 py-8 rounded-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">
              Nuestros Proyectos
            </h1>
            <p className="text-xl text-white max-w-3xl text-center">
              Casos de éxito que demuestran nuestra experiencia y compromiso con la excelencia
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">400+</div>
              <p className="text-gray-600">Proyectos Completados</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-gray-600">Clientes Activos</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <p className="text-gray-600">Años de Experiencia</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-gray-600">Satisfacción</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Algunos de nuestros trabajos más representativos en diversos sectores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((proyecto, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-smooth overflow-hidden"
              >
                {/* Video o placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary to-primary-light">
                  {proyecto.videoId ? (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${proyecto.videoId}`}
                      title={proyecto.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-6xl text-white opacity-50">⚡</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded">
                      {proyecto.category}
                    </span>
                    <span className="text-sm text-gray-500">{proyecto.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {proyecto.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {proyecto.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Quieres ser nuestro próximo caso de éxito?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Cuéntanos sobre tu proyecto y te entregaremos una propuesta a medida
          </p>
          <a
            href="/contacto"
            className="inline-block bg-secondary hover:bg-secondary-dark text-primary font-bold py-3 px-8 rounded-lg transition-smooth"
          >
            Iniciar Proyecto
          </a>
        </div>
      </section>
    </>
  )
}
