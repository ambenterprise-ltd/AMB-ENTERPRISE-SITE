"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { AMBLogo } from "@/components/amb-logo"

const navLinks = [
  { name: "Systems", href: "#systems" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileMenuOpen
            ? "backdrop-blur-md bg-[#0B0C0E]/90 border-b border-[#2C353D]"
            : "backdrop-blur-md bg-[#0B0C0E]/70 border-b border-[#2C353D]/60"
        }`}
      >
        <div className="w-full px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
          <nav className="flex items-center justify-between h-20 md:h-24 lg:h-28">
            {/* Logo with AMB Monogram */}
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="relative z-50 group"
            >
              <AMBLogo height={52} />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12 xl:gap-16">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs lg:text-sm font-medium tracking-[0.2em] uppercase text-[#E2E8F0]/80 hover:text-[#00A8B5] transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative z-50 p-2 text-[#E2E8F0] hover:text-[#00A8B5] transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#0B0C0E]/98 backdrop-blur-xl flex flex-col items-center justify-center pt-20 relative"
          >
            {/* Breathing line behind menus in Electric Teal */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: [0.15, 0.7, 0.15], scaleY: 1 }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                scaleY: { duration: 1, ease: "easeOut" }
              }}
              className="absolute left-1/2 -translate-x-1/2 top-[15%] bottom-[15%] w-[1px] bg-gradient-to-b from-transparent via-[#00E5FF] to-transparent shadow-[0_0_16px_rgba(0,229,255,0.7)] pointer-events-none origin-top"
            />

            <div className="flex flex-col items-center gap-8 relative z-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                  className="text-2xl font-serif tracking-[0.15em] text-[#E2E8F0] hover:text-[#00A8B5] transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="mt-12 w-12 h-[1px] bg-gradient-to-r from-transparent via-[#00A8B5]/50 to-transparent"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
