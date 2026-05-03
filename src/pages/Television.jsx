import React from 'react';
import { GridScan } from '../components/GridScan/GridScan';
import TiltedCard from '../components/TiltedCard/TiltedCard';
import PlansTV from '../components/PlansTv/PlansTV';
import ChannelsCarousel from "../components/carousels/ChannelsCarousel";

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
      <div className="carouseTV py-10 px-4 md:px-8 lg:px-16">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="text-sm md:text-base font-semibold uppercase tracking-widest text-gray-500 mb-2">
            Televisión Digital
          </p>

          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
            Disfruta lo mejor del <span className="text-indigo-600">deporte, películas y series</span>
          </h1>

          <p className="text-sm md:text-lg text-gray-600 mt-4">
            Accede a una amplia variedad de canales en alta calidad, con contenido para toda la familia.
            Vive una experiencia de entretenimiento sin interrupciones.
          </p>
        </div>

        {/* Beneficios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white shadow-sm rounded-2xl p-4 text-center">
            <p className="font-semibold text-gray-800">📺 +100 canales</p>
            <span className="text-sm text-gray-500">Variedad para todos</span>
          </div>

          <div className="bg-white shadow-sm rounded-2xl p-4 text-center">
            <p className="font-semibold text-gray-800">⚽ Deportes en vivo</p>
            <span className="text-sm text-gray-500">Eventos y ligas</span>
          </div>

          <div className="bg-white shadow-sm rounded-2xl p-4 text-center">
            <p className="font-semibold text-gray-800">🎬 Películas y series</p>
            <span className="text-sm text-gray-500">Estrenos y clásicos</span>
          </div>

          <div className="bg-white shadow-sm rounded-2xl p-4 text-center">
            <p className="font-semibold text-gray-800">📡 Señal HD</p>
            <span className="text-sm text-gray-500">Alta calidad</span>
          </div>
        </div>

        {/* Carrusel */}
        <div className="w-full">
          <ChannelsCarousel />
        </div>

        {/* Call to action */}
        <div className="text-center mt-10">
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            Incluido en todos nuestros planes de internet
          </p>

          <a
            href="https://wa.me/573160542489"
            target="_blank"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            Activar TV Digital
          </a>
        </div>

      </div>
    </div>
  );
};

export default Television;