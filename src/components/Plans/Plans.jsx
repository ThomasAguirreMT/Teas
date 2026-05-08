import { useState, useEffect, useRef } from "react";
import "./Plans.css";

const plans = [
  {
    speed:    "350",
    price:    "$85.000",
    features: [
      "Navegación fluida y redes sociales",
      "Streaming HD",
      "Videollamadas estables",
      "Descarga de archivos livianos",
      "WiFi de uso doméstico",
    ],
    whatsapp: "573160542489",
    color:    { from: "#f97316", to: "#f59e0b" },
  },
  {
    speed:    "500",
    price:    "$105.000",
    features: [
      "Streaming en FHD sin interrupciones",
      "Gaming online con baja latencia",
      "Videollamadas en alta definición",
      "Múltiples dispositivos simultáneos",
      "WiFi de alto rendimiento",
    ],
    whatsapp: "573160542489",
    color:    { from: "#00ae9d", to: "#2dd4bf" },
  },
  {
    speed:    "700",
    price:    "$125.000",
    features: [
      "Fibra óptica simétrica 700 Mps",
      "Ping ultra bajo para gaming",
      "Streaming 2K+ en todos los dispositivos",
      "Ideal para trabajo desde casa",
    ],
    whatsapp: "573160542489",
    color:    { from: "#7c3aed", to: "#6366f1" },
  },
];

function PlanCard({ plan, index }) {
  const [flipped, setFlipped] = useState(false);
  const [visible, setVisible] = useState(false);
  const cardRef               = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), index * 150 + 100);
    return () => clearTimeout(timer);
  }, [index]);

  const msg = encodeURIComponent(
    `Hola, estoy interesado en el plan de ${plan.speed} Mbps por ${plan.price} mensuales. ¿Me pueden dar más información?`
  );

  return (
    <div
      ref={cardRef}
      className="plans-card-container relative w-full cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(40px)",
        transition: "opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)",
      }}
      onClick={() => setFlipped(f => !f)}
    >
      <div
        className="plans-card-flip"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >

        {/* ── Frente ── */}
        <div
          className="plans-card-front"
          style={{
            '--plan-gradient': `linear-gradient(135deg, ${plan.color.from}, ${plan.color.to})`,
            '--plan-shadow': `0 8px 32px ${plan.color.from}40`,
          }}
        >
          <div
            className="plans-card-inner flex-1 rounded-2xl flex flex-col items-center justify-between p-6"
          >
            {/* Speed box */}
            <div className="plans-speed-box w-full rounded-2xl flex flex-col items-center justify-center py-6">
            
              <span
                className="plans-speed-number font-display font-black leading-none"
              >
                {plan.speed}
              </span>
              <span
                className="plans-speed-unit font-semibold mt-1"
              >
                Mbps
              </span>
            </div>

            {/* Price */}
            <div className="flex flex-col items-center my-4">
              <div
                className="plans-price px-8 py-3 rounded-full font-display font-black"
                style={{
                  '--plan-gradient': `linear-gradient(135deg, ${plan.color.from}, ${plan.color.to})`,
                  '--plan-price-shadow': `0 4px 20px ${plan.color.from}50`,
                }}
              >
                {plan.price}
              </div>
              <span className="plans-price-label text-xs font-medium mt-2">
                mensuales
              </span>
            </div>

            {/* Button */}
            <button
              className="plans-button-more w-full py-3 rounded-2xl font-bold text-sm transition-all"
              onClick={e => { e.stopPropagation(); setFlipped(true); }}
            >
              Ver más
            </button>
          </div>
        </div>

        {/* ── Reverso ── */}
        <div
          className="plans-card-back"
          style={{
            '--plan-gradient': `linear-gradient(135deg, ${plan.color.from}, ${plan.color.to})`,
            '--plan-shadow': `0 8px 32px ${plan.color.from}40`,
          }}
        >
          <div
            className="plans-card-inner flex-1 rounded-2xl flex flex-col justify-between p-6"
          >
            {/* Header */}
            <div>
              <h3
                className="plans-back-header font-display font-extrabold mb-4"
              >
                Plan {plan.speed} Mbps
              </h3>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i} className="plans-feature-item flex items-start gap-2 text-sm">
                    <span
                      className="plans-feature-check mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold"
                      style={{
                        '--plan-gradient': `linear-gradient(135deg, ${plan.color.from}, ${plan.color.to})`,
                      }}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Botones */}
            <div className="plans-buttons-container">
              <a
                href={`https://wa.me/${plan.whatsapp}?text=${msg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="plans-whatsapp-button w-full py-3 rounded-2xl font-bold text-sm text-center flex items-center justify-center gap-2"
                onClick={e => e.stopPropagation()}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                ¡Contratar ahora!
              </a>

              <button
                className="plans-less-button w-full py-2.5 rounded-2xl font-semibold text-sm transition-all"
                onClick={e => { e.stopPropagation(); setFlipped(false); }}
              >
                Ver menos
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function Plans() {
  return (
    <section
      id="planes"
      className="plans-section relative overflow-hidden py-20 md:py-28"
    >
      {/* Halos */}
      <div className="plans-halo-1 absolute pointer-events-none rounded-full" />
      <div className="plans-halo-2 absolute pointer-events-none rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Encabezado */}
        <div className="text-center mb-14">
          <div
            className="plans-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
          >
            <span className="plans-badge-dot w-1.5 h-1.5 rounded-full animate-pulse" />
            Planes disponibles
          </div>

          <h2
            className="plans-title font-display font-extrabold leading-tight mb-5"
          >
            Elige el plan{" "}
            <span className="plans-title-highlight">
              perfecto para ti
            </span>
          </h2>

          <p className="text-center text-s font-bold uppercase tracking-widest mb-8 text-black">
            Todos nuestros planes incluyen fibra óptica y megas simétricas
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <PlanCard key={i} plan={plan} index={i} />
          ))}
        </div>

        {/* Nota inferior */}
        <p className="text-center text-s font-bold uppercase tracking-widest mb-8 text-black py-6">
          * Todos los precios incluyen IVA. Velocidades simétricas de bajada y subida.
          Haz clic en cada plan para ver los detalles.
        </p>

      </div>
      
    </section>
  );
}
