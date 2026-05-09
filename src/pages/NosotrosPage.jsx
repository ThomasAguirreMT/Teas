import { Helmet } from "react-helmet-async";
import About from "../components/SobreNosotros/SobreNosotros";

export default function NosotrosPage() {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros | TEAS — Proveedor de Internet en Usme</title>
        <meta name="description" content="Conocé la historia de TEAS, empresa de internet fibra óptica nacida en Usme, Bogotá. Comprometidos con llevar conectividad real a cada hogar y negocio de la localidad." />
        <link rel="canonical" href="https://teas.com.co/nosotros" />
        <meta property="og:title" content="Sobre Nosotros | TEAS — Empresa de Internet en Usme" />
        <meta property="og:description" content="Conocé la historia de TEAS, empresa de internet fibra óptica nacida en Usme, comprometida con la conectividad real." />
        <meta property="og:url" content="https://teas.com.co/nosotros" />
        <meta property="og:image" content="https://teas.com.co/og-image.png" />
        <meta name="twitter:image" content="https://teas.com.co/og-image.png" />
      </Helmet>
      <About />
    </>
  );
}
