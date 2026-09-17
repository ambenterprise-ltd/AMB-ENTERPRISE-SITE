"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="hidden md:block absolute top-[85vh] bottom-[400px] left-1/2 -translate-x-1/2 w-[2px] bg-white/[0.03] -z-10 pointer-events-none">
      <motion.div
        style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
        className="w-full h-full bg-gradient-to-b from-transparent via-[#00E5FF] to-transparent shadow-[0_0_16px_rgba(0,229,255,0.7)]"
        animate={{ opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
