/**
 * 站点全局配置 — 优先改这个文件里的个人信息
 */
export const siteConfig = {
  email: "qiaobusi202@gmail.com",
  phone: "13548740441",
  location: { en: "Changsha, Hunan", zh: "湖南长沙" },

  /** 3D IP 形象 */
  avatarModelPath: "/models/ip.glb",
  /** 整体缩放微调 */
  avatarModelScale: 1,
  /** 固定前视图 Y 轴旋转（弧度），按模型朝向微调 */
  avatarRotationY: 0,
  /** 模型垂直偏移 */
  avatarPositionY: -0.15,

  resumePdfPath: "/resume.pdf",
  resumeImagePath: "/resume.png",
} as const;
