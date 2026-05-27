# Zeng Daowei — Portfolio

极简、电影感个人作品集网站。

## 技术栈

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Geist Font

## 开发

```bash
npm install
npm run dev
```

在浏览器打开 [http://localhost:3000](http://localhost:3000)。

**内容替换、多格式作品、3D 模型、部署说明** → 见 [CUSTOMIZATION.md](./CUSTOMIZATION.md)

## 项目结构

```
src/
├── app/
│   ├── globals.css      # 全局样式与主题变量
│   ├── layout.tsx       # 根布局
│   └── page.tsx         # 首页
└── components/
    ├── layout/
    │   └── Navbar.tsx   # 导航栏
    ├── sections/
    │   └── Hero.tsx     # 首屏
    └── ui/
        ├── AmbientGlow.tsx  # 紫色光晕背景
        └── Particles.tsx    # 粒子动效
```
