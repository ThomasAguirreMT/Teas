import { useState, useEffect } from "react";

const navLinks = [
  { id: "inicio",    label: "Inicio" },
  { id: "planes",    label: "Planes" },
  { id: "cobertura", label: "Cobertura" },
  { id: "Nosotros",       label: "FAQ" },
  { id: "contacto",  label: "Contacto" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [active,    setActive]    = useState("inicio");
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
  <button onClick={() => go("inicio")} className="flex items-center gap-3">
    <img
      src="/src/assets/LOGO TEAS COLOR.svg"
      alt="TEAS"
      className="h-10 w-auto"
    />
  </button>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <button key={l.id} onClick={() => go(l.id)}
              className={`nav-link text-sm font-medium transition-colors ${
                active === l.id ? "active" : ""
              }`}
              style={{ color: active === l.id ? "#2d4258" : "#64748b" }}>
              {l.label}
            </button>
          ))}
        </div>

        <button onClick={() => go("contacto")} className="hidden md:block btn-primary text-sm px-5 py-2.5">
          Contratar
        </button>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-1" style={{ color:"#2d4258" }}>
          <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all ${menuOpen?"rotate-45 translate-y-2":""}`} />
          <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all ${menuOpen?"opacity-0":""}`} />
          <div className={`w-5 h-0.5 bg-current transition-all ${menuOpen?"-rotate-45 -translate-y-2":""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 space-y-4 shadow-lg">
          {navLinks.map(l => (
            <button key={l.id} onClick={() => go(l.id)}
              className="block w-full text-left text-sm font-medium py-1 transition-colors"
              style={{ color:"#64748b" }}>
              {l.label}
            </button>
          ))}
          <button onClick={() => go("contacto")} className="btn-primary w-full py-2.5 text-sm mt-2">
            Contratar
          </button>
        </div>
      )}
    </nav>
  );
}
