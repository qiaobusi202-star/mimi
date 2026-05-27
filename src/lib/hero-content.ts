export type Locale = "en" | "zh";

export const heroContent = {
  en: {
    label: "Digital Atelier",
    name: "Zeng Daowei",
    role: "Creative Technologist",
    scroll: "Explore",
    aiTitle: "AI Persona",
    aiHint: "Speak with my digital self",
    aiPlaceholder: "Ask about my work, process, or vision…",
    aiSend: "Send",
    aiThinking: "Thinking…",
    aiOffline: "Add XFYUN_APP_ID in .env.local to enable the Spark assistant.",
  },
  zh: {
    label: "数字工坊",
    name: "曾道炜",
    role: "创意技术者",
    scroll: "探索",
    aiTitle: "AI 化身",
    aiHint: "与我的数字分身对话",
    aiPlaceholder: "询问我的工作、方法或愿景…",
    aiSend: "发送",
    aiThinking: "思考中…",
    aiOffline: "请在 .env.local 填写 XFYUN_APP_ID（讯飞控制台应用 APPID）以启用智能体。",
  },
} as const;
