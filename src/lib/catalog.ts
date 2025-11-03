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
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
    accent: "from-blue-500/20 via-sky-500/10 to-transparent",
  },
  {
    id: "signature",
    title: "Línea Signature",
    description:
      "Diseños minimalistas pensados para marcas premium que buscan diferenciarse sin sobrecargar.",
    image:
      "https://images.unsplash.com/photo-1539820586268-766867f43f58?q=80&w=800&auto=format&fit=crop",
    accent: "from-blue-300/25 via-cyan-400/15 to-transparent",
  },
  {
    id: "capsule",
    title: "Edición Cápsula",
    description:
      "Lanzamientos limitados con storytelling inmersivo y soporte creativo end-to-end.",
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=800&auto=format&fit=crop",
    accent: "from-indigo-500/25 via-blue-600/10 to-transparent",
  },
];

export const products: Product[] = [
  {
    id: "lumina",
    name: "Set Lumina",
    description:
      "Colección de packaging translúcido con acentos metálicos suavizados en degradé.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    price: "320 €",
    category: "Packaging",
    colors: ["#1d4ed8", "#60a5fa", "#f0f9ff"],
    badge: "Más solicitado",
  },
  {
    id: "atelier",
    name: "Branding Atelier",
    description:
      "Sistema visual modular con retícula tipográfica y aplicación omnicanal.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1200&auto=format&fit=crop",
    price: "540 €",
    category: "Branding",
    colors: ["#0f172a", "#38bdf8", "#f8fafc"],
  },
  {
    id: "noir",
    name: "Editorial Noir",
    description:
      "Set editorial de 64 páginas con contrastes cromáticos y texturas táctiles.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    price: "410 €",
    category: "Editorial",
    colors: ["#020617", "#64748b", "#94a3b8"],
  },
  {
    id: "solstice",
    name: "Experiencia Solstice",
    description:
      "Kits experiencia para eventos privados con diseño lumínico y menú interactivo.",
    image:
      "https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=1200&auto=format&fit=crop",
    price: "690 €",
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
      "“El equipo de Aurelia comprende la visión a la primera. Nuestros lanzamientos siempre llegan con la narrativa y producción impecables.”",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "martin",
    name: "Martín Gallardo",
    role: "Fundador, Casa Brava",
    quote:
      "“Lograron transformar nuestro catálogo en una vitrina premium. La atención al detalle y el soporte post entrega son sobresalientes.”",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "luisa",
    name: "Luisa Molina",
    role: "CMO, Selva Concept",
    quote:
      "“Nuestros clientes quedaron fascinados con la experiencia digital inmersiva. Es una muestra perfecta para cerrar acuerdos.”",
    avatar:
      "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=200&auto=format&fit=crop",
  },
];
