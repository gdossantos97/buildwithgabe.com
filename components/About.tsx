export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">About</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Builder. Seller. Shipper.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              I&apos;m a startup-minded AI Solutions Engineer and technical founder with hands-on experience
              architecting, selling, and deploying LLM-powered applications using{" "}
              <span className="text-cyan-400 font-medium">Claude, OpenAI APIs</span>, and Python/Django backends.
            </p>
            <p>
              I built{" "}
              <span className="text-white font-medium">Voicely</span> end-to-end using Claude Code — from LLM
              architecture and evaluation frameworks to API orchestration, zero to production.
            </p>
            <p>
              Through{" "}
              <span className="text-white font-medium">Somnium Labs</span>, I run consultative AI sales cycles,
              closing and delivering Voice AI and LLM solutions for business clients. I combine deep builder
              credibility with technical sales experience to help founders and engineering teams move fast and ship
              with confidence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "50+", label: "Partners Guided at Toast" },
              { value: "500+", label: "Voicely Downloads" },
              { value: "30K+", label: "Content Views" },
              { value: "5+", label: "Years Building AI" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-400/20 transition-colors"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                <div className="text-xs text-slate-500 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
