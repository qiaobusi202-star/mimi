"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { useLocale } from "@/components/providers/LocaleProvider";
import { portalLinks } from "@/lib/site-links";

const ease = [0.22, 1, 0.36, 1] as const;

const icons = {
  about: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M3 14c0-2.761 2.239-5 5-5s5 2.239 5 5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  ),
  gallery: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect
        x="2"
        y="3"
        width="12"
        height="10"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="6" cy="7" r="1.2" fill="currentColor" />
      <path
        d="M2 11l3.5-3 2.5 2 3-2.5L14 11"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  ),
  resume: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M4 2h5l3 3v9H4V2z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M9 2v3h3" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6 8h4M6 10.5h4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
};

export function PortalLinks() {
  const { locale } = useLocale();

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.65, ease }}
      aria-label="Site portals"
      className="mt-10 w-full md:mt-12"
    >
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3">
        {portalLinks.map((link, index) => (
          <motion.li
            key={link.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 + index * 0.08, ease }}
          >
            <Link
              href={link.href}
              className="group flex h-full min-h-[88px] flex-col justify-between rounded-[22px] border border-white/[0.07] bg-white/[0.025] px-4 py-4 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.14] hover:bg-white/[0.05]"
            >
              <span className="flex items-center gap-2.5 text-muted transition-colors duration-300 group-hover:text-accent">
                {icons[link.icon]}
                <span className="text-xs font-normal tracking-[0.14em] text-foreground">
                  {link.label[locale]}
                </span>
              </span>
              <span className="mt-3 text-[11px] font-light leading-relaxed text-muted/65">
                {link.description[locale]}
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
