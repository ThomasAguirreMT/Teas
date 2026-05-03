import React from 'react'
import PrismaticBurst from '../components/PrismaticBurst/PrismaticBurst';
import TextType from '../components/TextType/TextType';

const plans = [
  {
    id: 1,
    speed:    "200",
    price:    "$65.000",
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
    id:2,
    speed:    "350",
    price:    "$85.000",
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
    id:3,
    speed:    "500",
    price:    "$105.000",
    features: [
      "Fibra óptica simétrica 700 Mps",
      "Ping ultra bajo para gaming",
      "Streaming 2K+ en todos los dispositivos",
      "Ideal para trabajo desde casa",
    ],
    whatsapp: "573160542489",
    color:    { from: "#7c3aed", to: "#6366f1" },
  },
  {
    id:4,
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
  {
    id: 5,
    speed:    "920",
    price:    "$150.000",
    title: "PLAN GAMER",
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

const Internet = () => {
  return (
    <>
      <div style={{ width: '100%', height: '600px', position: 'relative', backgroundColor: '#0a1a20' }}>
        <PrismaticBurst
          animationType="rotate3d"
          intensity={2}
          speed={0.5}
          distort={0}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={0}
          mixBlendMode="lighten"
          colors={['#00ae9d', '#2dd4bf', '#38bdf8', '#a78bfa']}
        />

        {/* Contenido sobre el efecto */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
            style={{
              background: 'rgba(0,174,157,0.08)',
              borderColor: 'rgba(0,174,157,0.35)',
              color: '#2dd4bf',
              fontSize: '0.7rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#00ae9d' }} />
            Conectividad de alta velocidad
          </div>

          <h1
            className="font-display font-extrabold text-center text-white leading-tight"
            style={{
              fontSize: 'clamp(2.8rem, 9vw, 7.5rem)',
              letterSpacing: '-0.03em',
              textShadow: '0 0 60px rgba(0,174,157,0.4), 0 2px 24px rgba(0,0,0,0.6)',
            }}
          >
            <TextType
              text={["Internet de alta velocidad", "Sin interrupciones", "Sin excusas!"]}
              typingSpeed={60}
              pauseDuration={1500}
              showCursor
              cursorCharacter=""
              texts={["", ""]}
              deletingSpeed={100}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
            <br />
            <span style={{
            }}>
            </span>
          </h1>
        </div>
      </div>
      <div>

      </div>
    </>
  )
}

export default Internet
