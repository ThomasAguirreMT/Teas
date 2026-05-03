import React from 'react'
import PrismaticBurst from '../components/PrismaticBurst/PrismaticBurst';

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
            Internet
            <br />
            <span style={{
              
            }}>
              Sin Límites
            </span>
          </h1>

          <p
            className="text-center font-medium uppercase mt-5"
            style={{
              fontSize: 'clamp(0.65rem, 1.8vw, 0.9rem)',
              letterSpacing: 'clamp(0.2em, 1vw, 0.35em)',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            velocidad · estabilidad · futuro
          </p>
        </div>
      </div>
    </>
  )
}

export default Internet
