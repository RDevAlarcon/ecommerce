import Image from "next/image";
import Link from "next/link";
import { collections, products, testimonials } from "@/lib/catalog";

const navigation = [
  { href: "#collections", label: "Colecciones" },
  { href: "#catalog", label: "Catálogo" },
  { href: "#clients", label: "Clientes" },
  { href: "#contact", label: "Contacto" },
];

const studioStats = [
  { label: "proyectos cerrados", value: "120+" },
  { label: "índice de recomendación", value: "98%" },
  { label: "tiempo medio de entrega", value: "12 días" },
];

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10 select-none">
        <div className="absolute left-24 top-28 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-10 top-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-24 left-40 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-12 sm:px-10">
        <Link href="/" className="flex items-center gap-3 text-sm uppercase">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-base font-semibold text-slate-100">
            AA
          </span>
          <div className="flex flex-col leading-tight text-slate-200">
            <span className="text-sm font-semibold tracking-[0.2em]">
              Aurelia Atelier
            </span>
            <span className="text-xs text-slate-400">
              Boutique de experiencias
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-slate-300 sm:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-sky-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="hidden rounded-full border border-slate-700 bg-gradient-to-r from-blue-500/40 via-sky-500/30 to-transparent px-4 py-2 text-sm font-medium text-slate-100 shadow-lg shadow-sky-500/10 transition hover:border-slate-500 hover:shadow-sky-500/20 sm:inline-flex"
        >
          Concertar demo
        </Link>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-28 px-6 sm:px-10">
        <section className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/60 bg-slate-900/40 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-300">
              Experiencia curada
            </div>
            <div className="space-y-6 text-slate-100">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Tu vitrina digital para cerrar acuerdos con marcas premium.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Esta demo muestra cómo presentamos catálogos, storytelling y
                experiencias inmersivas para clientes que buscan confianza y un
                acabado impecable. Todo construido con tecnologías modernas y
                listo para personalizar con tu identidad.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#catalog"
                className="rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/30 transition hover:bg-sky-300"
              >
                Ver catálogo
              </Link>
              <Link
                href="#collections"
                className="inline-flex items-center text-sm font-medium text-slate-300 transition hover:text-sky-200"
              >
                Descubrir colecciones
                <span className="ml-2 text-base" aria-hidden>
                  ↗
                </span>
              </Link>
            </div>
            <dl className="grid gap-6 text-sm text-slate-300 sm:grid-cols-3">
              {studioStats.map((stat) => (
                <div key={stat.label} className="space-y-2 rounded-2xl border border-white/5 bg-slate-900/40 p-5 backdrop-blur">
                  <dt className="uppercase tracking-[0.2em] text-xs text-slate-400">
                    {stat.label}
                  </dt>
                  <dd className="text-2xl font-semibold text-sky-200">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative flex h-full w-full items-center justify-center">
            <div className="relative w-full max-w-[520px] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 shadow-2xl shadow-sky-500/10 backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-transparent to-sky-500/20" />
              <Image
                src="/images/hero-atelier.svg"
                alt="Moodboard de branding premium"
                width={960}
                height={1200}
                priority
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-6 bottom-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-sm text-slate-200 shadow-lg shadow-sky-500/10 backdrop-blur">
                <div>
                  <p className="font-medium">Presentación interactiva</p>
                  <p className="text-xs text-slate-400">
                    Visualizamos el flujo completo sin necesidad de backend.
                  </p>
                </div>
                <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-200">
                  Next.js 15
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="collections" className="space-y-10">
          <div className="flex items-end justify-between gap-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                Colecciones exclusivas
              </p>
              <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
                Curadas para generar confianza desde el primer contacto.
              </h2>
            </div>
            <Link
              href="#contact"
              className="hidden text-sm font-medium text-sky-200 transition hover:text-sky-100 sm:inline-flex"
            >
              Solicitar catálogo completo ↗
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => (
              <article
                key={collection.id}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-slate-900/50 p-6 shadow-xl shadow-sky-500/10 transition hover:-translate-y-1 hover:border-white/10 hover:shadow-sky-500/20"
              >
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${collection.accent}`}
                />
                <div className="relative space-y-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      width={640}
                      height={480}
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2 text-slate-200">
                    <h3 className="text-xl font-semibold text-white">
                      {collection.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-300">
                      {collection.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                    Más detalles
                    <span aria-hidden>→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="catalog" className="space-y-10">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
              Catálogo seleccionado
            </p>
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              Productos listos para mostrar en presentaciones comerciales.
            </h2>
            <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
              Cada tarjeta combina storytelling, valor comercial y visuales que
              transmiten el acabado premium de la propuesta. Todo puede
              personalizarse según el sector de tus clientes.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-slate-900/50 transition hover:-translate-y-1 hover:border-white/10 hover:shadow-2xl hover:shadow-sky-500/20"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={720}
                    height={540}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                  {product.badge ? (
                    <span className="absolute left-5 top-5 inline-flex rounded-full border border-sky-200/40 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-sky-100 backdrop-blur">
                      {product.badge}
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col gap-5 p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-slate-400">
                      <span>{product.category}</span>
                      <span className="hidden h-px flex-1 bg-slate-700 sm:block" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      {product.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-300">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/5 pt-4 text-sm text-slate-200">
                    <span className="text-lg font-semibold text-sky-100">
                      {product.price}
                    </span>
                    <div className="flex items-center gap-2">
                      {product.colors.map((color) => (
                        <span
                          key={color}
                          aria-label={`Color ${color}`}
                          className="h-6 w-6 rounded-full border border-white/20"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="clients"
          className="grid gap-6 rounded-3xl border border-white/5 bg-slate-900/40 p-8 shadow-xl shadow-sky-500/10 backdrop-blur md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
        >
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
              Respaldado por líderes
            </p>
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              Historias reales de clientes que confían en la muestra.
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Presentamos resultados tangibles, métricas claras y materiales
              listos para compartir en reuniones o enviar por correo. Esta
              vitrina digital facilita explicar el valor sin necesidad de un
              backend complejo.
            </p>
            <div className="mt-8 grid gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                Implementación en menos de una semana
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                Demo interactiva adaptable por industria
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                Incluye guías de narrativa y checklist comercial
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.id}
                className="relative flex flex-col gap-4 rounded-3xl border border-white/5 bg-slate-900/70 p-6 text-sm text-slate-200 shadow-lg shadow-sky-500/10"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full border border-white/10 object-cover"
                  />
                  <div className="leading-tight">
                    <figcaption className="font-semibold text-white">
                      {testimonial.name}
                    </figcaption>
                    <p className="text-xs text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-sm leading-relaxed text-slate-200">
                  {testimonial.quote}
                </blockquote>
              </figure>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden rounded-3xl border border-sky-200/20 bg-gradient-to-br from-sky-500/20 via-blue-500/10 to-transparent p-10 text-slate-950 shadow-2xl shadow-sky-500/10"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),_transparent_55%)] opacity-70" />
          <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-800">
                Listo para tus clientes
              </p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Presenta esta demo en tu próxima reunión y genera confianza al
                instante.
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                Te entregamos todo el material para que personalices textos,
                imágenes y paleta en minutos. Incluye guía de discurso y
                checklist de onboarding para nuevos proyectos.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-sm text-slate-800 sm:flex-row sm:items-center sm:justify-end">
              <Link
                href="mailto:hola@aureliaatelier.demo"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-sky-100 transition hover:bg-slate-900"
              >
                Escribir a hola@aureliaatelier.demo
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-slate-800 px-5 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-700"
              >
                Descargar dossier
                <span aria-hidden>↓</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pt-20 text-xs text-slate-500 sm:px-10">
        <div className="h-px w-full bg-white/10" />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Aurelia Atelier. Demo creada con Next.js
            15, React 19 y Tailwind CSS 4.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#collections" className="transition hover:text-sky-200">
              Explorar colecciones
            </Link>
            <Link href="#contact" className="transition hover:text-sky-200">
              Agenda una llamada
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
