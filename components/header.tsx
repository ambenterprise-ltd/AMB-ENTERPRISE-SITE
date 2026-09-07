"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
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
            ? "backdrop-blur-md bg-black/40 border-b border-white/5"
            : "backdrop-blur-md bg-black/20 border-b border-white/5"
        }`}
      >
        <div className="w-full px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
          <nav className="flex items-center justify-between h-20 md:h-24 lg:h-28">
            {/* Logo */}
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl tracking-[0.1em] bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent relative z-50"
            >
              AMB Enterprise
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-12 lg:gap-20 2xl:gap-32">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm md:text-base lg:text-lg 2xl:text-xl tracking-[0.2em] uppercase text-[#A1A1AA] hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative z-50 p-2 text-[#A1A1AA] hover:text-white transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
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
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20 relative"
          >
            {/* Breathing line behind menus */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: [0.1, 0.6, 0.1], scaleY: 1 }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                scaleY: { duration: 1, ease: "easeOut" }
              }}
              className="absolute left-1/2 -translate-x-1/2 top-[15%] bottom-[15%] w-[1px] bg-gradient-to-b from-transparent via-[#BF953F] to-transparent pointer-events-none origin-top"
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
                  className="text-2xl font-serif tracking-[0.15em] text-[#D1D5DB] hover:text-[#FCF6BA] transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="mt-12 w-12 h-[1px] bg-gradient-to-r from-transparent via-[#BF953F]/50 to-transparent"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
