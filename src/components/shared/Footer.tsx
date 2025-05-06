import { Link } from "react-router-dom";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import brand from "@/assets/images/logo/Bike_Shop_Logo_White.png";
import { menuList } from "@/utils/menu";
// import { Item } from "@radix-ui/react-dropdown-menu";
export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-6 px-4 md:px-20 font-semibold">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-10">
          {/* About Section */}
          <div className="grid gap-6">
            <div className="brand">
              <img className=" w-48 rounded-md " src={brand} alt="" />
            </div>
            <p className="text-base text-gray-400">
              We are passionate about providing top-quality bikes and
              accessories to our customers. Visit us for the best riding
              experience.
            </p>
            <div className="mt-4 flex space-x-4 text-gray-400">
              <a
                href="https://www.facebook.com/a.r.tonmoy.103298"
                target="_blank"
                className="hover:text-primary-red duration-300"
              >
                {" "}
                <FaFacebookF className="w-7 h-7" />
              </a>
              <a
                href="https://wa.me/+8801994361085"
                target="_blank"
                className="hover:text-primary-red duration-300"
              >
                {" "}
                <FaWhatsapp className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahsanur-rahman-tonmoy-1680921b6"
                target="_blank"
                className="hover:text-primary-red duration-300"
              >
                {" "}
                <FaLinkedinIn className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Shop Section */}
          <div className="px-4">
            <ul className="space-y-1 uppercase text-xs text-white">
              {menuList.map((item) => (
                <li
                  key={item.id}
                  className={` relative px-1 pb-1 cursor-pointer transition-colors duration-300 ${
                    item.link === location.pathname
                      ? "text-[#FF0000]"
                      : "text-white"
                  } hover:text-[#FF0000]`}
                >
                  <Link to={item.link}>
                    <span
                      className={`inline-block relative px-1 pb-1 cursor-pointer transition-colors duration-300 ${
                        item.link === location.pathname
                          ? "text-[#FF0000]"
                          : "text-white"
                      } hover:text-[#FF0000]`}
                    >
                      {item.name}
                    </span>
                  </Link>

                  {/* {item.children === item.id && (
                    <div className="absolute left-0 top-8 z-40 py-3 transition decoration-500 ease-in bg-white">
                      <ul className=" grid grid-cols-2 gap-4 group-hover:flex bg-white p-6 w-96 text-left">
                        {item.children.map((child, index) => (
                          <li key={index}>
                            <button
                              onClick={() =>
                                handleCategoryClick(child.category)
                              }
                              className="text-gray-700 hover:text-[#FF0000] whitespace-nowrap transition-colors duration-200"
                            >
                              {child.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )} */}
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service Section */}
          <div className="px-4">
            <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-base text-gray-400">
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="px-4">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="text-base text-gray-400">
              <li className="mb-2">Dhaka, Bangladesh</li>
              <li className="mb-2">Phone: (+880) 01994361085</li>
              <li>
                Email:{" "}
                <a href="mailto:info@bikeshop.com" className="hover:text-white">
                  bikeShop25@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-base text-zinc-200">
          &copy; {new Date().getFullYear()} Bike Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
