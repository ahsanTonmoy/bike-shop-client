import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import img1 from "@/assets/Banner-image/image/bike-banner-1.jpg";
import img2 from "@/assets/Banner-image/image/bike-banner-2.jpg";
import img3 from "@/assets/Banner-image/image/bike-banner-3.jpg";
import img4 from "@/assets/Banner-image/image/bike-banner-4.jpg";
import img5 from "@/assets/Banner-image/image/bike-banner-5.jpg";
import img6 from "@/assets/Banner-image/image/bike-banner-6.jpg";
import img7 from "@/assets/Banner-image/image/bike-banner-7.jpg";

export default function HeroSlider() {
  return (
    <div className="container mx-auto">
      <div className="relative w-full h-screen">
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
          className="mySwiper h-[80vh]"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src={img1}
                alt="Royal Enfield"
                className="object-cover w-full h-full opacity-70"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white bg-black bg-opacity-50">
                <h1 className="text-4xl font-bold md:text-5xl animate-fadeIn">
                  Power That Commands the Road
                </h1>
                <p className="mt-2 text-lg delay-200 md:text-xl animate-fadeIn">
                  Rule every ride with precision and speed.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src={img2}
                alt="Powerful Performance"
                className="object-cover w-full h-full opacity-70"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white bg-black bg-opacity-50">
                <h1 className="text-4xl font-bold md:text-5xl animate-fadeIn">
                  Where Comfort Meets Performance
                </h1>
                <p className="mt-2 text-lg delay-200 md:text-xl animate-fadeIn">
                  Engineered for those who ride far and ride bold.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src={img3}
                alt="Ultimate Comfort"
                className="object-cover w-full h-full opacity-70"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white bg-black bg-opacity-50">
                <h1 className="text-4xl font-bold md:text-5xl animate-fadeIn">
                  Embrace the Spirit of Adventure
                </h1>
                <p className="mt-2 text-lg delay-200 md:text-xl animate-fadeIn">
                  Explore the world on two wheels, your way.
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 4 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src={img4}
                alt="Ultimate Comfort"
                className="object-cover w-full h-full opacity-70"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white bg-black bg-opacity-50">
                <h1 className="text-4xl font-bold md:text-5xl animate-fadeIn">
                  Feel the Rush of Royal Power
                </h1>
                <p className="mt-2 text-lg delay-200 md:text-xl animate-fadeIn">
                  The road is yours—own it with every ride.
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 4
          <SwiperSlide>
            <h1 className="text-4xl font-bold md:text-5xl animate-fadeIn">
              Feel the Rush of Royal Power
            </h1>
            <p className="mt-2 text-lg delay-200 md:text-xl animate-fadeIn">
              The road is yours—own it with every ride.
            </p>
          </SwiperSlide> */}

          {/* Slide 5 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src={img5}
                alt="Powerful Performance"
                className="object-cover w-full h-full opacity-70"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white bg-black bg-opacity-50">
                <h1 className="text-4xl font-bold md:text-5xl animate-fadeIn">
                  Ride in Supreme Style
                </h1>
                <p className="mt-2 text-lg delay-200 md:text-xl animate-fadeIn">
                  Built for bold journeys and unforgettable moments.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 6 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src={img6}
                alt="Ultimate Comfort"
                className="object-cover w-full h-full opacity-70"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white bg-black bg-opacity-50">
                <h1 className="text-4xl font-bold md:text-5xl animate-fadeIn">
                  Precision in Every Detail
                </h1>
                <p className="mt-2 text-lg delay-200 md:text-xl animate-fadeIn">
                  Designed with passion, engineered for excellence.
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 7 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src={img7}
                alt="Ultimate Comfort"
                className="object-cover w-full h-full opacity-70"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white bg-black bg-opacity-50">
                <h1 className="text-4xl font-bold md:text-5xl animate-fadeIn">
                  Ride with Comfort & Style
                </h1>
                <p className="mt-2 text-lg delay-200 md:text-xl animate-fadeIn">
                  Designed for ultimate comfort on long journeys.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
