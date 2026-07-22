import { useState } from "react";


import "./Proteccioninfantil.css";

import {
    FiShield,
    FiUsers,
    FiAlertTriangle,
    FiCheckCircle,
    FiExternalLink,
    FiSmartphone,
    FiMonitor,
    FiLock,
    FiEye,
    FiGlobe,
    FiWifi,
    FiMessageCircle
} from "react-icons/fi";

export default function Pinfantil() {

    const [faqAbierta, setFaqAbierta] = useState(null);

    const toggleFAQ = (index) => {
        setFaqAbierta(faqAbierta === index ? null : index);
    };

    const preguntas = [
        {
            pregunta: "¿Qué es la Ley 679 de 2001?",
            respuesta:
                "Es la ley colombiana que busca prevenir y combatir la explotación, la pornografía y el turismo sexual con menores de edad mediante medidas de protección y control."
        },
        {
            pregunta: "¿Qué hace WEB MASTER para proteger a los menores?",
            respuesta:
                "Promovemos el uso responsable de Internet, apoyamos campañas de prevención y facilitamos el acceso a canales oficiales para denunciar contenido ilegal."
        },
        {
            pregunta: "¿Qué debo hacer si encuentro contenido ilegal?",
            respuesta:
                "No lo comparta. Repórtelo inmediatamente a través de los canales oficiales como Te Protejo, CAI Virtual, Policía Nacional o ICBF."
        },
        {
            pregunta: "¿Cómo puedo proteger a mis hijos en Internet?",
            respuesta:
                "Utilice herramientas de control parental, supervise su actividad digital y dialogue constantemente con ellos sobre los riesgos de Internet."
        }
    ];

    return (

        <section className="proteccion">
            {/* HERO */}

            <div className="proteccion-hero">

        

                <h1>
                    Internet seguro para niños y adolescentes
                </h1>

                <p>

                    En WEB MASTER promovemos el uso responsable de Internet y
                    apoyamos la prevención de la explotación sexual infantil,
                    el acceso a contenido ilegal y cualquier forma de violencia
                    digital.

                </p>

                <a

                    href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=18309"

                    target="_blank"

                    rel="noopener noreferrer"

                    className="hero-btnon"

                >

                    Consultar Ley 679

                    <FiExternalLink />

                </a>

            </div>

            {/* COMPROMISO */}

            <section className="compromiso">

                <h2>

                    Nuestro compromiso

                </h2>

                <p>

                    Trabajamos para ofrecer un servicio responsable,
                    promoviendo una navegación segura y el cumplimiento
                    de la legislación colombiana.

                </p>

                <div className="compromiso-grid">

                    <div className="compromiso-card">

                        <FiShield />

                        <h3>

                            Navegación Segura

                        </h3>

                        <p>

                            Promovemos un entorno digital seguro para todos
                            nuestros usuarios.

                        </p>

                    </div>

                    <div className="compromiso-card">

                        <FiUsers />

                        <h3>

                            Protección Infantil

                        </h3>

                        <p>

                            Rechazamos cualquier actividad relacionada con
                            la explotación de menores.

                        </p>

                    </div>

                    <div className="compromiso-card">

                        <FiCheckCircle />

                        <h3>

                            Cumplimiento Legal

                        </h3>

                        <p>

                            Cumplimos la Ley 679 de 2001 y la regulación
                            vigente en Colombia.

                        </p>

                    </div>

                    <div className="compromiso-card">

                        <FiAlertTriangle />

                        <h3>

                            Denuncia

                        </h3>

                        <p>

                            Incentivamos el reporte inmediato de cualquier
                            contenido ilegal.

                        </p>

                    </div>

                </div>

            </section>



            {/* =========================
                        CONSEJOS PARA PADRES
                    ========================= */}

            <section className="padres">

                <h2>Recomendaciones para padres y acudientes</h2>

                <p>
                    La mejor herramienta para proteger a niños, niñas y adolescentes en Internet
                    es el acompañamiento de los adultos y el uso responsable de la tecnología.
                </p>

                <div className="padres-grid">

                    <div className="padre-card">

                        <FiMonitor />

                        <h3>Control Parental</h3>

                        <p>
                            Configure herramientas de control parental para limitar el acceso
                            a contenido no apropiado.
                        </p>

                    </div>

                    <div className="padre-card">

                        <FiMessageCircle />

                        <h3>Diálogo Familiar</h3>

                        <p>
                            Converse frecuentemente con los menores sobre los riesgos
                            que existen en Internet.
                        </p>

                    </div>

                    <div className="padre-card">

                        <FiSmartphone />

                        <h3>Supervisión</h3>

                        <p>
                            Revise periódicamente las aplicaciones, juegos y redes sociales
                            utilizadas por los menores.
                        </p>

                    </div>

                    <div className="padre-card">

                        <FiLock />

                        <h3>Protección de Datos</h3>

                        <p>
                            Enseñe a no compartir información personal con personas desconocidas.
                        </p>

                    </div>

                </div>

            </section>

            {/* =========================
                        RIESGOS
                ========================= */}

            <section className="riesgos">

                <h2>Principales riesgos en Internet</h2>

                <div className="riesgos-grid">

                    <div className="riesgo-card">

                        <FiAlertTriangle />

                        <h3>Grooming</h3>

                        <p>
                            Adultos que buscan ganarse la confianza de menores con fines de abuso.
                        </p>

                    </div>

                    <div className="riesgo-card">

                        <FiGlobe />

                        <h3>Contenido Inapropiado</h3>

                        <p>
                            Material violento, sexual o ilegal que puede afectar el desarrollo
                            de los menores.
                        </p>

                    </div>

                    <div className="riesgo-card">

                        <FiWifi />

                        <h3>Ciberacoso</h3>

                        <p>
                            Acoso mediante redes sociales, chats o videojuegos.
                        </p>

                    </div>

                    <div className="riesgo-card">

                        <FiEye />

                        <h3>Phishing</h3>

                        <p>
                            Intentos de engaño para obtener información personal o financiera.
                        </p>

                    </div>

                </div>

            </section>



            {/* =========================
                    CANALES OFICIALES
                ========================= */}

            <section className="canales">
                <h2>Canales Oficiales de Denuncia</h2>

                <p>
                    Si encuentra contenido relacionado con explotación sexual infantil
                    o cualquier actividad ilegal en Internet, repórtelo inmediatamente
                    a través de los siguientes canales oficiales.
                </p>

                <div className="canales-grid">

                    <a
                        href="https://www.teprotejo.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="canal-card"
                    >
                        <h3>Te Protejo</h3>
                        <span><FiExternalLink /></span>
                    </a>

                    <a
                        href="https://caivirtual.policia.gov.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="canal-card"
                    >
                        <h3>CAI Virtual</h3>
                        <span><FiExternalLink /></span>
                    </a>

                    <a
                        href="https://www.policia.gov.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="canal-card"
                    >
                        <h3>Policía Nacional</h3>
                        <span><FiExternalLink /></span>
                    </a>

                    <a
                        href="https://www.icbf.gov.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="canal-card"
                    >
                        <h3>ICBF</h3>
                        <span><FiExternalLink /></span>
                    </a>

                </div>

            </section>
            {/* =========================
                        ALERTA LEGAL
                    ========================= */}

            <section className="alerta-legal">

                <h2>Compromiso con la Protección Infantil</h2>

                <p>
                    WEB MASTER rechaza cualquier forma de explotación sexual infantil,
                    pornografía con menores y cualquier actividad ilegal relacionada
                    con niños, niñas y adolescentes. Trabajamos en cumplimiento de la
                    Ley 679 de 2001 y apoyamos todas las iniciativas orientadas a la
                    protección de los menores en Internet.
                </p>

            </section>

            {/* =========================
                        FAQ
                    ========================= */}

            <section className="faq">

                <h2>Preguntas Frecuentes</h2>

                <div className="faq-container">

                    {preguntas.map((item, index) => (

                        <div
                            className={`faq-item ${faqAbierta === index ? "active" : ""}`}
                            key={index}
                        >

                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >

                                {item.pregunta}

                                <span>

                                    {faqAbierta === index ? "−" : "+"}

                                </span>

                            </button>

                            <div
                                className={`faq-answer ${faqAbierta === index ? "show" : ""}`}
                            >

                                <p>{item.respuesta}</p>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

            {/* =========================
                            CTA FINAL
                        ========================= */}

            <section className="cta-final">

                <h2>

                    Conozca la normativa colombiana

                </h2>

                <p>

                    Consulte la Ley 679 de 2001 y demás normas relacionadas con
                    la protección de niños, niñas y adolescentes en Internet.

                </p>

                <a
                    href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=18309"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn"
                >

                    Consultar Ley 679

                </a>

            </section>

        </section>



    );



}