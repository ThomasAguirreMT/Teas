import "./porqueelegirnos.css";

// ICONOS
import seguridad from "../../assets/porqueelegirnos/iconseguridad.svg";
import rapido from "../../assets/porqueelegirnos/iconrapido.svg";
import equipo from "../../assets/porqueelegirnos/iconequipo.svg";
import precio from "../../assets/porqueelegirnos/iconprecio.svg";
import ingresos from "../../assets/porqueelegirnos/iconingresos.svg";

export default function PorqueElegirnosClean() {
  return (
    <section className="pq-container">
      <div className="pq-inner">

        <h2 className="pq-title">
          <span className="pq-arrow">›</span> ¿POR QUÉ ELEGIRNOS?
        </h2>

        <p className="pq-desc">
          Brindamos soluciones personalizadas, soporte técnico especializado 24/7 y
          respuesta inmediata, convirtiéndonos en un aliado estratégico para ISPs y
          empresas que requieren estabilidad, rendimiento y crecimiento seguro.
        </p>

        <div className="pq-grid">

          <div className="pq-card">
            <img src={seguridad} alt="" />
            <h4>Red Segura</h4>
            <p>Con nuestro firewall tu red siempre estará segura.</p>
          </div>

          <div className="pq-card">
            <img src={rapido} alt="" />
            <h4>Servicio rápido</h4>
            <p>Cualquier duda, cualquier inquietud, estamos disponibles.</p>
          </div>

          <div className="pq-card">
            <img src={equipo} alt="" />
            <h4>Equipo de expertos</h4>
            <p>
              Cuenta siempre con nuestra experiencia en Mikrotik, Cisco,
              Huawei y tecnologías GPON.
            </p>
          </div>

          <div className="pq-card">
            <img src={precio} alt="" />
            <h4>Servicios asequibles</h4>
            <p>
              Al mejor precio y disponibilidad, recuerda, somos colombianos.
            </p>
          </div>

          <div className="pq-card">
            <img src={ingresos} alt="" />
            <h4>Aumenta tus Ingresos</h4>
            <p>
              Una conexión estable y con bajas latencias trae más clientes y
              mejores resultados.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}