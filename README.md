# 🎬 React + Vite + TMDB | Aplicación de Películas

Este proyecto es una aplicación web desarrollada con **React** y **Vite**, que consume datos en tiempo real desde la API pública de **The Movie Database (TMDB)**.

Permite:

- Explorar películas populares
- Visualizar sinopsis y puntuaciones
- Disfrutar de una interfaz moderna, responsiva y dinámica

Además, incluye:

- 📚 Documentación visual con **Storybook**
- 🔍 Validación de código con **ESLint**
- 📦 Arquitectura modular y escalable

---

## ⚙️ Tecnologías utilizadas

| Tecnología   | Descripción                                     |
| ------------ | ----------------------------------------------- |
| ⚛ React      | Biblioteca para construir interfaces de usuario |
| ⚡ Vite      | Empaquetador rápido y moderno                   |
| 🎨 Tailwind  | Framework de estilos utilitario                 |
| 📚 Storybook | Visualización interactiva de componentes UI     |
| 🎞 TMDB API   | Fuente externa de datos de películas            |
| 📡 Axios     | Cliente HTTP para llamadas a la API             |
| 🔍 ESLint    | Validación automática de buenas prácticas       |

## 🚀 ¿Cómo correr la aplicación?

### 1. Clonar el repositorio

git clone https://github.com/ironhack00/challengeTMDB.git
cd challengeTMDB

2. Instalar dependencias
   npm install

3. Configurar variables de entorno
   Crear un archivo .env en la raíz del proyecto con el siguiente contenido:

. env:
VITE_API_KEY=TeyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTM1ZjQ4Y2ZiZTg1Yzg4YzFlODczYjAyNWQ3NmNiOCIsIm5iZiI6MTc0OTIyNTU2Mi45NjYsInN1YiI6IjY4NDMxMDVhOGQ3YmQzNGM0ODUzOWQ1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jPYkKq6Yhx2LJu6-2wN9qudosY6_xdoqtIrm1W5AOPc
language=es-ES
VITE_API_BASE_URL=https://api.themoviedb.org/3
VITE_IMG_BASE=https://image.tmdb.org/t/p/w500

4. Iniciar el servidor de desarrollo
   npm run dev
   Luego accedé a la aplicación desde: http://localhost:5173

📚 Documentación de componentes con Storybook
Este proyecto incluye documentación visual e interactiva de los componentes UI con Storybook.

Para iniciarlo localmente:
npm run storybook
Accedé desde tu navegador a: http://localhost:6006

📜 Scripts disponibles
Comando Descripción
npm run dev Inicia el servidor de desarrollo (Vite)
npm run build Genera la build de producción
npm run preview Previsualiza la build localmente
npm run lint Ejecuta ESLint para validar el código
npm run storybook Inicia la documentación visual de componentes
npm run build-storybook Genera una build estática de Storybook

🌟 Características destacadas
🦴 Skeleton loaders con retardo simulado
Simulan carga realista antes de renderizar contenido.

🎠 Carouseles diferenciados
Scroll infinito o con límite de navegación para una UX variada.

🖼️ Imágenes dinámicas
Cambio automático cada 5 o 7 segundos en ciertos componentes.

🧠 Hooks personalizados
Separación entre lógica y presentación para un código más limpio.

🔀 Ordenamiento dinámico
Permite ordenar películas por estrenos más recientes o más antiguos.

✅ Código validado con ESLint para mantener consistencia

💅 Estilos adaptativos y responsivos con Tailwind

📁 Organización escalable para mantenimiento a largo plazo

📎 Repositorio
🔗 https://github.com/ironhack00/challengeTMDB

🙌 Nota final
Espero que encuentren valor en este proyecto, tanto por su experiencia visual como por su arquitectura y buenas prácticas.
Estoy disponible para explicar cualquier aspecto técnico si lo desean.🎉
Gracias.
