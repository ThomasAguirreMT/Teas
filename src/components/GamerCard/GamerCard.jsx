import { useState, useEffect } from "react";

const plan = {
  id: 5,
  speed: "920",
  price: "$160.000",
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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

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
        .gamer-card-btn:hover {
          background: linear-gradient(135deg, #ff1a5e, #e03010) !important;
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(255,45,107,0.5) !important;
        }
        .gamer-feature-row:hover {
          background: rgba(255, 45, 107, 0.08);
          border-radius: 8px;
        }
      `}</style>

      <div
        style={{
          width: "100%",
          maxWidth: 380,
          margin: "0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Card wrapper */}
        <div style={{
          position: "relative",
          borderRadius: 20,
          overflow: "hidden",
          background: "#080c14",
          border: "1px solid rgba(255,45,107,0.35)",
          boxShadow: "0 0 0 1px rgba(255,45,107,0.1), 0 20px 60px rgba(255,45,107,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}>

          {/* ── Efectos de fondo decorativos ── */}
          <div style={{ position: "absolute", inset: 0, overflow: "hidden", borderRadius: 20, pointerEvents: "none" }}>
            {/* Línea de escaneo animada */}
            <div style={{
              position: "absolute", left: 0, right: 0, height: 1,
              background: "linear-gradient(90deg, transparent, rgba(255,45,107,0.55), transparent)",
              animation: "gamerScanline 3.5s linear infinite",
              top: 0,
            }} />
            {/* Halos de luz */}
            <div style={{
              position: "absolute", top: -60, left: -60,
              width: 220, height: 220, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,45,107,0.12) 0%, transparent 70%)",
            }} />
            <div style={{
              position: "absolute", bottom: -40, right: -40,
              width: 180, height: 180, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)",
            }} />
            {/* Hexágono decorativo */}
            <svg style={{ position: "absolute", top: 12, right: 14, opacity: 0.06, width: 90, height: 90 }} viewBox="0 0 100 100">
              <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="#ff2d6b" strokeWidth="1.5" />
              <polygon points="50,20 80,35 80,65 50,80 20,65 20,35"    fill="none" stroke="#ff2d6b" strokeWidth="1" />
            </svg>
          </div>

          {/* ── Contenido ── */}
          <div style={{ position: "relative", padding: "20px 20px 0" }}>

            {/* Header row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {/* Ícono con anillo pulsante */}
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

              {/* Badge ELITE */}
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
            <div style={{ textAlign: "center", padding: "8px 0 18px" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 4, marginBottom: 2 }}>
                <span style={{ fontSize: "clamp(3.5rem,14vw,4.5rem)", fontWeight: 900, color: "#fff", lineHeight: 1, letterSpacing: "-0.04em" }}>
                  {plan.speed}
                </span>
                <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "rgba(255,255,255,0.38)", alignSelf: "flex-end", paddingBottom: 8 }}>
                  Mbps
                </span>
              </div>
              <div style={{ height: 2, width: 60, margin: "10px auto", background: "linear-gradient(90deg, #ff2d6b, #ef4444)", borderRadius: 2 }} />
              <div style={{ fontSize: "clamp(1.4rem,5vw,1.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
                {plan.price}
              </div>
              <div style={{ fontSize: "0.65rem", fontWeight: 600, color: "rgba(255,255,255,0.32)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4 }}>
                mensuales · fibra óptica
              </div>
            </div>

            {/* Stats rápidas */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 18 }}>
              <div style={{
                background: "rgba(255,45,107,0.08)", border: "1px solid rgba(255,45,107,0.18)",
                borderRadius: 10, padding: "10px 10px 8px", textAlign: "center",
              }}>
                <div style={{ fontSize: 20, fontWeight: 900, color: "#ff6b8a", lineHeight: 1 }}>&lt;1ms</div>
                <div style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.32)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 2 }}>Ping</div>
              </div>
              <div style={{
                background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.18)",
                borderRadius: 10, padding: "10px 10px 8px", textAlign: "center",
              }}>
                <div style={{ fontSize: 20, fontWeight: 900, color: "#f87171", lineHeight: 1 }}>4K/8K</div>
                <div style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.32)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 2 }}>Streaming</div>
              </div>
            </div>

            {/* Features */}
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px", display: "flex", flexDirection: "column", gap: 4 }}>
              {plan.features.map((f, i) => (
                <li
                  key={i}
                  className="gamer-feature-row"
                  style={{ display: "flex", alignItems: "flex-start", gap: 9, padding: "5px 6px", transition: "background 0.15s" }}
                >
                  <span style={{
                    flexShrink: 0, width: 16, height: 16, borderRadius: "50%",
                    background: "linear-gradient(135deg, #ff2d6b, #ef4444)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginTop: 1,
                  }}>
                    <svg width="8" height="8" viewBox="0 0 10 10">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div style={{ padding: "0 20px 20px" }}>
            <a
              href={`https://wa.me/${plan.whatsapp}?text=${msg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gamer-card-btn"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                width: "100%", padding: "13px", borderRadius: 12,
                background: "linear-gradient(135deg, #ff2d6b, #ef4444)",
                color: "#fff", fontWeight: 800, fontSize: 13,
                textDecoration: "none", letterSpacing: "0.04em",
                transition: "transform 0.15s, background 0.2s, box-shadow 0.2s",
                boxShadow: "0 4px 20px rgba(255,45,107,0.35)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff" style={{ flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              ¡Contratar Plan Gamer!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
