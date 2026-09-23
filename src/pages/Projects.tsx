import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    tags: ["React", "TypeScript", "Stripe"],
    category: "web",
    status: "concluído",
    year: "2024",
    desc: "Plataforma de vendas completa com carrinho dinâmico, filtros e checkout integrado ao Stripe.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
    color: "#3b82f6",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    tags: ["Next.js", "Python", "FastAPI"],
    category: "web",
    status: "em andamento",
    year: "2024",
    desc: "Painel admin com gráficos em tempo real e API REST feita em Python/FastAPI.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
    color: "#ef4444",
  },
  {
    id: 3,
    title: "Script Automation",
    tags: ["Python", "JavaScript", "Node.js"],
    category: "lib",
    status: "em andamento",
    year: "2024",
    desc: "Automação de tarefas com Python e scripts Node.js para CI/CD e deploy.",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop&auto=format",
    color: "#f59e0b",
  },
  {
    id: 4,
    title: "App de Finanças",
    tags: ["React Native", "Expo", "JavaScript"],
    category: "mobile",
    status: "concluído",
    year: "2023",
    desc: "Controle financeiro pessoal com categorias, metas e notificações push.",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop&auto=format",
    color: "#22c55e",
  },
  {
    id: 5,
    title: "UI Component Library",
    tags: ["React", "Storybook", "TypeScript"],
    category: "lib",
    status: "concluído",
    year: "2023",
    desc: "Biblioteca de componentes acessíveis com 40+ componentes no Storybook.",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop&auto=format",
    color: "#8b5cf6",
  },
  {
    id: 6,
    title: "Data Scraper API",
    tags: ["Python", "FastAPI", "PostgreSQL"],
    category: "lib",
    status: "em andamento",
    year: "2024",
    desc: "API de scraping e análise de dados com Python, FastAPI e banco PostgreSQL.",
    img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop&auto=format",
    color: "#3b82f6",
  },
];

const categories = [
  { key: "all", label: "Todos" },
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile" },
  { key: "lib", label: "Biblioteca" },
];

export default function Projects() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <main className="pt-14 bg-[#fef08a] min-h-screen halftone">
      {/* Header panel */}
      <section className="px-4 md:px-10 lg:px-20 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-0.5 flex-1 bg-[#0a0a0a]" />
            <div className="bg-[#ef4444] border-2 border-[#0a0a0a] px-4 py-1"
              style={{ boxShadow: "3px 3px 0 #0a0a0a", transform: "skewX(-6deg)" }}>
              <span className="font-['Bangers'] text-white text-lg tracking-widest">MISSÕES COMPLETAS</span>
            </div>
            <div className="h-0.5 flex-1 bg-[#0a0a0a]" />
          </div>

          <div className="bg-white border-4 border-[#0a0a0a] p-8 md:p-12 relative"
            style={{ boxShadow: "8px 8px 0 #0a0a0a" }}>
            <div className="absolute inset-0 halftone opacity-20 pointer-events-none" />
            <div className="relative">
              <h1 className="font-['Bangers'] leading-none mb-4"
                style={{ fontSize: "clamp(3rem,9vw,6rem)", WebkitTextStroke: "2px #0a0a0a", color: "#ef4444", textShadow: "4px 4px 0 #0a0a0a" }}>
                PROJETOS
              </h1>
              <p className="font-['Comic_Neue'] text-[#333] text-lg max-w-lg">
                Cada projeto é uma batalha vencida! Veja as minhas missões
                concluídas e as que ainda estão em andamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 md:px-10 lg:px-20 pb-6">
        <div className="max-w-6xl mx-auto flex gap-3 flex-wrap items-center">
          {categories.map(({ key, label }) => (
            <button key={key} onClick={() => setActive(key)}
              className="font-['Bangers'] text-lg tracking-wider px-5 py-1.5 transition-all duration-100"
              style={{
                border: "3px solid #0a0a0a",
                boxShadow: active === key ? "4px 4px 0 #0a0a0a" : "3px 3px 0 #0a0a0a",
                background: active === key ? "#0a0a0a" : "white",
                color: active === key ? "#fef08a" : "#0a0a0a",
                transform: active === key ? "translate(-1px,-1px)" : "",
              }}>
              {label}
            </button>
          ))}
          <span className="ml-auto font-['Bangers'] text-base tracking-wider text-[#0a0a0a]">
            {filtered.length} projeto{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 md:px-10 lg:px-20 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article key={p.id} className="bg-white group cursor-pointer"
              style={{ border: "3px solid #0a0a0a", boxShadow: "6px 6px 0 #0a0a0a", transition: "transform 0.1s, box-shadow 0.1s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translate(-2px,-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "8px 8px 0 #0a0a0a"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0 #0a0a0a"; }}>
              <div className="relative overflow-hidden" style={{ borderBottom: "3px solid #0a0a0a" }}>
                <img src={p.img} alt={p.title}
                  className="w-full h-44 object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                <div className="absolute top-2 left-2">
                  <div className="px-2 py-0.5 border-2 border-[#0a0a0a]"
                    style={{ backgroundColor: p.status === "em andamento" ? "#f59e0b" : "#22c55e", boxShadow: "2px 2px 0 #0a0a0a", transform: "rotate(-2deg)" }}>
                    <span className="font-['Bangers'] text-[#0a0a0a] text-xs tracking-wider">
                      {p.status === "em andamento" ? "🔧 Em andamento" : "✅ Concluído"}
                    </span>
                  </div>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="font-['Bangers'] text-xs px-2 py-0.5 bg-[#0a0a0a] text-[#fef08a]">{p.year}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex gap-1 flex-wrap mb-2">
                  {p.tags.map(t => (
                    <span key={t} className="font-['Bangers'] text-xs tracking-widest px-2 py-0.5 text-white"
                      style={{ backgroundColor: p.color, border: "1.5px solid #0a0a0a" }}>
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-['Bangers'] text-2xl tracking-wide mb-2">{p.title}</h3>
                <p className="font-['Comic_Neue'] text-sm text-[#444] leading-snug mb-5">{p.desc}</p>
                <div className="flex gap-4 pt-3" style={{ borderTop: "2px solid #0a0a0a" }}>
                  <a href="#" className="font-['Bangers'] text-sm tracking-wider text-[#ef4444] hover:underline flex items-center gap-1">
                    DEMO →
                  </a>
                  <a href="#" className="font-['Bangers'] text-sm tracking-wider text-[#3b82f6] hover:underline flex items-center gap-1">
                    GITHUB →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
