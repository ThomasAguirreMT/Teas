import React, { useState, useRef } from "react";

import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker,
  Popup,
  Tooltip,
  ZoomControl,
  useMap,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// ===============================
// CONFIG ICONOS
// ===============================

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// ===============================
// POLIGONO COBERTURA
// ===============================

const zonaCobertura = [
  [4.510976024472387, -74.1213524955283],
  [4.5078216349477405, -74.11447549795749],
  [4.506409786835539, -74.11239581225523],
  [4.506346189962755, -74.10787919412604],
  [4.506397067424288, -74.10539122656814],
  [4.505417675664449, -74.10451086881689],
  [4.505099691043145, -74.10445983358493],
  [4.50286107537453, -74.10530191491222],
  [4.498956200786706, -74.10734332420087],
  [4.497696969646864, -74.10787919413792],
  [4.495789039564806, -74.10773884725285],
  [4.494517083405224, -74.10795574699054],
  [4.4937793477919445, -74.10888713998715],
  [4.492176678271101, -74.11035440290591],
  [4.490790239046095, -74.11022681482639],
  [4.488716935133748, -74.10855541094439],
  [4.487250024183428, -74.10715174836056],
  [4.485316271686788, -74.1075036001257],
  [4.480586591749428, -74.11292567800852],
  [4.4798234024370736, -74.1148394992069],
  [4.474154657869838, -74.11729924450522],
  [4.468340163583309, -74.1208876972871],
  [4.460731746408658, -74.12834857548884],
  [4.472253800152985, -74.13661371870009],
  [4.48024075729331, -74.12412749264395],
  [4.480433953950682, -74.12126993843346],
  [4.487148325752393, -74.12080745559874],
  [4.4906380619012065, -74.1192196118205],
  [4.4917173585039265, -74.12095180503952],
  [4.500675457608842, -74.11784829219494],
  [4.50416512897875, -74.12593186052047],
  [4.506539534979084, -74.12109615446857  ]

];

// ===============================
// AJUSTE AUTOMATICO
// ===============================

function FitBounds({ zona }) {
  const map = useMap();

  React.useEffect(() => {
    map.fitBounds(zona, {
      padding: [30, 30],
      maxZoom: 15,
    });
  }, [map, zona]);

  return null;
}

// ===============================
// COMPONENTE
// ===============================

const CoverageMap = () => {
  const [hovered, setHovered] = useState(false);
  const markerRef = useRef(null);

  return (
    <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">

      {/* Header flotante */}
      <div className="absolute top-4 left-4 z-[1000] bg-white/95 backdrop-blur-md rounded-2xl px-5 py-4 shadow-lg border border-slate-200">
        <h2 className="text-lg font-bold text-slate-800">
          Cobertura en Usme
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Internet de alta velocidad disponible.
        </p>
      </div>

      {/* Botón flotante */}
      <button
        className="absolute bottom-4 left-4 z-[1000] bg-[#00ae9d] hover:bg-[#009688] transition-all text-white px-5 py-3 rounded-2xl shadow-xl font-semibold"
      >
        Verificar cobertura
      </button>

      {/* MAPA */}
      <MapContainer
        center={[4.49298498213014, -74.1149991737917]}
        zoom={14}
        zoomControl={false}
        scrollWheelZoom={true}
        doubleClickZoom={true}
        dragging={true}
        touchZoom={true}
        className="w-full h-full"
      >
        {/* Zoom personalizado */}
        <ZoomControl position="bottomright" />

        {/* Ajuste automático */}
        <FitBounds zona={zonaCobertura} />

        {/* MAPA BASE */}
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* POLIGONO */}
        <Polygon
          positions={zonaCobertura}
          eventHandlers={{
            mouseover: () => setHovered(true),
            mouseout: () => setHovered(false),
          }}
          pathOptions={{
            color: hovered ? "#009688" : "#00ae9d",
            fillColor: "#00ae9d",
            fillOpacity: hovered ? 0.55 : 0.35,
            weight: hovered ? 5 : 3,
          }}
        >
          <Tooltip sticky>
            <div className="text-sm">
              <strong>Zona con cobertura</strong>
              <br />
              Fibra óptica disponible
            </div>
          </Tooltip>
        </Polygon>

        {/* MARCADOR */}
        <Marker
          ref={markerRef}
          position={[4.49298498213014, -74.1149991737917]}
          eventHandlers={{
            click: () => markerRef.current?.openPopup(),
          }}
        >
          <Popup minWidth={220} maxWidth={300}>
            <div>
              <h2 style={{ fontWeight: "700", fontSize: "1rem", marginBottom: "6px" }}>
                En este punto esta nuestra oficina
              </h2>

              <button
                onClick={() => window.open("https://maps.app.goo.gl/BLfDasxV8ohXAf6p6", "_blank")}
                style={{
                  width: "100%",
                  backgroundColor: "#00ae9d",
                  color: "white",
                  padding: "8px 0",
                  borderRadius: "10px",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#009688")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#00ae9d")}
              >
                Ir allá
              </button>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CoverageMap;