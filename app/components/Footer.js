import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: Sobre la empresa */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mercali Ingeniería</h3>
            <p className="text-gray-300 text-sm">
              Empresa especializada en soluciones integrales de ingeniería eléctrica 
              para el sector industrial y comercial.
            </p>
          </div>

          {/* Columna 2: Enlaces */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-secondary transition-smooth text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-secondary transition-smooth text-sm">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-gray-300 hover:text-secondary transition-smooth text-sm">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-secondary transition-smooth text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <strong>Teléfono:</strong> +56 (9) 99824057
              </li>
              <li>
                <strong>Email:</strong>
                <div className="mt-1">
                  mercaliingenieriaelectrica@gmail.com
                </div>
                <div>
                  m.mercadol@mercaliingenieria.com
                </div>
              </li>
              <li>
                <strong>Dirección:</strong> Pedrero Lote A1 Número 06, La Punta, Chile
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mercali Ingeniería. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
