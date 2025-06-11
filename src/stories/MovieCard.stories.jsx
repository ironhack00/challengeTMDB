import MovieCard from "../component/UI/MovieCard";

export default {
  title: "UI/MovieCard",
  component: MovieCard,
  tags: ["autodocs"],
  argTypes: {
    movie: {
      control: "object",
      description: `
Objeto que representa una película. Debe contener al menos las siguientes propiedades:

- \`title\` (string): Título de la película.
- \`poster_path\` (string): Ruta parcial del póster de la película, que se concatena con una URL base de TMDB.
      `,
      defaultValue: {
        title: "Inception",
        poster_path: "/qOaQbTUsB6JWzv5gRy7oqZTVduB.jpg",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
# MovieCard

El componente MovieCard muestra una tarjeta visual para una película, incluyendo el póster y un overlay con el título al hacer hover.

Diseñado con Tailwind CSS**, es totalmente responsive y se adapta a distintos tamaños de pantalla, ofreciendo una experiencia visual rica con efectos suaves de transición.

---

## Características principales

- Imagen de fondo con el póster de la película.
- Overlay semitransparente con el título al hacer hover.
- Estilos responsivos: altura variable según el breakpoint.
- Efectos visuales: transiciones suaves, sombras, bordes redondeados.

---

## Props

### \`movie\` (object) — **requerido**
Objeto con información de la película. Debe contener:

- \`title\` (string): Título de la película, usado en el overlay y en el atributo \`alt\` de la imagen.
- \`poster_path\` (string): Ruta de la imagen del póster que se concatena a una base URL de The Movie Database (TMDB).

---

## Estilos y estructura

- Imagen principal: se adapta completamente al contenedor, centrada en la parte inferior.
- Overlay: aparece con un fondo gris oscuro semitransparente al hacer hover.
- Transición: suavizada con \`transition-opacity duration-500\`.
- Altura: varía entre \`h-48\` y \`lg:h-72\` según el tamaño del viewport.
- Clase \`group\`: usada para aplicar hover a elementos hijos.

---

## Accesibilidad

- El texto del título se renderiza como \`<h2>\` y la imagen incluye un \`alt\` descriptivo con el título de la película.

---

## Ejemplo de uso

\`\`\`jsx
<MovieCard
  movie={{
    title: "Inception",
    poster_path: "/qOaQbTUsB6JWzv5gRy7oqZTVduB.jpg",
  }}
/>
\`\`\`

---
        `,
      },
    },
  },
};

const Template = (args) => <MovieCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  movie: {
    title: "Inception",
    poster_path: "/qOaQbTUsB6JWzv5gRy7oqZTVduB.jpg",
  },
};

export const AnotherMovie = Template.bind({});
AnotherMovie.args = {
  movie: {
    title: "The Batman",
    poster_path: "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  },
};

export const WithoutPoster = Template.bind({});
WithoutPoster.args = {
  movie: {
    title: "Unknown Movie",
    poster_path: "", // Será un espacio vacío
  },
};
