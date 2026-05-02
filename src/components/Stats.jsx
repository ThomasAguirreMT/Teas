 import ChannelsCarousel from "./carousels/ChannelsCarousel";

import { useEffect, useRef } from "react";

 function CategoriesCarousel({ categories }) {
  const trackRef  = useRef(null);
  const rafRef    = useRef(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const SPEED     = 0.6;

  // Triplicamos para loop infinito suave
  const ITEMS = [...categories, ...categories, ...categories];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = () => {
      if (!pausedRef.current) {
        offsetRef.current += SPEED;
        const setWidth = track.scrollWidth / 3;
        if (offsetRef.current >= setWidth) {
          offsetRef.current -= setWidth;
        }
        track.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => { pausedRef.current = true;  }}
      onMouseLeave={() => { pausedRef.current = false; }}
      onTouchStart={() => { pausedRef.current = true;  }}
      onTouchEnd={()   => { pausedRef.current = false; }}
    >
      <div
        ref={trackRef}
        className="flex items-center gap-4 py-2 will-change-transform"
        style={{ width: "max-content" }}
      >
        {ITEMS.map((c, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center gap-3 px-5 py-4 rounded-2xl"
            style={{
              background: "rgba(0,174,157,0.05)",
              border:     "1px solid rgba(0,174,157,0.15)",
              minWidth:   "160px",
            }}
          >
            <span style={{ fontSize: "1.6rem" }}>{c.emoji}</span>
            <span className="font-semibold text-sm whitespace-nowrap"
              style={{ color: "#1a2d42" }}>
              {c.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Stats() {
  const stats = [
    { value: "150+",  label: "Canales",       icon: "📺", desc: "Contenido exclusivo"   },
    { value: "4K",    label: "Ultra HD",       icon: "🎬", desc: "Calidad de imagen"     },
    { value: "24/7",  label: "Disponibilidad", icon: "⚡", desc: "Sin interrupciones"    },
    { value: "99.9%", label: "Uptime",         icon: "🛡️", desc: "Garantía de servicio" },
  ];

  const categories = [
    { label: "Deportes",        emoji: "⚽" },
    { label: "Películas",       emoji: "🎬" },
    { label: "Series",          emoji: "🎭" },
    { label: "Noticias",        emoji: "📰" },
    { label: "Infantil",        emoji: "🧸" },
    { label: "Documentales",    emoji: "🌍" },
    { label: "Música",          emoji: "🎵" },
    { label: "Entretenimiento", emoji: "🎉" },
  ];

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "linear-gradient(160deg, #edfaf8 0%, #f5f7fa 50%, #eef2f8 100%)" }}
    >
      {/* Halos de fondo */}
      <div className="absolute pointer-events-none rounded-full"
        style={{ width: 500, height: 500, background: "rgba(0,174,157,0.08)", filter: "blur(100px)", top: -100, right: -100 }} />
      <div className="absolute pointer-events-none rounded-full"
        style={{ width: 400, height: 400, background: "rgba(45,66,88,0.06)", filter: "blur(80px)", bottom: -80, left: -60 }} />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* ── Encabezado ── */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
            style={{
              background:    "rgba(0,174,157,0.08)",
              borderColor:   "rgba(0,174,157,0.25)",
              color:         "#00937f",
              fontSize:      "0.7rem",
              fontWeight:    800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#00ae9d" }} />
            Entretenimiento sin límites
          </div>

          <h2
            className="font-display font-extrabold leading-tight mb-5"
            style={{
              fontSize:      "clamp(1.8rem, 5vw, 3.5rem)",
              color:         "#1a2d42",
              letterSpacing: "-0.02em",
            }}
          >
            Más de 150 canales de{" "}
            <span style={{
              background:           "linear-gradient(90deg, #00ae9d, #2dd4bf)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor:  "transparent",
            }}>
              contenido exclusivo
            </span>
          </h2>

          <p style={{
            color:     "#64748b",
            fontSize:  "clamp(0.95rem, 2vw, 1.05rem)",
            maxWidth:  "560px",
            margin:    "0 auto",
            lineHeight: 1.7,
          }}>
            Disfruta de una amplia variedad de canales de alta resolución,
            disponibles en todos tus dispositivos, las 24 horas del día,
            los 7 días de la semana.
          </p>
        </div>

        {/* ── Carrusel de canales ── */}
        <div className="mb-14">
          <p className="text-center text-s font-bold uppercase tracking-widest mb-8 text-black">
            Canales disponibles
          </p>
          <ChannelsCarousel />
        </div>

        {/* ── Categorías ── */}
        <div
          className="rounded-2xl p-8 md:p-12"
          style={{
            background: "#ffffff",
            border:     "1px solid #e2e8f0",
            boxShadow:  "0 4px 24px rgba(45,66,88,0.06)",
          }}
        >
          <p className="text-center text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "#94a3b8" }}>
            Categorías disponibles
          </p>
          <h3
            className="text-center font-display font-extrabold mb-8"
            style={{
              fontSize:      "clamp(1.2rem, 3vw, 1.8rem)",
              color:         "#1a2d42",
              letterSpacing: "-0.01em",
            }}
          >
            Contenido para toda la familia
          </h3>

          {/* ── Carrusel de categorías ── */}
          <div
            className="relative overflow-hidden"
            style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}
          >
            <CategoriesCarousel categories={categories} />
          </div>
        </div>

      </div>
    </section>
  );
}