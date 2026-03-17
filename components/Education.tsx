const education = [
  {
    degree: "Full Stack Development — MERN Stack",
    school: "MIT xPRO",
    location: "Boston, MA",
    year: "08/2022",
    icon: "🎓",
  },
  {
    degree: "Associate in Arts",
    school: "Valencia College",
    location: "Orlando, FL",
    year: "05/2023",
    icon: "📚",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Education</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Background</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-400/20 transition-colors flex gap-4"
            >
              <div className="text-3xl shrink-0">{edu.icon}</div>
              <div>
                <h3 className="font-semibold text-white mb-1">{edu.degree}</h3>
                <p className="text-sm text-slate-400">{edu.school}</p>
                <p className="text-xs text-slate-600 mt-1">
                  {edu.location} &nbsp;·&nbsp; {edu.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
