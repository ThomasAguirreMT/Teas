import "./EventSection.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

import event1 from "../../assets/events/event1.jpeg";
import event2 from "../../assets/events/event2.jpeg";
import event3 from "../../assets/events/event3.jpeg";
import event4 from "../../assets/events/event4.jpeg";
import event5 from "../../assets/events/event5.jpeg";
import event6 from "../../assets/events/event6.jpeg";
import event7 from "../../assets/events/event7.jpeg";
import event8 from "../../assets/events/event8.jpeg";
import event9 from "../../assets/events/event9.jpeg";
import event11 from "../../assets/events/event11.jpeg";
import event12 from "../../assets/events/event12.jpeg";
import event13 from "../../assets/events/event13.jpeg";
import event14 from "../../assets/events/event14.jpeg";
import event15 from "../../assets/events/event15.jpeg";
import event16 from "../../assets/events/event16.jpeg";

const events = [
    {
        image: event1,
        tag: "Comunidad",
        title: "Festival Comunitario TEAS",
        description:
            "Un espacio para reunir familias, compartir experiencias y fortalecer la conexión con nuestra comunidad."
    },
    {
        image: event2,
        tag: "Conectividad",
        title: "Entrega de Internet Rural",
        description:
            "Llevamos conectividad confiable a sectores que hoy necesitan más oportunidades digitales."
    },
    {
        image: event3,
        tag: "Educación",
        title: "Actividades Educativas",
        description:
            "Creamos experiencias tecnológicas para inspirar a niños y jóvenes a aprender y crecer."
    },
    {
        image: event4,
        tag: "Integración",
        title: "Integración Comunitaria",
        description:
            "Compartimos jornadas llenas de cultura, entretenimiento y cercanía con nuestros usuarios."
    },
    {
        image: event5,
        tag: "Expansión",
        title: "Cobertura en Nuevas Zonas",
        description:
            "Seguimos expandiendo nuestra red para conectar más hogares y comunidades."
    },
    {
        image: event6,
        tag: "Comunidad",
        title: "Experiencias para la Comunidad",
        description:
            "Cada actividad fortalece los lazos entre tecnología, familias y desarrollo social."
    },
    {
        image: event7,
        tag: "Social",
        title: "Compromiso Social",
        description:
            "Trabajamos junto a la comunidad impulsando espacios de apoyo y participación."
    },
    {
        image: event8,
        tag: "Tecnología",
        title: "Tecnología para Todos",
        description:
            "Acercamos herramientas digitales que generan nuevas oportunidades para las personas."
    },
    {
        image: event9,
        tag: "Impacto",
        title: "Conectividad con Impacto",
        description:
            "Nuestra misión es transformar vidas a través de internet estable y accesible."
    },
    {
        image: event11,
        tag: "Jornadas",
        title: "Jornadas Comunitarias",
        description:
            "Creamos encuentros donde la tecnología y la comunidad avanzan de la mano."
    },
    {
        image: event12,
        tag: "Crecimiento",
        title: "Creciendo con la Comunidad",
        description:
            "Acompañamos el desarrollo local llevando conexión y experiencias positivas."
    },
    {
        image: event13,
        tag: "Innovación",
        title: "Innovación Cercana",
        description:
            "Impulsamos iniciativas que acercan la innovación a cada rincón de la región."
    },
    {
        image: event14,
        tag: "Familias",
        title: "Familias Conectadas",
        description:
            "Creemos en una conectividad que une personas, oportunidades y sueños."
    },
    {
        image: event15,
        tag: "Regional",
        title: "Presencia Regional",
        description:
            "Seguimos construyendo una red sólida para conectar más comunidades cada día."
    },
    {
        image: event16,
        tag: "Empresas",
        title: "Eventos Empresariales",
        description:
            "Generamos alianzas estratégicas que impulsan el crecimiento tecnológico regional."
    }
];

const EventSection = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const total = events.length;

    const pad = (n) => String(n).padStart(2, "0");

    return (
        <section className="events">

            <div className="events-header">

                <div>
                    

                    <h2 className="events-title">
                        Conectando comunidades
                        <br />
                        con tecnología real
                    </h2>
                </div>

                <div className="events-counter">

                    <strong>{pad(activeIndex + 1)}</strong>

                    <span>/</span>

                    {pad(total)}

                </div>

            </div>

            <div className="events-progress">

                <div
                    className="events-progress-fill"
                    style={{
                        width: `${((activeIndex + 1) / total) * 100}%`
                    }}
                />

            </div>

            <Swiper
                modules={[Autoplay]}

                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex);
                }}

                loop={true}

                autoplay={{
                    delay: 3200,
                    disableOnInteraction: false,
                }}

                speed={1200}

                grabCursor={true}

                centeredSlides={false}

                slidesPerView={1.05}

                spaceBetween={24}

                breakpoints={{
                    768: {
                        slidesPerView: 1.15,
                    },

                    1200: {
                        slidesPerView: 1.28,
                    },
                }}

                className="events-swiper"
            >

                {events.map((event, index) => (

                    <SwiperSlide key={index}>

                        <div className="event-card">

                            <img
                                src={event.image}
                                alt={event.title}
                                className="event-image"
                            />

                            <div className="event-overlay">

                                <div className="event-content">

                                    <span className="event-tag">
                                        {event.tag}
                                    </span>

                                    <h3 className="event-title-card">
                                        {event.title}
                                    </h3>

                                    <p className="event-description">
                                        {event.description}
                                    </p>

                                </div>

                            </div>

                        </div>

                    </SwiperSlide>

                ))}

            </Swiper>

        </section>
    );
};

export default EventSection;