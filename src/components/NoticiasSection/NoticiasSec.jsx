import "./NoticiasSection.css";
import Plasma from "../Notiteo1/Noti";

import {
  FiArrowRight,
  FiCalendar,
  FiUsers,
  FiZap,
} from "react-icons/fi";

/* IMÁGENES */
import noticia1 from "../../assets/noticias/n3.jpg";
import noticia2 from "../../assets/noticias/niñosreunidos.jpg";
import noticia3 from "../../assets/noticias/parquedejuegos.jpg";

const noticias = [
  {
    image: noticia1,
    category: "COMUNIDAD",
    date: "15 MAY 2026",
    icon: <FiUsers />,
    title: "Más de 1.000 sonrisas para los niños del barrio",
    desc: "Realizamos una nueva jornada de entrega de regalos junto a colectivos, recreacionistas y organizaciones comprometidas con nuestra comunidad.",
    featured: true,
  },

  {
    image: noticia2,
    category: "EVENTOS",
    date: "10 MAY 2026",
    icon: <FiCalendar />,
    title: "Integración y actividades para toda la comunidad",
    desc: "Compartimos espacios de cultura, recreación y entretenimiento junto a niños, jóvenes y familias de nuestra localidad.",
  },

  {
    image: noticia3,
    category: "CRECIMIENTO",
    date: "07 MAY 2026",
    icon: <FiZap />,
    title: "Seguimos creciendo junto a nuestra comunidad",
    desc: "Continuamos expandiendo nuestros proyectos sociales y tecnológicos para conectar más hogares y generar impacto positivo.",
  },
];

const NoticiasSec = () => {
  return (
    <section className="noticias">

      {/* BACKGROUND FX */}
      <div className="noticias-bg">
        <Plasma
          color="#10b981"
          speed={0.28}
          opacity={0.18}
          scale={1.5}
          mouseInteractive={true}
        />
      </div>

      {/* GLOW */}
      <div className="noticias-glow glow-1"></div>
      <div className="noticias-glow glow-2"></div>

      {/* OVERLAY */}
      <div className="noticias-overlay"></div>

      {/* CONTENT */}
      <div className="noticias-content">

        {/* HERO */}
        <div className="noticias-hero">



          <h2 className="noticias-title">
            Historias que conectan
            tecnología y comunidad
          </h2>

          <p className="noticias-desc">
            Descubre cómo seguimos transformando
            vidas a través de eventos sociales,
            conectividad y experiencias que unen
            a nuestra comunidad.
          </p>

        </div>

        {/* GRID */}
        <div className="noticias-grid">

          {noticias.map((item, index) => (

            <article
              key={index}
              className={`noticia-card ${
                item.featured ? "featured" : ""
              }`}
            >

              {/* IMAGE */}
              <div className="noticia-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="noticia-image-overlay"></div>

                <div className="noticia-floating-tag">
                  {item.icon}
                  <span>{item.category}</span>
                </div>

              </div>

              {/* INFO */}
              <div className="noticia-info">

                <div className="noticia-meta">

                  <span>
                    {item.date}
                  </span>

                  <span>
                    TEAS NETWORK
                  </span>

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.desc}
                </p>

                <button className="noticia-btn">

                  <span>
                    Explorar noticia
                  </span>

                  <FiArrowRight />

                </button>

              </div>

              {/* BORDER FX */}
              <div className="card-border"></div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default NoticiasSec;