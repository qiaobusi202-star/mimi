"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  galleryItems,
  galleryLayoutClass,
} from "@/lib/gallery";

const ease = [0.22, 1, 0.36, 1] as const;

export function GalleryMasonry() {
  return (
    <ul className="grid auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[160px] md:grid-cols-4 md:gap-4 md:auto-rows-[180px]">
      {galleryItems.map((item, index) => (
        <motion.li
          key={item.src}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.75, delay: index * 0.05, ease }}
          className={`group relative overflow-hidden rounded-[20px] border border-white/[0.07] bg-white/[0.02] md:rounded-[24px] ${galleryLayoutClass[item.layout]}`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover opacity-88 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute bottom-3 left-3 text-[10px] tracking-[0.18em] text-white/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {item.alt}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}
