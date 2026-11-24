import { Geist, Geist_Mono, Anton } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "@/app/globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/components/ThemeProvider";
import JsonLd from "@/components/JsonLd";

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

export default function RootShell({
  children,
  lang,
}: Readonly<{
  children: React.ReactNode;
  lang: "es" | "en";
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
        lang={lang}
        data-theme="dark"
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} h-full antialiased`}
      >
        <head>
          <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
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
          <JsonLd
            data={[
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Roavio",
                url: "https://www.roavio.es",
                logo: "https://www.roavio.es/logo-icon.png",
                sameAs: ["https://x.com/Roavio"],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Roavio",
                url: "https://www.roavio.es",
                inLanguage: ["es", "en"],
              },
            ]}
          />
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