import bikeImage7 from "@/assets/image/bike-7.jpg";
import { useNavigate } from "react-router-dom";

const BikeService = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="container px-6 mx-auto lg:py-10">
        <h2 className="text-3xl font-extrabold leading-tight text-center text-gray-900 md:text-5xl">
          Professional Bike Services
        </h2>
        <div className="flex items-center justify-center my-3">
          <div className="w-12 h-0.5 bg-red-700 mr-2"></div>
          <div className="w-3 h-3 rotate-45 bg-red-700"></div>
          <div className="w-12 h-0.5 bg-red-700 ml-2"></div>
        </div>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-center text-gray-500">
          Premium bike maintenance, repairs, and customizations handled by
          experienced mechanics — built for riders who expect the best.
        </p>

        <div className="flex flex-col-reverse items-center gap-10 mt-10 lg:flex-row">
          {/* Left - Content */}
          <div className="w-full space-y-5 lg:w-1/2">
            {[
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
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 transition-shadow border rounded-md hover:shadow-lg"
              >
                <span className="text-xl font-bold text-red-500">
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

            <button
              onClick={() => navigate("/bikes")}
              className="inline-block px-6 py-3 mt-6 text-sm font-semibold text-white transition bg-red-600 rounded-lg shadow-md hover:bg-red-700"
            >
              Browse Our Bikes
            </button>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center w-full lg:w-1/2">
            <img
              src={bikeImage7}
              alt="Bike Service"
              className="object-cover w-full h-auto max-w-md shadow-xl md:max-w-lg rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikeService;
