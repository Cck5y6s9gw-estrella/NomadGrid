import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.roavio.es"),
  alternates: { canonical: "https://www.roavio.es" },
  title: "Roavio · Rankings · Ciudades · Libertad",
  description: "Compara coste de vida, internet, seguridad y calidad de vida en las mejores ciudades del mundo para trabajar en remoto.",
  openGraph: {
    title: "Roavio — Encuentra tu próxima ciudad nómada",
    description: "Compara coste de vida, internet, seguridad y clima en las mejores ciudades del mundo para trabajar en remoto.",
    url: "https://www.roavio.es",
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
          colorPrimary: "var(--accent)",
          colorBackground: "var(--card)",
          colorInput: "var(--background)",
          colorNeutral: "var(--foreground)",
          colorDanger: "#ef4444",
          colorSuccess: "#22c55e",
          borderRadius: "0.75rem",
          fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
        },
        elements: {
          card: "border border-border shadow-none",
          headerTitle: "text-foreground",
          headerSubtitle: "text-muted",
          socialButtonsBlockButton: "border border-border bg-background hover:bg-border text-foreground",
          socialButtonsBlockButtonText: "text-foreground",
          dividerLine: "bg-border",
          dividerText: "text-muted",
          formFieldLabel: "text-foreground",
          formFieldInput: "bg-background border border-border text-foreground",
          formButtonPrimary: "bg-accent hover:bg-accent/90 text-white",
          footerActionText: "text-muted",
          footerActionLink: "text-accent hover:text-accent/80",
          identityPreviewText: "text-foreground",
          identityPreviewEditButton: "text-accent",
        },
      }}
    >
      <html
        lang="es"
        data-theme="dark"
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} h-full antialiased`}
      >
        <head>
          {/* Evita el parpadeo de tema: fija data-theme antes del primer
              pintado si el usuario ya había elegido "light" en este navegador. */}
          <script
            dangerouslySetInnerHTML={{
              __html:
                "(function(){try{var t=localStorage.getItem('roavio_theme');if(t==='light'){document.documentElement.setAttribute('data-theme','light');document.documentElement.style.colorScheme='light';}}catch(e){}})();",
            }}
          />
        </head>
        <body className="min-h-full flex flex-col">
          <ThemeProvider>
            <LanguageProvider>{children}</LanguageProvider>
          </ThemeProvider>
          <Analytics />
          <GoogleAnalytics gaId="G-L7XED99X63" />
        </body>
      </html>
    </ClerkProvider>
  );
}