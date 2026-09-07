"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  description: string;
  link: string | null;
  index: number;
}

export function PortfolioCard({ title, description, link, index }: PortfolioCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="portfolio-card group relative p-8 lg:p-10 rounded-xl transition-all duration-700 ease-out sm:hover:-translate-y-2"
    >
      {/* Animated conic border */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className="conic-border absolute inset-0 rounded-xl" />
        <div className="absolute inset-[1px] rounded-xl bg-[#0a0a0a]" />
      </div>

      {/* Mouse spotlight overlay */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(191,149,63,0.06), transparent 40%)",
        }}
      />

      {/* Card content */}
      <div className="relative z-10">
        {/* Project Number */}
        <span className="absolute top-0 right-0 text-xs tracking-[0.2em] text-[#A1A1AA]/30 font-mono">
          0{index + 1}
        </span>

        {/* Project Title */}
        <h3 className="font-serif text-xl md:text-2xl tracking-[0.05em] text-white mb-4 group-hover:text-[#FCF6BA] transition-colors duration-500">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#D1D5DB] text-sm md:text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Link */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#BF953F] hover:text-[#FCF6BA] transition-colors duration-300"
          >
            View Project
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
