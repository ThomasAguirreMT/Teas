import "./WhuChooseUs.css";

import {
  FiWifi,
  FiShield,
  FiHeadphones,
  FiZap,
} from "react-icons/fi";

/* LOGOS */

import logo1 from "../../assets/porqueelegirnos/wifi.svg";
import logo2 from "../../assets/porqueelegirnos/crecimiento.svg";
import logo3 from "../../assets/porqueelegirnos/vector alta disponibilidad.svg";
import logo4 from "../../assets/porqueelegirnos/monitoreo.svg";

const features = [
  {
    icon: <FiWifi />,
    title: "Fibra Óptica",
    text: "Conexión estable y veloz.",
  },
  {
    icon: <FiShield />,
    title: "Máxima estabilidad",
    text: "Monitoreo inteligente 24/7.",
  },
  {
    icon: <FiHeadphones />,
    title: "Soporte técnico",
    text: "Atención rápida especializada.",
  },
  {
    icon: <FiZap />,
    title: "Alta velocidad",
    text: "Gaming y streaming fluido.",
  },
];

const logos = [logo1, logo2, logo3, logo4];

const WhyChooseUs = () => {
  return (
    <section className="why">

      {/* BACKGROUND GLOW */}

      <div className="why-glow glow-1"></div>
      <div className="why-glow glow-2"></div>

      <div className="why-container">

        {/* LEFT */}

        <div className="why-left">


          <h2>
            Tecnología moderna
            para conexiones
            confiables
          </h2>

          <p>
            Ofrecemos internet de alta velocidad con estabilidad,
            soporte técnico especializado y cobertura de última generación.
          </p>

          {/* LOGOS */}

          <div className="why-logos">

            {logos.map((logo, index) => (
              <div className="logo-box" key={index}>
                <img src={logo} alt="partner" />
              </div>
            ))}

          </div>

        </div>

        {/* RIGHT */}

        <div className="why-right">

          {features.map((item, index) => (
            <div className="why-card" key={index}>

              <div className="why-icon">
                {item.icon}
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;