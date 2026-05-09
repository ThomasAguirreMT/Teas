import { useState } from "react";
import { faqs } from "../data/content";
import "./FAQ.css";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <p className="faq-label">Preguntas Frecuentes</p>
          <h2 className="faq-title">
            ¿Tienes dudas?
          </h2>
          <p className="faq-description">
            Resolvemos las más comunes. Para todo lo demás, estamos disponibles 24/7.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
              <button
                className="faq-button"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="faq-question">{f.q}</span>
                <span className={`faq-toggle ${open === i ? "open" : ""}`}>+</span>
              </button>
              <div className={`faq-answer ${open === i ? "open" : ""}`}>
                <p className="faq-answer-text">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
