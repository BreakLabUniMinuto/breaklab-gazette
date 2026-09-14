import Link from "next/link";

const GITHUB_URL = "https://github.com/BreakLabUniMinuto/breaklab-gazette";

export default function Header() {
  return (
    <header className="relative sticky top-0 z-50 border-b border-transparent bg-breaklab-bg/75 backdrop-blur-xl">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <span className="logo-bl flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-breaklab-blue to-breaklab-pink font-mono text-sm font-bold text-breaklab-bg">
            BL
          </span>
          <span className="font-sans text-sm font-semibold tracking-[0.18em] text-breaklab-text transition group-hover:text-white">
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
            className="rounded-full border border-breaklab-border px-4 py-1.5 font-medium text-breaklab-text transition-colors hover:border-breaklab-blue hover:text-breaklab-blue hover:shadow-[0_0_18px_rgba(56,189,248,0.25)]"
          >
            GitHub
          </a>
        </nav>
      </div>
      <span className="header-line" />
    </header>
  );
}
