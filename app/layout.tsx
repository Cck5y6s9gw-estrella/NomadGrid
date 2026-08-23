import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://roavio.es"),
  title: "Roavio · Rankings · Ciudades · Libertad",
  description: "Compara coste de vida, internet, seguridad y calidad de vida en las mejores ciudades del mundo para trabajar en remoto.",
  openGraph: {
    title: "Roavio — Encuentra tu próxima ciudad nómada",
    description: "Compara coste de vida, internet, seguridad y clima en las mejores ciudades del mundo para trabajar en remoto.",
    url: "https://roavio.es",
    siteName: "Roavio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roavio — Encuentra tu próxima ciudad nómada",
    description: "Compara coste de vida, internet, seguridad y clima en las mejores ciudades del mundo para trabajar en remoto.",
    images: ["/og-image.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#ea580c",
          colorBackground: "#121723",
          colorInput: "#0b0f1a",
          colorForeground: "#f5f5f4",
          colorMutedForeground: "#8b8f99",
          colorNeutral: "#f5f5f4",
          colorDanger: "#ef4444",
          colorSuccess: "#22c55e",
          borderRadius: "0.75rem",
          fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
        },
        elements: {
          card: "border border-[#1f2430] shadow-none",
          headerTitle: "text-[#f5f5f4]",
          headerSubtitle: "text-[#8b8f99]",
          socialButtonsBlockButton: "border border-[#1f2430] bg-[#0b0f1a] hover:bg-[#1f2430] text-[#f5f5f4]",
          socialButtonsBlockButtonText: "text-[#f5f5f4]",
          dividerLine: "bg-[#1f2430]",
          dividerText: "text-[#8b8f99]",
          formFieldLabel: "text-[#f5f5f4]",
          formFieldInput: "bg-[#0b0f1a] border border-[#1f2430] text-[#f5f5f4]",
          formButtonPrimary: "bg-[#ea580c] hover:bg-[#ea580c]/90 text-white",
          footerActionText: "text-[#8b8f99]",
          footerActionLink: "text-[#ea580c] hover:text-[#ea580c]/80",
          identityPreviewText: "text-[#f5f5f4]",
          identityPreviewEditButton: "text-[#ea580c]",
        },
      }}
    >
      <html
        lang="es"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    </ClerkProvider>
  );
}