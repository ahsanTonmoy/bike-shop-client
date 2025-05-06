import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/autoplay";

export default function About() {
  const testimonials = [
    {
      quote:
        "Bike Shop delivered my mountain bike in perfect condition within 3 days. Excellent customer service and fast support!",
      name: "Arif Rahman",
    },
    {
      quote:
        "I love their collection and the return process was smooth when I ordered the wrong size. Highly recommended.",
      name: "Nusrat Jahan",
    },
    {
      quote:
        "Hands down the best online bike store in Bangladesh. Their repair team is very professional.",
      name: "Mahmudul Hasan",
    },
  ];

  return (
    <div className="py-12 px-4 md:px-20 bg-gray-50">
      <Helmet>
        <title>About - Bike Shop || Online Delivery</title>
      </Helmet>
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
          <p className="max-w-2xl mx-auto mt-3 leading-relaxed text-gray-600 text-center">
            Welcome to Bike Shop! We are a team of passionate cyclists committed
            to delivering high-quality bicycles and accessories directly to your
            doorstep.
          </p>
        </div>

        {/* Mission, Policy, Terms, Overview Section */}
        <div className="mb-20 space-y-12">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-black">
              Our Mission
            </h2>
            <p className="text-gray-700">
              Our mission is to make cycling accessible to everyone by providing
              a seamless online shopping experience, fast delivery, expert
              support, and top-tier products for all types of riders.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-black">
              Our Policy
            </h2>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Authentic products sourced from trusted manufacturers.</li>
              <li>
                7-day return policy for unused items in original packaging.
              </li>
              <li>Secure and encrypted online payments.</li>
              <li>Delivery within 3–5 business days in serviceable areas.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-black">
              Terms & Conditions
            </h2>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>
                Inspect products upon delivery and report issues within 24
                hours.
              </li>
              <li>Returns accepted only with valid proof of purchase.</li>
              <li>Warranty coverage follows brand-specific policies.</li>
              <li>Misuse or modifications may void product warranty.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-black">Overview</h2>
            <p className="text-gray-700">
              Bike Shop isn't just a store—it’s a growing community of cycling
              lovers. We focus on quality, convenience, and building a culture
              of biking as a lifestyle. With quick delivery, expert support, and
              a wide selection, we’re your go-to online hub for all things
              bike-related.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-black">
              Contact Us
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Phone:</strong> +880 1234-567890
              </li>
              <li>
                <strong>Email:</strong> support@bikeshop.com
              </li>
              <li>
                <strong>Address:</strong> 123 Bike Street, Gazipur, Dhaka,
                Bangladesh
              </li>
              <li>
                <strong>Support Hours:</strong> Saturday - Thursday, 9:00 AM to
                6:00 PM
              </li>
            </ul>
          </section>
        </div>

        {/* Testimonials Section - Swiper */}
        <div className="mb-20">
          <h2 className="mb-6 text-2xl font-semibold text-center text-black">
            What Our Customers Say
          </h2>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="p-6 border rounded shadow bg-white h-full">
                  <p className="italic text-gray-700">“{t.quote}”</p>
                  <h4 className="mt-4 font-semibold text-primary">
                    — {t.name}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <h2 className="mb-3 text-2xl font-semibold text-center text-black">
            Why Choose Us?
          </h2>
          <div className="flex items-center justify-center my-3">
            <div className="w-12 h-0.5 bg-[#FF0000] mr-2"></div>
            <div className="w-3 h-3 rotate-45 bg-[#FF0000]"></div>
            <div className="w-12 h-0.5 bg-[#FF0000] ml-2"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 my-10 lg:grid-cols-3">
            <div className="p-5 text-center border rounded-sm hover:shadow-lg">
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
