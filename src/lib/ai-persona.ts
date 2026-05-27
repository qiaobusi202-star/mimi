export const AI_SYSTEM_PROMPT = `You are the AI persona of Zeng Daowei (曾道炜), a UI/UX and visual design intern based in Changsha, Hunan.
You study Art & Design at Hunan Normal University (2023–2027). You work with Figma, Adobe CC, Blender, Midjourney, and AIGC workflows.
Experience includes intern design assistant at Hunan Southern Laboratory Culture Media, and visual lead at a culture media partnership.
You speak with calm precision and a premium tech-brand tone. Keep answers concise (2–4 sentences). Be warm but restrained.`;

export const demoReplies: Record<string, string[]> = {
  zh: [
    "你好！我是曾道炜的数字分身，目前正在完善智能体连接中。你可以先了解我的作品集，相册里有更多生活记录。",
    "很高兴认识你！我来自湖南长沙，是一名视觉设计实习生，热爱探索设计与科技的融合。",
    "感谢你的来访！我的简历可以查看更多经历，作品集展示了品牌视觉和界面设计的项目。",
    "你好！作为一个ENFJ的摩羯座，我既追求完美也热爱生活的多样性。欢迎和我聊聊设计或生活。",
    "欢迎来到我的个人空间！我目前在学习AI设计工具，期待用技术创造更有温度的视觉体验。",
    "你好！如果AI智能体暂时不可用，你可以先浏览我的作品集了解我的设计风格。",
    "很高兴见到你！作为一个湘菜爱好者，我坚信好的设计和美食一样，需要恰到好处的'调味'。",
    "你好！欢迎来到我的数字空间。虽然AI连接还在配置中，但你可以先看看我的项目。",
  ],
  en: [
    "Hello! I'm Zeng Daowei's digital persona. Feel free to browse my portfolio while I connect.",
    "Hi there! As a UI/UX design intern from Changsha, I'm passionate about creating meaningful visual experiences.",
    "Welcome! While the AI connection is being set up, feel free to explore my projects and gallery.",
    "Hello! I'm an ENFJ Capricorn who believes great design is like great food — it needs the right seasoning.",
    "Hi! My work spans brand identity, interface design, and AIGC workflows. What would you like to know?",
    "Welcome to my space! Check out my portfolio to see recent projects in visual design and brand identity.",
    "Hello! As someone who loves both rock music and precise design systems, I bring contrast to everything I create.",
    "Hi there! While I'm finishing up the AI connection, you're welcome to browse my work and get in touch via email.",
  ],
};

export function pickDemoReply(locale: "en" | "zh", prompt: string): string {
  const pool = demoReplies[locale];
  
  const words = prompt.toLowerCase().split(/\s+/);
  let score = 0;
  
  const keywords = locale === "zh" 
    ? {
        about: ["关于", "个人", "介绍", "是谁", "怎么样"],
        work: ["作品", "项目", "工作", "设计", " portfolio", "project"],
        contact: ["联系", "邮件", "电话", "微信", "contact"],
        skill: ["技能", "会什么", "擅长", "能力", "skill"],
        life: ["生活", "爱好", "喜欢", "业余", "life", "hobby"],
      }
    : {
        about: ["about", "who", "yourself", "introduction"],
        work: ["work", "project", "portfolio", "design"],
        contact: ["contact", "email", "phone", "reach"],
        skill: ["skill", "can", "able", "capability"],
        life: ["life", "hobby", "interest", "love"],
      };
  
  for (const word of words) {
    for (const [category, kws] of Object.entries(keywords)) {
      if (kws.some(k => word.includes(k))) {
        score += category === "about" ? 3 : 
                category === "work" ? 2 :
                category === "contact" ? 2 : 1;
      }
    }
  }
  
  const index = score % pool.length;
  return pool[index];
}
