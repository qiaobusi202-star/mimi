"use client";

import { useRef } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { ExperienceHub } from "@/components/home/ExperienceHub";
import { PortalLinks } from "@/components/home/PortalLinks";
import { useLocale } from "@/components/providers/LocaleProvider";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Particles } from "@/components/ui/Particles";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import { heroContent } from "@/lib/hero-content";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.45, delay, ease },
  }),
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { locale } = useLocale();
  const { x: mouseX, y: mouseY } = useMouseParallax(0.85);
  const content = heroContent[locale];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.3]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const bgDepth = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} className="relative min-h-[220vh]">
      <div className="sticky top-0 min-h-screen overflow-hidden">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="relative flex min-h-screen flex-col justify-center px-5 py-20 will-change-transform sm:px-6 md:px-10 md:py-24"
        >
          <AmbientGlow
            mouseX={mouseX}
            mouseY={mouseY}
            scrollProgress={bgDepth}
          />
          <Particles />

          <motion.div
            style={{ y: contentY }}
            className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-20"
          >
            <div className="flex flex-col items-center text-center lg:items-start lg:pt-4 lg:text-left">
              <motion.div
                custom={0.2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mb-7 flex w-full items-center justify-center gap-4 lg:justify-between"
              >
                <p className="text-[10px] font-normal uppercase tracking-[0.45em] text-muted/80 md:text-[11px]">
                  {content.label}
                </p>
                <LanguageToggle />
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.h1
                  key={`name-${locale}`}
                  initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                  transition={{ duration: 0.9, ease }}
                  className="w-full text-[clamp(2.5rem,8.5vw,4.75rem)] font-light leading-[1] tracking-[0.06em] text-foreground xl:text-[5rem]"
                >
                  {content.name}
                </motion.h1>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`role-${locale}`}
                  custom={0.55}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="mt-6 text-sm font-extralight tracking-[0.26em] text-muted/90 md:mt-8 md:text-base"
                >
                  {content.role}
                </motion.p>
              </AnimatePresence>

              <PortalLinks />

              <motion.div
                custom={1.05}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-10 hidden h-px w-full max-w-[120px] bg-gradient-to-r from-white/20 via-white/10 to-transparent lg:block"
              />
            </div>

            <ExperienceHub />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1.4, ease }}
            className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 md:bottom-10"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={`scroll-${locale}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-[9px] font-normal uppercase tracking-[0.42em] text-muted/50"
              >
                {content.scroll}
              </motion.span>
            </AnimatePresence>
            <motion.span
              animate={{ opacity: [0.2, 0.55, 0.2], scaleY: [1, 1.15, 1] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="block h-9 w-px origin-top bg-gradient-to-b from-muted/40 to-transparent"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
