import bikeimg19 from "@/assets/image/bike-19.jpg";
import bikeimg20 from "@/assets/image/bike-20.jpg";
import bikeimg21 from "@/assets/image/bike-21.jpg";
import BikeService from "@/components/home/BikeService";
import { Helmet } from "react-helmet-async";

export default function Services() {
  const services = [
    {
      title: "Custom Bike Design",
      description:
        "Get a personalized bike that reflects your personality. Choose from unique designs, parts, and colors.",
      image: bikeimg20,
    },
    {
      title: "Repair & Maintenance",
      description:
        "Keep your bike in top condition with expert repair and maintenance services by certified technicians.",
      image: bikeimg21,
    },
    {
      title: "Performance Upgrades",
      description:
        "Enhance your bike's performance with premium parts and accessories for speed and endurance.",
      image: bikeimg19,
    },
  ];

  return (
    <div className="py-20 bg-matteWhite text-darkBlue">
      {/* title */}
      <div className="">
        <Helmet>
          <title>Services - Bike Shop || Online Delivary</title>
        </Helmet>
      </div>
      {/* bike service */}
      <div className="">
        {/* Header */}
        <div className="text-center">
          <h1 className="py-3 text-4xl font-bold text-crimsonRed animate-fade-in">
            Our Services
          </h1>
          <div className="flex items-center justify-center my-3">
            <div className="w-12 h-0.5 bg-orange-500 mr-2"></div>
            <div className="w-3 h-3 rotate-45 bg-orange-500"></div>
            <div className="w-12 h-0.5 bg-orange-500 ml-2"></div>
          </div>
          <p className="w-1/2 mx-auto mt-5 mb-10 text-lg text-gray-600">
            We provide the best solutions for your biking needs. Whether you're
            looking for repairs, customizations, or rentals, we’ve got you
            covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 px-6 mt-10 md:grid-cols-2 lg:grid-cols-3 lg:px-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="overflow-hidden transition duration-300 transform bg-white shadow-lg group rounded-2xl hover:-translate-y-2"
            >
              {/* Service Image */}
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-56"
                />
                <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-b from-transparent to-black opacity-30 group-hover:opacity-50"></div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h2 className="mb-2 text-xl font-semibold text-black">
                  {service.title}
                </h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  */}
      <div className="">
        <BikeService />
      </div>
    </div>
  );
}
