"use client";

import Image from "next/image";
import { useState } from "react";

import type { ProjectCover as CoverType } from "@/lib/projects";

type ProjectCoverProps = {
  cover: CoverType;
  title: string;
  isHovered: boolean;
};

export function ProjectCover({ cover, title, isHovered }: ProjectCoverProps) {
  const [videoReady, setVideoReady] = useState(false);
  const gradient =
    cover.type === "gradient"
      ? cover.gradient
      : (cover.gradient ??
        "linear-gradient(145deg, #1a1030 0%, #2d1b4e 42%, #0d0d12 100%)");

  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{ background: gradient }}
      />

      {cover.type === "image" && (
        <Image
          src={cover.src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="relative z-[1] object-cover opacity-70 mix-blend-luminosity transition-opacity duration-700 group-hover:opacity-90"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      )}

      {cover.type === "video" && (
        <>
          {cover.poster && !isHovered && (
            <Image
              src={cover.poster}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="relative z-[1] object-cover opacity-70 mix-blend-luminosity"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          )}
          <video
            src={cover.src}
            muted
            loop
            playsInline
            preload="metadata"
            className={`absolute inset-0 z-[1] h-full w-full object-cover transition-opacity duration-700 ${
              isHovered && videoReady ? "opacity-85" : "opacity-0"
            }`}
            onCanPlay={() => setVideoReady(true)}
            ref={(el) => {
              if (!el) return;
              if (isHovered) el.play().catch(() => undefined);
              else {
                el.pause();
                el.currentTime = 0;
              }
            }}
          />
        </>
      )}

      {cover.type === "pdf" && (
        <>
          {cover.preview ? (
            <Image
              src={cover.preview}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="relative z-[1] object-cover opacity-65 mix-blend-luminosity"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          ) : null}
          <div className="absolute inset-0 z-[2] flex items-center justify-center">
            <span className="rounded-full border border-white/15 bg-black/40 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-muted backdrop-blur-md">
              PDF
            </span>
          </div>
        </>
      )}
    </>
  );
}
