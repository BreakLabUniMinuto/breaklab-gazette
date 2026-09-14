import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BREAKLAB Gazette",
    template: "%s · BREAKLAB Gazette",
  },
  description:
    "Boletín público oficial de BREAKLAB: laboratorio universitario de resiliencia y fallo de software. Documentamos sesiones, errores resueltos y lecciones aprendidas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
