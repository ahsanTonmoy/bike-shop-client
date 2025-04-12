import { Helmet } from "react-helmet-async";
import aboutImage from "../assets/image/bike-23.jpg";

export default function About() {
  return (
    <div className="py-12">
      <div className="">
        <Helmet>
          <title>About - Bike Shop || Online Delivary</title>
        </Helmet>
      </div>
      <div className="container px-4 mx-auto">
        <div className="pb-10">
          <h1 className="mb-3 text-4xl font-bold text-center text-primary">
            About Us
          </h1>
          <div className="flex items-center justify-center mt-2">
            <div className="w-12 h-0.5 bg-[#FF0000] mr-2"></div>
            <div className="w-3 h-3 rotate-45 bg-[#FF0000]"></div>
            <div className="w-12 h-0.5 bg-[#FF0000] ml-2"></div>
          </div>
          <p className="max-w-2xl mx-auto mt-3 leading-relaxed text-gray-600 text-cente">
            Welcome to our platform! We are a passionate team dedicated to
            delivering high-quality services and creating meaningful digital
            experiences.
          </p>
        </div>
        {/* Section with Image Background */}
        <div
          className="px-6 py-12 mb-20 bg-fixed bg-center bg-cover rounded-lg shadow-lg lg:grid-cols-2"
          style={{ backgroundImage: `url(${aboutImage})` }}
        >
          {/* Text Content */}
          <div className="p-6 rounded-lg shadow-md bg-gray-50 bg-opacity-40">
            <h2 className="mb-4 text-2xl font-semibold text-secondary">
              Welcome to Bike Shop
            </h2>
            <p className="mb-6 leading-relaxed text-gray-950">
              Bike Shop is your one-stop destination for premium bicycles,
              accessories, and expert repair services. Based in Gazipur, Dhaka,
              Bangladesh, our mission is to promote cycling as a lifestyle
              choice by offering high-quality products and outstanding customer
              service.
            </p>
            <p className="mb-6 leading-relaxed text-gray-950">
              Whether you're a professional cyclist, a weekend rider, or just
              looking for an eco-friendly way to commute, we've got something
              for everyone. Join our vibrant community of biking enthusiasts and
              explore the joy of cycling with us!
            </p>
            <p className="leading-relaxed text-gray-950">
              Our knowledgeable staff is always ready to assist you in selecting
              the perfect bike or accessories to meet your needs. Your
              satisfaction is our top priority!
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold text-center text-black">
            Why Choose Us?
          </h2>
          <div className="flex items-center justify-center my-3">
            <div className="w-12 h-0.5 bg-[#FF0000] mr-2"></div>
            <div className="w-3 h-3 rotate-45 bg-[#FF0000]"></div>
            <div className="w-12 h-0.5 bg-[#FF0000] ml-2"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 my-10 lg:grid-cols-3">
            <div className="p-5 text-center border rounded-sm hover:shadow-lg ">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl text-white rounded-full bg-primary">
                🚴
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                Wide Range of Products
              </h3>
              <p className="text-gray-600">
                From mountain bikes to accessories, we have everything you need
                for an amazing cycling experience.
              </p>
            </div>

            <div className="p-5 text-center border rounded-sm hover:shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl text-white rounded-full bg-primary">
                🛠
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                Expert Repair Services
              </h3>
              <p className="text-gray-600">
                Our skilled technicians handle all kinds of repairs and
                maintenance to keep your bike in top shape.
              </p>
            </div>

            <div className="p-5 text-center border rounded-sm hover:shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl text-white rounded-full bg-primary">
                ⭐
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                Your happiness matters to us! We strive to provide the best
                service and support to all our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
