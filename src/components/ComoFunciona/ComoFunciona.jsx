import React from 'react'
import './ComoFunciona.css'

const ComoFunciona = () => {
  return (
    <section
        className="como-funciona-section w-full py-20 px-4 sm:px-8"
      >
        <div className="max-w-5xl mx-auto text-center mb-14">
          <h2
            className="como-funciona-title font-extrabold text-white mb-4"
          >
            ¿Cómo funciona? Es rápido y sencillo
          </h2>
          <p
            className="como-funciona-subtitle text-gray-400"
          >
            Contrata tu internet en minutos y nosotros nos encargamos del resto.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              emoji: '1️⃣',
              title: 'Elige tu plan',
              desc: 'Selecciona el plan que mejor se adapte a tu hogar o negocio.',
            },
            {
              emoji: '2️⃣',
              title: 'Te contactamos',
              desc: 'Nuestro equipo valida cobertura y agenda contigo la instalación.',
            },
            {
              emoji: '3️⃣',
              title: 'Instalamos',
              desc: 'Un técnico realiza la instalación de forma rápida y segura.',
            },
            {
              emoji: '4️⃣',
              title: 'Disfruta tu conexión',
              desc: 'Empieza a navegar, trabajar o jugar sin interrupciones.',
            },
          ].map((step, i) => (
            <div
              key={i}
              className="como-funciona-step flex flex-col items-center text-center rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="como-funciona-emoji mb-4">{step.emoji}</span>
              <h3
                className="como-funciona-step-title font-bold text-white mb-2"
              >
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
  )
}

export default ComoFunciona