import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import Plans    from "./components/Plans";
import Stats from "./components/Stats";
import Coverage from "./components/Coverage";
import Features from "./components/Features";
import FAQ      from "./components/FAQ";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
         <Plans />
         {/*
        <Coverage />
        <Features />
        <FAQ />
        <Contact /> */}
      </main>
      <Footer />
    </>
  );
}
