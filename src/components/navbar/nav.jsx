import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/TEASLOGOBLANCO.svg";

const navLinks = [
  { path: "/", label: "INICIO" },
  { path: "/cobertura", label: "COBERTURA" },
  { path: "/nosotros", label: "NOSOTROS" },
  { path: "/Notiteo", label: "NOTICIAS" },

  { path: "/pagos", label: "PAGOS" },
  { path: "/contacto", label: "CONTACTO" },
];

const planesOptions = [
  { path: "/internet", label: "Internet" },
  { path: "/television", label: "Internet + TV" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [planesOpen, setPlanesOpen] = useState(false);
  const [mobilePlanes, setMobilePlanes] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close everything on route change
  useEffect(() => {
    setMenuOpen(false);
    setMobilePlanes(false);
    setPlanesOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setPlanesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Scroll detection for navbar bg
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  const isPlanesActive =
    location.pathname.startsWith("/internet") ||
    location.pathname.startsWith("/television");

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="logo" aria-label="Ir al inicio">
          <img src={logo} alt="TEAS" />
        </Link>

        {/* DESKTOP NAV */}
        <ul className="nav-links-desktop" role="list">
          <li className={isActive("/") ? "active" : ""}>
            <Link to="/">INICIO</Link>
          </li>

          {/* PLANES DROPDOWN */}
          <li
            className={`dropdown${planesOpen ? " open" : ""}${isPlanesActive ? " active" : ""}`}
            ref={dropdownRef}
          >
            <button
              onClick={() => setPlanesOpen((prev) => !prev)}
              aria-expanded={planesOpen}
              aria-haspopup="true"
            >
              PLANES
              <span className="dropdown-arrow" aria-hidden="true">▾</span>
            </button>

            <div className="dropdown-menu" role="menu">
              {planesOptions.map((opt) => (
                <Link
                  key={opt.path}
                  to={opt.path}
                  role="menuitem"
                  onClick={() => setPlanesOpen(false)}
                >
                  {opt.label}
                </Link>
              ))}
            </div>
          </li>

          {navLinks.slice(1).map((l) => (
            <li key={l.path} className={isActive(l.path) ? "active" : ""}>
              <Link to={l.path}>{l.label}</Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/contacto" className="btn-primary">
          Contratar
        </Link>

        {/* HAMBURGER */}
        <button
          className={`menu-toggle${menuOpen ? " active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <Link to="/" className={isActive("/") ? "active-mobile" : ""}>
          Inicio
        </Link>

        <button onClick={() => setMobilePlanes((prev) => !prev)}>
          Planes
          <span
            style={{
              display: "inline-block",
              fontSize: 10,
              transition: "transform 0.25s",
              transform: mobilePlanes ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            ▾
          </span>
        </button>

        <div className={`mobile-submenu${mobilePlanes ? " open" : ""}`}>
          {planesOptions.map((opt) => (
            <Link key={opt.path} to={opt.path}>
              {opt.label}
            </Link>
          ))}
        </div>

        <div className="mobile-divider" />

        {navLinks.slice(1).map((l) => (
          <Link
            key={l.path}
            to={l.path}
            className={isActive(l.path) ? "active-mobile" : ""}
          >
            {l.label}
          </Link>
        ))}

        <Link to="/contacto" className="btn-primary mobile-btn">
          Contratar
        </Link>
      </div>
    </nav>
  );
}