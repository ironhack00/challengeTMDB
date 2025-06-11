import React from "react";
import NewTrailer from "../component/NewTrailer";

export default {
  title: "component/NewTrailer",
  component: NewTrailer,
  tags: ["autodocs"], // Habilita autodocumentación
  parameters: {
    docs: {
      description: {
        component: `
### NewTrailer

Componente que muestra trailers nuevos en un carrusel automático con pausa al hacer hover.

---

### Características

- Rotación automática cada 7 segundos.
- Muestra 2 películas al mismo tiempo.
- Se pausa al pasar el mouse.
- Usa el hook \`useFetchMovies\` para traer trailers desde TMDB.
- Usa el componente \`Card\` para cada trailer.

---

### Hook

\`\`\`ts
useFetchMovies(apiFunction): {
  movies: Movie[],
  loading: boolean,
  error: string
}
\`\`\`

---

### Estados internos

- \`currentIndex\`: índice del primer trailer.
- \`isHovered\`: determina si el mouse está encima.
- \`intervalRef\`: referencia al setInterval.


---

### Consideraciones

- Necesita conectividad con la API de TMDB.
- Las imágenes se cargan desde https://image.tmdb.org/t/p/w500.
        `,
      },
    },
  },
  // El componente actualmente no recibe props, pero documentamos como base
  argTypes: {},
};

const Template = (args) => <NewTrailer {...args} />;

export const Default = Template.bind({});
Default.args = {};
