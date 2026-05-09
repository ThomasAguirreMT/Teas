import { useState, useEffect, useRef } from "react";
import "./PlansTV.css";

const plans = [
  {
    id: 1,
    speed: "200",
    price: "$90.000",
    includesTv: true,
    features: [
      "Navegación rápida en redes sociales y páginas web",
      "Streaming en HD en 1–2 dispositivos",
      "Videollamadas estables (Zoom, Meet)",
      "Descargas básicas y uso diario del hogar",
      "Ideal para hogares pequeños (2–4 dispositivos)",
    ],
    whatsapp: "573160542489",
    color: { from: "#3b82f6", to: "#6366f1" },
  },
  {
    id: 2,
    speed: "350",
    price: "$110.000",
    includesTv: true,
    features: [
      "Streaming en Full HD sin interrupciones",
      "Videollamadas en alta calidad",
      "Descargas más rápidas y uso multitarea",
      "Conexión estable para estudio y trabajo",
      "Ideal para familias medianas (4–6 dispositivos)",
    ],
    whatsapp: "573160542489",
    color: { from: "#00ae9d", to: "#2dd4bf" },
  },
  {
    id: 3,
    speed: "500",
    price: "$130.000",
    includesTv: true,
    features: [
      "Streaming en Full HD y 4K sin cortes",
      "Gaming online con baja latencia",
      "Videollamadas en alta definición simultáneas",
      "Múltiples dispositivos conectados sin pérdida de velocidad",
      "Ideal para hogares exigentes y gamers",
    ],
    whatsapp: "573160542489",
    color: { from: "#f97316", to: "#f59e0b" },
  },
  {
    id: 4,
    speed: "700",
    price: "$150.000",
    includesTv: true,
    features: [
      "Velocidad ultra rápida para uso intensivo",
      "Streaming en 4K/2K en múltiples pantallas",
      "Gaming competitivo con ping ultra bajo",
      "Trabajo remoto, servidores y cargas pesadas",
      "Máximo rendimiento en hogares inteligentes",
    ],
    whatsapp: "573160542489",
    color: { from: "#7c3aed", to: "#a855f7" },
  },
];

const TvIcon = ({ color }) => (
  <svg
    viewBox="0 0 24 24"
    style={{ width: "18px", height: "18px", fill: "none" }}
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const WifiIcon = () => (
  <svg viewBox="0 0 24 24" style={{ width: "38px", height: "38px", fill: "none" }} stroke="rgb(255, 255, 255)" strokeWidth="2" strokeLinecap="round">
    <path d="M1.5 8.5C6 4 18 4 22.5 8.5" />
    <path d="M5 12c3.9-3.5 11-3.5 14 0" />
    <path d="M8.5 15.5c2-1.8 5-1.8 7 0" />
    <circle cx="12" cy="19" r="1" fill="rgba(255, 255, 255, 1)" stroke="none" />
  </svg>
);

function PlanCard({ plan, index }) {
  const [flipped, setFlipped] = useState(false);
  const [visible, setVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });
  const cardRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 130 + 80);
    return () => clearTimeout(t);
  }, [index]);

  const handleMouseMove = (e) => {
    if (flipped || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setTilt({ x: -dy * 7, y: dx * 7, active: true });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, active: false });
  };

  const msg = encodeURIComponent(
    `Hola, estoy interesado en el plan de ${plan.speed} Mbps por ${plan.price} mensuales. ¿Me pueden dar más información?`
  );

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(36px)",
        transition: "opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <div
        style={{
          animation: visible ? `cardFloat 3.5s ease-in-out ${index * 0.5}s infinite` : "none",
          animationPlayState: tilt.active || flipped ? "paused" : "running",
        }}
      >
      <div
        ref={cardRef}
        className="relative w-full cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          height: "420px",
          perspective: "1200px",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${tilt.active ? "-6px" : "0px"})`,
          transition: tilt.active
            ? "transform 0.08s ease"
            : "transform 0.45s cubic-bezier(0.22,1,0.36,1)",
        }}
        onClick={() => setFlipped(f => !f)}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            transition: "transform 0.55s cubic-bezier(0.4,0.2,0.2,1)",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >

          {/* ── Frente ── */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              background: `linear-gradient(145deg, ${plan.color.from}, ${plan.color.to})`,
              boxShadow: tilt.active
                ? `0 20px 50px ${plan.color.from}70`
                : `0 12px 40px ${plan.color.from}50`,
              transition: "box-shadow 0.3s ease",
            }}
          >
            {/* Brillo dinámico */}
            <div style={{
              position: "absolute", inset: 0, borderRadius: 16, pointerEvents: "none", zIndex: 5,
              background: `radial-gradient(circle at ${50 + tilt.y * 4}% ${50 - tilt.x * 4}%, rgba(255,255,255,0.22), transparent 65%)`,
              opacity: tilt.active ? 1 : 0,
              transition: "opacity 0.3s",
            }} />

            {/* Top: badge TV + WiFi */}
            <div style={{ position: "relative", padding: "16px 16px 0", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              {plan.includesTv ? (
                <div style={{
                  display: "flex", alignItems: "center", gap: "5px",
                  background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.3)", borderRadius: "20px",
                  padding: "4px 10px 4px 7px",
                }}>
                  <TvIcon color="#ffffff" />
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#fff", letterSpacing: "0.03em" }}>
                    Incluye TV
                  </span>
                </div>
              ) : (
                <div />
              )}
              <div style={{ opacity: 0.6 }}>
                <WifiIcon />
              </div>
            </div>

            {/* Centro: velocidad */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 20px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                <span style={{ fontSize: "clamp(3.5rem,10vw,5rem)", fontWeight: 900, color: "#fff", lineHeight: 1, letterSpacing: "-0.04em" }}>
                  {plan.speed}
                </span>
                <span style={{ fontSize: "1.4rem", fontWeight: 700, color: "rgba(255,255,255,0.7)", alignSelf: "flex-end", paddingBottom: "8px" }}>
                  Mbps
                </span>
              </div>
              <div style={{ width: "40px", height: "2px", background: "rgba(255,255,255,0.35)", borderRadius: "2px", margin: "10px 0" }} />
              <span style={{ fontSize: "clamp(1.4rem,4vw,1.7rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>
                {plan.price}
              </span>
              <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "4px" }}>
                mensuales · fibra óptica
              </span>
            </div>

            {/* Bottom: botón */}
            <div style={{ padding: "0 16px 16px" }}>
              <button
                style={{
                  width: "100%", padding: "11px", borderRadius: "12px", border: "none",
                  background: "rgba(255,255,255,0.22)", backdropFilter: "blur(8px)",
                  color: "#fff", fontWeight: 700, fontSize: "13px", cursor: "pointer",
                  letterSpacing: "0.02em", transition: "background 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.32)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.22)"}
                onClick={e => { e.stopPropagation(); setFlipped(true); }}
              >
                Ver beneficios →
              </button>
            </div>
          </div>

          {/* ── Reverso ── */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: "#0f1c2e",
              boxShadow: `0 12px 40px ${plan.color.from}50`,
            }}
          >
            <div style={{ height: "5px", background: `linear-gradient(90deg, ${plan.color.from}, ${plan.color.to})` }} />

            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "14px 16px 16px" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                  <div>
                    <p style={{ margin: 0, fontSize: "0.65rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      Plan
                    </p>
                    <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
                      {plan.speed} Mbps
                    </h3>
                  </div>
                  <div style={{
                    padding: "5px 12px", borderRadius: "20px",
                    background: `linear-gradient(135deg, ${plan.color.from}, ${plan.color.to})`,
                    fontSize: "0.85rem", fontWeight: 800, color: "#fff",
                  }}>
                    {plan.price}
                  </div>
                </div>

                {plan.includesTv && (
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: "5px",
                    background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "20px", padding: "3px 10px 3px 7px", marginBottom: "10px",
                  }}>
                    <TvIcon color={plan.color.from} />
                    <span style={{ fontSize: "11px", fontWeight: 700, color: plan.color.to, letterSpacing: "0.03em" }}>
                      Incluye TV
                    </span>
                  </div>
                )}

                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                  {plan.features.map((f, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12px", color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>
                      <span style={{
                        flexShrink: 0, width: "15px", height: "15px", borderRadius: "50%",
                        background: `linear-gradient(135deg, ${plan.color.from}, ${plan.color.to})`,
                        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "8px", fontWeight: 700, marginTop: "1px",
                      }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "7px", marginTop: "10px" }}>
                <a
                  href={`https://wa.me/${plan.whatsapp}?text=${msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                    padding: "11px", borderRadius: "12px",
                    background: "linear-gradient(135deg, #22c55e, #16a34a)",
                    color: "#fff", fontWeight: 700, fontSize: "13px",
                    textDecoration: "none", boxShadow: "0 4px 16px rgba(34,197,94,0.3)",
                  }}
                  onClick={e => e.stopPropagation()}
                >
                  <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", fill: "#fff", flexShrink: 0 }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  ¡Contratar ahora!
                </a>
                <button
                  style={{
                    width: "100%", padding: "9px", borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.15)", background: "transparent",
                    color: "rgba(255,255,255,0.5)", fontWeight: 600, fontSize: "12px", cursor: "pointer",
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
      </div>
    </div>
  );
}

export default function PlansTV() {
  return (
    <section
      id="planes"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(40px, 8vw, 80px) 0",
        background: "linear-gradient(160deg, #edfaf8 0%, #f5f7fa 50%, #eef2f8 100%)",
      }}
    >
      <div style={{ position: "absolute", pointerEvents: "none", borderRadius: "50%", width: 500, height: 500, background: "rgba(0,174,157,0.07)", filter: "blur(100px)", top: -100, right: -100 }} />
      <div style={{ position: "absolute", pointerEvents: "none", borderRadius: "50%", width: 400, height: 400, background: "rgba(45,66,88,0.06)", filter: "blur(80px)", bottom: -80, left: -60 }} />

      <div style={{ position: "relative", maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)" }}>

        <div style={{ textAlign: "center", marginBottom: "clamp(28px, 5vw, 48px)" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            padding: "5px 14px", borderRadius: "999px",
            border: "1px solid rgba(0,174,157,0.25)",
            background: "rgba(0,174,157,0.08)",
            color: "#00937f", fontSize: "0.65rem", fontWeight: 800,
            letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "14px",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00ae9d", animation: "pulse 1.5s infinite", display: "inline-block" }} />
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

        <div
          className="plans-tv-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "clamp(12px, 2.5vw, 24px)",
          }}
        >
          {plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        <p style={{ textAlign: "center", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#94a3b8", marginTop: "clamp(20px, 4vw, 36px)", marginBottom: 0 }}>
          * Precios incluyen IVA · Velocidades simétricas de bajada y subida · Haz clic en cada plan para ver detalles
        </p>
      </div>

      <style>{`
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @media (max-width: 640px) {
          .plans-tv-grid > div {
            height: 440px !important;
          }
        }
      `}</style>
    </section>
  );
}
