import { Link } from "react-router-dom";
import "./SobreNosotros.css";
import aboutImage from "../../assets/sobrenosotros/n1.jpg";


const About = () => {
    return (
        <section className="about">

            {/* BACKGROUND IMAGE */}
            <img
                src={aboutImage}
                alt="Fibra óptica"
                className="about-image"
            />

            {/* DARK LAYER */}
            <div className="about-overlay"></div>

            {/* CONTENT */}
            <div className="about-content">


                <h1>
                    Creamos conexiones
                </h1>



                <div className="typing-line">
                    <span className="typing-text">
                        rápidas, <br /> seguras y modernas
                    </span>
                </div>
                <div className="about-buttons">

                    <button
                        className="primary-btn"
                        onClick={() => window.location.href = "/cobertura"}
                    >
                        Ver cobertura
                    </button>
                     <button
                        className="primary-btn"
                        onClick={() => window.location.href = "/Internet"}
                    >
                        Ver planes
                    </button>

                </div>

            </div>

            {/* FLOATING STATS */}

            <div className="stats-box stats-1">
                <h2>100%</h2>
                <span>Satisfaccion</span>
            </div>

            <div className="stats-box stats-2">
                <h2>99%</h2>
                <span>Estabilidad garantizada</span>
            </div>

            <div className="stats-box stats-3">
                <h2>24/7</h2>
                <span>Soporte técnico</span>
            </div>

        </section>
    );
};

export default About;