"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { useLocale } from "@/components/providers/LocaleProvider";
import { navCopy, portalLinks } from "@/lib/site-links";

const mainLinks = [
  { key: "work" as const, href: "#work" },
  { key: "hub" as const, href: "#ai-hub" },
  { key: "contact" as const, href: "#contact" },
];

export function Navbar() {
  const { locale } = useLocale();
  const copy = navCopy[locale];

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 md:h-20 md:px-10"
      >
        <Link
          href="/"
          className="shrink-0 text-sm font-medium tracking-tight text-foreground transition-opacity duration-300 hover:opacity-70"
        >
          ZD
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {mainLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted transition-colors duration-300 hover:text-foreground"
              >
                {copy[link.key]}
              </Link>
            </li>
          ))}
          <li className="h-3 w-px bg-white/10" aria-hidden />
          {portalLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="text-sm text-muted/80 transition-colors duration-300 hover:text-foreground"
              >
                {link.label[locale]}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium tracking-wide text-foreground backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] md:px-5 md:text-sm"
        >
          {copy.cta}
        </Link>
      </nav>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </motion.header>
  );
}
