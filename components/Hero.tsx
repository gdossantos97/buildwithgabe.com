export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-xs font-medium tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Available for opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Gabriel{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Santos
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 font-light mb-4">
          AI Solutions Engineer &amp; Technical Founder
        </p>

        <p className="text-slate-500 text-sm md:text-base mb-10 max-w-xl mx-auto leading-relaxed">
          Building LLM-powered products from zero to production.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/10 text-slate-300 font-medium hover:border-cyan-400/40 hover:text-cyan-400 transition-all"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-xs text-slate-600">
          <span>🌎 Orlando, FL</span>
          <span className="w-px h-3 bg-slate-700" />
          <span>🇺🇸 EN &nbsp;🇧🇷 PT &nbsp;🇪🇸 ES</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 text-xs">
        <span>scroll</span>
        <svg
          className="animate-bounce"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
