import bikeImage24 from "@/assets/image/bike-24.jpg";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export default function BikeDesign() {
  const navigate = useNavigate();
  return (
    <section className="overflow-hidden bg-[#010308] text-white container mx-auto">
      <div className="relative gap-5 px-10 py-10">
        <div className="relative w-[1200px]">
          {/* Image - background layer */}
          <img
            src={bikeImage24}
            alt="MT76 Featured Bike"
            className="relative w-full z-100"
          />

          {/* Title over image */}
          <div className="absolute z-10 top-36 left-10">
            <h2 className="text-4xl font-bold tracking-wide uppercase">
              BIKE SHOP
            </h2>
            <h1 className="mt-2 text-6xl font-extrabold leading-tight lg:text-8xl">
              MT76
            </h1>
          </div>
        </div>

        {/* Offer Section */}
        <div className="absolute z-20 right-10 bottom-28 w-96">
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
            Now At <span className="text-3xl bg-red-600 ">$1250</span>
          </h3>
          <p className="mt-1 text-sm font-semibold text-gray-400">
            35% Discount
          </p>

          <Button
            onClick={() => navigate("/bikes")}
            className="px-6 py-2 mt-6 bg-[red-] text-white font-bold  bg-red-600 rounded-lg shadow-md hover:bg-red-700"
          >
            See More
          </Button>
        </div>
      </div>
    </section>
  );
}
