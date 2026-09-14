import Link from "next/link";
import GlitchTitle from "@/components/GlitchTitle";
import ArticleCard from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/articles";

const stats = [
  { value: "38+", label: "Estudiantes Inscritos" },
  { value: "5", label: "Sesiones MVP Programadas" },
  { value: "∞", label: "Errores por Romper" },
  { value: "0", label: "Sesiones Completadas", hint: "en preparación" },
];

const milestones = [
  {
    state: "done",
    mark: "✅",
    text: "Reclutamiento de estudiantes pioneros",
  },
  {
    state: "active",
    mark: "🔄",
    text: "Ajustes técnicos del entorno de desarrollo",
  },
  {
    state: "pending",
    mark: "⏳",
    text: 'Sesión 1: "La Anatomía del Caos"',
  },
  {
    state: "pending",
    mark: "⏳",
    text: 'Sesión 2: "Blindaje y Fortaleza"',
  },
];

const requirements = [
  "Estudiante activo del programa de Ingeniería de Software",
  "Disponibilidad quincenal (2 horas por sesión)",
  "Cuenta de GitHub activa",
  "Mentalidad de aprendizaje y colaboración",
];

export default function HomePage() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <div className="relative">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24">
        <div className="reveal inline-flex items-center gap-2 rounded-full border border-breaklab-border bg-breaklab-card/70 px-3 py-1 font-mono text-xs text-breaklab-blue">
          <span className="pulse-dot" />
          Gaceta Oficial • Reclutamiento Activo 2024
        </div>

        <GlitchTitle text="BREAKLAB" />

        <p className="reveal reveal-delay-1 mt-5 max-w-2xl text-2xl font-medium text-breaklab-text sm:text-3xl">
          Errores que enseñan. Código que transforma.
        </p>
        <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-base leading-7 text-breaklab-muted sm:text-lg">
          Laboratorio de Resiliencia y Fallo de Software. Estamos construyendo
          la próxima generación de ingenieros que no temen al caos, sino que lo
          dominan.
        </p>

        <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-4">
          <Link
            href="/gaceta"
            className="btn-shimmer rounded-full bg-gradient-to-r from-breaklab-blue to-breaklab-pink px-6 py-3 text-sm font-semibold text-breaklab-bg shadow-[0_0_28px_rgba(56,189,248,0.25)] transition hover:scale-[1.03] hover:shadow-[0_0_42px_rgba(244,114,182,0.35)]"
          >
            Leer la Gaceta
          </Link>
          <a
            href="#unirse"
            className="rounded-full border border-breaklab-border px-6 py-3 text-sm font-semibold text-breaklab-text transition hover:border-breaklab-blue hover:text-breaklab-blue hover:shadow-[0_0_24px_rgba(56,189,248,0.2)]"
          >
            Únete al Proyecto
          </a>
        </div>
      </section>

      <section className="reveal reveal-delay-4 mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-breaklab-blue">
          Estado actual
        </p>
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-breaklab-border bg-breaklab-card/50 p-4 sm:grid-cols-4 sm:p-6">
          {stats.map((stat) => (
            <div key={stat.label} className="px-2 py-3 text-center">
              <p className="font-mono text-3xl font-semibold text-breaklab-text sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-breaklab-muted">
                {stat.label}
              </p>
              {stat.hint ? (
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-breaklab-orange">
                  {stat.hint}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-breaklab-orange">
          Control del proceso
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Fase Actual: Preparación y Reclutamiento
        </h2>

        <div className="mt-8 overflow-hidden rounded-2xl border border-breaklab-border bg-breaklab-card/80">
          <div className="border-b border-breaklab-border bg-breaklab-bg/40 px-6 py-4">
            <p className="font-mono text-sm text-breaklab-orange">
              🚧 Ecosistema en configuración
            </p>
          </div>
          <div className="space-y-6 p-6 sm:p-8">
            <p className="max-w-3xl text-base leading-7 text-breaklab-muted">
              Estamos en proceso activo de reclutamiento y ajustes técnicos
              finales. La primera sesión está programada para las próximas
              semanas. Nuestro equipo está finalizando la configuración del
              ecosistema tecnológico (GitHub Codespaces, Twitch, Wiki
              Institucional).
            </p>
            <ul className="space-y-3">
              {milestones.map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-3 rounded-xl border border-breaklab-border/80 bg-breaklab-bg/40 px-4 py-3"
                >
                  <span className="mt-0.5 shrink-0" aria-hidden>
                    {item.mark}
                  </span>
                  <span
                    className={
                      item.state === "pending"
                        ? "text-sm text-breaklab-muted"
                        : "text-sm text-breaklab-text"
                    }
                  >
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
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
            📭 Aún no hay artículos publicados. La primera edición estará
            disponible después de la Sesión 1.
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

      <section
        id="unirse"
        className="scroll-mt-24 mx-auto max-w-6xl px-4 pb-24 sm:px-6"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-breaklab-pink">
          Reclutamiento
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          ¿Quieres ser parte de BREAKLAB?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-breaklab-muted">
          Buscamos estudiantes de Ingeniería de Software que quieran desafiar el
          modelo tradicional. No necesitas ser experto, solo tener curiosidad y
          resiliencia.
        </p>

        <div className="mt-8 rounded-2xl border border-breaklab-border bg-breaklab-card/90 p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-breaklab-blue">
            Requisitos
          </p>
          <ul className="mt-5 space-y-3">
            {requirements.map((requirement) => (
              <li key={requirement} className="flex gap-3 text-sm leading-6">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-breaklab-blue shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                <span className="text-breaklab-text">{requirement}</span>
              </li>
            ))}
          </ul>
          <a
            href="mailto:coordinador@universidad.edu"
            className="btn-shimmer mt-8 inline-flex rounded-full bg-gradient-to-r from-breaklab-blue to-breaklab-pink px-6 py-3 text-sm font-semibold text-breaklab-bg shadow-[0_0_28px_rgba(56,189,248,0.25)] transition hover:scale-[1.03]"
          >
            Contactar al Coordinador
          </a>
        </div>
      </section>
    </div>
  );
}
