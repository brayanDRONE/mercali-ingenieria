import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mercali Ingeniería - Soluciones en Ingeniería Eléctrica',
  description: 'Empresa especializada en ingeniería eléctrica, proyectos industriales y servicios eléctricos profesionales.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
