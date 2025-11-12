# Instrucciones para agregar imágenes y videos de tus proyectos

## 📁 Ubicación de archivos

Coloca tus archivos en la carpeta: `public/projects/`

## 📸 Archivos recomendados:

### Imágenes (JPG/PNG/WebP):
1. **huerto-hogar.jpg** - Captura de tu tienda Huerto Hogar (reemplaza el SVG placeholder)
2. **grozy-bot.jpg** - Captura del ChatBot Grozy (reemplaza el SVG placeholder)
3. **impostor-game.jpg** - Captura del juego Impostor en Kotlin (reemplaza el SVG placeholder)
4. **demo.jpg** - Imagen para el cuarto proyecto (opcional)

### Video (MP4):
- **impostor-game.mp4** - Video de gameplay del Juego Impostor

## � Archivos actuales (Placeholders):

Actualmente hay imágenes SVG de placeholder con gradientes:
- ✅ `huerto-hogar.svg` (color verde - jardinería)
- ✅ `grozy-bot.svg` (color morado - bot/IA)
- ✅ `impostor-game.svg` (color rojo - juego)
- ✅ `demo.svg` (color azul - demo)

**Estos son temporales** y se verán reemplazados automáticamente cuando agregues tus imágenes reales.

## �🎥 Para el video del Juego Impostor:

1. **Formato:** MP4 (no necesitas convertir a GIF)
2. **Duración:** 10-30 segundos es ideal
3. **Peso:** Menos de 10MB para mejor rendimiento
4. **Resolución:** 1280x720 o 1920x1080
5. **Nombre:** `impostor-game.mp4`

## 📐 Recomendaciones para imágenes:

- **Formato:** JPG (mejor), PNG o WebP
- **Dimensiones:** 1200x800px o similar (ratio 3:2)
- **Peso:** Menos de 500KB por imagen
- **Calidad:** Alta resolución pero optimizada

## 🔄 Cómo reemplazar los placeholders:

1. Toma una captura/foto de tu proyecto
2. **Renombra el archivo exactamente como**:
   - `huerto-hogar.jpg` (o .png)
   - `grozy-bot.jpg`
   - `impostor-game.jpg`
3. Colócalo en `public/projects/`
4. El portafolio usará automáticamente tu imagen en lugar del SVG

## 🚀 Cuando hayas agregado tus archivos:

El portafolio mostrará automáticamente:
- ✅ **Tus imágenes reales** en lugar de los placeholders
- ✅ **Video en loop** para el Juego Impostor (en el modal)
- ✅ **Efecto hover** con zoom
- ✅ **Modal expandido** al hacer clic con todos los detalles

## 💡 Estructura final:

```
public/projects/
├── huerto-hogar.jpg       ← Tu imagen (reemplaza .svg)
├── grozy-bot.jpg          ← Tu imagen (reemplaza .svg)
├── impostor-game.jpg      ← Tu imagen (reemplaza .svg)
├── impostor-game.mp4      ← Tu video
├── demo.jpg               ← Tu imagen (opcional)
│
├── huerto-hogar.svg       (placeholder automático si falta .jpg)
├── grozy-bot.svg          (placeholder automático si falta .jpg)
├── impostor-game.svg      (placeholder automático si falta .jpg)
└── demo.svg               (placeholder automático si falta .jpg)
```

**Nota:** Next.js priorizará JPG/PNG sobre SVG si ambos existen con el mismo nombre base.

