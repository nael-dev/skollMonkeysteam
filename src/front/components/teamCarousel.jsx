import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import team1 from "../assets/img/team-1.jpg";
import team2 from "../assets/img/team-2.jpg";
import team3 from "../assets/img/team-3.jpg";
import team4 from "../assets/img/team-4.jpg";

export const TeamCarousel = () => {

    const photos = [
        team1,
        team2,
        team3,
        team4
    ];

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
        >
            {photos.map((photo, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={photo}
                        alt={`Foto del equipo ${index + 1}`}
                        className="team-image"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};