import * as LucideIcons from "lucide-react";
import { features } from "../data/content";
import "./Features.css";

export default function Features() {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <p className="features-label">Por qué TEAS</p>
          <h2 className="features-title">
            Diferencias que se sienten
          </h2>
          <p className="features-description">
            No somos el ISP de siempre. Construimos internet como debería ser.
          </p>
        </div>

        <div className="features-grid">
          {features.map(f => {
            const Icon = LucideIcons[f.icon];
            return (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">
                  {Icon && <Icon size={22} color="white" strokeWidth={2} />}
                </div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-description">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
