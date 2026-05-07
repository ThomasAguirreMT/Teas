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
    <section id="cobertura" className="py-16 sm:py-20 lg:py-28" style={{ background: "#eef2f8" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado mobile (centrado, visible solo en pantallas pequeñas) */}
        <div className="lg:hidden text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#00ae9d" }}>
            Zona de cobertura
          </p>
          <h2 className="font-display font-extrabold leading-tight mb-4" style={{ fontSize: "clamp(1.7rem,6vw,2.4rem)", color: "#1a2d42" }}>
            Llegamos a donde<br />
            <span className="text-gradient">otros no pueden.</span>
          </h2>
          <p className="text-base leading-relaxed mx-auto max-w-xs" style={{ color: "#4b5563" }}>
            Más de <strong style={{ color: "#1a2d42" }}>20 barrios</strong> conectados con fibra óptica real en la localidad de{" "}
            <span className="font-extrabold px-1.5 py-0.5 rounded-lg" style={{ background: "rgba(0,174,157,0.13)", color: "#007f73" }}>
              Usme
            </span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Columna de texto */}
          <div className="order-2 lg:order-1">

            {/* Encabezado desktop */}
            <div className="hidden lg:block mb-6">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00ae9d" }}>
                Zona de cobertura
              </p>
              <h2 className="font-display font-extrabold leading-tight mb-5" style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)", color: "#1a2d42" }}>
                Llegamos a donde<br />
                <span className="text-gradient">otros no pueden.</span>
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "#4b5563" }}>
                Conectamos más de <strong style={{ color: "#1a2d42" }}>20 barrios</strong> con fibra óptica propia en la localidad de{" "}
                <span className="font-extrabold px-2 py-0.5 rounded-lg" style={{ background: "rgba(0,174,157,0.13)", color: "#007f73" }}>
                  Usme
                </span>
                , donde otros proveedores no llegan.
              </p>
            </div>

            {/* Lista de barrios */}
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#94a3b8" }}>
                Barrios con cobertura activa
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                {coverage.map(city => (
                  <li key={city} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[5px]" style={{ background: "#00ae9d" }} />
                    <span className="text-xs sm:text-sm leading-snug" style={{ color: "#475569" }}>{city}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/contacto" className="btn-primary inline-block px-7 py-3.5 text-sm text-center w-full sm:w-auto">
              Verificar cobertura en mi dirección →
            </Link>
          </div>

          {/* Mapa */}
          <div
            className="order-1 lg:order-2 relative rounded-2xl sm:rounded-3xl overflow-hidden border bg-white grid-bg glow-teal"
            style={{
              borderColor: "#e2e8f0",
              boxShadow: "0 8px 30px rgba(0,174,157,0.1)",
              height: "clamp(240px, 55vw, 420px)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <CoverageMap />
            </div>
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 rounded-full"
              style={{ border: "1px solid rgba(0,174,157,0.1)" }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 sm:w-64 sm:h-64 rounded-full"
              style={{ border: "1px solid rgba(0,174,157,0.05)" }}
            />

            {/* Badge de localidad sobre el mapa */}
            <div
              className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-bold"
              style={{ background: "#1a2d42", color: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,0.25)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#00ae9d" }} />
              Localidad de Usme
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
