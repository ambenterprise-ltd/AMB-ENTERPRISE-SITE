"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { MagneticButton } from "./magnetic-button"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            access_key: "dbe43312-8185-47da-8d92-e3dd43d03997",
            name: formData.name,
            email: formData.email,
            message: formData.details,
            subject: `New Lead from Portfolio: ${formData.name}`
        })
      });

      if (response.ok) {
        toast.success("Message Sent Successfully", {
          description: "Thank you for reaching out. We will be in touch soon.",
          style: {
            background: '#0a0a0a',
            border: '1px solid rgba(191,149,63,0.3)',
            color: '#FCF6BA',
          }
        })
        setFormData({ name: "", email: "", details: "" })
      } else {
        toast.error("Failed to send message", {
          description: "Please try again or email us directly.",
          style: { background: '#0a0a0a', border: '1px solid #ef4444', color: '#fff' }
        })
      }
    } catch (error) {
      toast.error("Network Error", {
        description: "Please check your connection and try again.",
        style: { background: '#0a0a0a', border: '1px solid #ef4444', color: '#fff' }
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-32 border-t border-white/5 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left - Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-[0.1em] leading-tight bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent mb-6">
            Start a
            <br />
            Conversation.
          </h2>
          <p className="text-[#D1D5DB] text-lg leading-relaxed max-w-md">
            Ready to elevate your digital presence? We&apos;re here to transform your vision into reality.
          </p>

          <div className="mt-12 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-[#BF953F] to-transparent" />
            <a href="mailto:asfyanzafar@gmail.com" className="text-sm tracking-[0.15em] uppercase text-[#FCF6BA] hover:text-white transition-colors duration-300">
              asfyanzafar@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Name Field */}
          <div className="group">
            <label className="block text-xs uppercase tracking-[0.2em] text-[#A1A1AA]/60 mb-3">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-transparent border-b border-white/20 pb-3 text-white text-lg focus:border-[#BF953F] focus:outline-none transition-colors duration-300 placeholder:text-[#A1A1AA]/30"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email Field */}
          <div className="group">
            <label className="block text-xs uppercase tracking-[0.2em] text-[#A1A1AA]/60 mb-3">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-transparent border-b border-white/20 pb-3 text-white text-lg focus:border-[#BF953F] focus:outline-none transition-colors duration-300 placeholder:text-[#A1A1AA]/30"
              placeholder="john@example.com"
              required
            />
          </div>

          {/* Project Details Field */}
          <div className="group">
            <label className="block text-xs uppercase tracking-[0.2em] text-[#A1A1AA]/60 mb-3">
              Project Details
            </label>
            <textarea
              name="message"
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              rows={4}
              className="w-full bg-transparent border-b border-white/20 pb-3 text-white text-lg focus:border-[#BF953F] focus:outline-none transition-colors duration-300 resize-none placeholder:text-[#A1A1AA]/30"
              placeholder="Tell us about your project..."
              required
            />
          </div>

          {/* Submit Button with Magnetic Effect */}
          <MagneticButton
            type="submit"
            className={`mt-4 px-10 py-4 border border-[#BF953F] text-[#FCF6BA] text-sm tracking-[0.2em] uppercase transition-all duration-500 hover:bg-[#BF953F]/20 hover:shadow-[0_0_30px_rgba(191,149,63,0.3)] hover:text-white ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </MagneticButton>
        </motion.form>
      </div>
    </section>
  )
}
