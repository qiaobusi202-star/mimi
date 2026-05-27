"use client";

import { motion } from "framer-motion";

import { PageShell } from "@/components/layout/PageShell";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutPage() {
  return (
    <PageShell
      label={{ en: "About", zh: "关于我" }}
      title={{ en: "Zeng Daowei", zh: "关于曾道炜" }}
    >
      <div className="space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="grid gap-8 md:grid-cols-2 md:gap-12"
        >
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-accent/20 bg-accent/5 px-4 py-2">
              <span className="text-[10px] font-normal uppercase tracking-[0.24em] text-accent/80">
                ENFJ · Capricorn
              </span>
            </div>
            <h2 className="text-3xl font-light tracking-[0.04em] md:text-4xl">
              来自湘江之畔的创意探索者
            </h2>
            <p className="text-sm font-light leading-relaxed tracking-[0.02em] text-muted/90 md:text-base md:leading-8">
              我是地道的湖南长沙人，在这座充满烟火气的城市里长大。湘菜的香辣热烈、岳麓山的钟灵毓秀，都深深烙印在我的性格里——既有敢为人先的冲劲，也有对生活细腻的感知。
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-base font-light tracking-[0.06em] text-foreground/80">
              性格画像
            </h3>
            <ul className="space-y-3 text-sm font-light leading-relaxed text-muted/85">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 shrink-0 h-1 w-1 rounded-full bg-accent/60" />
                <span>
                  <strong className="text-foreground/90">ENFJ 教育家型</strong> — 热爱与人连接，善于发现他人闪光点，享受用创意为他人赋能的过程
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 shrink-0 h-1 w-1 rounded-full bg-accent/60" />
                <span>
                  <strong className="text-foreground/90">摩羯座</strong> — 兼具理性与浪漫，既有踏实肯干的务实精神，也有对美和艺术的极致追求
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="rounded-[24px] border border-white/[0.06] bg-white/[0.02] p-8 md:p-10"
        >
          <h3 className="mb-8 text-base font-light tracking-[0.06em]">生活热爱</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="group space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/15 to-red-500/15 transition-transform duration-500 group-hover:scale-105">
                <span className="text-2xl">🍜</span>
              </div>
              <h4 className="text-sm font-medium tracking-wide">湘菜狂热者</h4>
              <p className="text-xs font-light text-muted/75">无辣不欢，最爱辣椒炒肉和剁椒鱼头</p>
            </div>
            <div className="group space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/15 to-pink-500/15 transition-transform duration-500 group-hover:scale-105">
                <span className="text-2xl">🎸</span>
              </div>
              <h4 className="text-sm font-medium tracking-wide">摇滚音乐</h4>
              <p className="text-xs font-light text-muted/75">从经典摇滚到独立乐队，现场演出常客</p>
            </div>
            <div className="group space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 transition-transform duration-500 group-hover:scale-105">
                <span className="text-2xl">🧗</span>
              </div>
              <h4 className="text-sm font-medium tracking-wide">户外徒步</h4>
              <p className="text-xs font-light text-muted/75">偏爱山野徒步，享受登顶时的自由感</p>
            </div>
            <div className="group space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/15 to-emerald-500/15 transition-transform duration-500 group-hover:scale-105">
                <span className="text-2xl">🏊</span>
              </div>
              <h4 className="text-sm font-medium tracking-wide">游泳健身</h4>
              <p className="text-xs font-light text-muted/75">坚持游泳锻炼，保持身心平衡</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="space-y-6"
        >
          <h3 className="text-base font-light tracking-[0.06em]">旅行足迹</h3>
          <div className="flex flex-wrap gap-3">
            {["张家界", "凤凰古城", "桂林阳朔", "杭州西湖", "成都宽窄巷子", "重庆山城", "云南大理", "西藏拉萨"].map((place) => (
              <span
                key={place}
                className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-light tracking-wide text-muted/80 transition-colors hover:border-accent/30 hover:text-foreground"
              >
                {place}
              </span>
            ))}
          </div>
          <p className="text-sm font-light leading-relaxed text-muted/85">
            每一次旅行都是一次灵感的积累。从山水之间汲取设计的意境，从不同地域的文化中寻找创作的养分。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.45, ease }}
          className="rounded-[24px] border border-white/[0.06] bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5 p-8 md:p-10"
        >
          <p className="text-base font-light leading-relaxed italic text-muted/90 md:text-lg md:leading-8">
            &#8220;设计是一种生活态度，它不仅关乎美学，更关乎如何让生活变得更美好、更有温度。&#8221;
          </p>
        </motion.div>
      </div>
    </PageShell>
  );
}