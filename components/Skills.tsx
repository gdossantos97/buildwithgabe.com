const skillGroups = [
  {
    category: "AI & LLM",
    icon: "🤖",
    skills: ["Claude", "OpenAI", "Voice AI", "Prompt Engineering", "Direct API Orchestration", "MCP", "Codex"],
  },
  {
    category: "Languages",
    icon: "💻",
    skills: ["JavaScript", "TypeScript", "Node.js", "Python", "Kotlin", "SQL", "Swift"],
  },
  {
    category: "Infrastructure",
    icon: "⚙️",
    skills: ["Docker", "Firebase", "MongoDB", "Linux", "REST APIs", "Webhooks", "Auth Flows", "PostgreSQL", "MySQL", 'Supabase'],
  },
  {
    category: "Frontend & Mobile",
    icon: "📱",
    skills: ["React Native", "HTML", "CSS", "ExpressJS", "Flutter", "Webflow", ],
  },
  {
    category: "Tooling",
    icon: "🛠️",
    skills: ["Splunk", "Postman", "Android Studio", "Shopify", "CMS Platforms"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.01] border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Technical Stack</h2>

        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{group.icon}</span>
                <span className="text-sm font-semibold text-slate-300 tracking-wide">{group.category}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full border border-white/8 bg-white/[0.03] text-slate-400 hover:border-cyan-400/30 hover:text-cyan-300 transition-all cursor-default"
                  >
                    {skill}
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
