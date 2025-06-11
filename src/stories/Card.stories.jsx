import React from "react";
import Card from "../component/UI/Card";

export default {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Título que aparece como overlay al hacer hover.",
    },
    image: {
      control: "text",
      description: "URL de la imagen de fondo de la tarjeta.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Componente **Card** que muestra una imagen con un overlay de título al hacer hover. 
Utiliza Tailwind CSS para estilos y efectos de transición.

### Props:
- \`title\` (string): texto a mostrar en el overlay.
- \`image\` (string): URL de la imagen.
        `,
      },
    },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Avengers: Endgame",
  image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  title: "",
  image: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
};
