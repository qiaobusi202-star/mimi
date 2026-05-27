"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { useLocale } from "@/components/providers/LocaleProvider";

const ease = [0.22, 1, 0.36, 1] as const;

type PageShellProps = {
  label: { en: string; zh: string };
  title: { en: string; zh: string };
  children: React.ReactNode;
};

export function PageShell({ label, title, children }: PageShellProps) {
  const { locale } = useLocale();

  return (
    <article className="min-h-screen bg-background px-6 pb-24 pt-28 md:px-10 md:pt-36">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
        >
          <Link
            href="/"
            className="mb-12 inline-flex text-xs tracking-[0.2em] text-muted transition-colors hover:text-foreground"
          >
            ← {locale === "zh" ? "返回首页" : "Back"}
          </Link>

          <p className="mb-4 text-[10px] uppercase tracking-[0.42em] text-muted/80">
            {label[locale]}
          </p>
          <h1 className="text-3xl font-light tracking-[0.06em] md:text-4xl">
            {title[locale]}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="mt-12"
        >
          {children}
        </motion.div>
      </div>
    </article>
  );
}
