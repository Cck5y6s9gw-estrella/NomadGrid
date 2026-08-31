// Helper to safely send custom Google Analytics 4 events.
// GoogleAnalytics from @next/third-parties/google exposes window.gtag globally.
// This no-ops safely if gtag isn't loaded yet (e.g. consent not given, or SSR).
export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag !== "function") return;
  w.gtag("event", eventName, params);
}
