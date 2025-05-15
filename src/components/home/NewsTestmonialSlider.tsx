import img8 from "@/assets/Banner-image/image/bike- banner.8.jpg";
import safetyHelment1 from "@/assets/images/home/saety-helmet-4.png";
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const NewsTestmonialSlider = () => {
  return (
    <div className="relative w-full bg-[#000] text-white flex flex-col md:flex-row items-center overflow-hidden">
      {/* Left Side Image */}
      <div className="w-full -top-10 left-0 md:w-1/3 h-[600px] absolute">
        <img
          src={safetyHelment1}
          alt="Cyclist"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Testimonial Content */}
      <div className="relative z-10 w-full px-6 py-12 space-y-6 text-center md:w-1/3">
        <FaQuoteLeft className="mx-auto text-4xl text-orange-500" />
        <p className="text-lg font-light leading-relaxed">
          “Good selection of bikes and cycling accessories and great service
          with professional staff. I always enjoy visiting the store.”
        </p>
        <p className="text-sm font-medium text-gray-400">- Nicholas Portman</p>

        {/* Navigation Arrows (Placeholder) */}
        <div className="flex justify-center gap-6 mt-6">
          <button className="transition hover:text-orange-500">
            <IoIosArrowBack size={24} />
          </button>
          <button className="transition hover:text-orange-500">
            <IoIosArrowForward size={24} />
          </button>
        </div>
      </div>

      {/* Right Side Background Image */}
      <div className="w-full md:w-1/3 h-[600px] relative hidden md:block">
        <img
          src={img8}
          alt="Bike Detail"
          className="object-cover w-full h-full opacity-20"
        />
      </div>
    </div>
  );
};

export default NewsTestmonialSlider;
