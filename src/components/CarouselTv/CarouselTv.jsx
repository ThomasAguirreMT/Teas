import React, { useState, useEffect, useRef } from 'react'
import './CarouselTv.css'

import documentales from '../../assets/categorias/CATEGORIA_DOCUMENTALES.webp'
import entretenimiento from '../../assets/categorias/CATEGORIA_ENTRETENIMIENTO.webp'
import infantil from '../../assets/categorias/CATEGORIA_INFANTIL.webp'
import musica from '../../assets/categorias/CATEGORIA_MUSICA.webp'
import noticias from '../../assets/categorias/CATEGORIA_NOTICIAS.webp'
import peliculas from '../../assets/categorias/CATEGORIA_PELICULAS.webp'
import series from '../../assets/categorias/CATEGORIA_SERIES.webp'

const categories = [
    { src: documentales, label: 'Documentales' },
    { src: entretenimiento, label: 'Entretenimiento' },
    { src: infantil, label: 'Infantil' },
    { src: musica, label: 'Música' },
    { src: noticias, label: 'Noticias' },
    { src: peliculas, label: 'Películas' },
    { src: series, label: 'Series' },
]

const CarouselTv = () => {
    const [active, setActive] = useState(0)
    const trackRef = useRef(null)

    useEffect(() => {
        const id = setInterval(() => {
            setActive(prev => (prev + 1) % categories.length)
        }, 2500)
        return () => clearInterval(id)
    }, [])

    useEffect(() => {
        const track = trackRef.current
        if (!track) return
        const card = track.children[active]
        if (!card) return
        track.scrollTo({
            left: card.offsetLeft - (track.offsetWidth - card.offsetWidth) / 2,
            behavior: 'smooth',
        })
    }, [active])

    return (
        <div className="carousel-tv-wrapper">
            <section className="w-full py-4 sm:py-6 px-0">
                <div className="max-w-7xl mx-auto">
                    <div className="carousel-tv-track " ref={trackRef}>
                        {categories.map((cat, i) => (
                            <div
                                key={cat.label}
                                className={`mb-12 carousel-tv-card${i === active ? ' active' : ''}`}
                                onClick={() => setActive(i)}
                            >
                                <img src={cat.src} alt={cat.label} className="carousel-tv-img" />
                                <span className="carousel-tv-label">{cat.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="carousel-tv-dots">
                        {categories.map((_, i) => (
                            <button
                                key={i}
                                className={`carousel-tv-dot${i === active ? ' active' : ''}`}
                                onClick={() => setActive(i)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
  )
}

export default CarouselTv
