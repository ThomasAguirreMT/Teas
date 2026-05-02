import { useState } from "react";
import "./FloatingButtons.css";
import { Gauge, MessageCircle, X } from "lucide-react";

export default function FloatingButtons() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("ventas");

  const handleClick = (type) => {
    setActive(type);
    setOpen(false);
  };

  return (
    <>
      {/* BOTÓN SPEED */}
      <a
        href="https://www.speedtest.net/"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button speed"
      >
        <span>MIDE TU VELOCIDAD</span>
        <div className="icon speed-icon">
          <Gauge size={22} color="white" />
        </div>
      </a>

      {/* BOTÓN WHATSAPP */}
      <button
        className="floating-button whatsapp"
        onClick={() => setOpen(!open)}
      >
        <span>CONTÁCTANOS</span>
        <div className="icon whatsapp-icon">
          <MessageCircle size={22} color="white" />
        </div>
      </button>

      {/* PANEL */}
      {open && (
        <div className="contact-panel">
          <div className="close-btn" onClick={() => setOpen(false)}>
            <X size={18} />
          </div>

          <h4>¿Quieres contratar un plan?</h4>

          {/* VENTAS */}
          <a
            href="https://wa.me/573176683567?text=Hola%20quiero%20información%20sobre%20los%20planes"
            target="_blank"
            rel="noopener noreferrer"
            className={`contact-option ${
              active === "ventas" ? "active" : ""
            }`}
            onClick={() => handleClick("ventas")}
          >
            <span>Línea de ventas</span>
            <strong>317 6683567</strong>
          </a>

          <h4>¿Requieres soporte técnico?</h4>

          {/* SOPORTE */}
          <a
            href="https://wa.me/573176683567?text=Hola%20necesito%20soporte%20técnico"
            target="_blank"
            rel="noopener noreferrer"
            className={`contact-option ${
              active === "soporte" ? "active" : ""
            }`}
            onClick={() => handleClick("soporte")}
          >
            <span>Soporte técnico</span>
            <strong>317 6683567</strong>
          </a>
        </div>
      )}
    </>
  );
}
