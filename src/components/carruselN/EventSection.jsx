import "./EventSection.css";

import { Swiper, SwiperSlide } from "swiper/react";

import {
    Autoplay,
    Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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
        title: "Festival Comunitario TEAS",
        description:
            "Conectando familias, cultura y tecnología en cada comunidad."
    },
    {
        image: event2,
        title: "Entrega de Internet Rural",
        description:
            "Llevando conectividad de alta velocidad a nuevas zonas."
    },
    {
        image: event3,
        title: "Actividades Educativas",
        description:
            "Impulsando oportunidades digitales para niños y jóvenes."
    },
 
    {
        image: event4,
        title: "Actividades Educativas",
        description:
            "Impulsando oportunidades digitales para niños y jóvenes."
    },
    {
        image: event5,
        title: "Actividades Educativas",
        description:
            "Impulsando oportunidades digitales para niños y jóvenes."
    },
    {
        image: event6,
        title: "Actividades Educativas",
        description:
            "Impulsando oportunidades digitales para niños y jóvenes."
    },
    {
        image: event7,
        title: "Actividades Educativas",
        description:
            "Impulsando oportunidades digitales para niños y jóvenes."
    },
        {
        image: event8,
        title: "Actividades Educativas",
        description:
            "Impulsando oportunidades digitales para niños y jóvenes."
    },
       {
        image: event9,
        title: "Actividades Educativas",
        description:
            "Impulsando oportunidades digitales para niños y jóvenes."
    },
           {
        image: event11,
        title: "Actividades Educativas",
        description:
            "Impulsando oportunidades digitales para niños y jóvenes."
    },
       {
        image: event12,
        title: "Actividades Educativas",
        description:
            "Impulsando oportunidades digitales para niños y jóvenes."
    },
       {
        image: event13,
        title: "Actividades Educativas",
        description:
            "Impulsando oportunidades digitales para niños y jóvenes."
    },
           {
        image: event14,
        title: "Actividades Educativas",
        description:
            "Impulsando oportunidades digitales para niños y jóvenes."
    },
           {
        image: event15,
        title: "Actividades Educativas",
        description:
            "Impulsando oportunidades digitales para niños y jóvenes."
    },




    {
        image: event8,
        title: "Eventos Empresariales",
        description:
            "Fortaleciendo alianzas y crecimiento regional."
    }

];

const EventSection = () => {
    return (
        <section className="events">

            <div className="events-header">

                <h1 className="events-title">

                    Internet que transforma comunidades
                </h1>

            </div>

            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1.2}
                centeredSlides={true}
                loop={true}
                speed={1200}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 1.4,
                    },
                    1200: {
                        slidesPerView: 1.8,
                    },
                }}
                className="events-swiper"
            >

                {events.map((event, index) => (

                    <SwiperSlide key={index}>

                        <div className="event-card">

                            <img src={event.image} alt={event.title} />

                            <div className="event-overlay">

                                <div className="event-content">

                                    <h3>{event.title}</h3>

                                    <p>{event.description}</p>

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