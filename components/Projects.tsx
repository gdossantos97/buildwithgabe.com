const projects = [
  {
    name: "Voicely",
    subtitle: "AI Voice Translation App",
    status: "LIVE",
    description:
      "Technical founder who designed, built, and shipped a voice translation app using Claude Code, Python/Django REST API, OpenAI Whisper, and React Native — building LLM architecture, evaluation frameworks, and context engineering patterns from scratch.",
    highlights: [
      "Implemented voice cloning so users hear themselves speaking fluently in another language",
      "Launched to 200+ users in under 15 days",
      "Scaled to 500+ downloads and 7 paying subscribers generating $70 MRR",
      "30K+ views through content marketing on TikTok/Instagram",
    ],
    tags: ["Python/Django", "Voice AI", "React Native", "LLM Architecture", "Supabase"],
    accent: "from-cyan-500 to-blue-600",
  },
  {
    name: "Integration Diagnostic Tool",
    subtitle: "Toast Hackathon 2024",
    status: "LIVE",
    description:
      "Built an internal tool bridging Toast API data with care teams — caught the attention of the product director and moved from idea to pilot in under 1 month.",
    highlights: [
      "Won internal recognition at Toast Hackathon 2024",
      "Moved from concept to production pilot in under 1 month",
      "Improved case closure rates within the Care division",
    ],
    tags: ["Toast APIs", "Internal Tooling", "TypeScript"],
    accent: "from-violet-500 to-purple-600",
  },
  {
    name: "KindnessMatters365",
    subtitle: "Nonprofit Web Platform Rebuild",
    status: "LIVE",
    description:
      "Rebuilt a nonprofit digital platform from legacy WordPress into a modern Webflow/Shopify stack, migrating 200+ content pages with gated membership tiers, donation systems, and CRM workflows.",
    highlights: [
      "Migrated 200+ content pages",
      "Implemented gated membership tiers and donation systems",
      "CRM workflows serving 1,000+ monthly users",
    ],
    tags: ["Webflow", "Shopify", "CMS", "CRM"],
    accent: "from-emerald-500 to-teal-600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white/[0.01] border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Things I&apos;ve Built</h2>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                    <span className="text-[10px] font-bold tracking-widest text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500">{project.subtitle}</p>
                </div>
                {/* Gradient accent bar */}
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${project.accent} opacity-60`} />
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-4">{project.description}</p>

              <ul className="space-y-1.5 mb-5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-500">
                    <span className="text-cyan-400 shrink-0">›</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-md border border-white/6 bg-white/[0.03] text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
