import "./bannerTV.css";
import gumball from "../../assets/television/mike.webp";
import escandalosos from "../../assets/mascota.png";
import logo from "../../assets/television/logo.svg";


const Banner = () => {
  return (
    <section className="banner">

      <div className="banner-container">

        {/* Personajes izquierda */}
        <img src={escandalosos} alt="escandalosos" className="img-left w-96 " />

        {/* Texto */}
        <div className="banner-text">
          <h1>
            EL MEJOR ENTRETENIMIENTO <br />
            LO ENCUENTRAS EN:
          </h1>

          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="banner-logo" />
            <img src="/src/assets/TEAS LOGO BLANCO.svg" alt="TEAS" className="w-36" />
          </div>
        </div>

        {/* Personaje derecha */}
        <img src={gumball} alt="gumball" className="img-right" />
      </div>
    </section>
  );
};

export default Banner;