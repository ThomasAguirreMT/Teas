import React from 'react';
import { GridScan } from '../components/GridScan/GridScan';
import TiltedCard from '../components/TiltedCard/TiltedCard';
import PlansTV from '../components/PlansTv/PlansTV';
import ChannelsCarousel from "../components/carousels/ChannelsCarousel";
import Banner from '../components/BannerTV/bannerTV';

const Television = () => {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ══════════════════════════════
          HERO — GridScan background
      ══════════════════════════════ */}
      <div
        className="relative w-full"
        style={{ height: 'clamp(480px, 80vh, 920px)' }}
      >
        {/* GridScan fondo */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
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

        {/* Capa oscura */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'rgba(10, 18, 30, 0.45)' }}
        />

        {/* Contenido hero */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 sm:px-8">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border mb-5 sm:mb-8"
            style={{
              background: 'rgba(0,174,157,0.08)',
              borderColor: 'rgba(0,174,157,0.3)',
              color: '#2dd4bf',
              fontSize: 'clamp(0.58rem, 1.5vw, 0.72rem)',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
              style={{ background: '#00ae9d' }}
            />
            Ahora disponible
          </div>

          {/* Título */}
          <h1
            className="font-display font-extrabold text-center leading-tight"
            style={{
              fontSize: 'clamp(2.4rem, 10vw, 7rem)',
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
                background: 'linear-gradient(90deg, #49ecdc, #06f4d4)',
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
            className="text-center font-medium uppercase mt-3 sm:mt-5"
            style={{
              fontSize: 'clamp(0.65rem, 2vw, 1rem)',
              letterSpacing: 'clamp(0.18em, 1vw, 0.35em)',
              color: 'rgba(255,255,255,0.55)',
            }}
          >
            de otra dimensión
          </p>

          {/* Línea decorativa */}
          <div className="flex items-center gap-3 mt-5 sm:mt-8">
            <div className="h-px w-8 sm:w-14" style={{ background: 'rgba(0,174,157,0.3)' }} />
            <span
              style={{
                color: 'rgba(255, 255, 255, 0.99)',
                fontSize: 'clamp(0.55rem, 1.2vw, 0.65rem)',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              + 150 Canales · FHD
            </span>
            <div className="h-px w-8 sm:w-14" style={{ background: 'rgba(0,174,157,0.3)' }} />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          PLANES TV
      ══════════════════════════════ */}
      <PlansTV />

      {/* ══════════════════════════════
          SECCIÓN CANALES + BENEFICIOS
      ══════════════════════════════ */}
      <div className="w-full py-10 px-4 sm:px-8 lg:px-16">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-500 mb-2">
            Televisión Digital
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Disfruta lo mejor del{' '}
            <span className="text-indigo-600">deporte, películas y series</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
            Accede a una amplia variedad de canales en alta calidad, con contenido para toda la familia.
            Vive una experiencia de entretenimiento sin interrupciones.
          </p>
        </div>

        {/* Carrusel de canales */}
        <div className="w-full py-6 sm:py-8">
          <ChannelsCarousel />
        </div>

        {/* Beneficios */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 mt-4">
          {[
            { icon: 'public/Icons/televisor.png', title: '+150 canales', sub: 'Variedad para todos' },
            { icon: 'public/Icons/deportes.png',  title: 'Deportes en vivo', sub: 'Eventos y ligas' },
            { icon: 'public/Icons/series.png',    title: 'Películas y series', sub: 'Estrenos y clásicos' },
            { icon: 'public/Icons/antena.png',    title: 'Señal FHD', sub: 'Alta calidad' },
          ].map(({ icon, title, sub }) => (
            <div
              key={title}
              className="bg-white shadow-sm rounded-2xl p-4 flex flex-col items-center text-center"
            >
              <img
                src={icon}
                alt={title}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain mb-2"
              />
              <p className="font-semibold text-gray-800 text-sm sm:text-base">{title}</p>
              <span className="text-xs sm:text-sm text-gray-500">{sub}</span>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center pb-4">
          <p className="py-4 sm:py-6 text-gray-700 mb-3 text-sm sm:text-base">
            El servicio de televisión es prestado por:{' '}
            <a
              href="https://webmastercolombia.net"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
            >
              Web Master Colombia
            </a>
          </p>
          <a
            href="https://wa.me/573160542489"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition text-sm sm:text-base"
          >
            Activar TV Digital
          </a>
        </div>
      </div>

      {/* ══════════════════════════════
          BANNER FINAL
      ══════════════════════════════ */}
      <Banner />

    </div>
  );
};

export default Television;
