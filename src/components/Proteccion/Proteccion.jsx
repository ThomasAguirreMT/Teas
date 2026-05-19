import { ShieldCheck, Users, Globe, HeartHandshake, ArrowRight } from "lucide-react";
import imgDerechos from "../../assets/Proteccion/DeberesYDerechos.jpg";
import imgControl from "../../assets/Proteccion/ControlParental.jpg";
import imgInternet from "../../assets/Proteccion/InternetSano.png";
import imgDignidad from "../../assets/Proteccion/DignidadInfantil.jpg";
import "./proteccio.css";

const cards = [
  {
    img: imgDerechos,
    icon: ShieldCheck,
    title: "Derechos del usuario",
    desc: "Conoce y ejerce tus derechos como usuario, respaldados por una política clara y transparente.",
    href: "https://www.crcom.gov.co/es/pagina/regimen-proteccion-usuario",
    color: "#00ae9d",
    colorLight: "#edfaf8",
  },
  {
    img: imgControl,
    icon: Users,
    title: "Control Parental",
    desc: "Herramientas que te permiten gestionar y supervisar el acceso a contenido para proteger a tu familia.",
    href: "https://www.mintic.gov.co/portal/inicio/Sala-de-prensa/Noticias/53254:Usa-las-herramientas-de-control-parental-en-estas-vacaciones",
    color: "#6366f1",
    colorLight: "#eef2ff",
  },
  {
    img: imgInternet,
    icon: Globe,
    title: "Internet Sano",
    desc: "Promovemos un entorno digital seguro, responsable y libre de riesgos para todos los usuarios.",
    href: "https://www.mintic.gov.co/portal/inicio/Sala-de-prensa/Noticias/720:Internet-Sano-una-estrategia-para-proteger-la-identidad-de-ninos-y-jovenes-en-la-red",
    color: "#f59e0b",
    colorLight: "#fffbeb",
  },
  {
    img: imgDignidad,
    icon: HeartHandshake,
    title: "Dignidad Infantil",
    desc: "Cero tolerancia con la explotación de menores de edad en redes electrónicas. Para prevenir y contrarrestar el flagelo de este fenómeno en Colombia y el mundo.",
    href: "https://teprotejocolombia.org",
    color: "#e11d48",
    colorLight: "#fff1f2",
  },
];

const Proteccion = () => {
  return (
    <section className="proteccion">
      <div className="proteccion-blob proteccion-blob--tl" />
      <div className="proteccion-blob proteccion-blob--br" />

      <div className="proteccion-inner">
        <div className="proteccion-badge">
          <span className="proteccion-badge-dot" />
          Seguridad Digital
        </div>

        <h2 className="proteccion-title">
          PROTECCIÓN Y SEGURIDAD{" "}
          <span className="proteccion-title-highlight">EN CADA PASO</span>
        </h2>

        <p className="proteccion-subtitle">
          En <span className="proteccion-brand">TEAS</span>, tu seguridad es
          nuestra prioridad. Implementamos las mejores prácticas y tecnologías
          para proteger tu información y garantizar una experiencia en línea
          segura y confiable.
        </p>

        <div className="proteccion-cards">
          {cards.map(({ img, icon: Icon, title, desc, href, color, colorLight }) => (
            <div
              className="proteccion-card"
              key={title}
              style={{ "--c": color, "--c-light": colorLight }}
            >
              <div className="proteccion-card-img">
                <img src={img} alt={title} />
                <div className="proteccion-card-icon-wrap">
                  <Icon size={20} strokeWidth={2.2} />
                </div>
              </div>
              <div className="proteccion-card-body">
                <h3>{title}</h3>
                <p>{desc}</p>
                <a
                  href={href}
                  className="proteccion-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Más información
                  <ArrowRight size={14} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proteccion;
