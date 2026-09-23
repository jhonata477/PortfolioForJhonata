const skillGroups = [
  {
    category: "Front-End",
    color: "#ef4444",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML & CSS", level: 98 },
    ],
  },
  {
    category: "Linguagens",
    color: "#3b82f6",
    skills: [
      { name: "JavaScript", level: 93 },
      { name: "Python", level: 78 },
      { name: "TypeScript", level: 90 },
    ],
  },
  {
    category: "Mobile & Back",
    color: "#f59e0b",
    skills: [
      { name: "React Native", level: 78 },
      { name: "Node.js", level: 70 },
      { name: "FastAPI (Python)", level: 65 },
      { name: "REST APIs", level: 82 },
    ],
  },
  {
    category: "Ferramentas",
    color: "#22c55e",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Figma", level: 80 },
      { name: "Vite", level: 88 },
      { name: "Storybook", level: 72 },
    ],
  },
];

const timeline = [
  { year: "2024", role: "Dev Front-End Sênior", company: "Agência XYZ", desc: "Liderança técnica de projetos React, arquitetura de componentes e mentoria." },
  { year: "2023", role: "Dev Front-End Pleno", company: "Startup Fintech ABC", desc: "Dashboard principal em Next.js, integração com APIs Python/FastAPI." },
  { year: "2022", role: "Dev Front-End Júnior", company: "Software House DEF", desc: "Interfaces responsivas, manutenção de sistemas e sprints ágeis." },
  { year: "2021", role: "Início da jornada!", company: "Estudos independentes", desc: "Primeiros passos com HTML, CSS, JavaScript e Python." },
];

export default function Skills() {
  return (
    <main className="pt-14 bg-[#fef08a] min-h-screen halftone">
      {/* Header */}
      <section className="px-4 md:px-10 lg:px-20 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-0.5 flex-1 bg-[#0a0a0a]" />
            <div className="bg-[#3b82f6] border-2 border-[#0a0a0a] px-4 py-1"
              style={{ boxShadow: "3px 3px 0 #0a0a0a", transform: "skewX(-6deg)" }}>
              <span className="font-['Bangers'] text-white text-lg tracking-widest">FICHA DE PODERES</span>
            </div>
            <div className="h-0.5 flex-1 bg-[#0a0a0a]" />
          </div>
          <div className="bg-white border-4 border-[#0a0a0a] p-8 md:p-12 relative"
            style={{ boxShadow: "8px 8px 0 #0a0a0a" }}>
            <div className="absolute inset-0 halftone opacity-20 pointer-events-none" />
            <div className="relative">
              <h1 className="font-['Bangers'] leading-none mb-4"
                style={{ fontSize: "clamp(3rem,9vw,6rem)", WebkitTextStroke: "2px #0a0a0a", color: "#3b82f6", textShadow: "4px 4px 0 #0a0a0a" }}>
                HABILIDADES
              </h1>
              <p className="font-['Comic_Neue'] text-[#333] text-lg max-w-lg">
                Cada tecnologia é um superpoder adquirido ao longo da minha jornada de herói dev!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skill bars */}
      <section className="px-4 md:px-10 lg:px-20 pb-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="bg-white border-3 border-[#0a0a0a] p-6"
              style={{ border: "3px solid #0a0a0a", boxShadow: "6px 6px 0 #0a0a0a" }}>
              <div className="inline-block mb-5 px-3 py-1"
                style={{ backgroundColor: group.color, border: "2px solid #0a0a0a", boxShadow: "2px 2px 0 #0a0a0a" }}>
                <span className="font-['Bangers'] text-white text-base tracking-wider">{group.category}</span>
              </div>
              <div className="flex flex-col gap-4">
                {group.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-['Bangers'] text-lg tracking-wide">{s.name}</span>
                      <span className="font-['Comic_Neue'] font-bold text-sm" style={{ color: group.color }}>{s.level}%</span>
                    </div>
                    <div className="h-4 bg-[#f0f0f0] border-2 border-[#0a0a0a] relative overflow-hidden">
                      <div className="absolute left-0 top-0 h-full"
                        style={{ width: `${s.level}%`, backgroundColor: group.color }} />
                      <div className="absolute inset-0"
                        style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 6px, rgba(0,0,0,0.08) 6px, rgba(0,0,0,0.08) 7px)" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 md:px-10 lg:px-20 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#0a0a0a] border-2 border-[#0a0a0a] px-4 py-1" style={{ boxShadow: "3px 3px 0 #ef4444" }}>
              <span className="font-['Bangers'] text-[#fef08a] text-lg tracking-wider">ORIGEM DO HERÓI</span>
            </div>
            <div className="h-0.5 flex-1 bg-[#0a0a0a]" />
          </div>

          <div className="flex flex-col gap-4">
            {timeline.map((item, i) => (
              <div key={i} className="bg-white flex gap-0 border-3 border-[#0a0a0a]"
                style={{ border: "3px solid #0a0a0a", boxShadow: "5px 5px 0 #0a0a0a" }}>
                <div className="w-20 shrink-0 flex items-center justify-center border-r-3 border-[#0a0a0a]"
                  style={{ borderRight: "3px solid #0a0a0a", backgroundColor: i % 2 === 0 ? "#ef4444" : "#3b82f6" }}>
                  <span className="font-['Bangers'] text-white text-xl" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", letterSpacing: "0.1em" }}>
                    {item.year}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 items-baseline mb-1">
                    <span className="font-['Bangers'] text-xl tracking-wide">{item.role}</span>
                    <span className="font-['Bangers'] text-sm text-[#888] tracking-widest">— {item.company}</span>
                  </div>
                  <p className="font-['Comic_Neue'] text-sm text-[#444] leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-4 md:px-10 lg:px-20 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#f59e0b] border-2 border-[#0a0a0a] px-4 py-1" style={{ boxShadow: "3px 3px 0 #0a0a0a" }}>
              <span className="font-['Bangers'] text-[#0a0a0a] text-lg tracking-wider">TREINAMENTO</span>
            </div>
            <div className="h-0.5 flex-1 bg-[#0a0a0a]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Análise e Des. de Sistemas", place: "Universidade Federal — 2020–2023", desc: "Graduação com foco em desenvolvimento de software e engenharia de sistemas." },
              { title: "JavaScript & Python", place: "freeCodeCamp & Rocketseat — 2021–2024", desc: "600h+ de projetos práticos em JavaScript, Python, React e Node.js." },
            ].map((edu) => (
              <div key={edu.title} className="bg-white border-3 border-[#0a0a0a] p-6"
                style={{ border: "3px solid #0a0a0a", boxShadow: "5px 5px 0 #0a0a0a" }}>
                <h3 className="font-['Bangers'] text-xl tracking-wide mb-1">{edu.title}</h3>
                <p className="font-['Bangers'] text-sm text-[#ef4444] tracking-wider mb-3">{edu.place}</p>
                <p className="font-['Comic_Neue'] text-sm text-[#444] leading-snug">{edu.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
