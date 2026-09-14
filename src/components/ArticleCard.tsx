import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";

function formatDate(date: string) {
  if (!date) return "";

  return new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export default function ArticleCard({
  article,
  index = 0,
}: {
  article: ArticleMeta;
  index?: number;
}) {
  return (
    <Link
      href={`/gaceta/${article.slug}`}
      className="article-card group block rounded-2xl border border-breaklab-border bg-breaklab-card/90 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_18px_50px_rgba(56,189,248,0.16)]"
      style={{ animation: `lab-fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.12}s both` }}
    >
      <div className="flex flex-wrap items-center gap-3">
        <time className="font-mono text-xs uppercase tracking-wide text-breaklab-muted">
          {formatDate(article.date)}
        </time>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-breaklab-blue/30 bg-breaklab-blue/10 px-2.5 py-0.5 font-mono text-[11px] text-breaklab-blue transition group-hover:border-breaklab-pink/40 group-hover:text-breaklab-pink"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight text-breaklab-text transition group-hover:text-white">
        {article.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-breaklab-muted">
        {article.summary}
      </p>

      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-breaklab-blue">
        Leer artículo
        <span className="transition-transform duration-300 group-hover:translate-x-1.5">
          →
        </span>
      </span>
    </Link>
  );
}
