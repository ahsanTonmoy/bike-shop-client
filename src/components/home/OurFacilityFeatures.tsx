import { Bike, PackageCheck, Settings } from "lucide-react";
import OurFacilities from "./OurFacilities";

const OurFacilityFeatures = () => {
  return (
    <div className="container px-10 mx-auto mt-16">
      <div className="text-center ">
        <h5 className="text-center uppercase text-orange-500">
          Your ride start here
        </h5>
        <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
          Our facilities & features
        </h2>
        <div className="flex items-center justify-center p-4">
          <div className="w-12 h-0.5 bg-orange-500 mr-2"></div>
          <div className="w-3 h-3 rotate-45 bg-orange-500"></div>
          <div className="w-12 h-0.5 bg-orange-500 ml-2"></div>
        </div>
        <p className="max-w-xl mx-auto mt-3 text-lg text-gray-500 bg:">
          Discover our top-rated bikes – handpicked for performance, style, and
          innovation.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-16 text-center border-t border-b divide-x divide-gray-200 md:grid-cols-3">
        {/* Service 1 */}
        <div className="p-8 shadow hover:shadow-lg">
          <div className="flex justify-center mb-4">
            <Settings className="w-16 h-16 text-orange-500" />
          </div>
          <h3 className="mb-2 text-lg font-semibold">Complete Overhaul</h3>
          <p className="text-sm text-gray-600">
            We provide a full bike overhaul including drivetrain cleaning, brake
            and gear adjustments, and overall performance tuning to restore your
            bike to peak condition.
          </p>
        </div>

        {/* Service 2 */}
        <div className="p-8 shadow hover:shadow-lg">
          <div className="flex justify-center mb-4">
            <PackageCheck className="w-16 h-16 text-orange-500" />
          </div>
          <h3 className="mb-2 text-lg font-semibold">
            Custom Parts & Accessories
          </h3>
          <p className="text-sm text-gray-600">
            Explore a wide range of custom bike parts and premium accessories
            tailored to your style and performance needs, from handlebars to
            performance saddles.
          </p>
        </div>

        {/* Service 3 */}
        <div className="p-8 shadow hover:shadow-lg">
          <div className="flex justify-center mb-4 ">
            <Bike className="w-16 h-16 text-orange-500" />
          </div>
          <h3 className="mb-2 text-lg font-semibold">
            Bike Fitting & Delivery
          </h3>
          <p className="text-sm text-gray-600">
            Enjoy professional bike fitting for optimal comfort and performance,
            plus convenient delivery right to your doorstep.
          </p>
        </div>
      </div>
      <OurFacilities />
    </div>
  );
};

export default OurFacilityFeatures;
