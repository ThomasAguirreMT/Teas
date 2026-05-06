import { useState, useEffect } from "react";
import MagicRings from "./MagicRings";
import Threads from "./Threads/Threads";

const slides = [
  {
    badge: "Plan GAMER",
    theme: "gamer",
    title: <>Plan Gamer.<br /><span className="gamer-gradient">Sin límites.</span></>,
    desc: "Conexión optimizada para gaming online con baja latencia, mayor estabilidad y prioridad en tráfico para que juegues sin lag ni interrupciones.",
    cta: { label: "Conocer más →", href: "#gamer" },
    checks: ["Baja latencia", "Ping estable", "Prioridad en tráfico gamer"],
    metrics: [],
  },
  {
    badge: "Nuevo: Hogares conectados",
    theme: "default",
    title: <>Tu hogar siempre<br /><span className="text-gradient">conectado.</span></>,
    desc: "Disfruta streaming en 4K, gaming sin lag y videollamadas cristalinas en todos tus dispositivos al mismo tiempo.",
    cta: { label: "Ver plan hogar →", href: "#hogar" },
    checks: ["WiFi 6 incluido", "Sin límite de datos", "Instalación express"],
    metrics: [
      { icon: "📺", val: "4K",     label: "Streaming"    },
      { icon: "🎮", val: "<5 ms",  label: "Gaming lag"   },
      { icon: "📱", val: "+20",    label: "Dispositivos" },
      { icon: "🛜", val: "WiFi 6", label: "Incluido"     },
    ],
  },
];

function PingMonitor() {
  const [history, setHistory] = useState(() =>
    Array.from({ length: 24 }, () => Math.random() * 8 + 1)
  );
  const [current, setCurrent] = useState(2);

  useEffect(() => {
    const id = setInterval(() => {
      setHistory(prev => {
        const next = Math.max(1, Math.min(18,
          prev[prev.length - 1] + (Math.random() - 0.45) * 2
        ));
        setCurrent(Math.round(next));
        return [...prev.slice(1), next];
      });
    }, 600);
    return () => clearInterval(id);
  }, []);

  const pingColor = current < 5  ? "#22c55e"
                  : current < 10 ? "#84cc16"
                  : current < 14 ? "#f59e0b"
                  : "#ef4444";

  return (
    <div
      className="relative overflow-hidden rounded-md p-3.5"
      style={{
        background: "rgba(10,6,24,0.85)",
        border:     "1px solid rgba(168,85,247,0.3)",
        boxShadow:  "0 0 20px rgba(124,58,237,0.1)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }} />
      <div className="text-[10px] uppercase tracking-widest font-bold mb-2.5"
        style={{ color: "#64748b" }}>
        Ping Monitor — Live
      </div>
      <div className="flex items-end gap-0.5" style={{ height: 44 }}>
        {history.map((v, i) => {
          const h = Math.max(4, (v / 20) * 44);
          const isLast = i === history.length - 1;
          const bg = isLast  ? "#ffffff"
                   : v < 5  ? "#22c55e"
                   : v < 10 ? "#84cc16"
                   : v < 14 ? "#f59e0b"
                   : "#ef4444";
          return (
            <div key={i} className="flex-1 rounded-t-sm transition-all duration-300"
              style={{ height: h, background: bg }} />
          );
        })}
      </div>
      <div className="flex justify-between mt-1.5">
        <span className="text-[10px]" style={{ color: "#64748b" }}>0ms</span>
        <span className="text-xs font-black" style={{ color: pingColor }}>{current}ms</span>
        <span className="text-[10px]" style={{ color: "#64748b" }}>10ms</span>
      </div>
    </div>
  );
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const slide   = slides[current];
  const isGamer = slide.theme === "gamer";

  useEffect(() => {
    const id = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const goTo = n => setCurrent((n + slides.length) % slides.length);

  const tk = isGamer
    ? {
        sectionBg:   "linear-gradient(160deg, #080612 0%, #120d24 45%, #0a0e1e 100%)",
        badgeBg:     "rgba(168,85,247,0.2)",
        badgeBorder: "rgba(168,85,247,0.7)",
        badgeColor:  "#e9d5ff",
        pulseColor:  "#a78bfa",
        titleColor:  "#ffffff",
        descColor:   "#cbd5e1",
        checkColor:  "#a78bfa",
        dividerColor:"rgba(139,92,246,0.25)",
        navBg:       "rgba(255,255,255,0.05)",
        navBorder:   "rgba(139,92,246,0.35)",
        navColor:    "#a78bfa",
      }
    : {
        sectionBg:   "#000000",
        badgeBg:     "rgba(0,174,157,0.1)",
        badgeBorder: "rgba(0,174,157,0.3)",
        badgeColor:  "#2dd4bf",
        pulseColor:  "#00ae9d",
        titleColor:  "#f1f5f9",
        descColor:   "#94a3b8",
        checkColor:  "#00ae9d",
        dividerColor:"rgba(255,255,255,0.08)",
        cardBg:      "rgba(255,255,255,0.06)",
        cardBorder:  "rgba(255,255,255,0.12)",
        cardValColor:"#f1f5f9",
        cardLblColor:"#64748b",
        navBg:       "rgba(255,255,255,0.05)",
        navBorder:   "rgba(255,255,255,0.12)",
        navColor:    "#94a3b8",
      };

  return (
    <section
      id="inicio"
      className="relative md:min-h-screen flex items-center grid-bg overflow-hidden"
      style={{ background: tk.sectionBg, transition: "background 0.6s ease" }}
    >
      {/* ── Fondo ── */}
      {isGamer ? (
        <>
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <MagicRings
              color="#A855F7"
              colorTwo="#6366F1"
              ringCount={6}
              speed={1}
              attenuation={10}
              lineThickness={2}
              baseRadius={0.35}
              radiusStep={0.1}
              scaleRate={0.1}
              opacity={1}
              blur={0}
              noiseAmount={0.1}
              rotation={0}
              ringGap={1.5}
              fadeIn={0.7}
              fadeOut={0.5}
              followMouse={false}
              mouseInfluence={0.2}
              hoverScale={1.2}
              parallax={0.05}
              clickBurst={false}
            />
          </div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(160deg, rgba(4,2,12,0.55) 0%, rgba(10,6,24,0.45) 50%, rgba(4,6,18,0.55) 100%)",
            }}
          />
        </>
      ) : (
        <div className="absolute inset-0 overflow-hidden" style={{ background: "#000" }}>
          <Threads amplitude={1} distance={0} enableMouseInteraction />
        </div>
      )}

      {/* ── Botones laterales (solo desktop) ── */}
      <button
        onClick={() => goTo(current - 1)}
        className="hidden md:flex absolute left-4 w-10 h-10 rounded-full items-center justify-center transition-all z-10"
        style={{ top: "50%", transform: "translateY(-50%)", background: tk.navBg, border: `1px solid ${tk.navBorder}`, color: tk.navColor }}
      >‹</button>
      <button
        onClick={() => goTo(current + 1)}
        className="hidden md:flex absolute right-4 w-10 h-10 rounded-full items-center justify-center transition-all z-10"
        style={{ top: "50%", transform: "translateY(-50%)", background: tk.navBg, border: `1px solid ${tk.navBorder}`, color: tk.navColor }}
      >›</button>

      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-16 pt-20 sm:pt-24 pb-10 sm:pb-12 relative z-10">

        {isGamer ? (

          /* ── SLIDE GAMER: dos columnas ── */
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 md:items-center">

            <div key={`text-${current}`} className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border self-center md:self-start"
                style={{
                  background: tk.badgeBg, borderColor: tk.badgeBorder, color: tk.badgeColor,
                  borderRadius: "4px", letterSpacing: "0.1em", textTransform: "uppercase",
                  fontSize: "0.7rem", fontWeight: 800, boxShadow: "0 0 12px rgba(168,85,247,0.3)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: tk.pulseColor }} />
                {slide.badge}
              </div>

              <h1
                className="font-display font-extrabold leading-[1.05] tracking-tight mb-5"
                style={{
                  fontSize: "clamp(1.9rem, 6vw, 4.5rem)", color: tk.titleColor,
                  letterSpacing: "-0.03em", textTransform: "uppercase",
                  textShadow: "0 0 40px rgba(168,85,247,0.4)",
                }}
              >
                {slide.title}
              </h1>

              <p className="leading-relaxed mb-8 max-w-md mx-auto md:mx-0"
                style={{ color: tk.descColor, fontSize: "clamp(0.88rem, 2vw, 1.05rem)" }}>
                {slide.desc}
              </p>

              <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
                <a
                  href={slide.cta.href}
                  className="px-8 py-3.5 text-sm font-black text-white inline-block"
                  style={{
                    background: "linear-gradient(90deg, #7c3aed, #4f46e5)", borderRadius: "4px",
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    clipPath: "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))",
                    boxShadow: "0 0 24px rgba(124,58,237,0.5)",
                  }}
                >
                  {slide.cta.label}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-6 border-t justify-center md:justify-start"
                style={{ borderColor: tk.dividerColor }}>
                {slide.checks.map(b => (
                  <div key={b} className="flex items-center gap-2 text-xs font-medium" style={{ color: tk.descColor }}>
                    <span style={{ color: tk.checkColor }}>■</span> {b}
                  </div>
                ))}
              </div>
            </div>

            <div key={`gamer-${current}`} className="flex flex-col gap-3 mt-10 md:mt-0 max-w-sm mx-auto md:max-w-none">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: "<2ms",   label: "Ping",        gradStart: "#22c55e", gradEnd: "#84cc16" },
                  { val: "1 Gbps", label: "Velocidad",   gradStart: "#a855f7", gradEnd: "#3b82f6" },
                  { val: "0%",     label: "Packet loss", gradStart: "#06b6d4", gradEnd: "#3b82f6" },
                  { val: "99.9%",  label: "Uptime",      gradStart: "#f59e0b", gradEnd: "#ef4444" },
                ].map(s => (
                  <div
                    key={s.label}
                    className="relative overflow-hidden rounded-md p-4"
                    style={{
                      background: "rgba(10,6,24,0.85)",
                      border:     "1px solid rgba(168,85,247,0.4)",
                      boxShadow:  "0 0 20px rgba(124,58,237,0.15), inset 0 1px 0 rgba(255,255,255,0.05)",
                    }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-0.5"
                      style={{ background: "linear-gradient(90deg,#7c3aed,#3b82f6)" }} />
                    <div
                      className="text-2xl font-black leading-none mb-1"
                      style={{
                        background: `linear-gradient(90deg, ${s.gradStart}, ${s.gradEnd})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor:  "transparent",
                      }}
                    >
                      {s.val}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest font-bold" style={{ color: "#94a3b8" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <PingMonitor />
            </div>

          </div>

        ) : (

          /* ── SLIDE HOGAR: columna centrada ── */
          <div key={`hogar-${current}`} className="flex flex-col items-center text-center max-w-2xl mx-auto">

            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border"
              style={{
                background: tk.badgeBg, borderColor: tk.badgeBorder, color: tk.badgeColor,
                borderRadius: "9999px", letterSpacing: "0.1em", textTransform: "uppercase",
                fontSize: "0.7rem", fontWeight: 800,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: tk.pulseColor }} />
              {slide.badge}
            </div>

            <h1
              className="font-display font-extrabold leading-[1.05] tracking-tight mb-5"
              style={{
                fontSize: "clamp(2.2rem, 7vw, 5rem)", color: tk.titleColor,
                letterSpacing: "-0.01em",
              }}
            >
              {slide.title}
            </h1>

            <p className="leading-relaxed mb-8 max-w-lg"
              style={{ color: tk.descColor, fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}>
              {slide.desc}
            </p>

            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              <a href={slide.cta.href} className="btn-primary px-8 py-3.5 text-sm">
                {slide.cta.label}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pb-8 justify-center">
              {slide.checks.map(b => (
                <div key={b} className="flex items-center gap-2 text-xs font-medium" style={{ color: tk.descColor }}>
                  <span style={{ color: tk.checkColor }}>✓</span> {b}
                </div>
              ))}
            </div>

            {/* Métricas */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t" style={{ borderColor: tk.dividerColor }}>
              {slide.metrics.map(m => (
                <div
                  key={m.label}
                  className="flex flex-col items-center gap-1 rounded-2xl p-4 border"
                  style={{
                    background:  tk.cardBg,
                    borderColor: tk.cardBorder,
                    boxShadow:   "0 2px 12px rgba(0,0,0,0.3)",
                  }}
                >
                  <div className="text-2xl">{m.icon}</div>
                  <div className="font-bold text-base" style={{ color: tk.cardValColor }}>{m.val}</div>
                  <div className="text-[11px]" style={{ color: tk.cardLblColor }}>{m.label}</div>
                </div>
              ))}
            </div>

          </div>

        )}

        {/* ── Controles inferiores ── */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">

          <button
            onClick={() => goTo(current - 1)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-all"
            style={{ background: tk.navBg, border: `1px solid ${tk.navBorder}`, color: tk.navColor }}
          >‹</button>

          <div className="flex items-center gap-2">
            {slides.map((s, i) => {
              const active      = i === current;
              const dotActive   = s.theme === "gamer" ? "#7c3aed"               : "#00ae9d";
              const dotInactive = s.theme === "gamer" ? "rgba(139,92,246,0.25)" : "rgba(0,174,157,0.25)";
              return (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    width: active ? "24px" : "8px", height: "8px",
                    borderRadius: active ? "4px" : "50%",
                    background: active ? dotActive : dotInactive,
                    border: "none", cursor: "pointer", transition: "all 0.2s", padding: 0,
                  }}
                />
              );
            })}
          </div>

          <button
            onClick={() => goTo(current + 1)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-all"
            style={{ background: tk.navBg, border: `1px solid ${tk.navBorder}`, color: tk.navColor }}
          >›</button>

        </div>
      </div>
    </section>
  );
}
