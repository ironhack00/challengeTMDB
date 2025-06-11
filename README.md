# 🎬 React + Vite + TMDB | Aplicación de Películas

Este proyecto es una aplicación web desarrollada con **React + Vite**, que consume datos de **The Movie Database (TMDB)** mediante su API pública.  
Permite explorar películas populares, visualizar detalles como sinopsis y puntuaciones, e interactuar con una interfaz moderna, responsiva y dinámica.

También incluye documentación visual de los componentes mediante **Storybook**, y utiliza **ESLint** para validar la calidad del código.

---

## ⚙️ Tecnologías principales

- **React** – Librería para construir interfaces de usuario.
- **Vite** – Empaquetador rápido y moderno.
- **Tailwind CSS** – Framework de utilidad para estilos rápidos y consistentes.
- **Storybook** – Documentación visual de componentes en forma aislada.
- **TMDB API** – Provee información actualizada de películas.
- **ESLint** – Asegura buenas prácticas de código.
- **Axios** – Para llamadas HTTP.

---

## 🚀 Cómo correr la aplicación

1. Cloná el repositorio desde GitHub https://github.com/ironhack00/challengeTMDB.git y accedé a la raíz del proyecto.  
   `cd challengeTMDB`

2. Instalá las dependencias con:  
   `npm install`

3. Creá un archivo `.env` en la raíz del proyecto con las siguientes variables:

   - `VITE_API_KEY`
   - `language=es-ES`
   - `VITE_API_BASE_URL=https://api.themoviedb.org/3`
   - `VITE_IMG_BASE=https://image.tmdb.org/t/p/w500`

4. Ejecutá la app con:  
   `npm run dev`  
   Accedé en `http://localhost:5173`.

---

## 📚 Documentación con Storybook

Este proyecto incluye documentación visual de componentes con **Storybook**.  
Podés iniciarlo con `npm run storybook`, y estará disponible por defecto en `http://localhost:6006`.

---

## ✅ Scripts disponibles

| Comando                 | Descripción                             |
| ----------------------- | --------------------------------------- |
| npm run dev             | Inicia el servidor de desarrollo (Vite) |
| npm run build           | Genera la build de producción           |
| npm run preview         | Previsualiza la build localmente        |
| npm run lint            | Ejecuta ESLint sobre todo el proyecto   |
| npm run storybook       | Inicia la documentación de componentes  |
| npm run build-storybook | Genera la build de Storybook            |

---

## 💡 Características destacadas

- **Skeleton loaders**: varios componentes cuentan con carga esquelética para mejorar la experiencia de usuario.
- **Carouseles diferenciados**: uno de los carouseles tiene scroll infinito, mientras que otro es limitado.
- **Imágenes dinámicas**: cambian automáticamente cada 5 o 7 segundos según el componente.
- **Hooks personalizados**: separamos lógica de la UI para mejorar escalabilidad y mantenibilidad.
- **Ordenamiento**: la aplicación permite ordenar las películas por estrenos más nuevos y también por los más antiguos.

---

## 🙌 Nota final

> Espero que encuentren valor en este proyecto, tanto en su presentación visual como en la arquitectura y organización del código.  
> ¡Muchas gracias por tomarse el tiempo para explorarlo!
