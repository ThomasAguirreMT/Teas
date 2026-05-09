import { Helmet } from "react-helmet-async";
import Coverage  from "../components/Coverage";
import Features  from "../components/Features";

export default function CoberturaPage() {
  return (
    <>
      <Helmet>
        <title>Cobertura en Usme | TEAS — ¿Llegamos a tu Barrio?</title>
        <meta name="description" content="Consultá el mapa de cobertura de TEAS en Usme y verificá si tenemos internet fibra óptica en tu barrio. Nos expandimos constantemente por toda la localidad." />
        <link rel="canonical" href="https://teas.com.co/cobertura" />
        <meta property="og:title" content="Cobertura en Usme | TEAS — ¿Llegamos a tu barrio?" />
        <meta property="og:description" content="Verificá si TEAS tiene cobertura de internet fibra óptica en tu barrio de Usme. Expandiéndonos constantemente." />
        <meta property="og:url" content="https://teas.com.co/cobertura" />
        <meta property="og:image" content="https://teas.com.co/og-image.png" />
        <meta name="twitter:image" content="https://teas.com.co/og-image.png" />
      </Helmet>
      <Coverage />
      <Features />
    </>
  );
}
