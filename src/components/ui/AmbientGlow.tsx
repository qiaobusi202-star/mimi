"use client";

import { motion, MotionValue, useMotionValue, useTransform } from "framer-motion";

type AmbientGlowProps = {
  mouseX?: MotionValue<number>;
  mouseY?: MotionValue<number>;
  scrollProgress?: MotionValue<number>;
};

export function AmbientGlow({ mouseX, mouseY, scrollProgress }: AmbientGlowProps) {
  const defaultX = useMotionValue(0);
  const defaultY = useMotionValue(0);
  const defaultScroll = useMotionValue(0);

  const x = mouseX ?? defaultX;
  const y = mouseY ?? defaultY;
  const scroll = scrollProgress ?? defaultScroll;

  const glowOpacity = useTransform(scroll, [0, 1], [1, 0.4]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <motion.div
        style={{ x, y, opacity: glowOpacity }}
        className="absolute -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-[800px] w-[800px] rounded-full bg-gradient-radial from-accent/20 via-accent/8 to-transparent blur-[120px]" />
        <div className="absolute inset-0 h-[600px] w-[600px] -translate-x-1/4 -translate-y-1/4 rounded-full bg-gradient-radial from-purple-400/15 via-transparent to-transparent blur-[100px]" />
        <div className="absolute inset-0 h-[400px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-radial from-cyan-400/10 via-transparent to-transparent blur-[80px]" />
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-[500px] w-[500px] rounded-full bg-gradient-radial from-blue-500/8 via-transparent to-transparent blur-[100px]" />
      </motion.div>

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-1/4 bottom-1/4 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-[600px] w-[600px] rounded-full bg-gradient-radial from-pink-500/6 via-transparent to-transparent blur-[120px]" />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#050505_75%)]" />

      <motion.div
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.05) 0%, transparent 60%)
          `,
        }}
      />
    </div>
  );
}