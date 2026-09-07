"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="hidden md:block absolute top-[85vh] bottom-[400px] left-1/2 -translate-x-1/2 w-[2px] bg-white/[0.03] -z-10 pointer-events-none">
      <motion.div
        style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
        className="w-full h-full bg-gradient-to-b from-[#BF953F] to-[#FCF6BA]"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
