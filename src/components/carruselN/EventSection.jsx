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
import baile2 from "../../assets/sobrenosotros/baile2.jpg";
import niñosreunidos from "../../assets/sobrenosotros/niñosreunidos.jpg";


const events = [
    {
    image: event1,
    title: "Entrega de Regalos 2024",
    description:
        "En nuestra primera jornada social logramos beneficiar a más de 400 niños, llevando alegría, regalos y momentos inolvidables para las familias de la comunidad."
},
{
    image: event2,
    title: "Integración Comunitaria",
    description:
        "Unimos personas, colectivos y organizaciones con un mismo propósito: regalar sonrisas y fortalecer el sentido de comunidad en nuestro barrio."
},
{
    image: event3,
    title: "Entrega de Más de 1.000 Regalos",
    description:
        "Durante nuestra segunda edición entregamos más de 1.000 regalos para los niños del sector, consolidando esta actividad como uno de nuestros proyectos sociales más importantes."
},
{
    image: event4,
    title: "Show Infantil y Recreación",
    description:
        "Los niños disfrutaron de recreacionistas, inflables, trampolines y pintucaritas gracias al apoyo de Crazy Party Eventos y su increíble equipo de entretenimiento."
},
{
    image: event5,
    title: "Apoyo de Caminantes Visuales",
    description:
        "El colectivo Caminantes Visuales acompañó toda la logística del evento, promoviendo la transformación social mediante arte, educación y comunicación comunitaria."
},
{
    image: baile2,
    title: "Arte Urbano con Soul Squad Crew",
    description:
        "Soul Squad Crew se unió con presentaciones de break dance, inspirando a niños y jóvenes a descubrir nuevas formas de expresión artística y aprovechamiento del tiempo libre."
},
{
    image: event8,
    title: "Compromiso con el Barrio",
    description:
        "Trabajamos constantemente para devolverle a nuestra comunidad parte de todo el apoyo y confianza que hemos recibido a lo largo de nuestro crecimiento."
},
{
    image: event7,
    title: "Rifas y Premiaciones",
    description:
        "Como agradecimiento a nuestros clientes realizamos rifas de electrodomésticos, televisores y mensualidades gratuitas para más de 15 usuarios."
},
{
    image: event9,
    title: "Empresas que Transforman",
    description:
        "Gracias al apoyo de empresas aliadas y personas dentro y fuera del país seguimos construyendo iniciativas que generan impacto positivo en nuestra comunidad."
},
{
    image: event11,
    tag: "Jornadas",
    title: "Tradición para los Niños",
    description:
        "Cada entrega de regalos busca convertirse en una tradición que mantenga viva la ilusión y la sonrisa de los niños de nuestro barrio."
},
{
    image: event12,
    title: "Del Barrio y Para el Barrio",
    description:
        "Nuestro compromiso nace desde la comunidad y para la comunidad, trabajando siempre con cercanía, gratitud y sentido social."
},
{
    image: event13,
    title: "Cultura y Comunidad",
    description:
        "Creamos espacios donde la cultura, el entretenimiento y la unión familiar fortalecen el tejido social de nuestra localidad."
},
{
    image: event14,
    title: "Sonrisas que Inspiran",
    description:
        "Cada actividad realizada refleja el cariño y la dedicación con la que buscamos generar recuerdos positivos para cientos de niños y familias."
},
{
    image: event15,
    title: "Creciendo Junto a la Comunidad",
    description:
        "Seguimos ampliando nuestras iniciativas sociales con el objetivo de llegar cada año a más hogares, niños y familias."
},
{
    image: event16,
    title: "Lo Hacemos con el Corazón",
    description:
        "TEAS continuará impulsando jornadas sociales y comunitarias porque creemos firmemente en el mensaje: ‘Del barrio y para el barrio’."
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