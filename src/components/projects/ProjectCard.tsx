"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

import { useLocale } from "@/components/providers/LocaleProvider";
import { ProjectCover } from "@/components/projects/ProjectCover";
import type { Project } from "@/lib/projects";

const ease = [0.22, 1, 0.36, 1] as const;

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { locale } = useLocale();
  const [hovered, setHovered] = useState(false);
  const title = project.title[locale];
  const category = project.category[locale];
  const description = project.description[locale];

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: index * 0.1, ease }}
      className="h-full"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.div whileHover="hover" initial="rest" className="group h-full">
        <Link
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full flex-col overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-3 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-[border-color,box-shadow] duration-700 ease-out hover:border-white/[0.14] hover:shadow-[0_32px_100px_-36px_rgba(139,92,246,0.12)] md:rounded-[32px] md:p-3.5"
        >
          <motion.div
            variants={{ rest: { scale: 1 }, hover: { scale: 1.015 } }}
            transition={{ duration: 0.65, ease }}
            className="relative aspect-[16/10] overflow-hidden rounded-[22px] md:rounded-[26px]"
          >
            <ProjectCover cover={project.cover} title={title} isHovered={hovered} />

            <div className="absolute inset-0 z-[3] bg-gradient-to-t from-[#050505]/80 via-[#050505]/10 to-transparent" />

            <motion.div
              variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
              transition={{ duration: 0.6, ease }}
              className="pointer-events-none absolute inset-0 z-[4] bg-[radial-gradient(ellipse_at_50%_0%,rgba(139,92,246,0.14),transparent_55%)]"
            />

            <div className="absolute left-5 top-5 z-[5] flex gap-2">
              <span className="inline-flex rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] font-normal uppercase tracking-[0.22em] text-muted backdrop-blur-md">
                {category}
              </span>
              {project.cover.type !== "gradient" && (
                <span className="inline-flex rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-muted/80 backdrop-blur-md">
                  {project.cover.type}
                </span>
              )}
            </div>

            <div className="absolute bottom-4 right-4 z-[5]">
              <span className="inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[9px] uppercase tracking-[0.16em] text-muted/70 backdrop-blur-md">
                仅预览
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={{ rest: { y: 0 }, hover: { y: -2 } }}
            transition={{ duration: 0.55, ease }}
            className="flex flex-1 flex-col px-4 pb-5 pt-7 md:px-5 md:pb-6 md:pt-8"
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <h3 className="text-xl font-light tracking-[0.04em] text-foreground md:text-2xl">
                {title}
              </h3>
              <motion.span
                variants={{
                  rest: { opacity: 0.35, x: 0 },
                  hover: { opacity: 0.9, x: 4 },
                }}
                transition={{ duration: 0.5, ease }}
                aria-hidden
                className="mt-1 shrink-0 text-muted"
              >
                →
              </motion.span>
            </div>
            <p className="max-w-md text-sm font-light leading-relaxed tracking-[0.02em] text-muted/90 md:text-[15px]">
              {description}
            </p>
          </motion.div>
        </Link>
      </motion.div>
    </motion.article>
  );
}