import React, { useState } from "react";

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
  [4.511045808692817, -74.12132824302223],
  [4.507232388621018, -74.1140025099249],
  [4.5062610425747, -74.1055941561728],
  [4.5055529739844475, -74.104767007556],
  [4.502674901204394, -74.10561506040226],
  [4.501530209023427, -74.1060813354675],
  [4.49760881037267, -74.10784961587028],
  [4.496205736001593, -74.10781352851512],
  [4.494400378442682, -74.10821335010077],
  [4.491846050300075, -74.11048685347579],
  [4.492187827036921, -74.11045076603922],
  [4.482106296661768, -74.10930820942593],
  [4.484980319043626, -74.12017197990293],
  [4.4875828207307435, -74.1202123956912],
  [4.504039339002618, -74.12502729650754],
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
        className="w-full h-full z-0"
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
        <Marker position={[4.49298498213014, -74.1149991737917]}>
          <Popup>
            <div className="min-w-[220px]">
              <h2 className="font-bold text-lg mb-2">
                Cobertura Disponible
              </h2>

              <p className="text-sm text-slate-600">
                Contamos con internet de alta velocidad
                en esta zona de Usme.
              </p>

              <button className="mt-4 w-full bg-[#00ae9d] text-white py-2 rounded-xl font-semibold hover:bg-[#009688] transition-all">
                Solicitar instalación
              </button>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CoverageMap;