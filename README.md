# Tarjeta Web Interactiva de Baby Shower

[![GitHub Pages Ready](https://img.shields.io/badge/GitHub%20Pages-Ready-brightgreen?style=for-the-badge&logo=github)](https://pages.github.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)

Invitación digital e interactiva en formato web diseñada para celebrar el **Baby Shower de Xxxxxxx**, optimizada para publicarse de forma gratuita en **GitHub Pages** y compartirse a través de WhatsApp o redes sociales.

---

##  Información del Evento

- **Bebé**: xxxxx 👶🏻🌸
- **Padres**: xxxxxxx xx xxxx 💑
- **Fecha**: xxxxxx, xxxxxxxx
- **Hora**: 3:30 PM (Hora Colombia -05:00 GMT)
- **Lugar**: xxxxxx xxxxx xxxxx
- **Dirección**: Cra. xxx #xx-xx, xxxxxxxx
- **Ubicación GPS**: [Abrir en Google Maps](https://maps.app.goo.gl/xxxxxxxxxxxxxxxx)
- **Confirmación (RSVP)**: Chat directo de WhatsApp `+5x xxx xxxxxxx`

---

## ✨ Características e Innovaciones

### 🎥 Video de Ecografía Incorporado (`bebe_video_eco.mp4`)
En lugar de una foto fija, la tarjeta incluye una reproductor de video en bucle continuo, silenciado y con reproducción automática (`autoplay loop muted playsinline`), enmarcado dentro de un marco de rosas y peonías acuarela con sombra suave.

### 🎵 Reproducción de Canción de la Bebé (`bebesong.mp3`)
- Al tocar el botón interactivo en forma de flor (*"toca la florcita para escuchar mi canción"*), se reproduce la música en segundo plano sin salir ni recargar la tarjeta.
- Incluye efecto visual de notas musicales flotantes (`🎵`, `🎶`, `🌸`), pulso radiante y rotación suave de la flor mientras suena la música.

### ⏳ Contador Regresivo en Tiempo Real
Un marcador en vivo calcula los días, horas, minutos y segundos exactos faltantes para la fecha y hora del Baby Shower (1 de Noviembre de 2026 a las 3:30 PM).

### 📍 Navegación GPS e Integración con Google Maps
- Botón principal *"Abrir en Google Maps"* con redirección directa a las coordenadas del **xxxx xxxxx xxxxx xxxxxxx**.
- Mapa interactivo empotrado (Iframe Google Maps) para visualizar la ruta sin salir de la invitación.

### 💬 Confirmación de Asistencia (RSVP por WhatsApp)
Botón interactivo que abre directamente una conversación de WhatsApp con los padres (`+57 3xx xxxxxx`) con un mensaje amigable pre-redactado:
> *"¡Hola xxxxxx y xxxxx! Quiero confirmar mi asistencia al Baby Shower de xxxxxx 👶🏻🌸. Mi nombre es: "*

### 📅 Integración con Google Calendar
Botón *"Agendar en mi Calendario"* que genera el evento automáticamente en Google Calendar con la fecha, horario, ubicación y detalles.

### 🦋 Animaciones y Efectos Visuales
- **Lluvia de Pétalos y Destellos**: Canvas 2D interactivo en segundo plano que genera caídas continuas de pétalos rosa y destellos dorados brillantes.
- **Mariposas Aleteando**: Mariposas animadas flotando sutilmente alrededor de la tarjeta.
- **Conejito Flotante**: Ilustración acuarela de conejito con movimiento natural de elevación y balanceo.
- **Marcos Florales Acuarela**: Arbusto floral superior e inferior en espejo que encuadran delicadamente la invitación.
- **Transparencia 100% Real**: Todas las imágenes (`.png`) cuentan con canal Alfa transparente, sin recuadros o fondos blancos.

---

## 📁 Estructura del Proyecto

```text
TARJETA BABY SOWERS/
│
├── index.html                  # Estructura HTML5 semántica y metadatos OpenGraph
├── styles.css                  # Hoja de estilos con variables, animaciones y diseño responsivo
├── script.js                   # Lógica JS (reproductor de música, contador, pétalos y WhatsApp)
│
├── bebe_video_eco.mp4          # Video corto de la ecografía del bebé en bucle
├── bebesong.mp3                # Archivo de audio de la canción del bebé
│
├── cute_bunny.png              # Ilustración de conejito acuarela (PNG Transparente)
├── floral_wreath.png           # Marco floral para el video (PNG Transparente)
├── floral_border.png           # Borde de flores silvestres superior e inferior (PNG Transparente)
├── music_flower.png            # Icono de flor para el reproductor musical (PNG Transparente)
│
└── README.md                   # Documentación completa del proyecto
```

---

## 🚀 Cómo Publicar en GitHub Pages (Paso a Paso)

Esta tarjeta está 100% lista para alojarse de forma totalmente gratuita en **GitHub Pages**:

1. **Crear un Repositorio en GitHub**:
   - Ingresa a [GitHub.com](https://github.com/) e inicia sesión.
   - Haz clic en **New repository**.
   - Asigna un nombre al repositorio (por ejemplo: `baby-shower-xxxxxx`).
   - Selecciona la opción **Public** y haz clic en **Create repository**.

2. **Subir los Archivos del Proyecto**:
   - Sube todos los archivos listados en la sección de estructura (`index.html`, `styles.css`, `script.js`, archivos `.png`, `.mp4` y `.mp3`).

3. **Activar GitHub Pages**:
   - En tu repositorio en GitHub, ve a la pestaña **Settings** > **Pages** (en el menú lateral izquierdo).
   - En la sección **Build and deployment** > **Branch**, selecciona `main` (o `master`) y el directorio `/ (root)`.
   - Haz clic en **Save**.

4. **Obtener tu Enlace Público**:
   - En pocos segundos, GitHub generará tu enlace web público (ejemplo: `https://tu-usuario.github.io/baby-shower-xxxxx/`).
   - ¡Copia ese enlace y compártelo por WhatsApp con tus invitados!

---

## 🛠️ Personalización o Modificaciones

- **Cambiar Canción**: Simplemente reemplaza el archivo `bebesong.mp3` en la carpeta raíz por cualquier otra canción en formato `.mp3`.
- **Cambiar Video de Ecografía**: Reemplaza `bebe_video_eco.mp4` por tu propio video corto en formato `.mp4`.
- **Modificar Número de WhatsApp**: Abre `script.js` y modifica la constante `const phone = '573xxxxxxxx';`.
- **Modificar Fecha o Horario**: En `script.js`, actualiza la fecha en `new Date('2026-11-01T15:30:00-05:00')`.

---

<p align="center">
  Diseñado con ❤️ para el Baby Shower de <b>xxxxxx</b> | Padres: <b>xxxxx & xxxxxx</b>
</p>
