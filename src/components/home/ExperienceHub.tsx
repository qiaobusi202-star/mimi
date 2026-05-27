"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";

import { AiChatPanel } from "@/components/ai/AiChatPanel";
import { useLocale } from "@/components/providers/LocaleProvider";
import { heroContent } from "@/lib/hero-content";

const AvatarScene = dynamic(
  () =>
    import("@/components/three/AvatarScene").then((m) => m.AvatarScene),
  {
    ssr: false,
    loading: () => (
      <div className="flex aspect-[4/3] w-full items-center justify-center rounded-[24px] border border-white/[0.06] bg-white/[0.02] lg:aspect-auto lg:min-h-[320px]">
        <div className="h-12 w-12 animate-pulse rounded-full bg-accent/10 blur-xl" />
      </div>
    ),
  },
);

const ease = [0.22, 1, 0.36, 1] as const;

export function ExperienceHub() {
  const [aiActive, setAiActive] = useState(false);
  const { locale } = useLocale();
  const copy = heroContent[locale];

  return (
    <motion.div
      id="ai-hub"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.35, ease }}
      className="relative z-10 w-full lg:max-w-xl lg:justify-self-end xl:max-w-none"
    >
      <p className="mb-4 text-center text-[10px] uppercase tracking-[0.32em] text-muted/60 lg:text-left">
        {copy.aiTitle}
      </p>

      <div className="flex flex-col gap-4 rounded-[28px] border border-white/[0.06] bg-white/[0.015] p-3 backdrop-blur-xl md:p-4">
        <div className="overflow-hidden rounded-[22px] border border-white/[0.06] bg-black/20">
          <AvatarScene active={aiActive} />
        </div>
        <AiChatPanel onActiveChange={setAiActive} />
      </div>
    </motion.div>
  );
}
