import type { Locale } from "@/lib/hero-content";

export const resumeProfile = {
  name: { en: "Zeng Daowei", zh: "曾道炜" },
  title: {
    en: "UI/UX Design Intern · Visual Design Intern",
    zh: "UI / UX 设计实习生 · 视觉设计实习生",
  },
  location: { en: "Changsha, Hunan", zh: "湖南长沙" },
  phone: "13548740441",
  email: "qiaobusi202@gmail.com",
};

export const education = {
  school: { en: "Hunan Normal University", zh: "湖南师范大学" },
  major: {
    en: "Art & Design (Undergraduate)",
    zh: "艺术设计学 · 本科",
  },
  period: "2023.09 — 2027.06",
  courses: {
    zh: [
      "影像与视效",
      "交互设计与可用性",
      "项目界面设计",
      "视觉设计与信息架构",
      "品牌设计",
      "企业传播与编辑",
      "符号学与设计概论",
      "字体排印",
      "数字影像",
      "摄影基础",
      "绘画",
    ],
    en: [
      "Video & visual effects",
      "Interaction design & usability",
      "Project interface design",
      "Visual design & information architecture",
      "Brand design",
      "Enterprise communication & editing",
      "Semiotics & design overview",
      "Typography",
      "Digital imaging",
      "Photography basics",
      "Painting",
    ],
  },
};

export const skills = {
  tools: [
    "Figma",
    "Photoshop",
    "Illustrator",
    "After Effects",
    "Blender",
    "Midjourney",
    "Krita AI",
  ],
  code: { en: "HTML5 / CSS (Basics)", zh: "H5 / CSS（基础）" },
};

export const awards = [
  {
    year: "2024",
    title: {
      en: "Huaxia Award Culture & Art Design Competition — Bronze",
      zh: "华夏奖文化艺术设计大赛 · 铜奖",
    },
  },
];

export const workExperience = [
  {
    period: "2025.01 — 2025.02",
    org: {
      en: "Hunan Southern Laboratory Culture Media Co., Ltd.",
      zh: "湖南南方实验室文化传媒有限公司",
    },
    role: { en: "Intern Design Assistant", zh: "实习设计助理" },
    highlights: {
      zh: [
        "绘制图形与图标素材",
        "AIGC 工作流创意交付（Midjourney、Krita AI 高质量视觉产出）",
        "设计素材归档与管理",
      ],
      en: [
        "Graphics and icon asset production",
        "AIGC workflow delivery (Midjourney, Krita AI visual output)",
        "Design asset archiving and management",
      ],
    },
  },
  {
    period: "2024.05 — 2025.01",
    org: {
      en: "Changsha Yuhua Xingkong Yijing Culture Media Partnership",
      zh: "长沙市雨花区星空意境文化传媒合伙企业",
    },
    role: { en: "Partner / Visual Lead", zh: "合伙人 / 视觉负责人" },
    highlights: {
      zh: [
        "品牌落地 0→1（VI、空间视觉）",
        "全媒体 AI 视频制作（脚本至成片全流程）",
      ],
      en: [
        "Brand 0→1 (VI, spatial visual design)",
        "Omni-media AI video production (script to final cut)",
      ],
    },
  },
];

export const campusExperience = [
  {
    period: "2024.06 — 2025.09",
    org: { en: "School Design Association", zh: "校设计协会" },
    role: { en: "Vice Chairman", zh: "副理事长" },
    highlights: {
      zh: [
        "大型活动策划与统筹",
        "AIGC 团队技术赋能（Midjourney 与 Prompt 逻辑培训）",
        "日常管理与资源调度",
      ],
      en: [
        "Large-scale event planning and coordination",
        "AIGC team enablement (Midjourney & prompt training)",
        "Daily management and resource scheduling",
      ],
    },
  },
];

export const selfEvaluation = {
  zh: [
    "目标导向：执行力强，具备商业项目经验",
    "沉稳有活力：性格沉稳，抗压与技术瓶颈解决能力突出",
    "技术敏锐：热衷学习 AIGC 工作流、AI 视频等前沿技术",
  ],
  en: [
    "Goal-oriented with strong execution and commercial project experience",
    "Calm under pressure with solid technical problem-solving",
    "Keen on AIGC workflows, AI video, and emerging creative tech",
  ],
};

export const resumeLabels = {
  en: {
    education: "Education",
    skills: "Skills",
    awards: "Awards",
    experience: "Experience",
    campus: "Campus",
    about: "About",
    download: "Download resume image",
    courses: "Core courses",
  },
  zh: {
    education: "教育背景",
    skills: "技能栈",
    awards: "所获奖项",
    experience: "工作及实践履历",
    campus: "校内经历",
    about: "自我评价",
    download: "查看简历图",
    courses: "核心课程",
  },
} as const satisfies Record<Locale, Record<string, string>>;
