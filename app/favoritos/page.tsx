"use client";

import Link from "next/link";
import { useUser, SignUpButton } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import FavoriteButton from "@/components/FavoriteButton";
import { cities } from "@/data/cities";
import { useLanguage } from "@/lib/i18n";
import { t, formatMoney, tCountry } from "@/lib/dictionary";

export default function FavoritesPage() {
  const { lang } = useLanguage();
  const d = t(lang);
  const { isSignedIn, isLoaded, user } = useUser();

  const favoriteSlugs = (user?.unsafeMetadata?.favorites as string[] | undefined) ?? [];
  const favoriteCities = cities.filter((c) => favoriteSlugs.includes(c.slug));

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="mb-10">
          <div className="text-xs font-medium tracking-widest text-accent uppercase mb-3">
            {d.navFavorites}
          </div>
          <h1 className="text-3xl font-semibold mb-2 tracking-tight">{d.favoritesPageTitle}</h1>
          <p className="text-muted text-sm max-w-xl">{d.favoritesPageSubtitle}</p>
        </div>

        {!isLoaded ? null : !isSignedIn ? (
          <div className="bg-card border border-border rounded-2xl p-10 text-center max-w-lg mx-auto">
            <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4 text-lg">
              ♥
            </div>
            <p className="text-foreground font-medium mb-1">{d.favoritesSignedOutTitle}</p>
            <p className="text-muted text-sm mb-6">{d.favoritesSignedOutSubtitle}</p>
            <SignUpButton mode="modal">
              <button className="bg-accent text-white px-6 py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
                {d.favoritesSignUpCta}
              </button>
            </SignUpButton>
          </div>
        ) : favoriteCities.length === 0 ? (
          <div className="bg-card border border-border rounded-2xl p-10 text-center max-w-lg mx-auto">
            <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4 text-lg">
              ♥
            </div>
            <p className="text-foreground font-medium mb-1">{d.favoritesEmptyTitle}</p>
            <p className="text-muted text-sm mb-6">{d.favoritesEmptySubtitle}</p>
            <Link
              href="/cities"
              className="inline-block bg-accent text-white px-6 py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
            >
              {d.exploreCities}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {favoriteCities.map((city) => (
              <div
                key={city.slug}
                className="group relative overflow-hidden rounded-2xl border border-border hover:border-accent transition-all duration-300"
              >
                <Link href={`/cities/${city.slug}`}>
                  <img
                    src={city.imageUrl}
                    alt={city.name}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-end justify-between mb-2">
                      <div>
                        <h3 className="text-sm font-semibold leading-tight text-foreground">{city.name}</h3>
                        <p className="text-xs text-muted">{tCountry(city.country, lang)}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-foreground">
                          {city.currency} {formatMoney(city.costPerMonth, lang)}
                        </div>
                        <div className="text-xs text-muted">{d.monthly}</div>
                      </div>
                    </div>
                  </div>
                </Link>
                <FavoriteButton citySlug={city.slug} className="absolute top-3 right-3" />
              </div>
            ))}
          </div>
        )}
      </div>

      <footer className="border-t border-border py-8 px-6 text-center text-xs text-muted">
        {d.footerText}
        <span className="mx-2">·</span>
        <Link href="/feedback" className="hover:text-accent transition-colors">
          {d.footerFeedback}
        </Link>
      </footer>
    </main>
  );
}
