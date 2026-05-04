import { useState, useEffect, memo } from "react";
import GamerCard from "../GamerCard/GamerCard";

const plans = [
  {
    id: 1,
    speed: "200",
    price: "$65.000",
    features: [
      "Navegación rápida y redes sociales sin interrupciones",
      "Streaming en HD en 1–2 dispositivos",
      "Videollamadas estables (Zoom, Meet)",
      "Descargas ligeras y uso diario del hogar",
      "WiFi ideal para familias pequeñas",
    ],
    whatsapp: "573160542489",
    color: { from: "#f97316", to: "#f59e0b" },
  },
  {
    id: 2,
    speed: "350",
    price: "$85.000",
    features: [
      "Streaming en Full HD sin pausas",
      "Gaming ocasional con buena estabilidad",
      "Videollamadas en alta calidad",
      "Conexión simultánea de varios dispositivos",
      "WiFi de mayor cobertura y rendimiento",
    ],
    whatsapp: "573160542489",
    color: { from: "#00ae9d", to: "#2dd4bf" },
  },
  {
    id: 3,
    speed: "500",
    price: "$105.000",
    features: [
      "Streaming en 4K en múltiples dispositivos",
      "Gaming online con baja latencia",
      "Descargas rápidas de archivos pesados",
      "Ideal para home office y estudio virtual",
      "Conexión estable para hogares exigentes",
    ],
    whatsapp: "573160542489",
    color: { from: "#7c3aed", to: "#6366f1" },
  },
  {
    id: 4,
    speed: "700",
    price: "$125.000",
    features: [
      "Fibra óptica de alta velocidad para uso intensivo",
      "Streaming 4K+ sin interrupciones en toda la casa",
      "Gaming competitivo con ping ultra bajo",
      "Soporte para muchos dispositivos simultáneos",
      "Máximo rendimiento para todo tipo de uso",
    ],
    whatsapp: "573160542489",
    color: { from: "#9333ea", to: "#7c3aed" },
  },
];

const WifiIcon = () => (
  <svg viewBox="0 0 24 24" style={{ width: 36, height: 36, fill: "none" }} stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeLinecap="round">
    <path d="M1.5 8.5C6 4 18 4 22.5 8.5" />
    <path d="M5 12c3.9-3.5 11-3.5 14 0" />
    <path d="M8.5 15.5c2-1.8 5-1.8 7 0" />
    <circle cx="12" cy="19" r="1" fill="rgba(255,255,255,0.22)" stroke="none" />
  </svg>
);

const PlanCard = memo(({ plan, index }) => {
  const [flipped, setFlipped] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 120 + 80);
    return () => clearTimeout(t);
  }, [index]);

  const msg = encodeURIComponent(
    `Hola, estoy interesado en el plan de ${plan.speed} Mbps por ${plan.price} mensuales. ¿Me pueden dar más información?`
  );

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 420,
        perspective: "1200px",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(32px)",
        transition: "opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1)",
      }}
      onClick={() => setFlipped(f => !f)}
    >
      <div style={{
        position: "relative",
        width: "100%",
        height: "100%",
        transformStyle: "preserve-3d",
        transition: "transform 0.6s cubic-bezier(0.4,0.2,0.2,1)",
        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
      }}>

        {/* ── FRENTE ── */}
        <div style={{
          position: "absolute", inset: 0, borderRadius: 20, overflow: "hidden",
          backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
          background: `linear-gradient(145deg, ${plan.color.from}, ${plan.color.to})`,
          boxShadow: `0 12px 40px ${plan.color.from}45`,
          display: "flex", flexDirection: "column",
        }}>
          <div style={{ padding: "16px 16px 0", display: "flex", justifyContent: "flex-end" }}>
            <WifiIcon />
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 20px" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
              <span style={{ fontSize: "clamp(3.2rem,9vw,4.8rem)", fontWeight: 900, color: "#fff", lineHeight: 1, letterSpacing: "-0.04em" }}>
                {plan.speed}
              </span>
              <span style={{ fontSize: "1.3rem", fontWeight: 700, color: "rgba(255,255,255,0.65)", alignSelf: "flex-end", paddingBottom: 8 }}>
                Mbps
              </span>
            </div>
            <div style={{ width: 40, height: 2, background: "rgba(255,255,255,0.3)", borderRadius: 2, margin: "10px 0" }} />
            <span style={{ fontSize: "clamp(1.3rem,4vw,1.65rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>
              {plan.price}
            </span>
            <span style={{ fontSize: "0.68rem", fontWeight: 600, color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4 }}>
              mensuales · fibra óptica
            </span>
          </div>

          <div style={{ padding: "0 16px 16px" }}>
            <button
              style={{
                width: "100%", padding: "11px", borderRadius: 12, border: "none",
                background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)",
                color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer", letterSpacing: "0.02em",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.32)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
              onClick={e => { e.stopPropagation(); setFlipped(true); }}
            >
              Ver beneficios →
            </button>
          </div>
        </div>

        {/* ── REVERSO ── */}
        <div style={{
          position: "absolute", inset: 0, borderRadius: 20, overflow: "hidden",
          backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
          transform: "rotateY(180deg)", background: "#0f1c2e",
          boxShadow: `0 12px 40px ${plan.color.from}45`,
          display: "flex", flexDirection: "column",
        }}>
          <div style={{ height: 5, background: `linear-gradient(90deg, ${plan.color.from}, ${plan.color.to})`, flexShrink: 0 }} />

          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "14px 16px 16px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <div>
                  <p style={{ margin: 0, fontSize: "0.62rem", fontWeight: 700, color: "rgba(255,255,255,0.38)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Plan</p>
                  <h3 style={{ margin: 0, fontSize: "1.15rem", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
                    {plan.speed} Mbps
                  </h3>
                </div>
                <div style={{
                  padding: "5px 12px", borderRadius: 20,
                  background: `linear-gradient(135deg, ${plan.color.from}, ${plan.color.to})`,
                  fontSize: "0.82rem", fontWeight: 800, color: "#fff",
                }}>
                  {plan.price}
                </div>
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                {plan.features.map((f, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, color: "rgba(255,255,255,0.72)", lineHeight: 1.4 }}>
                    <span style={{
                      flexShrink: 0, width: 15, height: 15, borderRadius: "50%",
                      background: `linear-gradient(135deg, ${plan.color.from}, ${plan.color.to})`,
                      color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 8, fontWeight: 700, marginTop: 1,
                    }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 7, marginTop: 10 }}>
              <a
                href={`https://wa.me/${plan.whatsapp}?text=${msg}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                  padding: "11px", borderRadius: 12,
                  background: "linear-gradient(135deg, #22c55e, #16a34a)",
                  color: "#fff", fontWeight: 700, fontSize: 13, textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(34,197,94,0.28)",
                }}
                onClick={e => e.stopPropagation()}
              >
                <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, fill: "#fff", flexShrink: 0 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                ¡Contratar ahora!
              </a>
              <button
                style={{
                  width: "100%", padding: 9, borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.14)", background: "transparent",
                  color: "rgba(255,255,255,0.48)", fontWeight: 600, fontSize: 12, cursor: "pointer",
                }}
                onClick={e => { e.stopPropagation(); setFlipped(false); }}
              >
                ← Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default function PlansI() {
  return (
    <section style={{
      position: "relative",
      overflow: "hidden",
      padding: "clamp(40px, 8vw, 80px) 0",
      background: "linear-gradient(160deg, #edfaf8 0%, #f5f7fa 50%, #eef2f8 100%)",
    }}>
      {/* Halos de fondo */}
      <div style={{ position: "absolute", pointerEvents: "none", borderRadius: "50%", width: 500, height: 500, background: "rgba(0,174,157,0.07)", filter: "blur(100px)", top: -100, right: -100 }} />
      <div style={{ position: "absolute", pointerEvents: "none", borderRadius: "50%", width: 400, height: 400, background: "rgba(45,66,88,0.06)", filter: "blur(80px)", bottom: -80, left: -60 }} />

      <div style={{ position: "relative", maxWidth: 1160, margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)" }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "clamp(28px, 5vw, 48px)" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "5px 14px", borderRadius: 999,
            border: "1px solid rgba(0,174,157,0.25)",
            background: "rgba(0,174,157,0.08)",
            color: "#00937f", fontSize: "0.65rem", fontWeight: 800,
            letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00ae9d", display: "inline-block", animation: "pulseAnim 1.5s infinite" }} />
            Planes disponibles
          </div>

          <h2 style={{
            fontSize: "clamp(1.6rem, 5vw, 3rem)", fontWeight: 800, color: "#1a2d42",
            letterSpacing: "-0.02em", margin: "0 0 10px", lineHeight: 1.15,
          }}>
            Elige el plan{" "}
            <span style={{ background: "linear-gradient(90deg, #00ae9d, #2dd4bf)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              perfecto para ti
            </span>
          </h2>

          <p style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#1a2d42", margin: 0 }}>
            Todos los planes incluyen fibra óptica · megas simétricas
          </p>
        </div>

        {/* ── Grid 4 planes regulares ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "clamp(12px, 2.5vw, 22px)",
        }}
          className="plans-grid"
        >
          {plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        {/* ── Separador Plan Gamer ── */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          margin: "clamp(36px, 6vw, 56px) 0 clamp(24px, 4vw, 36px)",
        }}>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,45,107,0.25))" }} />
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 18px", borderRadius: 999,
            border: "1px solid rgba(255,45,107,0.3)",
            background: "rgba(255,45,107,0.06)",
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#ff2d6b">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span style={{ fontSize: "0.65rem", fontWeight: 800, color: "#ff2d6b", letterSpacing: "0.14em", textTransform: "uppercase" }}>
              Para el máximo rendimiento
            </span>
          </div>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(255,45,107,0.25), transparent)" }} />
        </div>

        {/* ── GamerCard centrado y ancho controlado ── */}
        <div style={{
          display: "flex",
          justifyContent: "center",
        }}>
          <div style={{ width: "100%", maxWidth: 420 }}>
            <GamerCard />
          </div>
        </div>

        {/* ── Footer note ── */}
        <p style={{
          textAlign: "center", fontSize: "0.68rem", fontWeight: 700,
          textTransform: "uppercase", letterSpacing: "0.08em", color: "#94a3b8",
          marginTop: "clamp(20px, 4vw, 36px)", marginBottom: 0,
        }}>
          * Precios incluyen IVA · Velocidades simétricas de bajada y subida · Haz clic en cada plan para ver detalles
        </p>
      </div>

      <style>{`
        @keyframes pulseAnim {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.3); }
        }
        /* Responsive: 4 col → 2 col → 1 col */
        @media (max-width: 900px) {
          .plans-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .plans-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
