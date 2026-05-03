import React from 'react';
import { GridScan } from '../components/GridScan/GridScan';
import TiltedCard from '../components/TiltedCard/TiltedCard';
import PlansTV from '../components/PlansTv/PlansTV';

const Television = () => {
  return (
    <div className="w-full">
      {/* Contenedor principal — altura adaptable según viewport */}
      <div
        className="relative w-full overflow-hidden"
        style={{ minHeight: 'clamp(420px, 80vh, 720px)' }}
      >
        {/* ── Fondo GridScan ── */}
        <div className="absolute inset-0">
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#2d4258"
            gridScale={0.1}
            scanColor="#feffff"
            scanOpacity={0.4}
            enablePost
            bloomIntensity={0.6}
            chromaticAberration={0.002}
            noiseIntensity={0.05}
          />
        </div>

        {/* ── Capa oscura suave ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'rgba(10, 18, 30, 0.45)' }}
        />

        {/* ── Contenido ── */}
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 sm:px-8"
          style={{ minHeight: 'clamp(420px, 80vh, 720px)' }}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 sm:mb-8"
            style={{
              background: 'rgba(0,174,157,0.08)',
              borderColor: 'rgba(0,174,157,0.3)',
              color: '#2dd4bf',
              fontSize: 'clamp(0.6rem, 1.5vw, 0.72rem)',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: '#00ae9d' }}
            />
            Ahora disponible
          </div>

          {/* Título principal */}
          <h1
            className="font-display font-extrabold text-center leading-tight"
            style={{
              fontSize: 'clamp(2.4rem, 8vw, 7rem)',
              letterSpacing: '-0.02em',
              maxWidth: '14ch',
              color: '#ffffff',
              textShadow: '0 2px 24px rgba(0,0,0,0.5)',
            }}
          >
            Televisión
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #00ae9d, #2dd4bf)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Digital
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            className="text-center font-medium uppercase mt-4 sm:mt-6"
            style={{
              fontSize: 'clamp(0.7rem, 2vw, 1rem)',
              letterSpacing: 'clamp(0.2em, 1vw, 0.35em)',
              color: 'rgba(255,255,255,0.55)',
            }}
          >
            de otra dimensión
          </p>

          {/* Línea decorativa */}
          <div className="flex items-center gap-3 mt-6 sm:mt-8">
            <div className="h-px w-8 sm:w-14" style={{ background: 'rgba(0,174,157,0.3)' }} />
            <span
              style={{
                color: 'rgba(255,255,255,0.35)',
                fontSize: 'clamp(0.55rem, 1.2vw, 0.65rem)',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              + 150 Canales · FHD
            </span>
            <div className="h-px w-8 sm:w-14" style={{ background: 'rgba(0,174,157,0.3)' }} />
          </div>
        </div>
      </div>
      <div>
        <PlansTV /> 
      </div>
    </div>
  );
};

export default Television;