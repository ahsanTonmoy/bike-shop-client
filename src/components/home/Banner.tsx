// Banner.tsx
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import img2 from "@/assets/Banner-image/image/bike-banner-2.jpg";
import img3 from "@/assets/Banner-image/image/bike-banner-3.jpg";
import img4 from "@/assets/Banner-image/image/bike-banner-4.jpg";
import img5 from "@/assets/Banner-image/image/bike-banner-5.jpg";
import img6 from "@/assets/Banner-image/image/bike-banner-6.jpg";
import img7 from "@/assets/Banner-image/image/bike-banner-7.jpg";

const slides = [img2, img3, img4, img5, img6, img7];

export default function Banner() {
  return (
    <div className="w-full relative">
      {/* Swiper Slider */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        touchStartPreventDefault={false}
        className="mySwiper h-[80vh]"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={img}
                alt={`Bike banner ${index + 1}`}
                className="w-full h-[80vh] object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-6 sm:px-12 md:px-20">
                <div className="max-w-2xl text-white">
                  <h2 className="text-2xl sm:text-4xl font-semibold uppercase tracking-widest">
                    Bike Shop
                  </h2>
                  <h1 className="mt-2 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
                    MT76
                  </h1>
                  <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200">
                    Discover high-performance bikes built for speed, comfort,
                    and reliability.
                  </p>
                  <button className="mt-6 px-6 py-3 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 active:scale-95 transition text-white rounded-lg text-base font-medium shadow-md">
                    Explore Collection
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Sticky CTA on Mobile */}
      <div className="fixed bottom-4 left-0 right-0 px-4 md:hidden z-50">
        <button className="w-full bg-blue-600 text-white py-3 rounded-xl shadow-lg hover:bg-blue-700 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
}
