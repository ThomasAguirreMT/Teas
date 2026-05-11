import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";

// Layout
import Navbar from "./components/navbar/nav";
import Footer from "./components/footer/Footer";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";

// UI
import PageLoader from "./components/ui/PageLoader";

/* =========================
   LAZY LOAD (PERFORMANCE)
========================= */
const HomePage = lazy(() => import("./pages/HomePage"));
const PlanesPage = lazy(() => import("./pages/PlanesPage"));
const CoberturaPage = lazy(() => import("./pages/CoberturaPage"));
const NosotrosPage = lazy(() => import("./pages/NosotrosPage"));
const ContactoPage = lazy(() => import("./pages/ContactoPage"));
const InternetPage = lazy(() => import("./pages/Internet"));
const TelevisionPage = lazy(() => import("./pages/Television"));
const PagosPage = lazy(() => import("./pages/PagosPage/PagosPage"));

/* =========================
   SCROLL TOP (FIX REAL)
========================= */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll inmediato (estable)
    window.scrollTo(0, 0);

    // Refuerzo por lazy loading (evita bug intermitente)
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

  }, [pathname]);

  return null;
}

/* =========================
   APP
========================= */
export default function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/planes" element={<PlanesPage />} />
            <Route path="/cobertura" element={<CoberturaPage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/internet" element={<InternetPage />} />
            <Route path="/television" element={<TelevisionPage />} />
            <Route path="/pagos" element={<PagosPage />} />

            {/* fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </Suspense>

      <FloatingButtons />
      <Footer />
    </>
  );
}