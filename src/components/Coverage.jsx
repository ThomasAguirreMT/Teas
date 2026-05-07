import { Link } from "react-router-dom";
import { coverage } from "../data/content";
import CoverageMap from "./CoverageMap/CoverageMap";

const dots = [
  { top: "18%", left: "28%" }, { top: "38%", left: "58%" }, { top: "62%", left: "22%" },
  { top: "32%", left: "72%" }, { top: "68%", left: "52%" }, { top: "22%", left: "48%" },
  { top: "50%", left: "38%" }, { top: "14%", left: "62%" },
];

export default function Coverage() {
  return (
    <section id="cobertura" className="py-24" style={{ background: "#eef2f8" }}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00ae9d" }}>Cobertura</p>
          <h2 className="font-display font-extrabold leading-tight mb-6" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#1a2d42" }}>
            Llegamos a donde<br />
            <span className="text-gradient">otros no pueden.</span>
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "#64748b" }}>
            Cobertura en más de 120 municipios con infraestructura propia de fibra óptica, sin intermediarios.
          </p>

          <ul className="space-y-3 mb-10">
            {coverage.map(city => (
              <li key={city} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#00ae9d" }} />
                <span className="text-sm" style={{ color: "#475569" }}>{city}</span>
              </li>
            ))}
          </ul>

          <Link to="/contacto" className="btn-primary px-8 py-3.5 text-sm">
            Verificar mi dirección →
          </Link>
        </div>

        {/* Map */}
        <div className="relative h-80 rounded-3xl overflow-hidden border bg-white grid-bg glow-teal"
          style={{ borderColor: "#e2e8f0", boxShadow: "0 8px 30px rgba(0,174,157,0.1)" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <CoverageMap />
          </div>
          {dots.map((p, i) => (
            <div key={i} className="absolute w-2.5 h-2.5 rounded-full"
              style={{
                top: p.top, left: p.left,
                background: "#00ae9d",
                border: "2px solid rgba(0,174,157,0.3)",
                animation: `sigPulse 2s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }} />
          ))}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full"
            style={{ border: "1px solid rgba(0,174,157,0.1)" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
            style={{ border: "1px solid rgba(0,174,157,0.05)" }} />
        </div>
      </div>
      
    </section>
  );
}
