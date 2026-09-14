import Link from "next/link";
import GlitchTitle from "@/components/GlitchTitle";
import ArticleCard from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/articles";

const GITHUB_URL = "https://github.com/BreakLabUniMinuto/breaklab-gazette";

export default function HomePage() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <div className="relative">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24">
        <div className="reveal inline-flex items-center gap-2 rounded-full border border-breaklab-border bg-breaklab-card/70 px-3 py-1 font-mono text-xs text-breaklab-blue">
          <span className="pulse-dot" />
          Gaceta Oficial • en vivo
        </div>

        <GlitchTitle text="BREAKLAB" />

        <p className="reveal reveal-delay-1 mt-5 max-w-2xl text-2xl font-medium text-breaklab-text sm:text-3xl">
          Errores que enseñan. Código que transforma.
        </p>
        <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-base leading-7 text-breaklab-muted sm:text-lg">
          Somos el laboratorio universitario donde el software llega ya roto.
          Diagnosticamos Gemelos de Software, documentamos cada fallo y
          convertimos el error controlado en la herramienta pedagógica más
          poderosa.
        </p>

        <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-4">
          <Link
            href="/gaceta"
            className="btn-shimmer rounded-full bg-gradient-to-r from-breaklab-blue to-breaklab-pink px-6 py-3 text-sm font-semibold text-breaklab-bg shadow-[0_0_28px_rgba(56,189,248,0.25)] transition hover:scale-[1.03] hover:shadow-[0_0_42px_rgba(244,114,182,0.35)]"
          >
            Leer la Gaceta
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-breaklab-border px-6 py-3 text-sm font-semibold text-breaklab-text transition hover:border-breaklab-blue hover:text-breaklab-blue hover:shadow-[0_0_24px_rgba(56,189,248,0.2)]"
          >
            Ver en GitHub
          </a>
        </div>
      </section>

      <section className="reveal reveal-delay-4 mx-auto max-w-6xl px-4 py-20 sm:px-6">
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
            className="text-sm font-medium text-breaklab-blue transition hover:text-breaklab-pink"
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
            {articles.map((article, index) => (
              <ArticleCard
                key={article.slug}
                article={article}
                index={index}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
