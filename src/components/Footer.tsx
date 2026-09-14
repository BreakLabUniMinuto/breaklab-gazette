export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-auto border-t border-breaklab-border/70 bg-breaklab-bg/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-sm text-breaklab-pink">
          Fallamos con propósito.
        </p>
        <p className="text-sm text-breaklab-muted">
          BREAKLAB • Laboratorio de Resiliencia y Fallo de Software
        </p>
        <p className="font-mono text-xs text-breaklab-muted/80">© {year}</p>
      </div>
    </footer>
  );
}
