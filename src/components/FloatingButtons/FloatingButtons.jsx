import { useState } from "react";
import "./FloatingButtons.css";

import {
  Gauge,
  MessageCircle,
  X,
} from "lucide-react";

export default function FloatingButtons() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("ventas");

  const handleClick = (type) => {
    setActive(type);
    setOpen(false);
  };

  return (
    <>
      {/* SPEED TEST */}
      <a
        href="https://www.speedtest.net/"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button speed"
      >
        <span className="floating-text">
          MIDE TU VELOCIDAD
        </span>

        <div className="floating-icon speed-floating-icon">
          <Gauge size={22} color="white" />
        </div>
      </a>

      {/* WHATSAPP */}
      <button
        className="floating-button whatsapp"
        onClick={() => setOpen(!open)}
      >
        <span className="floating-text">
          CONTÁCTANOS
        </span>

        <div className="floating-icon floating-whatsapp-icon">
          <MessageCircle size={22} color="white" />
        </div>
      </button>

      {/* PANEL */}
      {open && (
        <div className="contact-panel">
          <div
            className="close-btn"
            onClick={() => setOpen(false)}
          >
            <X size={18} />
          </div>

          <h4>
            ¿Quieres contratar un plan?
          </h4>

          {/* VENTAS */}
          <a
            href="https://wa.me/573160542489?text=Hola%20quiero%20información%20sobre%20los%20planes"
            target="_blank"
            rel="noopener noreferrer"
            className={`contact-option ${
              active === "ventas"
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleClick("ventas")
            }
          >
            <span className="contact-option-label">
              Línea de ventas
            </span>

            <strong>
              316 0542489
            </strong>
          </a>

          <h4>
            ¿Requieres soporte técnico?
          </h4>

          {/* SOPORTE */}
          <a
            href="https://wa.me/573160542489?text=Hola%20necesito%20soporte%20técnico"
            target="_blank"
            rel="noopener noreferrer"
            className={`contact-option ${
              active === "soporte"
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleClick("soporte")
            }
          >
            <span className="contact-option-label">
              Soporte técnico
            </span>

            <strong>
              316 0542489
            </strong>
          </a>
        </div>
      )}
    </>
  );
}