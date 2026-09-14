import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/articles";

const GITHUB_URL = "https://github.com/BreakLab/breaklab-gazette";

export default function HomePage() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-12%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_62%)]" />
        <div className="absolute right-[-10%] top-24 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.16),transparent_65%)]" />
        <div className="absolute bottom-0 left-[-8%] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.08),transparent_70%)]" />
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
        <div className="inline-flex items-center rounded-full border border-breaklab-border bg-breaklab-card/70 px-3 py-1 font-mono text-xs text-breaklab-blue">
          Gaceta Oficial • MVP 2024
        </div>

        <h1 className="mt-6 max-w-4xl font-sans text-5xl font-extrabold tracking-tight sm:text-7xl">
          <span className="bg-gradient-to-r from-breaklab-blue via-white to-breaklab-pink bg-clip-text text-transparent">
            BREAKLAB
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-2xl font-medium text-breaklab-text sm:text-3xl">
          Errores que enseñan. Código que transforma.
        </p>
        <p className="mt-6 max-w-2xl text-base leading-7 text-breaklab-muted sm:text-lg">
          Somos el laboratorio universitario donde el software llega ya roto.
          Diagnosticamos Gemelos de Software, documentamos cada fallo y
          convertimos el error controlado en la herramienta pedagógica más
          poderosa.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/gaceta"
            className="rounded-full bg-gradient-to-r from-breaklab-blue to-breaklab-pink px-6 py-3 text-sm font-semibold text-breaklab-bg shadow-[0_0_28px_rgba(56,189,248,0.25)] transition hover:opacity-90"
          >
            Leer la Gaceta
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-breaklab-border px-6 py-3 text-sm font-semibold text-breaklab-text transition hover:border-breaklab-blue hover:text-breaklab-blue"
          >
            Ver en GitHub
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-breaklab-blue">
              Archivo
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Últimos artículos
            </h2>
          </div>
          <Link
            href="/gaceta"
            className="text-sm font-medium text-breaklab-blue hover:text-breaklab-pink"
          >
            Ver todos →
          </Link>
        </div>

        {articles.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-breaklab-border p-10 text-center text-breaklab-muted">
            Aún no hay artículos en la Gaceta. Agrega un archivo Markdown en{" "}
            <code className="font-mono text-breaklab-blue">/content</code>.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
