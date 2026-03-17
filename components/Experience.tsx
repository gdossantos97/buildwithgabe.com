const jobs = [
  {
    title: "Developer Advocate",
    company: "Toast, Inc",
    location: "Remote — Orlando, FL",
    period: "12/2025 – Present",
    bullets: [
      "Guide 50+ external startup and enterprise partners from prototype to production on Toast APIs — translating startup requirements into scalable technical solutions and serving as primary technical advisor throughout the full integration lifecycle.",
      "Run hands-on technical training sessions and workshops for internal BDRs, CSMs, and AEs — translating complex API concepts and LLM integration patterns into actionable guidance for non-technical audiences.",
      "Analyze ecosystem-wide developer patterns to surface systemic friction, delivering Voice of the Developer insights that directly influence platform improvements and product roadmap decisions.",
      "Win technical evaluations by demonstrating platform capabilities to founders and engineering teams, building credibility through deep product knowledge and hands-on demos.",
      "Collaborate cross-functionally with Product, Engineering, and Enablement teams to build scalable onboarding patterns and repeatable deployment workflows across the developer ecosystem.",
    ],
  },
  {
    title: "Founder & AI Solutions Engineer",
    company: "Somnium Labs LLC",
    location: "Orlando, FL",
    period: "10/2022 – Present",
    bullets: [
      "Conduct consultative sales cycles with businesses and nonprofits — identifying AI automation opportunities, scoping solutions, closing engagements, and delivering production-grade Voice AI, LLM integrations, and custom web platforms.",
      "Technical founder who built Voicely from 0 to production — architected LLM systems using Claude Code, designed evaluation frameworks to measure model performance, and implemented context engineering patterns to optimize voice translation quality.",
      "Sold and deployed a Voice AI receptionist system for a local business — led the full cycle from identifying the pain point, proposing the solution, closing the engagement, and shipping to production.",
      "Designed and deployed full-stack LLM-powered applications using direct Claude and OpenAI API orchestration — raw API calls with custom prompt architecture, context engineering, and response evaluation built from scratch.",
      "Regularly consult with SMB and nonprofit clients on AI adoption strategy — translating complex AI capabilities into clear business value and actionable implementation roadmaps.",
    ],
  },
  {
    title: "API Integration Specialist",
    company: "Toast, Inc",
    location: "Orlando, FL",
    period: "07/2023 – 12/2025",
    bullets: [
      "Owned post-sale technical success for integration partners, ensuring reliable deployment of production POS integrations across restaurant environments.",
      "Diagnosed complex integration failures using Android Studio, Splunk, Postman, and API telemetry — serving as primary liaison between vendors and internal engineering teams.",
      "Built internal web tools using Toast APIs that improved case closure rates within the Care division — project caught the attention of product leadership and moved to pilot in under 1 month.",
      "Delivered regular updates and solutions within SLAs while maintaining comprehensive documentation and gathering feedback to drive continuous improvement.",
    ],
  },
  {
    title: "Technical Support Engineer",
    company: "Oracle",
    location: "Orlando, FL",
    period: "04/2022 – 05/2023",
    bullets: [
      "Remotely troubleshot technical issues within Oracle Food & Beverage hospitality products using SQL for database retrieval, updates, and tuning.",
      "Applied proficiency in TCP/IP, LAN/WAN, DNS, DHCP, VPN, and firewall concepts to diagnose and resolve complex networking issues for enterprise customers.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Experience</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Where I&apos;ve Worked</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-white/5 to-transparent hidden md:block" />

          <div className="space-y-12">
            {jobs.map((job, i) => (
              <div key={i} className="md:pl-10 relative">
                {/* Timeline dot */}
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-400 ring-4 ring-[#080b12] hidden md:block" />

                <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-400/15 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                    <span className="text-xs font-mono text-cyan-400/70 bg-cyan-400/5 px-2 py-0.5 rounded-full border border-cyan-400/10 whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mb-4">
                    {job.company} &nbsp;·&nbsp; {job.location}
                  </p>
                  <ul className="space-y-2">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                        <span className="text-cyan-400 mt-1 shrink-0">›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
