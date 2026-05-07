import "./SobreNosotros.css";
import aboutImage from "../../assets/sobrenosotros/n1.jpg";

const About = () => {
    return (
        <section className="about">

            <div className="about-overlay"></div>

            <img
                src={aboutImage}
                alt="TEAS"
                className="about-bg-image"
            />

            <div className="about-container">

                <div className="about-content">



                    <h1>
                        Conectamos comunidades

                        <span className="typing-title">
                            con tecnología de última generación</span>

                    </h1>

                    <p>
                        En TEAS llevamos internet y televisión por fibra óptica
                        a miles de hogares, ofreciendo velocidad, estabilidad
                        y una experiencia digital confiable.
                    </p>

                    <div className="about-actions">
                        <button>
                            Conocer más
                        </button>
                    </div>

                </div>

                {/* FLOATING CARDS */}

                <div className="floating-card card-1">
                    <h2>+10K</h2>
                    <span>Usuarios conectados</span>
                </div>

                <div className="floating-card card-2">
                    <h2>24/7</h2>
                    <span>Soporte técnico</span>
                </div>

                <div className="floating-card card-3">
                    <h2>Fibra Óptica</h2>
                    <span>Alta velocidad y estabilidad</span>
                </div>

            </div>

        </section>
    );
};

export default About;