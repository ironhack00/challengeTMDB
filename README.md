🎬 React + Vite + TMDB | Aplicación de Películas
Este proyecto es una aplicación web desarrollada con React y Vite, que consume datos en tiempo real desde la API pública de The Movie Database (TMDB).
Permite explorar películas populares, visualizar sinopsis, puntuaciones, y disfrutar de una interfaz moderna, responsiva y dinámica.

Además, incorpora documentación visual con Storybook, validación de código con ESLint, y una arquitectura modular y escalable.

⚙️ Tecnologías utilizadas
Tecnología Descripción
⚛ React Biblioteca para construir interfaces de usuario.
⚡ Vite Empaquetador rápido y moderno para desarrollo frontend.
🎨 Tailwind Framework de utilidad para estilos rápidos y responsivos.
📚 Storybook Visualización interactiva de componentes en aislamiento.
🎞 TMDB API Fuente externa para obtener datos actualizados de películas.
📡 Axios Cliente HTTP para manejar llamadas a la API.
🔍 ESLint Validación automática de buenas prácticas de desarrollo.

🚀 ¿Cómo correr la aplicación?
Cloná el repositorio:

bash
Copiar
Editar
git clone https://github.com/ironhack00/challengeTMDB.git && cd challengeTMDB
Instalá las dependencias:

bash
Copiar
Editar
npm install
Configurá el entorno:

Creá un archivo .env en la raíz del proyecto con el siguiente contenido:

env
Copiar
Editar
VITE_API_KEY=TU_API_KEY
language=es-ES
VITE_API_BASE_URL=https://api.themoviedb.org/3
VITE_IMG_BASE=https://image.tmdb.org/t/p/w500
Ejecutá la app:

bash
Copiar
Editar
npm run dev
Luego, accedé en http://localhost:5173.

📚 Documentación con Storybook
Este proyecto incluye una documentación interactiva de componentes utilizando Storybook.
Para iniciarla:

bash
Copiar
Editar
npm run storybook
Abrí tu navegador en http://localhost:6006.

📜 Scripts disponibles
Comando Descripción
npm run dev Inicia el servidor de desarrollo (Vite).
npm run build Genera la build de producción.
npm run preview Previsualiza la build localmente.
npm run lint Ejecuta ESLint para validar el código.
npm run storybook Inicia Storybook para visualizar componentes.
npm run build-storybook Genera una build estática de Storybook.

🌟 Características destacadas
🦴 Skeleton loaders con retardo simulado:
Algunos componentes usan setTimeout para mostrar placeholders de carga antes del contenido final, mejorando la experiencia del usuario.

🎠 Carouseles diferenciados:
Un componente permite scroll infinito, mientras que otro tiene límite de scroll, ofreciendo variedad en la navegación.

🖼️ Imágenes dinámicas:
Rotación automática cada 5 o 7 segundos, dependiendo del componente, generando dinamismo visual.

🧠 Hooks personalizados:
Separación entre lógica de negocio y presentación para mejorar la organización del código.

🔀 Ordenamiento dinámico:
Posibilidad de ordenar películas por estrenos más recientes o más antiguos.

💡 Buenas prácticas implementadas
📦 Arquitectura modular con clara separación de responsabilidades (UI vs lógica).

✅ Validación con ESLint para mantener un código limpio y coherente.

💅 Estilos adaptativos y consistentes gracias a Tailwind.

🧩 Componentes reutilizables con nombres semánticos y profesionales.

📁 Organización del código orientada a escalabilidad y mantenibilidad.

📎 Repositorio
👉 https://github.com/ironhack00/challengeTMDB

🙌 Nota final
Espero que encuentren valor en este proyecto, tanto en su presentación visual como en su arquitectura, buenas prácticas y organización del código.
¡Muchas gracias por tomarse el tiempo para explorarlo! Estoy disponible para explicar cada parte técnica si es necesario.
