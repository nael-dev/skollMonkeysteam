import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const team1 = "https://res.cloudinary.com/dk8i5quxn/image/upload/v1791555862/Salvaje26-5767.jpg";
const team2 = "https://res.cloudinary.com/dk8i5quxn/image/upload/v1791555861/Salvaje26-2089.jpg";
const team3 = "https://res.cloudinary.com/dk8i5quxn/image/upload/v1791555859/Salvaje26-2051.jpg";
const team4 = "https://res.cloudinary.com/dk8i5quxn/image/upload/v1791555857/IMG_2213.jpg";



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