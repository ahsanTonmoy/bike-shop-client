import bikeImage from "@/assets/Banner-image/wp1906398-mv-agusta-wallpapers.jpg";
import SsafetyHelmet1 from "@/assets/Banner-image/image/bike- banner.8.jpg";
import { Link } from "react-router-dom";

const OurFacilities = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Kids Bike Section */}
        <div className="relative w-full overflow-hidden rounded-t-lg rounded-b-none rounded-r-none h-96 group">
          <img
            src={bikeImage}
            alt="bike-banner"
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-0 left-0 flex flex-col items-start justify-center w-full h-full p-8 text-white bg-black bg-opacity-30">
            <h1 className="mb-2 text-4xl font-bold">Kids Bike</h1>
            <p className="mb-4">Close-out pricing on dozens of products</p>
            <Link to="/bikes">
              <button className="px-6 py-3 text-sm font-semibold text-white uppercase transition bg-orange-500 rounded-lg shadow-md hover:bg-orange-600">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        {/* Accessories Section */}
        <div className="relative w-full overflow-hidden rounded-t-lg rounded-b-none rounded-r-none h-96 group">
          <img
            src={SsafetyHelmet1}
            alt="helmet-banner"
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-0 left-0 flex flex-col items-start justify-center w-full h-full p-8 text-white bg-black bg-opacity-30">
            <h1 className="mb-2 text-4xl font-bold">Accessories</h1>
            <p className="mb-4">Close-out pricing on dozens of products</p>
            <Link to="/bikes">
              <button className="px-6 py-3 text-sm font-semibold text-white uppercase transition bg-orange-500 rounded-lg shadow-md hover:bg-orange-600">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFacilities;
