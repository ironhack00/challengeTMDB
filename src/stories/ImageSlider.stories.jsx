import React from "react";
import ImageSlider from "../component/ImageSlider";

export default {
  title: "Component/ImageSlider",
  component: ImageSlider,
  tags: ["autodocs"], // Habilita autodocumentación automática
  parameters: {
    docs: {
      description: {
        component: `
### ImageSlider

Componente visual para mostrar una rotación de imágenes de películas populares usando datos de TMDB. Muestra una sola imagen a la vez, cambiando automáticamente cada 5 segundos, con pausa cuando el usuario coloca el mouse encima.

---

### Características

- ✅ Rotación automática cada 5 segundos.
- ✅ Se pausa automáticamente al hacer hover.
- ✅ Responsive con diferentes alturas para móviles y desktop.
- ✅ Imágenes extraídas de \`backdrop_path\` o \`poster_path\`.
- ✅ Lógica encapsulada con el hook \`useFetchMovies\`.

---

### Hook Interno

Usa:

\`\`\`ts
useFetchMovies(fetchNewMovies): {
  movies: Movie[],
  loading: boolean,
  error: string
}
\`\`\`

---

### Estados Internos

- \`current: number\` → índice actual de la película en rotación.
- \`paused: boolean\` → determina si se detiene la rotación.
- \`intervalRef: ref\` → referencia al setInterval activo.

---

### Estructura de Imagen

Las imágenes se renderizan desde:

\`https://image.tmdb.org/t/p/original\${movie.backdrop_path || movie.poster_path}\`

---

### Estilos

- Tailwind CSS para layout y transición de opacidad.
- Altura adaptable: \`150px → 280px\` según tamaño de pantalla.
- Botón flotante "Watch now" con estilos personalizados.

---

### Ejemplo de Uso

\`\`\`jsx
import ImageSlider from "./ImageSlider";

function App() {
  return (
    <div className="max-w-4xl mx-auto">
      <ImageSlider />
    </div>
  );
}
\`\`\`

---

### Consideraciones

- Asegurate de tener acceso a la API de TMDB y que \`fetchNewMovies\` esté correctamente definido.
- Si se desea controlar el intervalo, pausa o imagen manualmente, este componente puede extenderse con props adicionales.
        `,
      },
    },
  },
  argTypes: {
    // No recibe props actualmente, pero dejamos este espacio preparado
  },
};

const Template = (args) => <ImageSlider {...args} />;

export const Default = Template.bind({});
Default.args = {};
