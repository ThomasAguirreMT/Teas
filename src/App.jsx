import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

import HomePage     from "./pages/HomePage";
import PlanesPage   from "./pages/PlanesPage";
import CoberturaPage from "./pages/CoberturaPage";
import NosotrosPage  from "./pages/NosotrosPage";
import ContactoPage  from "./pages/ContactoPage";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";
import Navbar from "./components/navbar/nav";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"          element={<HomePage />} />
          <Route path="/planes"    element={<PlanesPage />} />
          <Route path="/cobertura" element={<CoberturaPage />} />
          <Route path="/nosotros"  element={<NosotrosPage />} />
          <Route path="/contacto"  element={<ContactoPage />} />
          {/* Ruta comodín: redirige a inicio */}
          <Route path="*"          element={<HomePage />} />
        </Routes>
      </main>
      <FloatingButtons />
      <Footer />
    </>
  );
}
