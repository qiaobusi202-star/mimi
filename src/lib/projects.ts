import type { Locale } from "@/lib/hero-content";

export type ProjectCover =
  | {
      type: "image";
      src: string;
      gradient?: string;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
      gradient?: string;
    }
  | {
      type: "pdf";
      src: string;
      preview?: string;
      gradient?: string;
    }
  | {
      type: "gradient";
      gradient: string;
    };

export type Project = {
  id: string;
  slug: string;
  href: string;
  cover: ProjectCover;
  category: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

export const projects: Project[] = [
  {
    id: "01",
    slug: "project-one",
    href: "/projects/project-one/case-study.pdf",
    cover: {
      type: "pdf",
      src: "/projects/project-one/case-study.pdf",
      preview: "/projects/project-one/preview.jpg",
      gradient:
        "linear-gradient(145deg, #0c1929 0%, #1e3a5f 45%, #050505 100%)",
    },
    category: { en: "UI & Brand", zh: "UI与品牌设计" },
    title: {
      en: "UI & Brand Design",
      zh: "UI与品牌视觉设计",
    },
    description: {
      en: "UI interface design combined with brand identity system, creating a cohesive visual language that bridges digital products with brand values.",
      zh: "UI界面设计与品牌视觉识别系统相结合，打造连接数字产品与品牌价值的统一视觉语言，涵盖界面布局、交互规范与品牌延展。",
    },
  },
  {
    id: "02",
    slug: "project-two",
    href: "/projects/project-two/case-study.pdf",
    cover: {
      type: "pdf",
      src: "/projects/project-two/case-study.pdf",
      preview: "/projects/project-two/preview.jpg",
      gradient:
        "linear-gradient(135deg, #1a1030 0%, #3b1d5c 38%, #050505 100%)",
    },
    category: { en: "Interactive Installation", zh: "交互装置设计" },
    title: {
      en: "Music Visualization Installation",
      zh: "音乐可视化交互装置",
    },
    description: {
      en: "Interactive installation design that transforms audio data into visual experiences through real-time music visualization, bridging sound and sight.",
      zh: "将音频数据通过实时音乐可视化转化为视觉体验的交互装置设计，连接声音与视觉，让观众沉浸在音画交融的沉浸式空间中。",
    },
  },
  {
    id: "03",
    slug: "project-three",
    href: "/projects/project-three/case-study.pdf",
    cover: {
      type: "pdf",
      src: "/projects/project-three/case-study.pdf",
      preview: "/projects/project-three/preview.jpg",
      gradient:
        "linear-gradient(140deg, #0f172a 0%, #1e293b 42%, #050505 100%)",
    },
    category: { en: "Concept & Poster", zh: "概念与海报设计" },
    title: {
      en: "Concept & Poster Design",
      zh: "概念设计与海报创作",
    },
    description: {
      en: "Conceptual design and poster creations that explore visual storytelling through bold typography, striking imagery, and conceptual thinking.",
      zh: "通过大胆的排版、鲜明的视觉形象和概念性思维进行视觉叙事的概念设计与海报创作，探索艺术与传播的边界。",
    },
  },
];

export const workSectionCopy = {
  en: {
    label: "Selected Work",
    title: "Projects",
    subtitle:
      "Case studies and design documents — open PDF for the full presentation.",
  },
  zh: {
    label: "精选作品",
    title: "项目",
    subtitle: "设计案例与方案文档，点击卡片可查看完整 PDF。",
  },
} as const;
