import type { Locale } from "@/lib/hero-content";

export type PortalLink = {
  id: string;
  href: string;
  icon: "about" | "gallery" | "resume";
  label: Record<Locale, string>;
  description: Record<Locale, string>;
};

export const portalLinks: PortalLink[] = [
  {
    id: "about",
    href: "/about",
    icon: "about",
    label: { en: "About", zh: "个人介绍" },
    description: {
      en: "Background, philosophy, and creative direction.",
      zh: "背景、理念与创作方向。",
    },
  },
  {
    id: "gallery",
    href: "/gallery",
    icon: "gallery",
    label: { en: "Gallery", zh: "相册" },
    description: {
      en: "Visual moments, process, and atmosphere.",
      zh: "视觉瞬间、过程与氛围记录。",
    },
  },
  {
    id: "resume",
    href: "/resume",
    icon: "resume",
    label: { en: "Resume", zh: "简历" },
    description: {
      en: "Experience, skills, and selected milestones.",
      zh: "经历、技能与重要节点。",
    },
  },
];

export const navCopy = {
  en: {
    work: "Work",
    hub: "AI Hub",
    contact: "Contact",
    cta: "Get in touch",
  },
  zh: {
    work: "作品",
    hub: "AI 空间",
    contact: "联系",
    cta: "取得联系",
  },
} as const;
