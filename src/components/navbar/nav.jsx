import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const navLinks = [
  { path: "/", label: "Inicio" },
  { path: "/cobertura", label: "Cobertura" },
  { path: "/nosotros", label: "Nosotros" },
  { path: "/contacto", label: "Contacto" },
];

const planesOptions = [
  { path: "/Internet", label: "Internet" },
  { path: "/Television", label: "Internet + TV" },
];

export default function cccccccccccccccccccc() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [planesOpen, setPlanesOpen] = useState(false);
  const [mobilePlanes, setMobilePlanes] = useState(false);

  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
    setMobilePlanes(false);
  }, [location.pathname]);

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
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  const isPlanesActive = location.pathname.startsWith("/planes");

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          {/* LOGO */}
          <Link to="/" className="logo">
            <img src="/src/assets/LOGO TEAS COLOR.svg" alt="TEAS" />
          </Link>

          {/* LINKS DESKTOP */}
          <div className="nav-links">
            <Link className={isActive("/") ? "active" : ""} to="/">
              Inicio
            </Link>

            {/* DROPDOWN PLANES */}
            <div className="dropdown" ref={dropdownRef}>
              <button
                className={isPlanesActive ? "active" : ""}
                onClick={() => setPlanesOpen(!planesOpen)}
              >
                Planes ▾
              </button>

              {planesOpen && (
                <div className="dropdown-menu">
                  {planesOptions.map((opt) => (
                    <Link key={opt.path} to={opt.path}>
                      {opt.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={isActive(l.path) ? "active" : ""}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* BOTON */}
          <Link to="/contacto" className="btn-primary">
            Contratar
          </Link>

          {/* HAMBURGUESA */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mobile-menu">
            <Link to="/">Inicio</Link>

            <button onClick={() => setMobilePlanes(!mobilePlanes)}>
              Planes ▾
            </button>

            {mobilePlanes && (
              <div className="mobile-submenu">
                {planesOptions.map((opt) => (
                  <Link key={opt.path} to={opt.path}>
                    {opt.label}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.slice(1).map((l) => (
              <Link key={l.path} to={l.path}>
                {l.label}
              </Link>
            ))}

            <Link to="/contacto" className="btn-primary mobile-btn">
              Contratar
            </Link>
          </div>
        )}
      </nav>

      <div className="navbar-space"></div>
    </>
  );
}