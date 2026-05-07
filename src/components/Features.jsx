import * as LucideIcons from "lucide-react";
import { features } from "../data/content";

export default function Features() {
  return (
    <section className="py-24" style={{ background: "#f5f7fa" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00ae9d" }}>Por qué TEAS</p>
          <h2 className="font-display font-extrabold mb-4" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#1a2d42" }}>
            Diferencias que se sienten
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#64748b" }}>
            No somos el ISP de siempre. Construimos internet como debería ser.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {features.map(f => {
            const Icon = LucideIcons[f.icon];
            return (
              <div
                key={f.title}
                className="card-hover rounded-3xl p-7 bg-white border"
                style={{ borderColor: "#e2e8f0", boxShadow: "0 2px 12px rgba(45,66,88,0.05)" }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: "#3b82f6" }}
                >
                  {Icon && <Icon size={22} color="white" strokeWidth={2} />}
                </div>
                <h3 className="font-display font-bold text-lg mb-2" style={{ color: "#1a2d42" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
