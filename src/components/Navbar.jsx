import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/",          label: "Inicio" },
  { path: "/planes",    label: "Planes" },
  { path: "/cobertura", label: "Cobertura" },
  { path: "/nosotros",  label: "Nosotros" },
  { path: "/contacto",  label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-3">
          <img
            src="/src/assets/LOGO TEAS COLOR.svg"
            alt="TEAS"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`nav-link text-sm font-medium transition-colors ${
                isActive(l.path) ? "active" : ""
              }`}
              style={{ color: isActive(l.path) ? "#2d4258" : "#64748b" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contacto"
          className="hidden md:block btn-primary text-sm px-5 py-2.5"
        >
          Contratar
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-1"
          style={{ color: "#2d4258" }}
        >
          <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 space-y-4 shadow-lg">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className="block w-full text-left text-sm font-medium py-1 transition-colors"
              style={{ color: isActive(l.path) ? "#00ae9d" : "#64748b" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contacto"
            className="btn-primary block w-full py-2.5 text-sm text-center mt-2"
          >
            Contratar
          </Link>
        </div>
      )}
    </nav>
  );
}
