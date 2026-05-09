import { useState } from "react";
import { plans, contact } from "../data/content";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ nombre:"", email:"", telefono:"", plan:"" });
  const [sent, setSent] = useState(false);
  const set = k => e => setForm({...form,[k]:e.target.value});

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <p className="contact-label">Contáctanos</p>
          <h2 className="contact-title">
            Empieza hoy<br />
            <span className="text-gradient">sin compromiso.</span>
          </h2>
          <p className="contact-description">
            Un asesor te llamará en menos de 2 horas para confirmar cobertura en tu zona.
          </p>

          <div className="contact-info">
            {[
              { icon:"📞", label:"Línea directa", val: contact.phone },
              { icon:"💬", label:"WhatsApp",      val: contact.whatsapp },
              { icon:"✉️", label:"Email",         val: contact.email },
            ].map(c => (
              <div key={c.label} className="contact-info-item">
                <div className="contact-info-icon">
                  {c.icon}
                </div>
                <div className="contact-info-content">
                  <div className="contact-info-label">{c.label}</div>
                  <div className="contact-info-value">{c.val}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-schedule">
            <p className="contact-schedule-title">Horario de atención</p>
            <div className="contact-schedule-list">
              {[["Lun – Vie","7:00 am – 9:00 pm"],["Sáb – Dom","8:00 am – 6:00 pm"]].map(([d,h]) => (
                <div key={d} className="contact-schedule-item">
                  <span className="contact-schedule-day">{d}</span>
                  <span className="contact-schedule-time">{h}</span>
                </div>
              ))}
              <div className="contact-schedule-item">
                <span className="contact-schedule-day">Soporte técnico</span>
                <span className="contact-schedule-support">24 / 7 / 365</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          {sent ? (
            <div className="contact-success">
              <div className="contact-success-icon">✓</div>
              <h3 className="contact-success-title">¡Mensaje enviado!</h3>
              <p className="contact-success-message">
                Te contactaremos en menos de 2 horas hábiles para confirmar cobertura.
              </p>
              <button onClick={() => setSent(false)} className="contact-success-button">
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="contact-form">
              <h3 className="contact-form-title">Solicitar información</h3>

              {[
                { key:"nombre",   label:"Nombre completo *",    type:"text",  ph:"Tu nombre completo", req:true },
                { key:"email",    label:"Correo electrónico *", type:"email", ph:"tu@email.com",        req:true },
                { key:"telefono", label:"Teléfono / WhatsApp",  type:"tel",   ph:"+57 300 000 0000",    req:false },
              ].map(f => (
                <div key={f.key} className="contact-form-group">
                  <label className="contact-form-label">{f.label}</label>
                  <input className="form-input" type={f.type} placeholder={f.ph}
                    required={f.req} value={form[f.key]} onChange={set(f.key)} />
                </div>
              ))}

              <div className="contact-form-group">
                <label className="contact-form-label">Plan de interés</label>
                <select className="form-input" value={form.plan} onChange={set("plan")}>
                  <option value="">Seleccionar plan...</option>
                  {plans.map(p => (
                    <option key={p.name} value={p.name}>{p.name} — {p.speed} Mbps — ${p.price}/mes</option>
                  ))}
                  <option value="empresas">Solución empresarial</option>
                </select>
              </div>

              <button type="submit" className="btn-primary w-full py-3.5 text-sm mt-2">
                Solicitar información →
              </button>
              <p className="contact-form-footer">
                Sin compromiso. Respuesta en menos de 2 horas.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
