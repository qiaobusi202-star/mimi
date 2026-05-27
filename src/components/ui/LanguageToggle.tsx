"use client";

import { motion } from "framer-motion";

import { useLocale } from "@/components/providers/LocaleProvider";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center rounded-full border border-white/[0.06] bg-white/[0.02] p-0.5 backdrop-blur-sm ${className}`}
    >
      {(["en", "zh"] as const).map((lang) => {
        const active = locale === lang;
        return (
          <button
            key={lang}
            type="button"
            onClick={() => setLocale(lang)}
            className={`relative px-3 py-1 text-[10px] font-normal uppercase tracking-[0.2em] transition-colors duration-500 ${
              active ? "text-foreground" : "text-muted/50 hover:text-muted"
            }`}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-white/[0.06]"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10">{lang}</span>
          </button>
        );
      })}
    </div>
  );
}
