export const plans = [
  {
    name: "Básico",
    speed: "200",
    price: "49.900",
    gradient: "linear-gradient(135deg,#2d4258,#1a2d3e)",
    accent: "#6b8fa8",
    features: ["Megas simetricas", "Soporte 24/7", "Sin contrato mínimo"],
    popular: false,
  },
  {
    name: "Hogar",
    speed: "350",
    price: "79.900",
    gradient: "linear-gradient(135deg,#00ae9d,#008f80)",
    accent: "#00ae9d",
    features: ["200 Mbps descarga", "100 Mbps subida", "Router WiFi 6 gratis", "Sin contrato mínimo", "IP fija opcional"],
    popular: true,
  },
  {
    name: "Pro",
    speed: "500",
    price: "129.900",
    gradient: "linear-gradient(135deg,#2d4258,#00ae9d)",
    accent: "#00c4b2",
    features: ["500 Mbps descarga", "250 Mbps subida", "Router WiFi 6E gratis", "IP fija incluida", "SLA garantizado"],
    popular: false,
  },
  {
    name: "Ultra",
    speed: "700",
    price: "199.900",
    gradient: "linear-gradient(135deg,#00ae9d,#2d4258)",
    accent: "#00ae9d",
    features: ["1 Gbps simétrico", "Router premium", "IP fija incluida", "Soporte dedicado", "Instalación prioritaria"],
    popular: false,
  },
];
export const plans1 = [
  {
    name: "200",
    speed: "200",
    price: "65.000",
    gradient: "linear-gradient(135deg,#2d4258,#1a2d3e)",
    accent: "#6b8fa8",
    features: ["Megas simetricas", "Tareas basicas", "Streaming HD", "WIFI de uso domestico"],
    popular: false,
  },
  {
    name: "350",
    speed: "350",
    price: "85.000",
    gradient: "linear-gradient(135deg,#00ae9d,#008f80)",
    accent: "#00ae9d",
    features: ["350 Mbps descarga", "100 Mbps subida", "Router WiFi 6 gratis", "Sin contrato mínimo", "IP fija opcional"],
    popular: true,
  },
  {
    name: "500",
    speed: "500",
    price: "105.000",
    gradient: "linear-gradient(135deg,#2d4258,#00ae9d)",
    accent: "#00c4b2",
    features: ["500 Mbps descarga", "250 Mbps subida", "Router WiFi 6E gratis", "IP fija incluida", "SLA garantizado"],
    popular: false,
  },
  {
    name: "700",
    speed: "700",
    price: "125.900",
    gradient: "linear-gradient(135deg,#00ae9d,#2d4258)",
    accent: "#00ae9d",
    features: ["700 Mbps simétrico", "Router premium", "IP fija incluida", "Soporte dedicado", "Instalación prioritaria"],
    popular: false,
  },
];

export const stats = [
  { value: "99.9%", label: "Uptime garantizado" },
  { value: "15K+",  label: "Clientes satisfechos" },
  { value: "100%",    label: "de Usme" },
  { value: "1ms",  label: "de latencia" },
];

export const features = [
  { icon: "⚡", title: "Fibra óptica pura",   desc: "Red 100% propia sin cobre. Velocidades simétricas garantizadas en todo momento, sin degradación en horas pico." },
  { icon: "🛡️", title: "Sin throttling",      desc: "No limitamos velocidad en horas pico ni en streaming. Lo que contratas, lo tienes todo el día." },
  { icon: "🔧", title: "Soporte real 24/7",   desc: "Técnicos certificados que responden en menos de 30 minutos. Sin bots ni filas interminables." },
  { icon: "📶", title: "WiFi 6 incluido",     desc: "Router de última generación incluido en planes Hogar, Pro y Ultra, sin costo adicional." },
  { icon: "📋", title: "Sin permanencia",     desc: "Contratos mes a mes en todos los planes. Cancela cuando quieras sin penalizaciones." },
  { icon: "💡", title: "Instalación express", desc: "Técnico en tu domicilio en máximo 72 horas hábiles. Instalación profesional sin costo." },
];

export const faqs = [
  { q: "¿Cuánto tarda la instalación?",        a: "La instalación se realiza en un plazo máximo de 72 horas hábiles desde la contratación del servicio." },
  { q: "¿Hay contrato de permanencia?",         a: "No. Todos nuestros planes son sin permanencia mínima. Puedes cancelar en cualquier momento sin penalización." },
  { q: "¿Qué pasa si tengo problemas técnicos?",a: "Contamos con soporte técnico 24/7 por chat, teléfono y visita técnica sin costo adicional." },
  { q: "¿Puedo cambiar de plan?",               a: "Sí, puedes subir o bajar de plan cuando lo desees. Los cambios aplican desde el siguiente ciclo de facturación." },
  { q: "¿Incluyen el router?",                  a: "Los planes Hogar, Pro y Ultra incluyen router WiFi 6/6E sin costo. El plan Básico ofrece alquiler opcional." },
  { q: "¿Ofrecen planes empresariales?",        a: "Sí. Contamos con soluciones dedicadas para empresas con SLA garantizado, IP fija y soporte prioritario." },
];

export const coverage = [
  "Bogotá y área metropolitana",
  "Medellín y Valle de Aburrá",
  "Cali y municipios del Valle",
  "Barranquilla y Costa Atlántica",
  "Bucaramanga y Santanderes",
  "Pereira y Eje Cafetero",
];

export const contact = {
  phone:    "01 8000 123 456",
  whatsapp: "+57 315 555 0100",
  email:    "hola@teas.com.co",
};
