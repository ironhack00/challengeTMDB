import NavBar from "../component/layout/NavBar";

export default {
  title: "Layout/NavBar",
  component: NavBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# NavBar

El componente **NavBar** Está diseñado con **Tailwind CSS** y ofrece una experiencia fluida en escritorio y dispositivos móviles.

## Características principales

- Barra adaptable (desktop y mobile).
- Animaciones de transición suaves.
- Menú hamburguesa en pantallas pequeñas.
- Íconos personalizados e imagen de usuario.

---

## Props

Este componente no recibe props directamente ya que internamente utiliza rutas predefinidas y estado local. Las rutas se definen en dos constantes:

NAV_ITEMS: Array de objetos con las secciones principales del menú:

[
  { label: "Movies", to: "/movies" },
  { label: "TV Shows", to: "/tv-shows" },
  { label: "Animations", to: "/animations" },
  { label: "Plans", to: "/plans" },
];


NAV_ICONS: Array de objetos con íconos del lado derecho (barra de acciones):

[
  { icon: <IoSearch />, key: "search", to: "/search" },
  { icon: <RiApps2Line />, key: "apps", to: "/apps" },
  {
    icon: <img src="..." />, key: "profile", isImage: true, to: "/profile"
  },
];



---

Estilos

- Implementado completamente con **Tailwind CSS**.
- Transiciones suaves (transition-all, duration-300).

---

Notas de desarrollo

- Puedes extender el menú pasando más ítems a \`NAV_ITEMS\` o \`NAV_ICONS\`.
- El triángulo naranja se posiciona dinámicamente bajo el ítem activo o en hover, basado en coordenadas absolutas.
- Usa hooks de React como \`useRef\`, \`useEffect\` y \`useLocation\`.

        `,
      },
    },
  },
};

export const Navbar = {
  args: {},
};
