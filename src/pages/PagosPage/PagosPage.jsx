import React, { useState } from "react";

import {
  Building2,
  ShieldCheck,
  Smartphone,
  CheckCircle2,
  CreditCard,
  MessageCircle,
  QrCode,
  Sparkles,
} from "lucide-react";

// IMPORTA TU QR
import qrteas from "../../assets/qrteas.png";
import "./PagosPage.css";

const PagosPage = () => {
  const [flipped, setFlipped] = useState(false);

  const pasos = [
    {
      icon: Smartphone,
      title: "Ingresa al banco",
      desc: "Abre la app o portal de Banco Caja Social.",
    },
    {
      icon: CreditCard,
      title: "Realiza la transferencia",
      desc: "Envía el pago a la cuenta registrada.",
    },
    {
      icon: MessageCircle,
      title: "Envía comprobante",
      desc: "Comparte tu soporte por WhatsApp.",
    },
    {
      icon: CheckCircle2,
      title: "Pago confirmado",
      desc: "Tu servicio continuará activo.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#07111F] text-white overflow-hidden relative">
      {/* EFECTOS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* HERO */}
      <section className="relative px-4 sm:px-6 lg:px-10 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
          
          {/* TEXTO */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 px-4 py-2 rounded-full text-xs sm:text-sm font-medium animate-float">
              <ShieldCheck size={16} />
              Pagos seguros y rápidos
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Realiza tus pagos vía{" "}
              <span className="text-cyan-400">
                Banco Caja Social
              </span>
            </h1>

            <p className="mt-6 text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Paga tu factura desde cualquier lugar de forma
              rápida, segura y sin filas utilizando Banco Caja
              Social.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              {[
                {
                  value: "24/7",
                  label: "Disponibilidad",
                  color: "text-cyan-400",
                },
                {
                  value: "5 min",
                  label: "Confirmación promedio",
                  color: "text-green-400",
                },
                {
                  value: "+500",
                  label: "Pagos exitosos",
                  color: "text-blue-400",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-xl hover:scale-105 transition-all duration-300"
                >
                  <h2
                    className={`text-3xl font-black ${item.color}`}
                  >
                    {item.value}
                  </h2>

                  <p className="text-slate-400 text-sm mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CARD */}
<div className="w-full perspective order-1 lg:order-2">
  <div
    className={`relative w-full h-[430px] sm:h-[470px] transition-all duration-700 transform-style-preserve-3d ${
      flipped ? "rotate-y-180" : ""
    }`}
  >
    {/* FRONT */}
    <div className="absolute inset-0 backface-hidden">
      <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[28px] p-4 sm:p-5 shadow-2xl h-full flex flex-col overflow-hidden">

        {/* HEADER */}
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-base sm:text-xl font-bold leading-tight">
              Pago Bancario
            </h2>

            <p className="text-slate-400 mt-1 text-xs sm:text-base">
              Banco Caja Social
            </p>
          </div>

          <div className="bg-cyan-400/10 p-3 rounded-2xl shrink-0">
            <Building2
              size={24}
              className="text-cyan-400"
            />
          </div>
        </div>

        {/* DATOS */}
        <div className="mt-3 space-y-2">
          <div className="bg-[#0B1727] border border-white/5 rounded-2xl p-3">
            <p className="text-slate-400 text-[11px] sm:text-sm">
              Titular
            </p>

            <h3 className="font-bold text-xs sm:text-base mt-0.5 leading-relaxed break-words">
              TELECOMUNICACIONES AVANZADAS DEL SUR SAS
            </h3>
          </div>

          <div className="bg-[#0B1727] border border-white/5 rounded-2xl p-3">
            <p className="text-slate-400 text-[11px] sm:text-sm">
              Número de cuenta
            </p>

            <h3 className="font-bold text-base sm:text-xl mt-0.5 tracking-wide break-all">
              0092028907
            </h3>
          </div>

          <div className="bg-[#0B1727] border border-white/5 rounded-2xl p-3">
            <p className="text-slate-400 text-[11px] sm:text-sm">
              Tipo de cuenta
            </p>

            <h3 className="font-bold text-sm sm:text-base mt-0.5">
              Cuenta corriente
            </h3>
          </div>
        </div>

        {/* INFO */}
        <div className="mt-3 bg-cyan-400/10 border border-cyan-400/20 rounded-2xl p-3">
          <div className="flex items-start gap-3">
            <div className="bg-cyan-400/20 p-2 sm:p-3 rounded-xl shrink-0">
              <MessageCircle
                size={18}
                className="text-cyan-400"
              />
            </div>

            <div className="min-w-0">
              <h3 className="font-semibold text-sm sm:text-base">
                Envía tu comprobante
              </h3>

              <p className="text-slate-300 text-[11px] sm:text-sm break-all">
                WhatsApp: +57 316 054 2489
              </p>
            </div>
          </div>
        </div>

        {/* BOTON */}
        <div className="mt-auto pt-2">
          <button
            onClick={() => setFlipped(true)}
            className="w-full bg-cyan-400 hover:bg-cyan-300 active:scale-95 text-black font-bold py-2.5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
          >
            <QrCode size={18} />
            Ver código QR
          </button>
        </div>
      </div>
    </div>

    {/* BACK */}
    <div className="absolute inset-0 rotate-y-180 backface-hidden">
      <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[28px] p-4 sm:p-5 shadow-2xl h-full flex flex-col overflow-hidden">

        {/* HEADER */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-base sm:text-xl font-bold">
              Código QR
            </h2>

            <p className="text-slate-400 mt-1 text-xs sm:text-base">
              Escanea para pagar
            </p>
          </div>

          <div className="bg-cyan-400/10 p-3 rounded-2xl shrink-0">
            <CreditCard
              size={24}
              className="text-cyan-400"
            />
          </div>
        </div>

        {/* QR */}
        <div className="flex-1 flex flex-col items-center justify-center py-4">
          <div className="bg-white p-3 sm:p-4 rounded-3xl shadow-2xl">
            <img
              src={qrteas}
              alt="Código QR"
              className="w-32 h-32 sm:w-44 sm:h-44 object-contain"
            />
          </div>

          <p className="text-center text-slate-400 mt-4 text-[11px] sm:text-sm leading-relaxed max-w-xs">
            Escanea este código desde tu aplicación bancaria
            para realizar el pago.
          </p>
        </div>

        {/* BOTON */}
        <button
          onClick={() => setFlipped(false)}
          className="w-full mt-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black active:scale-95 font-bold py-2.5 rounded-2xl transition-all duration-300 text-sm"
        >
          Volver a información bancaria
        </button>
      </div>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* PASOS */}
      <section className="px-4 sm:px-6 lg:px-10 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-cyan-400 mb-4">
              <Sparkles size={18} />
              <span className="font-semibold">
                Proceso simple
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black">
              ¿Cómo pagar?
            </h2>

            <p className="text-slate-400 mt-4 text-sm sm:text-lg">
              Sigue estos pasos para realizar tu pago fácilmente
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {pasos.map((item, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <item.icon
                    size={30}
                    className="text-cyan-400"
                  />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagosPage;