import "./CoverageSection.css";

import event1 from "../../assets/sobrenosotros/n1.jpg";
import event2 from "../../assets/sobrenosotros/n2.jpg";
import event3 from "../../assets/sobrenosotros/n3.jpg";

const CoverageSection = () => {
  return (
    <section className="coverage">

      <div className="coverage-grid">

        {/* LEFT */}
        <div className="coverage-content">

          <span className="coverage-tag">
            COBERTURA
          </span>

          <h2>
            Llegamos a más
            <br />
            comunidades cada día
          </h2>

          <p>
            Expandimos constantemente nuestra red de fibra óptica
            para brindar internet rápido, estable y cercano a miles
            de familias y negocios.
          </p>

          <div className="coverage-stats">

            <div className="coverage-item">
              <h3>+25</h3>
              <span>Zonas conectadas</span>
            </div>

            <div className="coverage-item">
              <h3>+10K</h3>
              <span>Clientes activos</span>
            </div>

            <div className="coverage-item">
              <h3>99%</h3>
              <span>Disponibilidad</span>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGES */}
        <div className="coverage-gallery">

          <div className="gallery-card large">
            <img src={event1} alt="Evento comunidad" />
          </div>

          <div className="gallery-row">

            <div className="gallery-card">
              <img src={event2} alt="Cobertura fibra" />
            </div>

            <div className="gallery-card">
              <img src={event3} alt="Clientes TEAS" />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CoverageSection;