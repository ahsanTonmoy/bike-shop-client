import heroImg from "@/assets/image/bike-14.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative ">
      <div className="container flex flex-col-reverse items-center justify-between gap-5 px-10 mx-auto lg:gap-10 lg:flex-row-reverse">
        {/* Left Content */}
        <div className="w-full space-y-6 text-center lg:w-1/2 lg:text-left">
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            <span className="text-orange-500">Ride Better</span>, Ride Smarter
          </h1>
          <p className="pb-10 text-lg text-justify text-gray-600">
            Discover premium bikes, expert services, and the ultimate riding
            experience tailored for every cyclist.Premium bikes & expert service
            for a smoother, faster, and more confident ride—only at BikeStore.
          </p>
          <Link to="/bikes">
            <button className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white transition bg-orange-500 rounded-lg shadow-md hover:bg-orange-600">
              Explore Bikes <ArrowRight className="ml-2" />
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={heroImg}
            alt="Hero Bike"
            className="object-cover w-full g:w-1/2 rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
