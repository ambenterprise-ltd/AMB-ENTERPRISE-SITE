"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { MagneticButton } from "./magnetic-button"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
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
            access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "dbe43312-8185-47da-8d92-e3dd43d03997",
            name: formData.name,
            email: formData.email,
            project_type: formData.projectType,
            message: formData.details,
            subject: `New AMB Enterprise project inquiry: ${formData.name}`
        })
      });

      if (response.ok) {
        toast.success("Message Sent Successfully", {
          description: "Thank you for reaching out. We will be in touch soon.",
          style: {
            background: '#1B1E23',
            border: '1px solid rgba(0,168,181,0.4)',
            color: '#D4C5B0',
          }
        })
        setFormData({ name: "", email: "", projectType: "", details: "" })
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
    <section id="contact" className="py-32 border-t border-[#2C353D] relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left - Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-[0.1em] leading-tight text-[#D4C5B0] mb-6">
            Let&apos;s Build Something Useful.
          </h2>
          <p className="text-[#E2E8F0]/80 text-lg leading-relaxed max-w-md">
            Tell us what you&apos;re trying to build. We&apos;ll turn the idea into an engineered system.
          </p>

          <div className="mt-12 flex items-center gap-5">
            <div className="h-[1px] w-20 bg-gradient-to-r from-[#00A8B5] to-transparent" />
            <a href="mailto:ambenterpriseltd@gmail.com" className="text-base md:text-lg font-semibold tracking-[0.15em] uppercase text-[#D4C5B0] hover:text-[#00A8B5] transition-colors duration-300">
              ambenterpriseltd@gmail.com
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
            <label htmlFor="contact-name" className="block text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#E2E8F0]/70 mb-3">
              Name
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-transparent border-b border-[#2C353D] pb-3 text-[#E2E8F0] text-lg focus:border-[#00A8B5] focus:outline-none transition-colors duration-300 placeholder:text-[#E2E8F0]/30"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email Field */}
          <div className="group">
            <label htmlFor="contact-email" className="block text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#E2E8F0]/70 mb-3">
              Email
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-transparent border-b border-[#2C353D] pb-3 text-[#E2E8F0] text-lg focus:border-[#00A8B5] focus:outline-none transition-colors duration-300 placeholder:text-[#E2E8F0]/30"
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="group">
            <label htmlFor="project-type" className="block text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#E2E8F0]/70 mb-3">
              Project Type
            </label>
            <select
              id="project-type"
              name="projectType"
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full appearance-none rounded-none bg-transparent border-b border-[#2C353D] pb-3 text-lg text-[#E2E8F0] focus:border-[#00A8B5] focus:outline-none transition-colors duration-300"
              required
            >
              <option value="" disabled className="bg-[#1B1E23]">Select a project type</option>
              <option value="AI Agent" className="bg-[#1B1E23]">AI Agent</option>
              <option value="Automation" className="bg-[#1B1E23]">Automation</option>
              <option value="Business Software" className="bg-[#1B1E23]">Business Software</option>
              <option value="Web Application" className="bg-[#1B1E23]">Web Application</option>
              <option value="Desktop Software" className="bg-[#1B1E23]">Desktop Software</option>
              <option value="Media Automation" className="bg-[#1B1E23]">Media Automation</option>
              <option value="Other" className="bg-[#1B1E23]">Other</option>
            </select>
          </div>

          {/* Project Details Field */}
          <div className="group">
            <label htmlFor="contact-message" className="block text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#E2E8F0]/70 mb-3">
              Message
            </label>
            <textarea
              name="message"
              id="contact-message"
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              rows={4}
              className="w-full bg-transparent border-b border-[#2C353D] pb-3 text-[#E2E8F0] text-lg focus:border-[#00A8B5] focus:outline-none transition-colors duration-300 resize-none placeholder:text-[#E2E8F0]/30"
              placeholder="Tell us about your project..."
              required
            />
          </div>

          {/* Submit Button with Magnetic Effect */}
          <MagneticButton
            type="submit"
            disabled={isSubmitting}
            className={`mt-6 rounded-sm px-14 py-5 border border-[#D4C5B0] bg-transparent text-[#D4C5B0] text-sm md:text-base font-semibold tracking-[0.2em] uppercase transition-all duration-500 hover:bg-[#D4C5B0] hover:text-[#0B0C0E] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </MagneticButton>
        </motion.form>
      </div>
    </section>
  )
}
