import React from 'react'
// import PrismaticBurst from '../components/PrismaticBurst/PrismaticBurst';
import FloatingLines from '../components/FloatingLines/FloatingLines';
import TextType from '../components/TextType/TextType';
import PlansI from '../components/PlansI/PlansI';
import GamerCard from '../components/GamerCard/GamerCard';

const Internet = () => {
  return (
    <>
      <div style={{ width: '100%', height: 'clamp(380px, 60vh, 730px)', position: 'relative', backgroundColor: '#0d1b2a', overflow: 'hidden' }}>
        <FloatingLines
          enabledWaves={["middle", "bottom", "top"]}
          lineCount={8}
          lineDistance={8}
          bendRadius={12}
          bendStrength={-1.5}
          interactive={false}
          parallax={true}
          animationSpeed={0.8}
          linesGradient={["#00ffcc", "#000000", "#1a1b1a"]}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 sm:px-8">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border mb-4 sm:mb-6"
            style={{
              background: 'rgba(0,174,157,0.08)',
              borderColor: 'rgba(0,174,157,0.35)',
              color: '#ffffff',
              fontSize: 'clamp(0.58rem, 1.5vw, 0.7rem)',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
              style={{ background: '#ffffff' }}
            />
            Conectividad de alta velocidad
          </div>

          <h1
            className="font-display font-extrabold text-center text-white leading-tight w-full max-w-5xl"
            style={{
              fontSize: 'clamp(2rem, 6vw, 5.5rem)',
              letterSpacing: '-0.03em',
              textShadow: '0 0 60px rgba(0,174,157,0.4), 0 2px 24px rgba(0,0,0,0.6)',
            }}
          >
            <TextType 
              text={["Internet de alta velocidad", "Sin interrupciones", "Sin excusas!"]}
              typingSpeed={60}
              pauseDuration={1500}
              showCursor
              cursorClassName="font-light"
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
      <section
        style={{ backgroundColor: '#0d1b2a' }}
        className="w-full py-20 px-4 sm:px-8"
      >
        <div className="max-w-5xl mx-auto text-center mb-14">
          <h2
            className="font-extrabold text-white mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            ¿Cómo funciona? Es rápido y sencillo
          </h2>
          <p
            className="text-gray-400"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
          >
            Contrata tu internet en minutos y nosotros nos encargamos del resto.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              emoji: '1️⃣',
              title: 'Elige tu plan',
              desc: 'Selecciona el plan que mejor se adapte a tu hogar o negocio.',
            },
            {
              emoji: '2️⃣',
              title: 'Te contactamos',
              desc: 'Nuestro equipo valida cobertura y agenda contigo la instalación.',
            },
            {
              emoji: '3️⃣',
              title: 'Instalamos',
              desc: 'Un técnico realiza la instalación de forma rápida y segura.',
            },
            {
              emoji: '4️⃣',
              title: 'Disfruta tu conexión',
              desc: 'Empieza a navegar, trabajar o jugar sin interrupciones.',
            },
          ].map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-1"
              style={{
                background: 'rgba(0,174,157,0.07)',
                border: '1px solid rgba(0,174,157,0.25)',
              }}
            >
              <span style={{ fontSize: '2.2rem' }} className="mb-4">{step.emoji}</span>
              <h3
                className="font-bold text-white mb-2"
                style={{ fontSize: '1.1rem' }}
              >
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Internet