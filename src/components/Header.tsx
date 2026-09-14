import Link from "next/link";

const GITHUB_URL = "https://github.com/BreakLab/breaklab-gazette";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-breaklab-border/70 bg-breaklab-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-breaklab-blue to-breaklab-pink font-mono text-sm font-bold text-breaklab-bg shadow-[0_0_24px_rgba(56,189,248,0.25)]">
            BL
          </span>
          <span className="font-sans text-sm font-semibold tracking-[0.18em] text-breaklab-text group-hover:text-white">
            BREAKLAB
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="text-breaklab-muted transition-colors hover:text-breaklab-text"
          >
            Inicio
          </Link>
          <Link
            href="/gaceta"
            className="text-breaklab-muted transition-colors hover:text-breaklab-text"
          >
            Gaceta
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-breaklab-border px-4 py-1.5 font-medium text-breaklab-text transition-colors hover:border-breaklab-blue hover:text-breaklab-blue"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
