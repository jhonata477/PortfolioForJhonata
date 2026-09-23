import { Link } from "react-router-dom";

const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    tag: "React · TypeScript",
    status: "concluído",
    desc: "Plataforma de vendas com carrinho dinâmico e checkout integrado ao Stripe.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
    color: "#3b82f6",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    tag: "Next.js · Python",
    status: "em andamento",
    desc: "Painel com gráficos em tempo real e API em Python/FastAPI no backend.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
    color: "#ef4444",
  },
  {
    id: 3,
    title: "Script Automation",
    tag: "Python · JavaScript",
    status: "em andamento",
    desc: "Automação de tarefas com Python e scripts Node.js para CI/CD.",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop&auto=format",
    color: "#f59e0b",
  },
];

const skills = [
  { name: "JavaScript", color: "#f59e0b", pct: 93 },
  { name: "Python", color: "#3b82f6", pct: 78 },
  { name: "React", color: "#ef4444", pct: 95 },
  { name: "TypeScript", color: "#8b5cf6", pct: 88 },
];

export default function Home() {
  return (
    <main className="pt-14 bg-[#fef08a] min-h-screen halftone">

      {/* ── HERO PANEL ── */}
      <section className="px-4 md:px-10 lg:px-20 py-10">
        <div className="max-w-6xl mx-auto">

          {/* Chapter header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#ef4444] border-2 border-[#0a0a0a] px-4 py-1"
              style={{ boxShadow: "3px 3px 0 #0a0a0a", transform: "skewX(-6deg)" }}>
              <span className="font-['Bangers'] text-white text-lg tracking-widest" style={{ WebkitTextStroke: "0.5px #0a0a0a" }}>
                EDIÇÃO #001
              </span>
            </div>
            <div className="h-0.5 flex-1 bg-[#0a0a0a]" />
            <span className="font-['Bangers'] text-[#0a0a0a] text-sm tracking-widest">PORTFÓLIO ESPECIAL</span>
          </div>

          {/* Main hero grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-4 border-[#0a0a0a]"
            style={{ boxShadow: "8px 8px 0 #0a0a0a" }}>

            {/* Left — name panel */}
            <div className="md:col-span-3 bg-white border-r-4 border-[#0a0a0a] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 halftone opacity-30 pointer-events-none" />

              {/* Speech bubble */}
              <div className="bubble bg-[#fef08a] px-5 py-3 mb-8 inline-block self-start"
                style={{ borderColor: "#0a0a0a" }}>
                <span className="font-['Comic_Neue'] font-bold text-sm">Ei, amigo! Sou desenvolvedor!</span>
              </div>

              <div className="mt-6">
                <h1 className="font-['Bangers'] leading-none mb-2"
                  style={{
                    fontSize: "clamp(3.5rem,10vw,7rem)",
                    WebkitTextStroke: "2px #0a0a0a",
                    color: "#ef4444",
                    textShadow: "4px 4px 0 #0a0a0a",
                    letterSpacing: "0.03em"
                  }}>
                  JHONATA
                </h1>
                <div className="bg-[#0a0a0a] inline-block px-4 py-1 mb-6" style={{ transform: "skewX(-4deg)" }}>
                  <span className="font-['Bangers'] text-[#fef08a] text-2xl tracking-widest">
                    FRONT-END DEV
                  </span>
                </div>
                <p className="font-['Comic_Neue'] text-[#0a0a0a] text-base leading-snug max-w-sm mb-8">
                  Com poderes de <strong>React</strong>, <strong>Python</strong> e <strong>JavaScript</strong>,
                  crio interfaces que nenhum vilão consegue derrubar!
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link to="/projects"
                    className="font-['Bangers'] text-xl tracking-widest px-6 py-2 bg-[#ef4444] text-white border-3 border-[#0a0a0a] hover:bg-[#dc2626] transition-colors"
                    style={{ border: "3px solid #0a0a0a", boxShadow: "4px 4px 0 #0a0a0a" }}>
                    VER PROJETOS!
                  </Link>
                  <Link to="/skills"
                    className="font-['Bangers'] text-xl tracking-widest px-6 py-2 bg-[#3b82f6] text-white"
                    style={{ border: "3px solid #0a0a0a", boxShadow: "4px 4px 0 #0a0a0a" }}>
                    HABILIDADES
                  </Link>
                </div>
              </div>
            </div>

            {/* Right — Spider-Man photo */}
            <div className="md:col-span-2 bg-[#1e3a5f] relative overflow-hidden min-h-[340px] halftone-blue">
              <div className="absolute top-3 right-3 z-10">
                <div className="bg-[#ef4444] border-2 border-[#0a0a0a] px-3 py-1"
                  style={{ boxShadow: "2px 2px 0 #0a0a0a", transform: "rotate(3deg)" }}>
                  <span className="font-['Bangers'] text-white text-sm tracking-wider">O HERÓI DEV!</span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&h=800&fit=crop&crop=center&auto=format"
                alt="Spider-Man — perfil do herói"
                className="w-full h-full object-cover object-center mix-blend-luminosity opacity-90"
                style={{ minHeight: "340px" }}
              />
              {/* Action word overlay */}
              <div className="absolute bottom-4 left-4">
                <span className="action-word text-[#fef08a]"
                  style={{ fontSize: "3rem", textShadow: "3px 3px 0 #0a0a0a" }}>
                  POW!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="px-4 md:px-10 lg:px-20 pb-8">
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-0 border-4 border-[#0a0a0a]"
          style={{ boxShadow: "6px 6px 0 #0a0a0a" }}>
          {[
            { n: "3+", label: "Anos" },
            { n: "24", label: "Projetos" },
            { n: "12", label: "Clientes" },
            { n: "∞", label: "Café" },
          ].map(({ n, label }, i) => (
            <div key={label}
              className={`flex flex-col items-center justify-center py-5 ${i < 3 ? "border-r-4 border-[#0a0a0a]" : ""} ${i % 2 === 0 ? "bg-white" : "bg-[#ef4444]"}`}>
              <span className="font-['Bangers'] text-4xl" style={{ WebkitTextStroke: i % 2 === 0 ? "1.5px #0a0a0a" : "1px #fff", color: i % 2 === 0 ? "#ef4444" : "#fef08a" }}>{n}</span>
              <span className="font-['Bangers'] text-sm tracking-widest" style={{ color: i % 2 === 0 ? "#0a0a0a" : "#fff" }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILLS STRIP ── */}
      <section className="px-4 md:px-10 lg:px-20 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-5">
            <div className="bg-[#3b82f6] border-2 border-[#0a0a0a] px-4 py-1" style={{ boxShadow: "3px 3px 0 #0a0a0a" }}>
              <span className="font-['Bangers'] text-white text-lg tracking-wider">PODERES ESPECIAIS</span>
            </div>
            <div className="h-0.5 flex-1 bg-[#0a0a0a]" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((s) => (
              <div key={s.name} className="bg-white border-3 border-[#0a0a0a] p-4"
                style={{ border: "3px solid #0a0a0a", boxShadow: "4px 4px 0 #0a0a0a" }}>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-['Bangers'] text-xl tracking-wide">{s.name}</span>
                  <span className="font-['Comic_Neue'] font-bold text-sm" style={{ color: s.color }}>{s.pct}%</span>
                </div>
                <div className="h-4 bg-[#f0f0f0] border-2 border-[#0a0a0a] relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full transition-all duration-700"
                    style={{ width: `${s.pct}%`, backgroundColor: s.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="px-4 md:px-10 lg:px-20 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#0a0a0a] border-2 border-[#0a0a0a] px-4 py-1" style={{ boxShadow: "3px 3px 0 #ef4444" }}>
              <span className="font-['Bangers'] text-[#fef08a] text-lg tracking-wider">MISSÕES RECENTES</span>
            </div>
            <div className="h-0.5 flex-1 bg-[#0a0a0a]" />
            <Link to="/projects"
              className="font-['Bangers'] text-sm tracking-wider text-[#0a0a0a] hover:text-[#ef4444] transition-colors underline underline-offset-2">
              VER TODAS →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((p) => (
              <article key={p.id} className="bg-white border-3 border-[#0a0a0a] group cursor-pointer"
                style={{ border: "3px solid #0a0a0a", boxShadow: "6px 6px 0 #0a0a0a", transition: "transform 0.1s, box-shadow 0.1s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translate(-2px,-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "8px 8px 0 #0a0a0a"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0 #0a0a0a"; }}>
                <div className="relative overflow-hidden" style={{ borderBottom: "3px solid #0a0a0a" }}>
                  <img src={p.img} alt={p.title}
                    className="w-full h-44 object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                  {/* Status badge */}
                  <div className="absolute top-2 left-2">
                    <div className="px-2 py-0.5 border-2 border-[#0a0a0a]"
                      style={{ backgroundColor: p.status === "em andamento" ? "#f59e0b" : "#22c55e", boxShadow: "2px 2px 0 #0a0a0a", transform: "rotate(-2deg)" }}>
                      <span className="font-['Bangers'] text-[#0a0a0a] text-xs tracking-wider uppercase">
                        {p.status === "em andamento" ? "🔧 Em andamento" : "✅ Concluído"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex gap-1 flex-wrap mb-2">
                    {p.tag.split(" · ").map(t => (
                      <span key={t} className="font-['Bangers'] text-xs tracking-widest px-2 py-0.5 text-white"
                        style={{ backgroundColor: p.color, border: "1.5px solid #0a0a0a" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-['Bangers'] text-2xl tracking-wide mb-2" style={{ WebkitTextStroke: "0.5px #0a0a0a" }}>
                    {p.title}
                  </h3>
                  <p className="font-['Comic_Neue'] text-sm text-[#333] leading-snug">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA PANEL ── */}
      <section className="px-4 md:px-10 lg:px-20 pb-16">
        <div className="max-w-6xl mx-auto bg-[#ef4444] border-4 border-[#0a0a0a] p-10 relative overflow-hidden"
          style={{ boxShadow: "8px 8px 0 #0a0a0a" }}>
          <div className="absolute inset-0 halftone opacity-20 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="action-word text-[#fef08a] block mb-2"
                style={{ fontSize: "2rem", textShadow: "2px 2px 0 #0a0a0a" }}>
                ZAP!
              </span>
              <h2 className="font-['Bangers'] text-white text-4xl md:text-5xl tracking-wide leading-tight"
                style={{ WebkitTextStroke: "1px #0a0a0a", textShadow: "3px 3px 0 #0a0a0a" }}>
                Tem um projeto em mente?
              </h2>
              <p className="font-['Comic_Neue'] text-white text-base mt-2">
                Com grandes poderes vêm grandes responsabilidades — e projetos incríveis!
              </p>
            </div>
            <a href="mailto:jhonata@dev.com"
              className="font-['Bangers'] text-xl tracking-widest px-8 py-3 bg-[#fef08a] text-[#0a0a0a] shrink-0 hover:bg-white transition-colors"
              style={{ border: "3px solid #0a0a0a", boxShadow: "4px 4px 0 #0a0a0a" }}>
              FALE COMIGO! →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
