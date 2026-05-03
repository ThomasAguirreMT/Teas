import Contact from "../components/Contact";

export default function ContactoPage() {
  return (
    <>
      {/* Header de sección */}
      <section
        className="pt-32 pb-10 text-center"
        style={{ background: "linear-gradient(160deg, #0f1923 0%, #162030 50%, #111c2a 100%)" }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
            style={{
              background: "rgba(0,174,157,0.1)",
              borderColor: "rgba(0,174,157,0.3)",
              color: "#2dd4bf",
              fontSize: "0.7rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00ae9d" }} />
            Estamos para ayudarte
          </div>
          <h1
            className="font-display font-extrabold leading-tight"
            style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: "#f1f5f9", letterSpacing: "-0.02em" }}
          >
            Hablemos
          </h1>
        </div>
      </section>

      <Contact />
    </>
  );
}
