import React from 'react'
import { Helmet } from 'react-helmet-async';
import PlansI from '../components/PlansI/PlansI';
import SlideInternet from '../components/SlideInternet/SlideInternet';
import ComoFunciona from '../components/ComoFunciona/ComoFunciona';

const Internet = () => {
  return (
    <>
      <Helmet>
        <title>Internet Fibra Óptica en Usme | TEAS — Velocidades Reales Garantizadas</title>
        <meta name="description" content="Planes de internet fibra óptica en Usme, Bogotá. Velocidades simétricas reales garantizadas para hogares y empresas. Sin contrato, instalación rápida y soporte 24/7." />
        <link rel="canonical" href="https://teas.com.co/internet" />
        <meta property="og:title" content="Internet Fibra Óptica en Usme | TEAS — Velocidades Reales" />
        <meta property="og:description" content="Planes de internet fibra óptica en Usme con velocidades reales garantizadas. Sin contrato y soporte 24/7." />
        <meta property="og:url" content="https://teas.com.co/internet" />
        <meta property="og:image" content="https://teas.com.co/og-image.png" />
        <meta name="twitter:image" content="https://teas.com.co/og-image.png" />
      </Helmet>
      <SlideInternet />
      <PlansI />
      <ComoFunciona />
    </>
  )
}

export default Internet