# Configuración de Google Maps - Mercali Ingeniería

## 📍 Mapas Agregados

Se han agregado mapas de Google Maps en:
- ✅ **Página Principal** (sección "Dónde Ubicarnos")
- ✅ **Página de Contacto** (sección "Nuestra Ubicación")

Los mapas actualmente muestran **Graneros, Región de O'Higgins, Chile** como ubicación general.

---

## 🔧 Cómo Obtener el Embed Correcto para tu Dirección Exacta

Para mostrar la ubicación exacta de "Pedrero Lote A1 Número 06, Graneros", sigue estos pasos:

### Paso 1: Ir a Google Maps
1. Abre [Google Maps](https://www.google.com/maps)
2. Busca: **"Pedrero Lote A1 Número 06, Graneros, Chile"**
3. Ajusta el pin en el mapa a tu ubicación exacta si es necesario

### Paso 2: Obtener el Código de Embed
1. Haz clic en el botón **"Compartir"**
2. Selecciona la pestaña **"Insertar un mapa"**
3. Copia el código HTML que aparece (debe empezar con `<iframe src="https://www.google.com/maps/embed?...`)

### Paso 3: Reemplazar en los Archivos

#### En la Página de Contacto:
**Archivo:** `app/contacto/page.js`

Buscar la línea que tiene:
```javascript
src="https://www.google.com/maps/embed?pb=!1m18..."
```

Y reemplazar con tu URL de Google Maps.

#### En la Página Principal:
**Archivo:** `app/page.js`

Buscar la línea que tiene:
```javascript
src="https://www.google.com/maps/embed?pb=!1m18..."
```

Y reemplazar con tu URL de Google Maps.

---

## 📝 Ejemplo Completo

Si tu iframe de Google Maps se ve así:
```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.4076961873647!2d-70.12345!3d-34.06789!..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
```

Solo necesitas copiar la parte de `src="..."` y reemplazarla en los archivos.

---

## 🎨 Funcionalidades Actuales del Mapa

### Página Principal:
- ✅ Efecto hover con escala
- ✅ Transición de escala de grises a color
- ✅ Borde con efecto hover
- ✅ Sombra con efecto 3D
- ✅ Altura de 350px

### Página de Contacto:
- ✅ Altura de 384px (h-96)
- ✅ Sombra y borde redondeado
- ✅ Título descriptivo para accesibilidad
- ✅ Dirección completa debajo del mapa

---

## 🔍 Coordenadas GPS Actuales (aproximadas)

Las coordenadas utilizadas son de **Graneros** en general:
- **Latitud:** -34.0678
- **Longitud:** -70.7368

Para obtener las coordenadas exactas de tu ubicación:
1. En Google Maps, haz clic derecho en tu ubicación
2. Selecciona la primera opción (las coordenadas)
3. Se copiarán automáticamente al portapapeles

---

## ⚙️ Personalización Adicional

### Cambiar el Zoom del Mapa
En la URL del iframe, busca `4f13.1` y modifica el número (menor = más zoom out, mayor = más zoom in).

### Cambiar el Tipo de Mapa
Puedes agregar al final de la URL:
- `&maptype=roadmap` - Vista de carreteras (por defecto)
- `&maptype=satellite` - Vista satelital
- `&maptype=hybrid` - Híbrida

### Desactivar Controles
Agregar a la URL:
- `&zoom=14` - Establecer nivel de zoom fijo
- `&center=-34.0678,-70.7368` - Centrar en coordenadas específicas

---

## 🚀 Próximos Pasos

1. ✅ Obtener embed de Google Maps con tu dirección exacta
2. ✅ Reemplazar en `app/contacto/page.js`
3. ✅ Reemplazar en `app/page.js`
4. ✅ Verificar que el mapa muestre correctamente tu ubicación
5. ✅ Probar en dispositivos móviles

---

## 📱 Responsive Design

Los mapas son completamente responsivos:
- Mobile: 100% del ancho del contenedor
- Tablet: 100% del ancho del contenedor
- Desktop: 100% del ancho del contenedor

Se adaptan automáticamente a todos los tamaños de pantalla.
