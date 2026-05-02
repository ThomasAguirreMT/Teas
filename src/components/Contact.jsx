import { useState } from "react";
import { plans, contact } from "../data/content";

export default function Contact() {
  const [form, setForm] = useState({ nombre:"", email:"", telefono:"", plan:"" });
  const [sent, setSent] = useState(false);
  const set = k => e => setForm({...form,[k]:e.target.value});

  return (
    <section id="contacto" className="py-24" style={{ background:"#f5f7fa" }}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color:"#00ae9d" }}>Contáctanos</p>
          <h2 className="font-display font-extrabold leading-tight mb-6" style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", color:"#1a2d42" }}>
            Empieza hoy<br />
            <span className="text-gradient">sin compromiso.</span>
          </h2>
          <p className="text-lg leading-relaxed mb-10" style={{ color:"#64748b" }}>
            Un asesor te llamará en menos de 2 horas para confirmar cobertura en tu zona.
          </p>

          <div className="space-y-5 mb-10">
            {[
              { icon:"📞", label:"Línea directa", val: contact.phone },
              { icon:"💬", label:"WhatsApp",      val: contact.whatsapp },
              { icon:"✉️", label:"Email",         val: contact.email },
            ].map(c => (
              <div key={c.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                  style={{ background:"rgba(0,174,157,0.08)", border:"1px solid rgba(0,174,157,0.15)" }}>
                  {c.icon}
                </div>
                <div>
                  <div className="text-xs mb-0.5" style={{ color:"#94a3b8" }}>{c.label}</div>
                  <div className="font-medium text-sm" style={{ color:"#2d4258" }}>{c.val}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-5 border bg-white" style={{ borderColor:"#e2e8f0" }}>
            <p className="font-semibold text-sm mb-3" style={{ color:"#1a2d42" }}>Horario de atención</p>
            <div className="space-y-2 text-sm">
              {[["Lun – Vie","7:00 am – 9:00 pm"],["Sáb – Dom","8:00 am – 6:00 pm"]].map(([d,h]) => (
                <div key={d} className="flex justify-between">
                  <span style={{ color:"#94a3b8" }}>{d}</span>
                  <span style={{ color:"#64748b" }}>{h}</span>
                </div>
              ))}
              <div className="flex justify-between">
                <span style={{ color:"#94a3b8" }}>Soporte técnico</span>
                <span style={{ color:"#00ae9d", fontWeight:600 }}>24 / 7 / 365</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl p-8 bg-white border"
          style={{ borderColor:"#e2e8f0", boxShadow:"0 8px 30px rgba(45,66,88,0.08)" }}>
          {sent ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background:"rgba(0,174,157,0.1)", border:"2px solid #00ae9d" }}>
                <span className="text-2xl" style={{ color:"#00ae9d" }}>✓</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-2" style={{ color:"#1a2d42" }}>¡Mensaje enviado!</h3>
              <p className="text-sm leading-relaxed max-w-xs mx-auto" style={{ color:"#64748b" }}>
                Te contactaremos en menos de 2 horas hábiles para confirmar cobertura.
              </p>
              <button onClick={() => setSent(false)} className="mt-6 text-sm font-medium transition-colors"
                style={{ color:"#00ae9d" }}>
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-4">
              <h3 className="font-display font-bold text-xl mb-6" style={{ color:"#1a2d42" }}>Solicitar información</h3>

              {[
                { key:"nombre",   label:"Nombre completo *",    type:"text",  ph:"Tu nombre completo", req:true },
                { key:"email",    label:"Correo electrónico *", type:"email", ph:"tu@email.com",        req:true },
                { key:"telefono", label:"Teléfono / WhatsApp",  type:"tel",   ph:"+57 300 000 0000",    req:false },
              ].map(f => (
                <div key={f.key}>
                  <label className="text-xs mb-2 block font-medium" style={{ color:"#64748b" }}>{f.label}</label>
                  <input className="form-input" type={f.type} placeholder={f.ph}
                    required={f.req} value={form[f.key]} onChange={set(f.key)} />
                </div>
              ))}

              <div>
                <label className="text-xs mb-2 block font-medium" style={{ color:"#64748b" }}>Plan de interés</label>
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
              <p className="text-xs text-center pt-1" style={{ color:"#94a3b8" }}>
                Sin compromiso. Respuesta en menos de 2 horas.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
