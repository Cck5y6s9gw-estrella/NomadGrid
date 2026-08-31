"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { trackEvent } from "@/lib/gtag";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/dictionary";

export default function FeedbackPage() {
  const { lang } = useLanguage();
  const d = t(lang);
  const types = d.feedbackTypes;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [typeIndex, setTypeIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const type = types[typeIndex];
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, type, message }),
      });
      if (!res.ok) throw new Error();
      trackEvent("feedback_submitted", { type });
      setStatus("success");
      setName("");
      setEmail("");
      setTypeIndex(0);
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="max-w-xl mx-auto px-6 pt-28 pb-20">
        <div className="mb-10">
          <div className="text-xs font-medium tracking-widest text-accent uppercase mb-3">
            {d.feedbackBadge}
          </div>
          <h1 className="text-3xl font-semibold mb-2 tracking-tight">
            {d.feedbackTitlePre}
            <span className="text-accent">{d.feedbackTitleHighlight}</span>
          </h1>
          <p className="text-muted text-sm">{d.feedbackSubtitle}</p>
        </div>

        <div className="bg-accent/10 border border-accent/30 rounded-2xl px-5 py-4 mb-8 flex items-start gap-3">
          <span className="text-lg leading-none mt-0.5">💬</span>
          <p className="text-sm text-foreground">
            {d.feedbackIncentivePre}
            <strong>{d.feedbackIncentiveName}</strong>
            {d.feedbackIncentivePost}
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4 text-lg">
              ✓
            </div>
            <p className="text-foreground font-medium mb-1">{d.feedbackSuccessTitle}</p>
            <p className="text-muted text-sm mb-6">{d.feedbackSuccessSubtitle}</p>
            <button
              onClick={() => setStatus("idle")}
              className="text-sm text-accent hover:underline"
            >
              {d.feedbackSendAnother}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 space-y-5">
            <div>
              <label className="block text-sm text-muted mb-2">{d.feedbackTypeLabel}</label>
              <select
                value={typeIndex}
                onChange={(e) => setTypeIndex(Number(e.target.value))}
                className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent/60 transition-colors"
              >
                {types.map((typeLabel, i) => (
                  <option key={typeLabel} value={i}>
                    {typeLabel}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-muted mb-2">{d.feedbackMessageLabel}</label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={d.feedbackMessagePlaceholder}
                className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-sm text-foreground placeholder-muted focus:outline-none focus:border-accent/60 transition-colors resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-muted mb-2">{d.feedbackNameLabel}</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-muted mb-2">{d.feedbackEmailLabel}</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={d.feedbackEmailPlaceholder}
                  className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent/60 transition-colors"
                />
              </div>
            </div>

            {status === "error" && <p className="text-sm text-red-400">{d.feedbackError}</p>}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-accent text-white py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === "loading" ? d.feedbackSubmitting : d.feedbackSubmit}
            </button>
          </form>
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
