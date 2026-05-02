import { useState } from "react";
import { faqs } from "../data/content";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24" style={{ background:"#eef2f8" }}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color:"#00ae9d" }}>Preguntas Frecuentes</p>
          <h2 className="font-display font-extrabold mb-4" style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", color:"#1a2d42" }}>
            ¿Tienes dudas?
          </h2>
          <p className="text-lg" style={{ color:"#64748b" }}>
            Resolvemos las más comunes. Para todo lo demás, estamos disponibles 24/7.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-white border transition-all"
              style={{
                borderColor: open===i ? "#00ae9d" : "#e2e8f0",
                boxShadow: open===i ? "0 4px 20px rgba(0,174,157,0.1)" : "0 2px 8px rgba(45,66,88,0.04)",
              }}>
              <button
                className="w-full flex items-center justify-between p-5 text-left transition-colors"
                onClick={() => setOpen(open === i ? null : i)}>
                <span className="font-medium text-sm pr-4" style={{ color:"#1a2d42" }}>{f.q}</span>
                <span className="text-xl flex-shrink-0 font-light transition-transform duration-300"
                  style={{ color:"#00ae9d", transform: open===i ? "rotate(45deg)" : "none" }}>+</span>
              </button>
              <div className={`faq-answer ${open === i ? "open" : ""}`}>
                <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color:"#64748b" }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
