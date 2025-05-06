import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Arif Rahman",
    quote:
      "Bike Shop delivered my mountain bike in perfect condition within 3 days. Excellent customer service and fast support!",
    rating: 5,
  },
  {
    name: "Nusrat Jahan",
    quote:
      "I love their collection and the return process was smooth when I ordered the wrong size. Highly recommended.",
    rating: 4,
  },
  {
    name: "Mahmudul Hasan",
    quote:
      "Hands down the best online bike store in Bangladesh. Their repair team is very professional.",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <div className="py-12 px-4 md:px-20 max-w-7xl mx-auto">
      {/*  */}
      <div className="py-12 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
          Customer review
        </h2>
        <div className="flex items-center justify-center p-4">
          <div className="w-12 h-0.5 bg-[#FF0000] mr-2"></div>
          <div className="w-3 h-3 rotate-45 bg-[#FF0000]"></div>
          <div className="w-12 h-0.5 bg-[#FF0000] ml-2"></div>
        </div>
        {/* <p className="max-w-xl mx-auto mt-3 text-lg text-gray-500">
              Discover our top-rated bikes – handpicked for performance, style,
              and innovation.
            </p> */}
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="h-full p-6 bg-white border rounded shadow">
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="italic text-gray-700">“{testimonial.quote}”</p>
              <h4 className="mt-4 font-semibold text-primary">
                — {testimonial.name}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
