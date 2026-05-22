import React from "react";
import { Helmet } from "react-helmet-async";

import NoticiasSec from "../components/NoticiasSection/NoticiasSec";

const Notiteo = () => {
  return (
    <>
      <Helmet>
        <title>
          Noticias y Eventos
        </title>

        <meta
          name="description"
          content="Conoce nuestras noticias, eventos y novedades. El mejor internet de Usme"
        />
      </Helmet>

      <NoticiasSec />
    </>
  );
};

export default Notiteo;