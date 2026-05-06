import "./Footer.css";
import logo from "../../assets/TEAS LOGO BLANCO.svg";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-wave" />

            <div className="footer-container">
                {/* BRAND */}
                <div className="footer-col brand">
                    <img src={logo} alt="Logo" className="footer-logo" />

                    <p>
                        Conectamos empresas y hogares con tecnología de última generación.
                    </p>

                    <span className="footer-copy">
                        ©Copyright 2026 Web Master. Todos los derechos reservados.
                    </span>
                </div>

                {/* SERVICIOS */}
                <div className="footer-col">
                    <h4>Servicios</h4>
                    <ul>
                        <li><Link to="/internet">Internet</Link></li>
                        <li><Link to="/television">Televisión</Link></li>
                        <li><Link to="/NosotrosPage">Nosotros</Link></li>
                        <li><Link to="/CoberturaPage">Desarrollo de Software</Link></li>
                    </ul>
                </div>

                {/* EMPRESA */}
                <div className="footer-col">
                    <h4>Empresa</h4>
                    <ul>
                        <li><Link to="/NosotrosPage">Quiénes somos</Link></li>
                        <li><Link to="/trabajaconnosotros">Trabaja con nosotros</Link></li>
                        <li><Link to="/CoberturaPage">Soporte</Link></li>
                        <li><Link to="/ContactoPage">Contacto</Link></li>
                    </ul>
                </div>

                {/* CONTACTO */}
                <div className="footer-col">
                    <h4>Contacto</h4>
                    <ul>
                        <li>Colombia</li>
                        <li>
                            <a href="tel:+573176683567">+57 317 6683567</a>
                        </li>
                        <li>
                            <a href="mailto:info@telecomunicacionesavanzadasdelsur.com">
                                info@telecomunicacionesavanzadasdelsur.com
                            </a>
                        </li>
                        <li><Link to="/pqr">Radica aqui tu PQR</Link></li>

                    </ul>
                </div>
            </div>
        </footer>
    );
}