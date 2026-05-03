import "./Contactanos.css";
import teo from "../../assets/mascota.png";
export default function ContactoPagee() {
  return (
    <div className="contacto-page">
      
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <span className="badge">📡 Internet de alta velocidad</span>
          <h1>Internet rápido y estable en tu zona</h1>
          <p>
            Conecta tu hogar o empresa en menos de 48 horas con soporte técnico 24/7.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Ver cobertura</button>
            <button className="btn-secondary">Contratar ahora</button>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="beneficios">
        <div className="beneficio">
          🚀 <p>Alta velocidad real</p>
        </div>
        <div className="beneficio">
          📡 <p>Cobertura amplia</p>
        </div>
        <div className="beneficio">
          🛠 <p>Soporte 24/7</p>
        </div>
        <div className="beneficio">
          🔒 <p>Conexión estable</p>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="contacto">
        <div className="contacto-left">
          <h2>Empieza hoy sin compromiso</h2>
          <p>
            Un asesor te llamará en menos de 2 horas para confirmar cobertura en tu zona.
          </p>

          <div className="info">
            <p>📞 01 8000 123 456</p>
            <p>💬 +57 315 555 0100</p>
            <p>✉ hola@teas.com.co</p>
          </div>

          {/* Mascota */}
          <div className="mascota">
            <img src={teo} alt="Teo mascota" />
            <p>Hola, soy Teo 👋 te ayudo a verificar cobertura</p>
          </div>
        </div>

        <div className="contacto-right">
          <h3>Verifica cobertura ahora</h3>

          <form className="form">
            <input type="text" placeholder="Nombre completo" required />
            <input type="email" placeholder="Correo electrónico" required />
            <input type="tel" placeholder="Teléfono / WhatsApp" required />

            <select>
              <option>Seleccionar plan...</option>
              <option>100 MB</option>
              <option>300 MB</option>
              <option>500 MB</option>
            </select>

            <button type="submit" className="btn-primary">
              Solicitar información →
            </button>

            <div className="extra">
              <p>✔ Respuesta en menos de 2 horas</p>
              <p>✔ Instalación rápida</p>
              <p>✔ Sin costos ocultos</p>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}