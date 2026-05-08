 import ChannelsCarousel from "../carousels/ChannelsCarousel";

import { useEffect, useRef } from "react";
import CarouselTv from "../CarouselTv/CarouselTv";
import "./Stats.css";

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


  return (
    <section
      className="stats-section relative overflow-hidden py-10 sm:py-16 md:py-28"
    >
      {/* Halos de fondo */}
      <div className="stats-halo-1 absolute pointer-events-none rounded-full" />
      <div className="stats-halo-2 absolute pointer-events-none rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* ── Encabezado ── */}
        <div className="text-center mb-8 sm:mb-12 md:mb-14">
          <div
            className="stats-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
          >
            <span className="stats-badge-dot w-1.5 h-1.5 rounded-full animate-pulse" />
            Entretenimiento sin límites
          </div>

          <h2
            className="stats-title font-display font-extrabold leading-tight mb-5"
          >
            Más de 150 canales de{" "}
            <span className="stats-title-highlight">
              contenido exclusivo
            </span>
          </h2>

          <p className="stats-description">
            Disfruta de una amplia variedad de canales de alta resolución,
            disponibles en todos tus dispositivos, las 24 horas del día,
            los 7 días de la semana.
          </p>
        </div>


        {/* ── Categorías ── */}
        <div
          className="stats-categories-container rounded-2xl p-4 sm:p-8 md:p-12"
        >
          {/* ── Carrusel de categorías ── */}
          <div
            className="stats-carousel-mask relative overflow-hidden"
          >
            <CarouselTv />
          </div>
        </div>

      </div>
    </section>
  );
}