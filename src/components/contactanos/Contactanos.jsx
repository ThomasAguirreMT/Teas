import { useEffect, useState } from "react";
import "./contactanos.css";
import mascota from "../../assets/mascota.png";

export default function Contactanos() {
  const fullText = "Conectividad confiable para tu hogar y empresa";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

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
            Un asesor te contactará en menos de <strong>2 horas</strong> para validar cobertura
            y ofrecerte el mejor plan disponible.
          </p>

          <div className="contacto-datos">

            <a href="tel:018000123456" className="contacto-item">
              <div>
                <span>Línea nacional</span>
                <p>01 8000 123 456</p>
              </div>
            </a>

            <a
              href="https://wa.me/573155550100"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-item"
            >
              <div>
                <span>WhatsApp</span>
                <p>+57 315 555 0100</p>
              </div>
            </a>

            <a href="mailto:hola@teas.com.co" className="contacto-item">
              <div>
                <span>Email</span>
                <p>hola@teas.com.co</p>
              </div>
            </a>

          </div>

          {/* MASCOTA */}
          <div className="contacto-mascota">
            <img src={mascota} alt="Teo" />

            <div className="mascota-box">
              <p>
                 Hola, soy <strong>Teo</strong><br />
                Te ayudo a validar tu cobertura en segundos
              </p>
            </div>
          </div>

        </div>

        {/* DERECHA - FORMULARIO */}
        <div className="contacto-form">
          <h3>Verifica cobertura ahora</h3>

          <form>
            <input type="text" placeholder="Nombre completo" required />
            <input type="email" placeholder="Correo electrónico" required />
            <input type="tel" placeholder="Teléfono / WhatsApp" required />

            <select>
              <option>Seleccionar plan</option>
              <option>100 MB</option>
              <option>300 MB</option>
              <option>500 MB</option>
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