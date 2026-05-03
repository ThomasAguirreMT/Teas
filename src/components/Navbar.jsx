import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/",          label: "Inicio" },
  { path: "/cobertura", label: "Cobertura" },
  { path: "/nosotros",  label: "Nosotros" },
  { path: "/contacto",  label: "Contacto" },
];

const planesOptions = [
  { path: "/planes?tipo=internet",    label: "Internet" },
  { path: "/planes?tipo=internet-tv", label: "Internet + TV" },
];

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [planesOpen,    setPlanesOpen]    = useState(false);
  const [mobilePlanes,  setMobilePlanes]  = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobilePlanes(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.search]);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setPlanesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  const isPlanesActive = location.pathname.startsWith("/planes");

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
          {/* Inicio */}
          <Link
            to="/"
            className={`nav-link text-sm font-medium transition-colors ${isActive("/") ? "active" : ""}`}
            style={{ color: isActive("/") ? "#2d4258" : "#64748b" }}
          >
            Inicio
          </Link>

          {/* Dropdown Planes */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setPlanesOpen((v) => !v)}
              className={`nav-link text-sm font-medium transition-colors flex items-center gap-1 ${isPlanesActive ? "active" : ""}`}
              style={{ color: isPlanesActive ? "#2d4258" : "#64748b" }}
            >
              Planes
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${planesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {planesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-1 overflow-hidden">
                {planesOptions.map((opt) => (
                  <Link
                    key={opt.path}
                    to={opt.path}
                    onClick={() => setPlanesOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-gray-50"
                    style={{ color: "#64748b" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#00ae9d")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
                  >
                    {opt.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Resto de links */}
          {navLinks.slice(1).map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`nav-link text-sm font-medium transition-colors ${isActive(l.path) ? "active" : ""}`}
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
          {/* Inicio */}
          <Link
            to="/"
            className="block w-full text-left text-sm font-medium py-1 transition-colors"
            style={{ color: isActive("/") ? "#00ae9d" : "#64748b" }}
          >
            Inicio
          </Link>

          {/* Planes expandible en móvil */}
          <div>
            <button
              onClick={() => setMobilePlanes((v) => !v)}
              className="flex items-center justify-between w-full text-left text-sm font-medium py-1 transition-colors"
              style={{ color: isPlanesActive ? "#00ae9d" : "#64748b" }}
            >
              Planes
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${mobilePlanes ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {mobilePlanes && (
              <div className="mt-1 ml-4 space-y-2 border-l-2 pl-3" style={{ borderColor: "#00ae9d" }}>
                {planesOptions.map((opt) => (
                  <Link
                    key={opt.path}
                    to={opt.path}
                    className="block text-sm py-1 transition-colors"
                    style={{ color: "#64748b" }}
                  >
                    {opt.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Resto de links */}
          {navLinks.slice(1).map((l) => (
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
