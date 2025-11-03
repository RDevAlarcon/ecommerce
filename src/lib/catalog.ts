export type Collection = {
  id: string;
  title: string;
  description: string;
  image: string;
  accent: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  category: string;
  colors: string[];
  badge?: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

export const collections: Collection[] = [
  {
    id: "artisan",
    title: "Colección Artisan",
    description:
      "Piezas únicas trabajadas a mano con materiales reciclados y empaques neutros en carbono.",
    image: "/images/collection-artisan.svg",
    accent: "from-blue-500/20 via-sky-500/10 to-transparent",
  },
  {
    id: "signature",
    title: "Línea Signature",
    description:
      "Diseños minimalistas pensados para marcas premium que buscan diferenciarse sin sobrecargar.",
    image: "/images/collection-signature.svg",
    accent: "from-blue-300/25 via-cyan-400/15 to-transparent",
  },
  {
    id: "capsule",
    title: "Edición Cápsula",
    description:
      "Lanzamientos limitados con storytelling inmersivo y soporte creativo end-to-end.",
    image: "/images/collection-capsule.svg",
    accent: "from-indigo-500/25 via-blue-600/10 to-transparent",
  },
];

export const products: Product[] = [
  {
    id: "lumina",
    name: "Set Lumina",
    description:
      "Colección de packaging translúcido con acentos metálicos suavizados en degradé.",
    image: "/images/product-lumina.svg",
    price: "320 EUR",
    category: "Packaging",
    colors: ["#1d4ed8", "#60a5fa", "#f0f9ff"],
    badge: "Más solicitado",
  },
  {
    id: "atelier",
    name: "Branding Atelier",
    description:
      "Sistema visual modular con retícula tipográfica y aplicación omnicanal.",
    image: "/images/product-atelier.svg",
    price: "540 EUR",
    category: "Branding",
    colors: ["#0f172a", "#38bdf8", "#f8fafc"],
  },
  {
    id: "noir",
    name: "Editorial Noir",
    description:
      "Set editorial de 64 páginas con contrastes cromáticos y texturas táctiles.",
    image: "/images/product-noir.svg",
    price: "410 EUR",
    category: "Editorial",
    colors: ["#020617", "#64748b", "#94a3b8"],
  },
  {
    id: "solstice",
    name: "Experiencia Solstice",
    description:
      "Kits experiencia para eventos privados con diseño lumínico y menú interactivo.",
    image: "/images/product-solstice.svg",
    price: "690 EUR",
    category: "Experience Design",
    colors: ["#1e293b", "#cbd5f5", "#f8fafc"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "catalina",
    name: "Catalina Duarte",
    role: "Directora Creativa, Nébula Studio",
    quote:
      '"El equipo de Aurelia comprende la visión a la primera. Nuestros lanzamientos siempre llegan con la narrativa y producción impecables."',
    avatar: "/images/avatar-catalina.svg",
  },
  {
    id: "martin",
    name: "Martín Gallardo",
    role: "Fundador, Casa Brava",
    quote:
      '"Lograron transformar nuestro catálogo en una vitrina premium. La atención al detalle y el soporte post entrega son sobresalientes."',
    avatar: "/images/avatar-martin.svg",
  },
  {
    id: "luisa",
    name: "Luisa Molina",
    role: "CMO, Selva Concept",
    quote:
      '"Nuestros clientes quedaron fascinados con la experiencia digital inmersiva. Es una muestra perfecta para cerrar acuerdos."',
    avatar: "/images/avatar-luisa.svg",
  },
];
