import { Helmet } from "react-helmet-async";
import Hero  from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import Plans from "../components/Plans/Plans";
import MascotaBanner from "../assets/MascotaBanner/MascotaBanner";
export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>TEAS — Internet Fibra Óptica en Usme | Velocidades Reales Garantizadas</title>
        <meta name="description" content="Internet de fibra óptica simétrica en Usme, Bogotá. Velocidades reales garantizadas para hogares y negocios. Sin contrato, instalación rápida y soporte 24/7." />
        <link rel="canonical" href="https://teas.com.co/" />
        <meta property="og:title" content="TEAS — Internet Fibra Óptica en Usme | Velocidades Reales" />
        <meta property="og:description" content="Internet de fibra óptica en Usme con velocidades reales garantizadas. Sin contrato, instalación rápida y soporte 24/7." />
        <meta property="og:url" content="https://teas.com.co/" />
        <meta property="og:image" content="https://teas.com.co/og-image.png" />
        <meta name="twitter:image" content="https://teas.com.co/og-image.png" />
      </Helmet>
      <Hero />
      <Plans />
      <Stats />
      <MascotaBanner />
    </>
  );
}
