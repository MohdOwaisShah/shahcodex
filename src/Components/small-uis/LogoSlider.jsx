import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../components-styles/LogoSlider.css";

// Sample logos - replace with your actual logo imports
const logos = [
  { id: 1, name: "Logo 1", src: "/css-logo.png" },
  { id: 2, name: "Logo 2", src: "/shopify-logo.png" },
  { id: 3, name: "Logo 3", src: "/wordpress-logo.png" },
  { id: 4, name: "Logo 4", src: "/sql-logo.png" },
  { id: 5, name: "Logo 5", src: "/express-logo.png" },
  { id: 6, name: "Logo 6", src: "/node-logo.png" },
  { id: 7, name: "Logo 7", src: "/mongodb-logo.png" },
  { id: 8, name: "Logo 8", src: "/next-logo.png" },
  { id: 9, name: "Logo 9", src: "/react-logo.png" },
  { id: 10, name: "Logo 10", src: "/ts-logo.png" },
  { id: 10, name: "Logo 10", src: "/js-logo.png" },
  { id: 10, name: "Logo 10", src: "/html-logo.png" },
];

const LogoSlider = () => {
  return (
    <div className="logo-slider-container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={4000}
        freeMode={true}
        allowTouchMove={false}
        breakpoints={{
          320: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 10,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 10,
            spaceBetween: 5,
          },
        }}
        className="logo-swiper"
      >
        {logos.map((logo, i) => (
          <SwiperSlide key={i}>
            <div className="logo-item">
              <div className="logo-image-wrapper">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="logo-image"
                  onError={(e) => {
                    // Fallback for missing images
                    e.target.onerror = null;
                    e.target.src = `/Images/about-us${logo.src}`;
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSlider;
