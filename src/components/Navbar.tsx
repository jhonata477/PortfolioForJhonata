import { NavLink } from "react-router-dom";
import { useState } from "react";

const links = [
  { label: "Início", to: "/", end: true },
  { label: "Projetos", to: "/projects" },
  { label: "Habilidades", to: "/skills" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#ef4444] border-b-4 border-[#0a0a0a]"
      style={{ boxShadow: "0 4px 0 #0a0a0a" }}>
      <div className="flex items-center justify-between px-6 md:px-12 h-14">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <span className="font-['Bangers'] text-2xl tracking-widest text-white"
            style={{ WebkitTextStroke: "1.5px #0a0a0a", textShadow: "2px 2px 0 #0a0a0a" }}>
            &lt;JHONATA/&gt;
          </span>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ label, to, end }) => (
            <NavLink
              key={label}
              to={to}
              end={end}
              className={({ isActive }) =>
                `font-['Bangers'] text-lg tracking-wider px-4 py-1 border-2 border-transparent transition-all duration-100 ${
                  isActive
                    ? "bg-[#0a0a0a] text-[#fef08a] border-[#0a0a0a]"
                    : "text-white hover:bg-[#0a0a0a] hover:text-[#fef08a] hover:border-[#0a0a0a]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Social + mobile */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            {[
              { label: "GitHub", href: "#", icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7C6.73 19.91 6.14 18 6.14 18c-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.7.115 2.5.337 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/></svg> },
              { label: "LinkedIn", href: "#", icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zm2-6a2 2 0 110 4 2 2 0 010-4z"/></svg> },
            ].map(({ label, href, icon }) => (
              <a key={label} href={href} aria-label={label}
                className="w-8 h-8 flex items-center justify-center bg-white border-2 border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#fef08a] transition-colors"
                style={{ boxShadow: "2px 2px 0 #0a0a0a" }}>
                {icon}
              </a>
            ))}
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {open
                ? <><line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="2"/><line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="2"/></>
                : <><line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2"/><line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2"/><line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2"/></>
              }
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#ef4444] border-t-4 border-[#0a0a0a]">
          {links.map(({ label, to, end }) => (
            <NavLink key={label} to={to} end={end} onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-3 font-['Bangers'] text-xl tracking-wider border-b-2 border-[#0a0a0a] ${isActive ? "bg-[#0a0a0a] text-[#fef08a]" : "text-white"}`
              }>
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
