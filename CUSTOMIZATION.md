# 个人网站 · 内容替换与部署指南

## 一、推荐先改这一个文件

`src/lib/site-config.ts` — 全局个人信息：

| 字段 | 说明 |
|------|------|
| `email` | 联系邮箱 |
| `avatarModelPath` | 3D 模型路径，如 `"/models/avatar.glb"`，留空用默认球体 |
| `avatarModelScale` | 模型大小倍数 |
| `resumePdfPath` | 简历 PDF 路径，默认 `"/resume.pdf"` |

---

## 二、所有可替换入口一览

### 1. 首页首屏文案

**文件：** `src/lib/hero-content.ts`

- `label`：站点名（数字工坊 / Digital Atelier）
- `name`：姓名
- `role`：职位（目前仅「创意技术者」）
- AI 对话相关文案

### 2. 导航与三大入口

**文件：** `src/lib/site-links.ts`

- `portalLinks`：个人介绍、相册、简历的链接与文案
- `navCopy`：顶部导航文字

**页面内容：**

| 页面 | 文件 |
|------|------|
| 个人介绍 | `src/app/about/page.tsx` |
| 相册列表 | `src/lib/gallery.ts` + `public/gallery/` |
| 在线简历 | `src/app/resume/page.tsx` + `public/resume.pdf` |

### 3. 作品集（支持 JPG / PNG / MP4 / PDF）

**文件：** `src/lib/projects.ts`

每个项目结构：

```ts
{
  id: "01",
  slug: "nova-os",
  href: "/work/nova-os",  // 或 PDF 直链、外链
  cover: { type: "image", src: "/projects/nova-os/cover.jpg", gradient: "..." },
  category: { en: "...", zh: "..." },
  title: { en: "...", zh: "..." },
  description: { en: "...", zh: "..." },
}
```

**封面 `type` 四种：**

| type | 用途 | 放在 public 下 |
|------|------|----------------|
| `image` | 静态封面 `.jpg` `.png` `.webp` | `projects/项目名/cover.jpg` |
| `video` | 悬停播放 `.mp4` `.webm` | `demo.mp4` + 可选 `poster.jpg` |
| `pdf` | 点击打开 PDF | `case-study.pdf` + 可选 `preview.jpg` |
| `gradient` | 无文件，仅渐变 | 只写 `gradient` 字符串 |

**示例 — 图片：**

```ts
cover: {
  type: "image",
  src: "/projects/my-app/cover.jpg",
  gradient: "linear-gradient(145deg, #1a1030, #050505)",
},
```

**示例 — 视频：**

```ts
cover: {
  type: "video",
  src: "/projects/my-app/demo.mp4",
  poster: "/projects/my-app/poster.jpg",
  gradient: "linear-gradient(160deg, #0f172a, #050505)",
},
```

**示例 — PDF：**

```ts
href: "/projects/my-app/case-study.pdf",
cover: {
  type: "pdf",
  src: "/projects/my-app/case-study.pdf",
  preview: "/projects/my-app/preview.jpg",
  gradient: "linear-gradient(135deg, #12081f, #050505)",
},
```

把文件复制到 `public/projects/my-app/` 即可。

### 4. AI 智能体

| 项目 | 文件 |
|------|------|
| 人设 / 语气 | `src/lib/ai-persona.ts` → `AI_SYSTEM_PROMPT` |
| 演示回复（无 API 时） | `src/lib/ai-persona.ts` → `demoReplies` |
| 对话接口 | `src/app/api/chat/route.ts` |
| API 密钥 | 项目根目录 `.env.local` |

```env
OPENAI_API_KEY=sk-你的密钥
OPENAI_MODEL=gpt-4o-mini
```

### 5. Web3D 化身模型

1. 用 Blender / Ready Player Me / 其他工具导出 **`.glb`**（推荐）或 `.gltf`
2. 放到 `public/models/avatar.glb`
3. 修改 `src/lib/site-config.ts`：

```ts
avatarModelPath: "/models/avatar.glb",
avatarModelScale: 1.2,  // 太大就改小，太小就改大
```

4. 保存后刷新页面；路径错误时会回退为默认紫色能量球

**模型建议：** 面数 &lt; 50k，贴图合并，Y 轴朝上，高度约 1.7m 左右。

### 6. 联系邮箱

`src/lib/site-config.ts` → `email`（已统一，无需改 Contact 组件）

### 7. 网站标题（浏览器标签）

`src/app/layout.tsx` → `metadata`

---

## 三、public 文件夹结构

```
public/
├── models/avatar.glb
├── resume.pdf
├── gallery/01.jpg, 02.jpg, reel.mp4 ...
└── projects/
    └── 项目文件夹/
        ├── cover.jpg
        ├── demo.mp4
        └── case-study.pdf
```

---

## 四、部署（做完内容后）

### 方式 A：Vercel（推荐，免费 HTTPS）

1. 把项目推到 **GitHub**（不要提交 `.env.local`）
2. 打开 [vercel.com](https://vercel.com) → Import 该仓库
3. Framework 选 **Next.js**，直接 Deploy
4. 在 Vercel → Settings → Environment Variables 添加：
   - `OPENAI_API_KEY`（若要真实 AI）
5. 绑定自己的域名（可选）

### 方式 B：本地构建后上传任意服务器

```bash
npm install
npm run build
npm run start
```

默认端口 `3000`。需要 Node.js 18+。

### 方式 C：Docker / 云服务器

构建产物使用 `npm run build`，运行 `npm run start`，前面加 Nginx 反代即可。

---

## 五、上线前检查清单

- [ ] `site-config.ts` 邮箱、模型路径
- [ ] `projects.ts` 作品与 `public/projects/` 文件一致
- [ ] `gallery.ts` 与 `public/gallery/` 一致
- [ ] `public/resume.pdf` 已放置
- [ ] `.env.local` 已在 Vercel 配置（如需 AI）
- [ ] 本地 `npm run build` 无报错

---

## 六、文件要不要「在线链接」？

**不需要全部用在线 URL。**

| 方式 | 写法示例 | 何时用 |
|------|----------|--------|
| **本地文件（推荐）** | `/projects/nova/cover.jpg` | 文件放在 `public/` 对应目录，部署后自动可访问 |
| **在线链接** | `https://你的域名.com/xx.jpg` 或图床/OSS | 文件太大、放 CDN、或已有外链 |

部署到 Vercel 时：`public` 里的文件会一起上线，路径仍是 `/gallery/01.jpg`，**不必**先上传到别的网站再填链接。

只有当你把资源放在 **第三方图床 / 阿里云 OSS / 又拍云** 时，才在 `projects.ts` / `gallery.ts` 里写完整 `https://...` 地址。

---

## 七、常见问题

**Q：预览白屏 / 500？**  
先关掉所有 `npm run dev`，删除 `.next` 文件夹，再重新 `npm run dev`。不要同时运行 `build` 和 `dev`。

**Q：图片不显示？**  
路径必须以 `/` 开头，文件必须在 `public/` 下，区分大小写。

**Q：视频不自动播？**  
需用户悬停卡片；移动端可能受限，保留 `poster` 静态图。

**Q：3D 模型全黑？**  
检查 GLB 是否带材质；尝试 `avatarModelScale`；用 glTF Viewer 先预览模型。

**Q：PDF 点击没反应？**  
确认 `href` 与 `cover.src` 指向 `public` 里真实存在的 PDF。
