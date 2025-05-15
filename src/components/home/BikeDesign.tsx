import bikeImage24 from "@/assets/Banner-image/1398131.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function BikeDesign() {
  return (
    <section className="overflow-hidden h-[70%] xl:px-0 text-white container mx-auto opacity-90">
      <div className="relative gap-5  ">
        <div className="relative w-full">
          {/* Image - background layer */}
          <img
            src={bikeImage24}
            alt="MT76 Featured Bike"
            className="relative z-10 hidden w-full opacity-60 lg:block "
          />

          {/* Title over image */}
          <div className="absolute -z-0 top-36 left-10">
            <h2 className="text-4xl font-bold tracking-wide uppercase">
              BIKE SHOP
            </h2>
            <h1 className="mt-2 text-6xl font-extrabold leading-tight lg:text-8xl">
              MT76
            </h1>
          </div>
        </div>

        {/* Offer Section */}
        <div className="absolute z-50 right-10 bottom-28 w-96">
          <h2 className="mb-4 text-3xl font-bold uppercase">
            For Popular Bikes
          </h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            <span className="font-bold text-white">Bike Shop</span> is the
            latest and greatest place to grab high-quality motorcycles. We offer
            custom bikes, great prices, and even trade-ins. Discover amazing
            deals and get riding today.
          </p>
          <h3 className="text-2xl font-bold uppercase">
            Now At <span className="text-3xl bg-orange-500 ">$1250</span>
          </h3>

          <Link to="/bikes">
            <button className="flex px-6 py-3 mt-6 text-sm font-semibold text-white transition bg-orange-500 rounded-lg shadow-md hover:bg-red-700">
              See More
              <ArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
