import { useState, useEffect } from "react";
import MagicRings from "../MagicRings";
import Threads from "../Threads/Threads";
import "./Hero.css";

const slides = [
  {
    badge: "Plan GAMER",
    theme: "gamer",
    title: <>Plan Gamer<br /><span className="gamer-gradient">Sin límites.</span></>,
    desc: "Conexión optimizada para gaming online con baja latencia, mayor estabilidad y prioridad en tráfico para que juegues sin lag ni interrupciones.",
    cta: { label: "Conocer más →", href: "#gamer" },
    checks: ["Baja latencia", "Ping estable", "Prioridad en tráfico gamer"],
  },
  {
    badge: "Conectando los hogares de Usme",
    theme: "default",
    title: <>Tu hogar siempre<br /><span className="text-gradient">conectado.</span></>,
    desc: <>Disfruta <span style={{ color: "#00ae9d", fontWeight: 700 }}>streaming en 4K</span>, gaming sin lag y videollamadas cristalinas en todos tus dispositivos al mismo tiempo.</>,
    cta: { label: "Ver plan hogar →", href: "#hogar" },
    checks: ["Baja latencia", "Sin límite de datos", "Instalación express"],
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

  return (
    <div className="hero-ping-monitor relative overflow-hidden rounded-md p-3.5">
      <div className="hero-ping-line absolute top-0 left-0 right-0 h-0.5" />
      <div className="hero-ping-label text-[10px] uppercase tracking-widest font-bold mb-2.5">
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
            <div key={i} className="hero-ping-bar flex-1 rounded-t-sm"
              style={{ height: h, background: bg }} />
          );
        })}
      </div>
      <div className="flex justify-between mt-1.5">
        <span className="hero-ping-label text-[10px]">0ms</span>
        <span className="hero-ping-current text-xs font-black">{current}ms</span>
        <span className="hero-ping-label text-[10px]">10ms</span>
      </div>
    </div>
  );
}

function SlideGamer({ slide, current }) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 md:items-center">

      <div key={`text-${current}`} className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 mb-6 border self-center md:self-start hero-badge-gamer">
          <span className="hero-badge-dot w-1.5 h-1.5 rounded-full animate-pulse" />
          {slide.badge}
        </div>

        <h1 className="hero-title-gamer font-display font-extrabold leading-[1.05] tracking-tight mb-5">
          {slide.title}
        </h1>

        <p className="hero-description-gamer leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
          {slide.desc}
        </p>

        <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
          <a href={slide.cta.href} className="hero-cta-gamer px-8 py-3.5 text-sm font-black text-white inline-block">
            {slide.cta.label}
          </a>
        </div>

        <div className="hero-divider-gamer flex flex-wrap items-center gap-x-4 gap-y-2 pt-6 border-t justify-center md:justify-start">
          {slide.checks.map(b => (
            <div key={b} className="hero-check-item flex items-center gap-2 text-xs font-medium">
              <span className="hero-check-icon">■</span> {b}
            </div>
          ))}
        </div>
      </div>

      <div key={`gamer-${current}`} className="flex flex-col gap-3 mt-10 md:mt-0 max-w-sm mx-auto md:max-w-none">
        <div className="grid grid-cols-2 gap-3">
          {[
            { val: "<2ms",     label: "Ping",        gradStart: "#22c55e", gradEnd: "#84cc16" },
            { val: "920 Mbps", label: "Velocidad",   gradStart: "#a855f7", gradEnd: "#3b82f6" },
            { val: "0%",       label: "Packet loss", gradStart: "#06b6d4", gradEnd: "#3b82f6" },
            { val: "99.9%",    label: "Uptime",      gradStart: "#f59e0b", gradEnd: "#ef4444" },
          ].map(s => (
            <div key={s.label} className="hero-metric-card relative overflow-hidden rounded-md p-4">
              <div className="hero-metric-line absolute top-0 left-0 right-0 h-0.5" />
              <div
                className="hero-metric-value text-2xl font-black leading-none mb-1"
                style={{ '--metric-gradient': `linear-gradient(90deg, ${s.gradStart}, ${s.gradEnd})` }}
              >
                {s.val}
              </div>
              <div className="hero-metric-label text-[10px] uppercase tracking-widest font-bold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <PingMonitor />
      </div>

    </div>
  );
}

function SlideHogar({ slide }) {
  return (
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
      <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 mb-6 border hero-badge-home">
        <span className="hero-badge-dot w-1.5 h-1.5 rounded-full animate-pulse" />
        {slide.badge}
      </div>

      <h1 className="hero-title-home font-display font-extrabold leading-[1.05] tracking-tight mb-5">
        {slide.title}
      </h1>

      <p className="hero-description-home leading-relaxed mb-8 max-w-lg mx-auto px-5 py-3 rounded-xl">
        {slide.desc}
      </p>

      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <a href={slide.cta.href} className="btn-primary px-8 py-3.5 text-sm">
          {slide.cta.label}
        </a>
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pb-8 justify-center">
        {slide.checks.map(b => (
          <div key={b} className="hero-check-item flex items-center gap-2 text-xs font-medium">
            <span className="hero-check-icon">✓</span> {b}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const slide   = slides[current];
  const isGamer = slide.theme === "gamer";

  useEffect(() => {
    const id = setInterval(() => setCurrent(c => (c + 1) % slides.length), 15000);
    return () => clearInterval(id);
  }, []);

  const goTo = n => setCurrent((n + slides.length) % slides.length);

  return (
    <section
      id="inicio"
      className={`hero-section relative md:min-h-screen flex items-center grid-bg overflow-hidden ${isGamer ? 'hero-section-gamer' : 'hero-section-home'}`}
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
          <div className="hero-overlay-gamer absolute inset-0 pointer-events-none" />
        </>
      ) : (
        <div className="hero-background-home absolute inset-0 overflow-hidden">
          <Threads amplitude={1.5} distance={0} />
        </div>
      )}

      {/* ── Botones laterales (solo desktop) ── */}
      <button
        onClick={() => goTo(current - 1)}
        className={`hero-nav-button hidden md:flex absolute left-4 w-10 h-10 rounded-full items-center justify-center z-10 ${isGamer ? 'hero-nav-button-gamer' : 'hero-nav-button-home'}`}
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >‹</button>
      <button
        onClick={() => goTo(current + 1)}
        className={`hero-nav-button hidden md:flex absolute right-4 w-10 h-10 rounded-full items-center justify-center z-10 ${isGamer ? 'hero-nav-button-gamer' : 'hero-nav-button-home'}`}
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >›</button>

      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-16 pt-20 sm:pt-24 pb-10 sm:pb-12 relative z-10">

        {isGamer
          ? <SlideGamer slide={slide} current={current} />
          : <SlideHogar key={`hogar-${current}`} slide={slide} />
        }

        {/* ── Controles inferiores ── */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
          <button
            onClick={() => goTo(current - 1)}
            className={`hero-nav-button md:hidden w-9 h-9 rounded-full flex items-center justify-center ${isGamer ? 'hero-nav-button-gamer' : 'hero-nav-button-home'}`}
          >‹</button>

          <div className="hero-dots-container">
            {slides.map((s, i) => {
              const active = i === current;
              return (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`hero-dot ${active ? 'hero-dot-active' : 'hero-dot-inactive'} ${isGamer ? (active ? 'hero-dot-gamer-active' : 'hero-dot-gamer-inactive') : (active ? 'hero-dot-home-active' : 'hero-dot-home-inactive')}`}
                />
              );
            })}
          </div>

          <button
            onClick={() => goTo(current + 1)}
            className={`hero-nav-button md:hidden w-9 h-9 rounded-full flex items-center justify-center ${isGamer ? 'hero-nav-button-gamer' : 'hero-nav-button-home'}`}
          >›</button>
        </div>

      </div>
    </section>
  );
}
