export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white/[0.01] border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Let&apos;s Build Something
        </h2>
        <p className="text-slate-400 mb-12 max-w-xl leading-relaxed">
          Whether you&apos;re looking for an AI Solutions Engineer, a technical co-founder, or someone to help your
          team ship faster with LLMs — I&apos;d love to connect.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <a
            href="mailto:hello@buildwithgabe.com"
            className="group flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-400/25 hover:bg-cyan-400/5 transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400/20 transition-colors shrink-0">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-0.5">Email</p>
              <p className="text-sm text-slate-300 group-hover:text-cyan-400 transition-colors">
              hello@buildwithgabe.com
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/gabrielcostasantos/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-400/25 hover:bg-cyan-400/5 transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400/20 transition-colors shrink-0">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-0.5">LinkedIn</p>
              <p className="text-sm text-slate-300 group-hover:text-cyan-400 transition-colors">
                Gabriel Santos
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02]">
            <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 shrink-0">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-0.5">Location</p>
              <p className="text-sm text-slate-300">Orlando, FL</p>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/5">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Gabriel Santos. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
