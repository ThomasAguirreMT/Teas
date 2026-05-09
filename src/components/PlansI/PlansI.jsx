import { useState, useEffect, useRef, memo } from "react";
import GamerCard from "../GamerCard/GamerCard";
import "./PlansI.css";

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
  <svg className="plan-wifi-icon" viewBox="0 0 24 24" stroke="rgb(255,255,255)" strokeWidth="1.5" strokeLinecap="round">
    <path d="M1.5 8.5C6 4 18 4 22.5 8.5" />
    <path d="M5 12c3.9-3.5 11-3.5 14 0" />
    <path d="M8.5 15.5c2-1.8 5-1.8 7 0" />
    <circle cx="12" cy="19" r="1" fill="rgb(255,255,255)" stroke="none" />
  </svg>
);

const WaIcon = () => (
  <svg className="plan-wa-icon" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const PlanCard = memo(({ plan, index }) => {
  const [flipped, setFlipped]   = useState(false);
  const [visible, setVisible]   = useState(false);
  const [tilt, setTilt]         = useState({ x: 0, y: 0, active: false });
  const cardRef                 = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 120 + 80);
    return () => clearTimeout(t);
  }, [index]);

  const handleMouseMove = (e) => {
    if (flipped || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2);
    const dy = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);
    setTilt({ x: -dy * 7, y: dx * 7, active: true });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0, active: false });

  const msg = encodeURIComponent(
    `Hola, estoy interesado en el plan de ${plan.speed} Mbps por ${plan.price} mensuales. ¿Me pueden dar más información?`
  );

  return (
    <div
      className="plan-card-wrapper"
      style={{
        "--color-from": plan.color.from,
        "--color-to":   plan.color.to,
        opacity:   visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
      }}
    >
      <div
        style={{
          animation:          visible ? `cardFloat 3.5s ease-in-out ${index * 0.5}s infinite` : "none",
          animationPlayState: tilt.active || flipped ? "paused" : "running",
        }}
      >
        <div
          ref={cardRef}
          className="plan-card-tilt"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform:  `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${tilt.active ? "-6px" : "0px"})`,
            transition: tilt.active ? "transform 0.08s ease" : "transform 0.45s cubic-bezier(0.22,1,0.36,1)",
          }}
          onClick={() => setFlipped(f => !f)}
        >
          <div className={`plan-card-inner${flipped ? " flipped" : ""}`}>

            {/* ── FRENTE ── */}
            <div
              className="plan-card-front"
              style={{
                boxShadow: tilt.active
                  ? `0 20px 50px ${plan.color.from}70`
                  : `0 12px 40px ${plan.color.from}45`,
              }}
            >
              <div
                className="plan-card-glow"
                style={{
                  background: `radial-gradient(circle at ${50 + tilt.y * 4}% ${50 - tilt.x * 4}%, rgba(255,255,255,0.22), transparent 65%)`,
                  opacity: tilt.active ? 1 : 0,
                }}
              />

              <div className="plan-card-front-top">
                <WifiIcon />
              </div>

              <div className="plan-card-front-body">
                <div className="plan-card-speed-row">
                  <span className="plan-card-speed">{plan.speed}</span>
                  <span className="plan-card-unit">Mbps</span>
                </div>
                <div className="plan-card-sep" />
                <span className="plan-card-price">{plan.price}</span>
                <span className="plan-card-period">mensuales · fibra óptica</span>
              </div>

              <div className="plan-card-front-footer">
                <button
                  className="plan-card-btn-front"
                  onClick={e => { e.stopPropagation(); setFlipped(true); }}
                >
                  Ver beneficios →
                </button>
              </div>
            </div>

            {/* ── REVERSO ── */}
            <div className="plan-card-back">
              <div className="plan-card-back-stripe" />

              <div className="plan-card-back-body">
                <div>
                  <div className="plan-card-back-meta">
                    <div>
                      <p className="plan-card-back-plan-label">Plan</p>
                      <h3 className="plan-card-back-speed">{plan.speed} Mbps</h3>
                    </div>
                    <div className="plan-card-price-badge">{plan.price}</div>
                  </div>

                  <ul className="plan-card-features">
                    {plan.features.map((f, i) => (
                      <li key={i} className="plan-card-feature">
                        <span className="plan-card-feature-check">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="plan-card-actions">
                  <a
                    href={`https://wa.me/${plan.whatsapp}?text=${msg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="plan-card-whatsapp"
                    onClick={e => e.stopPropagation()}
                  >
                    <WaIcon />
                    ¡Contratar ahora!
                  </a>
                  <button
                    className="plan-card-btn-back"
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
});

const DividerBadge = () => (
  <div className="plans-divider-badge">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#ff2d6b">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
    <span className="plans-divider-label">Para el máximo rendimiento</span>
  </div>
);

export default function PlansI() {
  return (
    <section className="plans-section">
      <div className="plans-blob plans-blob-top" />
      <div className="plans-blob plans-blob-bottom" />

      <div className="plans-inner">

        <div className="plans-header">
          <div className="plans-badge">
            <span className="plans-badge-dot" />
            Planes disponibles
          </div>
          <h2 className="plans-title">
            Elige el plan{" "}
            <span className="plans-title-highlight">perfecto para ti</span>
          </h2>
          <p className="plans-subtitle">
            Todos los planes incluyen fibra óptica · megas simétricas
          </p>
        </div>

        {/* Desktop */}
        <div className="plans-divider hidden sm:flex items-center">
          <div className="plans-divider-line-left" />
          <DividerBadge />
          <div className="plans-divider-line-right" />
        </div>

        {/* Mobile */}
        <div className="plans-divider-mobile flex sm:hidden justify-center">
          <DividerBadge />
        </div>

        <div className="flex justify-center py-6 sm:py-8">
          <div className="plans-gamer-wrapper">
            <GamerCard />
          </div>
        </div>

        <div className="plans-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        <p className="plans-note">
          * Precios incluyen IVA · Velocidades simétricas de bajada y subida · Haz clic en cada plan para ver detalles
        </p>

      </div>
    </section>
  );
}
