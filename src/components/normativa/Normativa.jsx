import "./Normativa.css";
import { FiFileText, FiExternalLink } from "react-icons/fi";

const regulaciones = [
    {
        titulo: "Ley 679 de 2001",
        url: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=18309",
    },
    {
        titulo: "Acuerdo 011 de 2006",
        url: "https://normograma.mintic.gov.co/mintic/compilacion/docs/acuerdo_cntv_0011_2006.htm",
    },
    {
        titulo: "Ley 1480 de 2011",
        url: "https://normograma.mintic.gov.co/mintic/compilacion/docs/ley_1480_2011.htm",
    },
    {
        titulo: "Régimen de protección de usuarios - Resolución 5111 de 2017",
        url: "https://colombiatic.mintic.gov.co/679/articles-62266_doc_norma.pdf",
    },
    {
        titulo: "Decreto 90 del 18 de Enero de 2018",
        url: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=85039",
    },
    {
        titulo: "Resolución CRC 5299 de 2018",
        url: "https://normograma.mintic.gov.co/mintic/compilacion/docs/resolucion_crc_5299_2018.htm",
    },
    {
        titulo: "Resolución CRC 5300 de 2018",
        url: "https://normograma.mintic.gov.co/mintic/compilacion/docs/resolucion_crc_5300_2018.htm",
    },
    {
        titulo: "Resolución CRC 5321 de 2018",
        url: "https://www.crcom.gov.co/es/noticias/proyectos-regulatorios/resolucion-crc-5321-2018",
    },
    {
        titulo: "Resolución CRC 6242 de 2021",
        url: "https://www.crcom.gov.co/sites/default/files/normatividad/00006242%20Digitaliza%20RPU.pdf",
    },
    {
        titulo: "Resolución CRC 5337 de 2018",
        url: "https://normograma.crcom.gov.co/crc/compilacion/docs/resolucion_crc_5337_2018.htm",
    },
    {
        titulo: "Resolución CRC 5344 de 2018",
        url: "https://normograma.mintic.gov.co/mintic/compilacion/docs/resolucion_crc_5344_2018.htm",
    },
    {
        titulo: "Resolución CRC 6333 de 2021",
        url: "https://colombiatic.mintic.gov.co/679/articles-178526_doc_norma.pdf",
    },
    {
        titulo: "Resolución CRC 5397 de 2018",
        url: "https://www.crcom.gov.co/es/noticias/proyectos-regulatorios/resolucion-crc-5397-2018",
    },
    {
        titulo: "Resolución CRC 5322 de 2018",
        url: "https://www.crcom.gov.co/es/noticias/proyectos-regulatorios/resolucion-crc-5322-2018",
    },
    {
        titulo: "Resolución CRC 5930 de 2020",
        url: "https://normograma.mintic.gov.co/mintic/compilacion/docs/resolucion_crc_5930_2020.htm",
    },
    {
        titulo: "Resolución SIC 19012 de 2020",
        url: "https://normas.cra.gov.co/gestor/docs/resolucion_superindustria_19012_2020.htm",
    },
    {
        titulo: "Artículo 6 - Ley 1266 de 2008",
        url: "https://normograma.mintic.gov.co/mintic/compilacion/docs/ley_1266_2008.htm",
    },
    {
        titulo: "Artículo 16 - Ley 1266 de 2008",
        url: "https://normograma.mintic.gov.co/mintic/compilacion/docs/ley_1266_2008.htm",
    },
];

export default function Normativa() {
    return (
        <section className="normativa">

            <div className="normativa-header">


                <h1>
                    Regulación del Sector TIC
                </h1>

                <p>
                    Consulta las principales leyes, decretos y resoluciones que regulan
                    la prestación de servicios de telecomunicaciones en Colombia.
                </p>

            </div>

            <div className="normativa-card">

                <h2>Marco Normativo</h2>

              

                <div className="regulaciones-grid">

                    {regulaciones.map((item, index) => (

                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="regulacion-item"
                            aria-label={`Abrir ${item.titulo}`}
                        >

                            <span className="regulacion-icon">
                                <FiFileText />
                            </span>

                            <p>{item.titulo}</p>

                            <div className="regulacion-arrow">
                                <FiExternalLink />
                            </div>

                        </a>

                    ))}

                </div>

            </div>

        </section>
    );
}