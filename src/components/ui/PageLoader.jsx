import "./pageLoader.css";
import mascota from "../../assets/mascota.png";

export default function PageLoader() {
  return (
    <div className="page-loader">

      <div className="loader-mascota">
        <img src={mascota} alt="Teo cargando" />
      </div>

      <p className="loader-text">Cargando...</p>

    </div>
  );
}