import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";

type PageProps = {
  params: { slug: string };
};

function formatDate(date: string) {
  if (!date) return "";

  return new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return { title: "Artículo no encontrado" };
  }

  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href="/gaceta"
        className="reveal inline-flex items-center gap-2 text-sm text-breaklab-muted transition-colors hover:text-breaklab-blue"
      >
        ← Volver
      </Link>

      <header className="reveal reveal-delay-1 mt-8 border-b border-breaklab-border pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <time className="font-mono text-xs uppercase tracking-wide text-breaklab-muted">
            {formatDate(article.date)}
          </time>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-breaklab-blue/30 bg-breaklab-blue/10 px-2.5 py-0.5 font-mono text-[11px] text-breaklab-blue"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-breaklab-text sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-4 text-lg leading-7 text-breaklab-muted">
          {article.summary}
        </p>
        <p className="mt-6 font-mono text-sm text-breaklab-pink">
          {article.author}
        </p>
      </header>

      <div
        className="prose-breaklab reveal reveal-delay-2 pt-8"
        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
      />
    </article>
  );
}
