const capabilities = ["AI AGENTS", "AUTOMATION", "BUSINESS SOFTWARE", "WEB APPLICATIONS", "DESKTOP SYSTEMS", "MEDIA PIPELINES"]

export function CapabilityStrip() {
  return (
    <section aria-label="Core capabilities" className="relative z-10 border-y border-[#2C353D] py-6 md:py-8">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-[#2C353D] bg-[#2C353D] sm:grid-cols-3 lg:grid-cols-6">
        {capabilities.map((capability) => (
          <div key={capability} className="bg-[#1B1E23] px-4 py-5 text-center text-xs md:text-sm font-semibold tracking-[0.18em] text-[#E2E8F0]/70 transition-colors duration-300 hover:bg-[#00A8B5]/10 hover:text-[#00A8B5]">
            {capability}
          </div>
        ))}
      </div>
    </section>
  )
}
