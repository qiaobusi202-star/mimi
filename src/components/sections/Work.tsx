"use client";

import { motion } from "framer-motion";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { useLocale } from "@/components/providers/LocaleProvider";
import { projects, workSectionCopy } from "@/lib/projects";

const ease = [0.22, 1, 0.36, 1] as const;

export function Work() {
  const { locale } = useLocale();
  const copy = workSectionCopy[locale];

  return (
    <section
      id="work"
      className="relative bg-background px-6 py-28 md:px-10 md:py-40 lg:py-48"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
      />

      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease }}
          className="mb-20 max-w-2xl md:mb-28"
        >
          <p className="mb-5 text-[10px] font-normal uppercase tracking-[0.42em] text-muted/80 md:text-[11px]">
            {copy.label}
          </p>
          <h2 className="text-3xl font-light tracking-[0.06em] text-foreground md:text-4xl lg:text-5xl">
            {copy.title}
          </h2>
          <p className="mt-6 text-sm font-light leading-relaxed tracking-[0.03em] text-muted/90 md:mt-8 md:text-base md:leading-8">
            {copy.subtitle}
          </p>
        </motion.header>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: index * 0.15, ease }}
              className={`${index === 0 ? "md:col-span-2" : ""}`}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}