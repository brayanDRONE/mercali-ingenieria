import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Mercali Ingeniería - Soluciones en Ingeniería Eléctrica Industrial y Comercial',
    template: '%s | Mercali Ingeniería'
  },
  description: 'Empresa líder en ingeniería eléctrica en La Punta, Chile. Ofrecemos diseño de sistemas eléctricos, mantenimiento industrial, optimización energética y proyectos eléctricos certificados para empresas.',
  keywords: ['ingeniería eléctrica', 'proyectos eléctricos', 'mantención eléctrica', 'La Punta', 'Chile', 'sistemas eléctricos industriales', 'optimización energética', 'certificación eléctrica', 'instalaciones eléctricas', 'tableros eléctricos', 'automatización industrial'],
  icons: {
    icon: '/logo_icono.jpeg',
    shortcut: '/logo_icono.jpeg',
    apple: '/logo_icono.jpeg',
  },
  authors: [{ name: 'Mercali Ingeniería' }],
  creator: 'Mercali Ingeniería',
  publisher: 'Mercali Ingeniería',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://www.mercaliingenieria.com',
    siteName: 'Mercali Ingeniería',
    title: 'Mercali Ingeniería - Soluciones en Ingeniería Eléctrica',
    description: 'Empresa líder en ingeniería eléctrica en La Punta, Chile. Diseño, mantenimiento y optimización de sistemas eléctricos industriales.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mercali Ingeniería - Expertos en Sistemas Eléctricos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mercali Ingeniería - Soluciones en Ingeniería Eléctrica',
    description: 'Empresa líder en ingeniería eléctrica en La Punta, Chile. Diseño, mantenimiento y optimización de sistemas eléctricos.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.mercaliingenieria.com',
  },
  verification: {
    google: 'tu-codigo-de-verificacion-google',
  },
  category: 'Ingeniería',
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mercali Ingeniería',
    description: 'Empresa especializada en ingeniería eléctrica industrial y comercial',
    url: 'https://www.mercaliingenieria.com',
    logo: 'https://www.mercaliingenieria.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+56-9-99824057',
      contactType: 'customer service',
      areaServed: 'CL',
      availableLanguage: ['Spanish']
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pedrero Lote A1 Número 06',
      addressLocality: 'La Punta',
      addressRegion: 'Región de O\'Higgins',
      addressCountry: 'CL'
    },
    email: 'mercaliingenieriaelectrica@gmail.com',
    sameAs: [
      'https://www.facebook.com/mercaliingenieria',
      'https://www.linkedin.com/company/mercali-ingenieria'
    ]
  }

  return (
    <html lang="es">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#003d82" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Mercali Ingeniería" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
