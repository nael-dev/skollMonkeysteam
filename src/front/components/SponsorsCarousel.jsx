
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


const sponsors = [
    {
        name: "Paco Gálvez",
        logo: "https://res.cloudinary.com/dk8i5quxn/image/upload/v1791569821/paco.jpg",
        url: "https://www.recambiospacogalvez.es/",
    },
    {
        name: "Corex Lab",
        logo: "https://res.cloudinary.com/dk8i5quxn/image/upload/v1791569820/corex.png",
        url: "https://www.corexfitnesslab.com/",
    },
    {
        name: "Patrocinador 3",
        logo: "https://placehold.co/240x120/ffffff/222222?text=SPONSOR+3",
        url: "https://www.google.com",
    },
    {
        name: "Patrocinador 4",
        logo: "https://placehold.co/240x120/ffffff/222222?text=SPONSOR+4",
        url: "https://www.google.com",
    },
    {
        name: "Patrocinador 5",
        logo: "https://placehold.co/240x120/ffffff/222222?text=SPONSOR+5",
        url: "https://www.google.com",
    },
];

const SponsorsCarousel = () => {
    return (
        <section className="sponsors-section">
            <div className="container">
                <div className="sponsors-heading">
                    <span className="sponsors-line"></span>
                    <h2>NUESTROS PATROCINADORES</h2>
                    <span className="sponsors-line"></span>
                </div>

                <p className="sponsors-subtitle">
                    Gracias por formar parte de la familia Skollmonkeys
                </p>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={25}
                    slidesPerView={2}
                    loop={true}
                    speed={700}
                    autoplay={{
                        delay: 2200,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        576: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1200: { slidesPerView: 5 },
                    }}
                    className="sponsors-swiper"
                >
                    {sponsors.map((sponsor) => (
                        <SwiperSlide key={sponsor.name}>
                            <a
                                className="sponsor-card"
                                href={sponsor.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visitar ${sponsor.name}`}
                            >
                                <img
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    loading="lazy"
                                />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default SponsorsCarousel;
