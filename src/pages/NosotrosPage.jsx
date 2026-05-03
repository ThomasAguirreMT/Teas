import FAQ from "../components/FAQ";

export default function NosotrosPage() {
  return (
    <>
      {/* Hero de sección */}
      <section
        className="pt-32 pb-16 text-center"
        style={{ background: "linear-gradient(160deg, #0f1923 0%, #162030 50%, #111c2a 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
            style={{
              background: "rgba(0,174,157,0.1)",
              borderColor: "rgba(0,174,157,0.3)",
              color: "#2dd4bf",
              fontSize: "0.7rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00ae9d" }} />
            Quiénes somos
          </div>
          <h1
            className="font-display font-extrabold leading-tight mb-5"
            style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: "#f1f5f9", letterSpacing: "-0.02em" }}
          >
            Conectamos hogares.<br />
            <span style={{
              background: "linear-gradient(90deg,#00ae9d,#2dd4bf)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Transformamos vidas.
            </span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "clamp(0.95rem,2vw,1.05rem)", lineHeight: 1.7 }}>
            TEAS nació con un propósito: llevar internet de fibra óptica real a cada rincón del país,
            sin letra pequeña y con soporte humano disponible las 24 horas.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20" style={{ background: "#f5f7fa" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🚀", title: "Velocidades reales", desc: "Lo que contratas es lo que recibes. Fibra óptica simétrica sin throttling ni excusas." },
              { icon: "🛡️", title: "Sin contrato de permanencia", desc: "Libertad total. Cancela cuando quieras, sin penalizaciones ni sorpresas en la factura." },
              { icon: "💬", title: "Soporte 24/7/365", desc: "Técnicos reales disponibles todo el año, incluso festivos. Tu conexión no puede esperar." },
            ].map((v) => (
              <div
                key={v.title}
                className="card-hover rounded-3xl p-7 bg-white border"
                style={{ borderColor: "#e2e8f0", boxShadow: "0 2px 12px rgba(45,66,88,0.05)" }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-2xl"
                  style={{ background: "rgba(0,174,157,0.08)" }}
                >
                  {v.icon}
                </div>
                <h3 className="font-display font-bold text-lg mb-2" style={{ color: "#1a2d42" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
