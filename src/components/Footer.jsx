import { Link } from "react-router-dom";

const links = {
  Servicios: [
    { label: "Fibra Hogar",      path: "/planes" },
    { label: "Fibra Empresarial",path: "/planes" },
    { label: "Cobertura",        path: "/cobertura" },
    { label: "Soporte Técnico",  path: "/contacto" },
  ],
  Empresa: [
    { label: "Nosotros",              path: "/nosotros" },
    { label: "Cobertura",             path: "/cobertura" },
    { label: "Trabaja con nosotros",  path: "/contacto" },
  ],
  Legal: [
    { label: "Términos de servicio",  path: "/" },
    { label: "Política de privacidad",path: "/" },
    { label: "PQR",                   path: "/contacto" },
    { label: "Tarifas",               path: "/planes" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#16202b" }}>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#00ae9d,#1a3a52)" }}
              >
                <div className="flex items-end gap-[3px] h-4">
                  {[2, 3, 4, 5].map((h, i) => (
                    <div
                      key={i}
                      className="w-[3px] rounded-sm bg-white"
                      style={{ height: `${h * 3}px` }}
                    />
                  ))}
                </div>
              </div>
              <span className="font-display font-bold text-xl text-white">TEAS</span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
              Internet de fibra óptica sin compromiso. Velocidades simétricas reales para hogares y empresas.
            </p>
            <div className="flex gap-3">
              {["f", "in", "tw", "yt"].map((s) => (
                <div
                  key={s}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs cursor-pointer"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <p className="font-semibold text-sm mb-4 text-white">{cat}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="text-sm transition-colors"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                      onMouseEnter={(e) => (e.target.style.color = "rgba(255,255,255,0.7)")}
                      onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.4)")}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © 2025 TEAS S.A.S. Todos los derechos reservados.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            NIT: 900.123.456-7 · Vigilado por MinTIC
          </p>
        </div>
      </div>
    </footer>
  );
}
