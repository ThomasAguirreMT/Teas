import { Helmet } from "react-helmet-async";
import ContactoPagee from "../components/contactanos/Contactanos";

export default function ContactoPage() {
  return (
    <>
      <Helmet>
        <title>Contacto | TEAS — Contratá Internet en Usme Hoy</title>
        <meta name="description" content="Contactá a TEAS para contratar internet fibra óptica en Usme, consultar cobertura en tu barrio o solicitar soporte técnico. Atención 24/7 por WhatsApp y teléfono." />
        <link rel="canonical" href="https://teas.com.co/contacto" />
        <meta property="og:title" content="Contacto | TEAS — Contratá Internet en Usme" />
        <meta property="og:description" content="Contactá a TEAS para contratar internet fibra óptica en Usme o consultar cobertura en tu barrio. Atención 24/7." />
        <meta property="og:url" content="https://teas.com.co/contacto" />
        <meta property="og:image" content="https://teas.com.co/og-image.png" />
        <meta name="twitter:image" content="https://teas.com.co/og-image.png" />
      </Helmet>
      <ContactoPagee />
    </>
  );
}
