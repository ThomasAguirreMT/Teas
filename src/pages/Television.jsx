import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GridScan } from '../components/GridScan/GridScan';
import TiltedCard from '../components/TiltedCard/TiltedCard';
import PlansTV from '../components/PlansTv/PlansTV';
import ChannelsCarousel from "../components/carousels/ChannelsCarousel";
import Banner from '../components/BannerTV/bannerTV';
import './Television.css';

const Television = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Helmet>
        <title>Televisión Digital en Usme | TEAS — +150 Canales en Alta Definición</title>
        <meta name="description" content="TV digital en Usme con más de 150 canales en alta definición. Deporte, películas y series para toda la familia. Combinalo con internet fibra óptica TEAS." />
        <link rel="canonical" href="https://teas.com.co/television" />
        <meta property="og:title" content="Televisión Digital en Usme | TEAS — +150 Canales FHD" />
        <meta property="og:description" content="Más de 150 canales en alta definición en Usme. Deporte, películas y series para toda la familia. Sin contrato." />
        <meta property="og:url" content="https://teas.com.co/television" />
        <meta property="og:image" content="https://teas.com.co/og-image.png" />
        <meta name="twitter:image" content="https://teas.com.co/og-image.png" />
      </Helmet>

      <div className="tv-hero">
        {/* GridScan fondo */}
        <div className="tv-hero-background">
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
        <div className="tv-hero-overlay" />

        {/* Contenido hero */}
        <div className="tv-hero-content">

          {/* Badge */}
          <div className="tv-badge">
            <span className="tv-badge-dot" />
            Ahora disponible
          </div>

          {/* Título */}
          <h1 className="tv-title">
            Televisión
            <br />
            <span className="tv-title-gradient">
              Digital
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="tv-subtitle">
            de otra dimensión
          </p>

          {/* Línea decorativa */}
          <div className="tv-decorative-line">
            <div className="tv-line" />
            <span className="tv-line-text">
              + 150 Canales · FHD
            </span>
            <div className="tv-line" />
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
      <div className="tv-channels-section">

        {/* Encabezado */}
        <div className="tv-channels-header">
          <p className="tv-channels-label">
            Televisión Digital
          </p>
          <h2 className="tv-channels-title">
            Disfruta lo mejor del{' '}
            <span className="tv-channels-title-highlight">deporte, películas y series</span>
          </h2>
          <p className="tv-channels-description">
            Accede a una amplia variedad de canales en alta calidad, con contenido para toda la familia.
            Vive una experiencia de entretenimiento sin interrupciones.
          </p>
        </div>

        {/* Carrusel de canales */}
        <div className="tv-carousel-wrapper">
          <ChannelsCarousel />
        </div>

        <div className="tv-video-container">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="tv-video"
          >
            <source src="/channels/bannetv.webm" />
          </video>
        </div>

        {/* Call to action */}
        <div className="tv-cta-section">
          <p className="tv-cta-text">
            El servicio de televisión es prestado por:{' '}
            <a
              href="https://webmastercolombia.net"
              target="_blank"
              rel="noopener noreferrer"
              className="tv-cta-text-link"
            >
              Web Master Colombia
            </a>
          </p>
          <a
            href="https://wa.me/573160542489"
            target="_blank"
            rel="noopener noreferrer"
            className="tv-cta-button"
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
