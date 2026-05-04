import React from 'react'
import PrismaticBurst from '../components/PrismaticBurst/PrismaticBurst';
import TextType from '../components/TextType/TextType';
import PlansI from '../components/PlansI/PlansI';
import GamerCard from '../components/GamerCard/GamerCard';

const Internet = () => {
  return (
    <>
      <div style={{
        width: '100%',
        height: 'clamp(480px, 80vh, 920px)',
        position: 'relative',
        backgroundColor: '#0a1a20',
      }}>
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

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 sm:px-8">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border mb-4 sm:mb-6"
            style={{
              background: 'rgba(0,174,157,0.08)',
              borderColor: 'rgba(0,174,157,0.35)',
              color: '#2dd4bf',
              fontSize: 'clamp(0.58rem, 1.5vw, 0.7rem)',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
              style={{ background: '#00ae9d' }}
            />
            Conectividad de alta velocidad
          </div>

          <h1
            className="font-display font-extrabold text-center text-white leading-tight w-full max-w-5xl"
            style={{
              fontSize: 'clamp(1.8rem, 7vw, 7.5rem)',
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
          </h1>
        </div>
      </div>
      <PlansI />
      
    </>
  )
}

export default Internet