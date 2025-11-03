## Aurelia Atelier · Demo Ecommerce

Muestra interactiva creada para presentar a potenciales clientes una boutique digital elegante y confiable. El proyecto se construyó con la pila solicitada: **Next.js 15 (App Router)**, **React 19**, **Turbopack**, **TypeScript 5** y **Tailwind CSS 4** (vía `@tailwindcss/postcss`). No requiere backend ni base de datos; los contenidos se cargan desde estructuras tipadas en `src/lib/catalog.ts` para personalizar rápidamente textos, precios e imágenes.

### Scripts

```bash
npm install         # instala dependencias
npm run dev         # levanta el entorno local con Turbopack
npm run build       # genera la build de producción
npm run start       # sirve la build generada
npm run lint        # ejecuta ESLint 9 con eslint-config-next
```

### Estructura relevante

- `src/app/page.tsx`: layout principal de la vitrina digital (hero, colecciones, catálogo, testimonios y CTA).
- `src/lib/catalog.ts`: datos tipados de colecciones, productos y testimonios listos para editar.
- `src/app/globals.css`: estilos base y gradientes que definen el look & feel.
- `public/images/*`: ilustraciones vectoriales incluidas por defecto para evitar dependencias externas.
- `next.config.ts`: dominios externos de imágenes (Unsplash) para las visuales de referencia.

### Personalización

1. Cambia textos y métricas en `src/app/page.tsx` para alinear la narrativa con tu marca.
2. Actualiza imágenes o colores en `src/lib/catalog.ts`; puedes usar las ilustraciones locales en `public/images` o reemplazarlas por material propio.
3. Ajusta tipografías o gradientes globales en `src/app/globals.css` según tu identidad visual.
4. Ejecuta `npm run build && npm run start` para validar la versión optimizada antes de presentar.

Este repositorio está listo para desplegar en Vercel o cualquier plataforma compatible con Next.js 15. Al no depender de backend puedes compartirlo como prototipo funcional o adaptarlo rápidamente a futuros proyectos personalizados.
