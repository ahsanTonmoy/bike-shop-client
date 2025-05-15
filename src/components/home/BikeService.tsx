import bikeImage7 from "@/assets/image/bike-7.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BikeService = () => {
  return (
    <section className="container py-16 mx-auto bg-white">
      <div className="px-10 ">
        <h5 className="text-center text-orange-500">maintenance & repairs</h5>
        <h2 className="text-3xl font-extrabold leading-tight text-center text-gray-900 md:text-5xl">
          Professional Bike Services
        </h2>
        <div className="flex items-center justify-center my-3">
          <div className="w-12 h-0.5 bg-orange-500 mr-2"></div>
          <div className="w-3 h-3 rotate-45 bg-orange-500"></div>
          <div className="w-12 h-0.5 bg-orange-500 ml-2"></div>
        </div>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-center text-gray-500">
          Premium bike maintenance, repairs, and customizations handled by
          experienced mechanics — built for riders who expect the best.
        </p>

        <div className="flex flex-col-reverse items-center gap-10 mt-10 lg:flex-row">
          {/* Left - Content */}
          <div className="w-full h-full space-y-5 lg:w-1/2">
            {services.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 ">
                <span className="text-xl font-bold text-orange-500">
                  {item.number}
                </span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}

            <Link to="/bikes">
              <button className="flex px-6 py-3 mt-6 text-sm font-semibold text-white transition bg-orange-500 rounded-lg shadow-md hover:bg-orange-600">
                Browse Our Bikes
                <ArrowRight />
              </button>
            </Link>
          </div>

          {/* Right - Image */}

          <img
            src={bikeImage7}
            alt="Bike Service"
            className="object-cover w-full rounded-xl hover:shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
const services = [
  {
    number: "01.",
    title: "Performance Tune-Ups",
    desc: "Boost efficiency and smoothness with expert tuning designed for peak performance.",
  },
  {
    number: "02.",
    title: "Installation & Upgrades",
    desc: "From brakes to drivetrains, we install components with precision and care.",
  },
  {
    number: "03.",
    title: "Custom Bike Fittings",
    desc: "Ensure ultimate comfort and posture with personalized bike fitting sessions.",
  },
  {
    number: "04.",
    title: "Free Pickup & Delivery",
    desc: "Schedule repairs and enjoy doorstep service — quick, easy, and free.",
  },
];

export default BikeService;
