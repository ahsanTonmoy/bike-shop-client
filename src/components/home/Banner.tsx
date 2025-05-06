import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import img2 from "@/assets/Banner-image/image/bike-banner-2.jpg";
import img3 from "@/assets/Banner-image/image/bike-banner-3.jpg";
import img4 from "@/assets/Banner-image/image/bike-banner-4.jpg";
import img5 from "@/assets/Banner-image/image/bike-banner-5.jpg";
import img6 from "@/assets/Banner-image/image/bike-banner-6.jpg";
import img7 from "@/assets/Banner-image/image/bike-banner-7.jpg";
// import { useNavigate } from "react-router-dom";
// import { Button } from "../ui/button";
export default function HeroSlider() {
  // const navigate = useNavigate();

  return (
    <div className="container mx-auto">
      <div className="relative w-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-screen"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative gap-5">
              <div className="relative">
                {/* Image - background layer */}
                <img
                  src={img2}
                  alt="MT76 Featured Bike"
                  className="relative w-full z-100"
                />

                {/* Title over image */}
                <div className="absolute z-10 top-36 left-10 md:left-20 text-white">
                  <h2 className="text-4xl font-bold tracking-wide uppercase">
                    BIKE SHOP
                  </h2>
                  <h1 className="mt-2 text-6xl font-extrabold leading-tight lg:text-8xl">
                    MT76
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative gap-5">
              <div className="relative">
                {/* Image - background layer */}
                <img
                  src={img3}
                  alt="MT76 Featured Bike"
                  className="relative w-full z-100"
                />

                {/* Title over image */}
                <div className="absolute z-10 top-36 left-10 md:left-20 text-white">
                  <h2 className="text-4xl font-bold tracking-wide uppercase">
                    BIKE SHOP
                  </h2>
                  <h1 className="mt-2 text-6xl font-extrabold leading-tight lg:text-8xl">
                    MT76
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative gap-5">
              <div className="relative">
                {/* Image - background layer */}
                <img
                  src={img4}
                  alt="MT76 Featured Bike"
                  className="relative w-full z-100"
                />

                {/* Title over image */}
                <div className="absolute z-10 top-36 left-10 md:left-20 text-white">
                  <h2 className="text-4xl font-bold tracking-wide uppercase">
                    BIKE SHOP
                  </h2>
                  <h1 className="mt-2 text-6xl font-extrabold leading-tight lg:text-8xl">
                    MT76
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 4 */}
          <SwiperSlide>
            <div className="relative gap-5">
              <div className="relative">
                {/* Image - background layer */}
                <img
                  src={img5}
                  alt="MT76 Featured Bike"
                  className="relative w-full z-100"
                />

                {/* Title over image */}
                <div className="absolute z-10 top-36 left-10 md:left-20 text-white">
                  <h2 className="text-4xl font-bold tracking-wide uppercase">
                    BIKE SHOP
                  </h2>
                  <h1 className="mt-2 text-6xl font-extrabold leading-tight lg:text-8xl">
                    MT76
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 5 */}
          <SwiperSlide>
            <div className="relative gap-5">
              <div className="relative">
                {/* Image - background layer */}
                <img
                  src={img6}
                  alt="MT76 Featured Bike"
                  className="relative w-full z-100"
                />

                {/* Title over image */}
                <div className="absolute z-10 top-36 left-10 md:left-20 text-white">
                  <h2 className="text-4xl font-bold tracking-wide uppercase">
                    BIKE SHOP
                  </h2>
                  <h1 className="mt-2 text-6xl font-extrabold leading-tight lg:text-8xl">
                    MT76
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 6 */}
          <SwiperSlide>
            <div className="relative gap-5">
              <div className="relative">
                {/* Image - background layer */}
                <img
                  src={img7}
                  alt="MT76 Featured Bike"
                  className="relative w-full z-100"
                />

                {/* Title over image */}
                <div className="absolute z-10 top-36 left-10 md:left-20 text-white">
                  <h2 className="text-4xl font-bold tracking-wide uppercase">
                    BIKE SHOP
                  </h2>
                  <h1 className="mt-2 text-6xl font-extrabold leading-tight lg:text-8xl">
                    MT76
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
