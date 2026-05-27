"use client";

import { useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export function useMouseParallax(strength = 1) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 55, damping: 22, mass: 0.6 });
  const smoothY = useSpring(y, { stiffness: 55, damping: 22, mass: 0.6 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set((e.clientX / window.innerWidth - 0.5) * 2 * strength);
      y.set((e.clientY / window.innerHeight - 0.5) * 2 * strength);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [strength, x, y]);

  return { x: smoothX, y: smoothY };
}
