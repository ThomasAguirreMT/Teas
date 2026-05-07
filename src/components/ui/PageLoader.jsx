import "./PageLoader.css";

export default function PageLoader() {
  return (
    <div className="page-loader">
      <div className="loader-glow loader-glow--1" />
      <div className="loader-glow loader-glow--2" />

      <div className="loader-logo">
        <div className="loader-ring">
          <div className="loader-ring-inner">
            <div className="loader-dot" />
          </div>
        </div>
        <span className="loader-brand">
          TE<em>A</em>S
        </span>
      </div>

      <div className="loader-bar-wrap">
        <div className="loader-bar-track">
          <div className="loader-bar-fill" />
        </div>
        <span className="loader-status">Cargando…</span>
      </div>
    </div>
  );
}