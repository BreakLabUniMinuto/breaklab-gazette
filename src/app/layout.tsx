import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LabBackdrop from "@/components/LabBackdrop";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BREAKLAB Gazette",
    template: "%s · BREAKLAB Gazette",
  },
  description:
    "Laboratorio de Resiliencia y Fallo de Software. Reclutamiento activo: construimos ingenieros que no temen al caos, sino que lo dominan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="relative flex min-h-screen flex-col overflow-x-hidden">
        <LabBackdrop />
        <Header />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
