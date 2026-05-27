"use client";

import { motion } from "framer-motion";

import { useLocale } from "@/components/providers/LocaleProvider";
import { siteConfig } from "@/lib/site-config";

const copy = {
  en: {
    label: "Contact",
    title: "Let's build something quiet and remarkable.",
  },
  zh: {
    label: "联系",
    title: "一起做点安静而值得的事。",
  },
} as const;

const ease = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <section
      id="contact"
      className="border-t border-white/[0.04] bg-background px-6 py-24 md:px-10 md:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease }}
        className="mx-auto max-w-6xl rounded-[28px] border border-white/[0.06] bg-white/[0.02] px-8 py-14 text-center backdrop-blur-xl md:py-16"
      >
        <p className="mb-4 text-[10px] uppercase tracking-[0.42em] text-muted/80">
          {t.label}
        </p>
        <h2 className="mx-auto max-w-xl text-2xl font-light tracking-[0.04em] md:text-3xl">
          {t.title}
        </h2>
        
        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-block text-sm tracking-wide text-muted transition-colors duration-300 hover:text-accent"
          >
            {siteConfig.email}
          </a>
          
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.24em] text-muted/60">WeChat</span>
            <span className="text-sm tracking-wide text-accent/90">Mimi2004-</span>
          </div>
          
          <div className="mt-4 flex items-center gap-2 text-xs text-muted/60">
            <span className="h-px w-8 bg-white/10" />
            <span>或扫码添加微信</span>
            <span className="h-px w-8 bg-white/10" />
          </div>
          
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-xs font-light tracking-[0.12em] text-muted transition-all hover:border-accent/30 hover:text-foreground"
            >
              发送邮件
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-xs font-light tracking-[0.12em] text-muted transition-all hover:border-accent/30 hover:text-foreground"
            >
              拨打电话
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}