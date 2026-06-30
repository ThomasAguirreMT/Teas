import { useEffect, useState } from "react";
import "./contactanos.css";
import mascota from "../../assets/mascota.png";
import facebookLogo from "../../assets/logos/facebook.webp";
import instagramLogo from "../../assets/logos/instagram.svg";
import tiktokLogo from "../../assets/logos/tiktpk.webp";
import whatsappLogo from "../../assets/logos/whatsapp.webp";
import emailLogo from "../../assets/logos/email.webp";

export default function Contactanos() {
  const fullText = "Conectividad confiable para tu hogar y empresa";

  const [text, setText] = useState("");

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    plan: "",
  });

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) clearInterval(interval);
    }, 75);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mensaje = `ESTOY INTERESADO EN EL SERVICIO  - TEAS

 Nombre: ${formData.nombre}
Correo:${formData.correo}
 Teléfono:*${formData.telefono}
Plan de interés: ${formData.plan}`;

    const numeroVentas = "573160542489";

    const url = `https://wa.me/${numeroVentas}?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="contacto">
      {/* HERO */}
      <div className="contacto-hero">
        <span className="contacto-badge">CONTACTO</span>

        <h1 className="contacto-title">
          {text}
          <span className="cursor">|</span>
        </h1>

        <p>
          Verifica cobertura, resuelve dudas o contrata tu servicio en minutos.
          Nuestro equipo está listo para ayudarte.
        </p>
      </div>

      {/* CONTENIDO */}
      <div className="contacto-container">
        {/* IZQUIERDA */}
        <div className="contacto-info">
          <h3 className="info-title">Empieza hoy mismo</h3>

          <p className="info-desc">
            Un asesor te contactará en menos de <strong>2 horas</strong> para
            validar cobertura y ofrecerte el mejor plan disponible.
          </p>

          <div className="contacto-datos">
            <a
              href="https://www.facebook.com/people/Telecomunicaciones-avanzadas-del-Sur-TEAS/61551992221856/"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-item"
            >
              <div className="contacto-icon">
                <img src={facebookLogo} alt="Facebook" />
              </div>

              <div className="contacto-texto">
                <span>Facebook</span>
                <p>Telecomunicaciones avanzadas del Sur - TEAS</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/teasusme/"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-item"
            >
              <div className="contacto-icon">
                <img src={instagramLogo} alt="Instagram" />
              </div>

              <div className="contacto-texto">
                <span>Instagram</span>
                <p>@teasusme</p>
              </div>
            </a>

            <a
              href="https://www.tiktok.com/@teasusme"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-item"
            >
              <div className="contacto-icon">
                <img src={tiktokLogo} alt="TikTok" />
              </div>

              <div className="contacto-texto">
                <span>TikTok</span>
                <p>@teasusme</p>
              </div>
            </a>

            <a
              href="https://wa.me/573160542489"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-item"
            >
              <div className="contacto-icon">
                <img src={whatsappLogo} alt="WhatsApp" />
              </div>

              <div className="contacto-texto">
                <span>WhatsApp</span>
                <p>+57 316 054 2489</p>
              </div>
            </a>

            <a href="mailto:info@teas.com.co" className="contacto-item">
              <div className="contacto-icon">
                <img src={emailLogo} alt="Email" />
              </div>

              <div className="contacto-texto">
                <span>Correo</span>
                <p>info@teas.com.co</p>
              </div>
            </a>
          </div>

          {/* MASCOTA */}
          <div className="contacto-mascota">
            <img src={mascota} alt="Teo" />

            <div className="mascota-box">
              <p>
                Hola, soy <strong>Teo</strong>
                <br />
                Te ayudo a validar tu cobertura en segundos
              </p>
            </div>
          </div>
        </div>

        {/* FORMULARIO */}
        <div className="contacto-form">
          <h3>Verifica cobertura ahora</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              value={formData.nombre}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="correo"
              placeholder="Correo electrónico"
              value={formData.correo}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono / WhatsApp"
              value={formData.telefono}
              onChange={handleChange}
              required
            />

            <select
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar plan</option>
              <option value="200 MB">200 MB</option>
              <option value="350 MB">350 MB</option>
              <option value="500 MB">500 MB</option>
              <option value="700 MB">700 MB</option>
              <option value="920 MB">920 MB</option>
            </select>

            <button type="submit">
              Solicitar información →
            </button>

            <div className="contacto-extra">
              <p>✔ Respuesta en menos de 2 horas</p>
              <p>✔ Instalación rápida</p>
              <p>✔ Sin costos ocultos</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}