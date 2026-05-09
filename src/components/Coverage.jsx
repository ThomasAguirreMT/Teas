import { Link } from "react-router-dom";
import { coverage } from "../data/content";
import CoverageMap from "./CoverageMap/CoverageMap";
import "./Coverage.css";

const dots = [
  { top: "18%", left: "28%" }, { top: "38%", left: "58%" }, { top: "62%", left: "22%" },
  { top: "32%", left: "72%" }, { top: "68%", left: "52%" }, { top: "22%", left: "48%" },
  { top: "50%", left: "38%" }, { top: "14%", left: "62%" },
];

export default function Coverage() {
  return (
    <section id="cobertura" className="coverage-section">
      <div className="coverage-container">

        {/* Header mobile */}
        <div className="coverage-header-mobile">
          <p className="coverage-label">
            Zona de cobertura
          </p>
          <h2 className="coverage-title">
            Llegamos a donde<br />
            <span className="text-gradient">otros no pueden.</span>
          </h2>
          <p className="coverage-description">
            Más de <span className="coverage-neighborhood-highlight">20 barrios</span> conectados con fibra óptica real en la localidad de{" "}
            <span className="coverage-badge">
              Usme
            </span>.
          </p>
        </div>

        <div className="coverage-grid">

          {/* Columna de texto */}
          <div className="coverage-text">

            {/* Encabezado desktop */}
            <div className="coverage-header-desktop">
              <p className="coverage-label">
                Zona de cobertura
              </p>
              <h2 className="coverage-title">
                Llegamos a donde<br />
                <span className="text-gradient">otros no pueden.</span>
              </h2>
              <p className="coverage-description">
                Conectamos más de <span className="coverage-neighborhood-highlight">20 barrios</span> con fibra óptica propia en la localidad de{" "}
                <span className="coverage-badge">
                  Usme
                </span>
                , donde otros proveedores no llegan.
              </p>
            </div>

            {/* Lista de barrios */}
            <div className="coverage-neighborhoods">
              <p className="coverage-neighborhoods-label">
                Barrios con cobertura activa
              </p>
              <ul className="coverage-neighborhoods-list">
                {coverage.map(city => (
                  <li key={city} className="coverage-neighborhood-item">
                    <span className="coverage-neighborhood-dot" />
                    <span className="coverage-neighborhood-text">{city}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/contacto" className="coverage-button">
              Verificar cobertura en mi dirección →
            </Link>
          </div>

          {/* Mapa */}
          <div className="coverage-map-container">
            <div className="coverage-map-inner">
              <CoverageMap />
            </div>
            <div className="coverage-map-circle-1" />
            <div className="coverage-map-circle-2" />

            {/* Badge de localidad sobre el mapa */}
            <div className="coverage-location-badge">
              <span className="coverage-location-dot" />
              Localidad de Usme
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
