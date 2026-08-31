"use client";

import { useUser, SignUpButton } from "@clerk/nextjs";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/dictionary";

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 2}
    >
      <path d="M12 21s-6.716-4.35-9.428-8.06C.86 10.42 1.2 7.03 3.6 5.2c2.1-1.6 4.86-1.16 6.4.85l2 2.63 2-2.63c1.54-2.01 4.3-2.45 6.4-.85 2.4 1.83 2.74 5.22 1.03 7.74C18.716 16.65 12 21 12 21z" />
    </svg>
  );
}

export default function FavoriteButton({
  citySlug,
  className = "",
  variant = "card",
}: {
  citySlug: string;
  className?: string;
  variant?: "card" | "hero";
}) {
  const { isSignedIn, isLoaded, user } = useUser();
  const { lang } = useLanguage();
  const d = t(lang);

  const favorites = (user?.unsafeMetadata?.favorites as string[] | undefined) ?? [];
  const isFavorite = favorites.includes(citySlug);

  const baseClasses =
    variant === "hero"
      ? "inline-flex items-center justify-center w-10 h-10 rounded-full border transition-colors shrink-0"
      : "inline-flex items-center justify-center w-8 h-8 rounded-full border transition-colors backdrop-blur-sm shrink-0";

  const colorClasses = isFavorite
    ? "bg-accent text-white border-accent"
    : "bg-background/70 text-foreground border-border hover:border-accent hover:text-accent";

  async function toggleFavorite(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (!user) return;
    const next = isFavorite
      ? favorites.filter((slug) => slug !== citySlug)
      : [...favorites, citySlug];
    try {
      await user.update({ unsafeMetadata: { ...user.unsafeMetadata, favorites: next } });
    } catch {
      // best-effort toggle — no dedicated error UI for this low-stakes action
    }
  }

  if (!isLoaded) {
    return <div className={`${baseClasses} ${className} border-transparent`} aria-hidden />;
  }

  if (!isSignedIn) {
    return (
      <SignUpButton mode="modal">
        <button
          type="button"
          onClick={(e) => e.stopPropagation()}
          aria-label={d.favoriteSignUpPrompt}
          title={d.favoriteSignUpPrompt}
          className={`${baseClasses} ${colorClasses} ${className}`}
        >
          <HeartIcon filled={false} />
        </button>
      </SignUpButton>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleFavorite}
      aria-label={isFavorite ? d.favoriteRemove : d.favoriteAdd}
      title={isFavorite ? d.favoriteRemove : d.favoriteAdd}
      className={`${baseClasses} ${colorClasses} ${className}`}
    >
      <HeartIcon filled={isFavorite} />
    </button>
  );
}
