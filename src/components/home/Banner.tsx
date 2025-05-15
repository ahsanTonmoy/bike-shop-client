import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import {
  default as img1,
  default as img6,
} from "@/assets/Banner-image/Wallpaper Bmw K R Bike (1).jpg";
import img2 from "@/assets/Banner-image/1401134.jpg";
import img4 from "@/assets/Banner-image/wp1906398-mv-agusta-wallpapers.jpg";
import img5 from "@/assets/Banner-image/2914395.jpg";
import {
  default as img3,
  default as img7,
} from "@/assets/Banner-image/Wallpaper Bmw K R Bike.jpg";
import SlideContent from "./SliderContent";

export default function HeroSlider() {
  return (
    <div className="container mx-auto">
      <div className="relative w-full max-h-screen ">
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
          className="mySwiper h-[70vh]"
        >
          {/* Slide  */}

          {slideData.map((slide, index) => (
            <SwiperSlide key={index}>
              <SlideContent
                h5={slide.h5}
                title={slide.title}
                subtitle={slide.subtitle}
                img={slide.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
const slideData = [
  {
    h5: "2023 Road King",
    title: "Power That Commands the Road",
    subtitle: "Rule every ride with precision and speed.",
    img: img1,
  },
  {
    h5: "Comfort Ride",
    title: "Where Comfort Meets Performance",
    subtitle: "Engineered for those who ride far and ride bold.",
    img: img2,
  },
  {
    h5: "Adventure Tour",
    title: "Embrace the Spirit of Adventure",
    subtitle: "Explore the world on two wheels, your way.",
    img: img3,
  },
  {
    h5: "Royal Drive",
    title: "Feel the Rush of Royal Power",
    subtitle: "The road is yours—own it with every ride.",
    img: img4,
  },
  {
    h5: "Bold & Stylish",
    title: "Ride in Supreme Style",
    subtitle: "Built for bold journeys and unforgettable moments.",
    img: img5,
  },
  {
    h5: "Bold & Stylish",
    title: "Ride in Supreme Style",
    subtitle: "Built for bold journeys and unforgettable moments.",
    img: img6,
  },
  {
    h5: "Bold & Stylish",
    title: "Ride in Supreme Style",
    subtitle: "Built for bold journeys and unforgettable moments.",
    img: img7,
  },
];
