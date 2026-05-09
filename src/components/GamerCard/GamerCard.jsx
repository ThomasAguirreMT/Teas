import { useState, useEffect, useRef } from "react";
import "./GamerCard.css";

const plan = {
  id: 5,
  speed: "920",
  price: "$150.000",
  features: [
    "Ping ultra bajo para gaming competitivo",
    "Streaming en 4K/8K sin interrupciones",
    "Descargas y uploads a máxima velocidad",
    "Prioridad en la red para tráfico crítico",
    "Velocidad extrema y sin límites",
  ],
  whatsapp: "573160542489",
};

export default function GamerCard() {
  const [flipped, setFlipped] = useState(false);
  const [visible, setVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });
  const cardRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleMouseMove = (e) => {
    if (flipped || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setTilt({ x: -dy * 7, y: dx * 7, active: true });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0, active: false });

  const msg = encodeURIComponent(
    `Hola, estoy interesado en el Plan Gamer de ${plan.speed} Mbps por ${plan.price} mensuales. ¿Me pueden dar más información?`
  );

  return (
    <>
      <style>{`
        @keyframes gamerScanline {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(500px); }
        }
        @keyframes gamerPulseRing {
          0%, 100% { opacity: 1;   transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(1.15); }
        }
        @keyframes gamerFlicker {
          0%, 96%, 100% { opacity: 1; }
          97%            { opacity: 0.7; }
          98%            { opacity: 1; }
          99%            { opacity: 0.6; }
        }
        @keyframes gamerFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
      `}</style>

      <div
        style={{
          width: "100%",
          maxWidth: 300,
          margin: "0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div
          style={{
            animation: visible ? "gamerFloat 3.5s ease-in-out infinite" : "none",
            animationPlayState: tilt.active || flipped ? "paused" : "running",
          }}
        >
          <div
            ref={cardRef}
            style={{
              height: 400,
              perspective: "1200px",
              cursor: "pointer",
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${tilt.active ? "-6px" : "0px"})`,
              transition: tilt.active
                ? "transform 0.08s ease"
                : "transform 0.45s cubic-bezier(0.22,1,0.36,1)",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => setFlipped(f => !f)}
          >
            {/* Contenedor flip 3D */}
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

              {/* ── FRENTE ── */}
              <div
                style={{
                  position: "absolute", inset: 0, borderRadius: 20, overflow: "hidden",
                  display: "flex", flexDirection: "column",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  background: "#080c14",
                  border: "1px solid rgba(255,45,107,0.35)",
                  boxShadow: tilt.active
                    ? "0 0 0 1px rgba(255,45,107,0.1), 0 24px 64px rgba(255,45,107,0.35), inset 0 1px 0 rgba(255,255,255,0.05)"
                    : "0 0 0 1px rgba(255,45,107,0.1), 0 12px 40px rgba(255,45,107,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
                  transition: "box-shadow 0.3s ease",
                }}
              >
                {/* Efectos de fondo decorativos */}
                <div style={{ position: "absolute", inset: 0, overflow: "hidden", borderRadius: 20, pointerEvents: "none" }}>
                  <div style={{
                    position: "absolute", left: 0, right: 0, height: 1,
                    background: "linear-gradient(90deg, transparent, rgba(255,45,107,0.55), transparent)",
                    animation: "gamerScanline 3.5s linear infinite", top: 0,
                  }} />
                  <div style={{
                    position: "absolute", top: -60, left: -60, width: 220, height: 220, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(255,45,107,0.12) 0%, transparent 70%)",
                  }} />
                  <div style={{
                    position: "absolute", bottom: -40, right: -40, width: 180, height: 180, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)",
                  }} />
                  <svg style={{ position: "absolute", top: 12, right: 14, opacity: 0.06, width: 90, height: 90 }} viewBox="0 0 100 100">
                    <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="#ff2d6b" strokeWidth="1.5" />
                    <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" fill="none" stroke="#ff2d6b" strokeWidth="1" />
                  </svg>
                  {/* Brillo dinámico por tilt */}
                  <div style={{
                    position: "absolute", inset: 0, borderRadius: 20, pointerEvents: "none",
                    background: `radial-gradient(circle at ${50 + tilt.y * 4}% ${50 - tilt.x * 4}%, rgba(255,45,107,0.15), transparent 65%)`,
                    opacity: tilt.active ? 1 : 0,
                    transition: "opacity 0.3s",
                  }} />
                </div>

                {/* Header */}
                <div style={{ position: "relative", padding: "16px 16px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ position: "relative", width: 28, height: 28, flexShrink: 0 }}>
                      <div style={{
                        position: "absolute", inset: 0, borderRadius: "50%",
                        border: "1.5px solid rgba(255,45,107,0.5)",
                        animation: "gamerPulseRing 2s ease-in-out infinite",
                      }} />
                      <div style={{
                        position: "absolute", inset: 5, borderRadius: "50%",
                        background: "rgba(255,45,107,0.2)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="#ff2d6b">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                      </div>
                    </div>
                    <span style={{
                      fontSize: 10, fontWeight: 800, color: "#ff6b8a",
                      letterSpacing: "0.15em", textTransform: "uppercase",
                      animation: "gamerFlicker 5s infinite",
                    }}>
                      PLAN GAMER
                    </span>
                  </div>
                  <div style={{
                    padding: "3px 10px", borderRadius: 20,
                    background: "rgba(255,45,107,0.15)",
                    border: "1px solid rgba(255,45,107,0.3)",
                    fontSize: 9, fontWeight: 800, color: "#ff2d6b",
                    letterSpacing: "0.12em", textTransform: "uppercase",
                  }}>
                    ELITE
                  </div>
                </div>

                {/* Velocidad + precio */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 16px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                    <span style={{ fontSize: "clamp(2.5rem,10vw,3.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1, letterSpacing: "-0.04em" }}>
                      {plan.speed}
                    </span>
                    <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "rgba(255,255,255,0.38)", alignSelf: "flex-end", paddingBottom: 8 }}>
                      Mbps
                    </span>
                  </div>
                  <div style={{ height: 2, width: 60, margin: "8px auto", background: "linear-gradient(90deg, #ff2d6b, #ef4444)", borderRadius: 2 }} />
                  <div style={{ fontSize: "clamp(1.1rem,4vw,1.4rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
                    {plan.price}
                  </div>
                  <div style={{ fontSize: "0.65rem", fontWeight: 600, color: "rgba(255,255,255,0.32)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4 }}>
                    mensuales · fibra óptica
                  </div>

                  {/* Stats */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 14, width: "100%" }}>
                    <div style={{
                      background: "rgba(255,45,107,0.08)", border: "1px solid rgba(255,45,107,0.18)",
                      borderRadius: 10, padding: "8px 10px 6px", textAlign: "center",
                    }}>
                      <div style={{ fontSize: 16, fontWeight: 900, color: "#ff6b8a", lineHeight: 1 }}>&lt;1ms</div>
                      <div style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.32)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 2 }}>Ping</div>
                    </div>
                    <div style={{
                      background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.18)",
                      borderRadius: 10, padding: "8px 10px 6px", textAlign: "center",
                    }}>
                      <div style={{ fontSize: 16, fontWeight: 900, color: "#f87171", lineHeight: 1 }}>4K/8K</div>
                      <div style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.32)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 2 }}>Streaming</div>
                    </div>
                  </div>
                </div>

                {/* Botón ver beneficios */}
                <div style={{ padding: "0 16px 16px" }}>
                  <button
                    style={{
                      width: "100%", padding: "11px", borderRadius: 12, border: "none",
                      background: "rgba(255,45,107,0.18)", backdropFilter: "blur(8px)",
                      color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer",
                      letterSpacing: "0.02em", transition: "background 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(255,45,107,0.32)"}
                    onMouseLeave={e => e.currentTarget.style.background = "rgba(255,45,107,0.18)"}
                    onClick={e => { e.stopPropagation(); setFlipped(true); }}
                  >
                    Ver beneficios →
                  </button>
                </div>
              </div>

              {/* ── REVERSO ── */}
              <div className="gamer-card-back">
                {/* Barra superior */}
                <div className="gamer-card-back-top" />

                <div className="gamer-card-back-content">
                  <div>
                    {/* Header reverso */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                      <div>
                        <p style={{ margin: 0, fontSize: "0.65rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                          Plan
                        </p>
                        <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
                          {plan.speed} Mbps
                        </h3>
                      </div>
                      <div style={{
                        padding: "5px 12px", borderRadius: 20,
                        background: "linear-gradient(135deg, #ff2d6b, #ef4444)",
                        fontSize: "0.85rem", fontWeight: 800, color: "#fff",
                      }}>
                        {plan.price}
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="gamer-features">
                      {plan.features.map((f, i) => (
                        <li key={i} className="gamer-feature-item">
                          <span className="gamer-feature-check">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Botones */}
                  <div className="gamer-button-group">
                    <a
                      href={`https://wa.me/${plan.whatsapp}?text=${msg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gamer-whatsapp"
                      onClick={e => e.stopPropagation()}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff" style={{ flexShrink: 0 }}>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      ¡Contratar Plan Gamer!
                    </a>
                    <button
                      className="btn-gamer-back"
                      onClick={(e) => { e.stopPropagation(); setFlipped(false); }}
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
    </>
  );
}
