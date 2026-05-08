import React from 'react'
import FloatingLines from '../FloatingLines/FloatingLines'
import TextType from '../TextType/TextType'
import './SlideInternet.css'

const SlideInternet = () => {
  return (
    <>
      <div className="slide-internet-container">
        <FloatingLines
          enabledWaves={["middle", "bottom", "top"]}
          lineCount={8}
          lineDistance={8}
          bendRadius={12}
          bendStrength={-1.5}
          interactive={false}
          parallax={true}
          animationSpeed={0.8}
          linesGradient={["#00ffcc", "#000000", "#1a1b1a"]}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 sm:px-8">
          <div
            className="slide-internet-content inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border mb-4 sm:mb-6"
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0 slide-internet-dot"
            />
            Conectividad de alta velocidad
          </div>

          <h1
            className="slide-internet-title font-display font-extrabold text-center text-white leading-tight w-full max-w-5xl"
          >
            <TextType
              text={["Internet de alta velocidad", "Sin interrupciones", "Sin excusas!"]}
              typingSpeed={60}
              pauseDuration={1500}
              showCursor
              cursorClassName="font-light"
              texts={["", ""]}
              deletingSpeed={100}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
          </h1>
        </div>
      </div>
    </>
  )
}

export default SlideInternet