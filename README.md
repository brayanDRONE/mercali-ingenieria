# Mercali Ingeniería - Sitio Web Corporativo

Sitio web corporativo moderno desarrollado con Next.js 14 (App Router) y Tailwind CSS, diseñado para ser exportado como sitio estático.

## 🚀 Características

- **Next.js 14** con App Router
- **Tailwind CSS** para estilos
- **Diseño responsive** optimizado para móviles
- **Exportable como sitio estático** (sin servidor)
- **Componentes reutilizables**
- **Botón flotante de WhatsApp**
- **Formulario de contacto** preparado para Formspree
- **SEO optimizado**

## 📋 Estructura del Proyecto

```
frontend/
├── app/
│   ├── components/
│   │   ├── Navbar.js        # Barra de navegación responsive
│   │   ├── Footer.js        # Pie de página con información
│   │   └── WhatsAppButton.js # Botón flotante de WhatsApp
│   ├── servicios/
│   │   └── page.js          # Página de servicios
│   ├── proyectos/
│   │   └── page.js          # Página de proyectos
│   ├── contacto/
│   │   └── page.js          # Página de contacto con formulario
│   ├── layout.js            # Layout principal
│   ├── page.js              # Página de inicio
│   └── globals.css          # Estilos globales
├── public/                  # Archivos estáticos
├── next.config.js           # Configuración de Next.js
├── tailwind.config.js       # Configuración de Tailwind
└── package.json
```

## 🛠️ Instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador:**
   ```
   http://localhost:3000
   ```

## 📦 Exportación Estática

Para generar el sitio estático listo para desplegar:

```bash
npm run build
```

Los archivos estáticos se generarán en la carpeta `/out`

## 🎨 Personalización

### Colores Corporativos

Los colores se pueden modificar en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#1e3a8a', // Azul oscuro
    light: '#3b82f6',
    dark: '#1e293b',
  },
  secondary: {
    DEFAULT: '#facc15', // Amarillo
    light: '#fef08a',
    dark: '#eab308',
  },
}
```

### WhatsApp

Modificar el número de WhatsApp en:
- `app/components/WhatsAppButton.js` (línea 4)
- `app/page.js` (sección CTA)

Reemplazar `569XXXXXXXX` con el número real.

### Formulario de Contacto

El formulario está preparado para Formspree:

1. Crear cuenta en [formspree.io](https://formspree.io)
2. Obtener el ID del formulario
3. Reemplazar en `app/contacto/page.js`:
   ```javascript
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

### Contenido

Modificar el contenido en cada archivo de página:
- `app/page.js` - Página de inicio
- `app/servicios/page.js` - Servicios
- `app/proyectos/page.js` - Proyectos
- `app/contacto/page.js` - Contacto

### Metadata y SEO

Modificar en `app/layout.js`:

```javascript
export const metadata = {
  title: 'Mercali Ingeniería - Título personalizado',
  description: 'Descripción personalizada',
}
```

## 📱 Páginas Incluidas

- **Inicio** (`/`) - Hero, servicios destacados, estadísticas, CTA
- **Servicios** (`/servicios`) - Listado detallado de servicios
- **Proyectos** (`/proyectos`) - Portfolio de proyectos realizados
- **Contacto** (`/contacto`) - Formulario y datos de contacto

## 🚀 Despliegue

El sitio se puede desplegar en cualquier servicio de hosting estático:

### Vercel (Recomendado)
```bash
vercel deploy
```

### Netlify
1. Conectar repositorio Git
2. Build command: `npm run build`
3. Publish directory: `out`

### GitHub Pages
1. Build: `npm run build`
2. Subir carpeta `out` a la rama `gh-pages`

### Hosting tradicional
1. Build: `npm run build`
2. Subir contenido de carpeta `out` por FTP

## 📝 Notas

- El sitio está optimizado para exportación estática (`output: 'export'`)
- Las imágenes están configuradas con `unoptimized: true`
- No requiere servidor Node.js en producción
- Compatible con cualquier hosting de archivos estáticos

## 🔧 Comandos Disponibles

```bash
npm run dev      # Modo desarrollo
npm run build    # Generar build estático
npm run start    # Servidor de producción (no necesario para export)
npm run lint     # Linter
```

## 📄 Licencia

Este proyecto es de uso privado para Mercali Ingeniería.

---

**Mercali Ingeniería** - Soluciones en Ingeniería Eléctrica
