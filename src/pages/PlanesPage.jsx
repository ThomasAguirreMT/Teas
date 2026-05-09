import { Helmet } from "react-helmet-async";
import Plans from "../components/Plans";

export default function PlanesPage() {
  return (
    <>
      <Helmet>
        <title>Planes de Internet en Usme | TEAS — Precios y Velocidades</title>
        <meta name="description" content="Planes de internet fibra óptica en Usme con precios claros y velocidades reales. Desde hogares hasta empresas. Sin contrato ni letra chica. Consultá disponibilidad." />
        <link rel="canonical" href="https://teas.com.co/planes" />
        <meta property="og:title" content="Planes de Internet en Usme | TEAS — Precios y Velocidades" />
        <meta property="og:description" content="Planes de internet fibra óptica en Usme con precios claros y velocidades reales. Sin contrato ni letra chica." />
        <meta property="og:url" content="https://teas.com.co/planes" />
        <meta property="og:image" content="https://teas.com.co/og-image.png" />
        <meta name="twitter:image" content="https://teas.com.co/og-image.png" />
      </Helmet>
      <Plans />
    </>
  );
}
