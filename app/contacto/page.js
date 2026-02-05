import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contacto - Cotiza tu Proyecto Eléctrico',
  description: 'Contáctanos para cotizar tu proyecto eléctrico. Ubicados en Pedrero Lote A1 Número 06, Graneros, Chile. Tel: +56 9 99824057. Respuesta rápida y profesional.',
  keywords: ['contacto ingeniería eléctrica', 'cotización proyectos eléctricos', 'Graneros Chile', 'mercali contacto'],
  openGraph: {
    title: 'Contacto | Mercali Ingeniería',
    description: 'Contáctanos para cotizar tu proyecto eléctrico en Graneros, Chile.',
    url: 'https://www.mercaliingenieria.com/contacto',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mercaliingenieria.com/contacto',
  },
}

export default function Contacto() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/foto_portada_grande.jpeg" 
            alt="Contacto Mercali Ingeniería"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-black/60 backdrop-blur-sm px-12 py-8 rounded-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Contacto
            </h1>
            <p className="text-xl text-white max-w-3xl">
              Estamos aquí para ayudarte. Contáctanos y obtén una respuesta rápida
            </p>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información de Contacto */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Información de Contacto
              </h2>
              <p className="text-gray-600 mb-8">
                Estamos disponibles para atender tus consultas y cotizaciones.
                Contáctanos a través de cualquiera de estos medios:
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full p-3 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Teléfono</h3>
                    <p className="text-gray-600">+56 (9) 99824057</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full p-3 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Email</h3>
                    <p className="text-gray-600">mercaliingenieriaelectrica@gmail.com</p>
                    <p className="text-gray-600">m.mercadol@mercaliingenieria.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full p-3 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Dirección</h3>
                    <p className="text-gray-600">Pedrero Lote A1 Número 06, Graneros, Chile</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-500 text-white rounded-full p-3 mr-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/56999824057" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 transition-smooth"
                    >
                      Iniciar conversación
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-secondary/10 rounded-lg">
                <h3 className="font-bold text-primary mb-2">Horario de Atención</h3>
                <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                <p className="text-gray-600">Sábados: 9:00 - 13:00</p>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <ContactForm />
          </div>

          {/* Mapa de Ubicación */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Nuestra Ubicación
            </h2>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="w-full h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26522.89842279954!2d-70.75238544999999!3d-34.0678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9663f5a0b7b3b3b3%3A0x3b3b3b3b3b3b3b3b!2sGraneros%2C%20O&#39;Higgins%2C%20Chile!5e0!3m2!1ses!2scl!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Mercali Ingeniería en Graneros, Chile"
                ></iframe>
              </div>
              <div className="mt-4 text-center text-gray-600">
                <p className="font-semibold">📍 Pedrero Lote A1 Número 06, Graneros, Región de O'Higgins, Chile</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
