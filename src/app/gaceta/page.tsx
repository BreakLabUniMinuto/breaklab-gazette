import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "La Gaceta",
  description:
    "Crónicas de caos controlado. Cada artículo documenta un fallo, una lección y una victoria de la comunidad BREAKLAB.",
};

export default function GacetaPage() {
  const articles = getAllArticles();

  return (
    <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="reveal font-mono text-xs uppercase tracking-[0.2em] text-breaklab-blue">
        Boletín oficial
      </p>
      <h1 className="reveal reveal-delay-1 mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
        La Gaceta
      </h1>
      <p className="reveal reveal-delay-2 mt-4 max-w-2xl text-breaklab-muted">
        Crónicas de caos controlado. Cada artículo documenta un fallo, una
        lección y una victoria de la comunidad BREAKLAB.
      </p>

      {articles.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-dashed border-breaklab-border bg-breaklab-card/40 p-12 text-center">
          <p className="text-lg font-medium text-breaklab-text">
            📭 Aún no hay artículos publicados. La primera edición estará
            disponible después de la Sesión 1.
          </p>
        </div>
      ) : (
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {articles.map((article, index) => (
            <ArticleCard key={article.slug} article={article} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
