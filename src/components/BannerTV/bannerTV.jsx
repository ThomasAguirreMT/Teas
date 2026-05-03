import "./bannerTV.css";
import gumball from "../../assets/television/gumball.webp";
import escandalosos from "../../assets/television/escandalosos.webp";
import logo from "../../assets/television/logo.svg";


const Banner = () => {
  return (
    <section className="banner">

      <div className="banner-container">

        {/* Personajes izquierda */}
        <img src={escandalosos} alt="escandalosos" className="img-left" />

        {/* Texto */}
        <div className="banner-text">
          <h1>
            EL MEJOR ENTRETENIMIENTO <br />
            LO ENCUENTRAS EN:
          </h1>

          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="banner-logo" />
            <img src="/src/assets/LOGO TEAS COLOR.svg" alt="TEAS" className="w-36" />
          </div>
          <p className="text-xs">
            El servicio de televisión es prestado por:{" "}
            <a

              href="https://webmastercolombia.net"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-bold hover:underline"
            >
              Web Master Colombia
            </a>
          </p>
        </div>

        {/* Personaje derecha */}
        <img src={gumball} alt="gumball" className="img-right" />
      </div>
    </section>
  );
};

export default Banner;