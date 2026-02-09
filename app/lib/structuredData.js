// Structured Data para Servicios
export const serviciosStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Ingeniería Eléctrica Industrial',
  provider: {
    '@type': 'Organization',
    name: 'Mercali Ingeniería',
    url: 'https://www.mercaliingenieria.com',
    telephone: '+56-9-99824057',
    email: 'mercaliingenieriaelectrica@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pedrero Lote A1 Número 06',
      addressLocality: 'La Punta',
      addressRegion: 'Región de O\'Higgins',
      addressCountry: 'CL'
    }
  },
  areaServed: {
    '@type': 'Country',
    name: 'Chile'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Ingeniería Eléctrica',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Diseño de Sistemas Eléctricos',
          description: 'Diseño completo de sistemas eléctricos con planos detallados y certificaciones oficiales'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mantenimiento Eléctrico Industrial',
          description: 'Mantenimiento preventivo y correctivo, mediciones eléctricas especializadas'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Optimización Energética',
          description: 'Análisis y mejora de eficiencia energética para reducir costos operacionales'
        }
      }
    ]
  }
}

// Structured Data para LocalBusiness
export const localBusinessStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.mercaliingenieria.com',
  name: 'Mercali Ingeniería',
  image: 'https://www.mercaliingenieria.com/logo_footer.jpeg',
  description: 'Empresa especializada en ingeniería eléctrica industrial y comercial en La Punta, Chile',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Pedrero Lote A1 Número 06',
    addressLocality: 'La Punta',
    addressRegion: 'Región de O\'Higgins',
    postalCode: '2930000',
    addressCountry: 'CL'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-34.0678',
    longitude: '-70.7368'
  },
  url: 'https://www.mercaliingenieria.com',
  telephone: '+56999824057',
  email: 'mercaliingenieriaelectrica@gmail.com',
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    }
  ],
  sameAs: [
    'https://www.facebook.com/mercaliingenieria',
    'https://www.linkedin.com/company/mercali-ingenieria'
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '15'
  }
}

// Breadcrumb para navegación
export const getBreadcrumbStructuredData = (items) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}
