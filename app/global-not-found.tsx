import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Roavio",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="es" data-theme="dark">
      <body className="min-h-full flex flex-col items-center justify-center text-center px-6" style={{ minHeight: "100vh" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>404</h1>
        <p style={{ marginBottom: "1.5rem" }}>Esta página no existe · This page does not exist</p>
        <a href="/" style={{ textDecoration: "underline" }}>roavio.es</a>
      </body>
    </html>
  );
}
