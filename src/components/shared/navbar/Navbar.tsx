import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import { ProfileDropdown } from "./ProfileDropdown";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TUser } from "@/types/types";

// brand fro logo
import brand from "@/assets/images/logo/Bike_Shop_Logo.svg";
//

import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { verifyToken } from "@/utils/verifyToken";
import { useEffect, useState } from "react";
import { menuList } from "@/utils/menu";
import Filter from "@/components/filter/Filter";
import { useNavigate } from "react-router-dom";
import { MdShoppingBag } from "react-icons/md";
import { FaUser } from "react-icons/fa";

//
const Navbar = () => {
  const token = useAppSelector(selectCurrentToken);

  const cartData = useAppSelector((state: RootState) => state.cart);
  const location = useLocation();
  //
  const [header, setHeader] = useState(false);
  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  //
  const navigate = useNavigate();
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

  const handleCategoryClick = (category: string) => {
    navigate(`bikes/categorys?query=${category}`);
  };
  //

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  // console.log(cartData,"cartData")
  const isUser = token ? verifyToken(token) : null;
  const CartIcon = (
    <Link
      to="/cart"
      className="relative p-0 transition-all duration-300 hover:scale-105 text-lg"
    >
      <MdShoppingBag
        className={header ? "text-black text-3xl" : "text-black text-3xl"}
      />

      <span className="absolute px-1 py-0.5 text-xs text-white font-black rounded-full left-2 top-[10px]">
        {cartData?.items?.length}
      </span>
    </Link>
  );

  //

  return (
    <div>
      <section
        className={
          header
            ? " fixed top-0 z-50 shadow-md py-2 bg-white w-full px-4 lg:px-20"
            : " shadow-sm bg-white text-blck py-4 md:py-2 px-4 lg:px-20"
        }
      >
        <div className="container flex gap-8 items-center justify-between px-4 mx-auto lg:px-0">
          {/* Left Side - Logo */}
          <div className="flex items-center">
            <Link to={"/"}>
              <div className="text-3xl font-bold text-white capitalize ">
                <img
                  className={header ? " h-12" : "w-56 rounded-sm"}
                  src={brand}
                  alt="bike shop brand"
                />
              </div>
            </Link>
          </div>

          {/* Middle - Navigation Links */}
          <nav className="w-full md:w-2/4 md:flex flex-col justify-center gap-2 text-center py-2 hidden relative">
            {/* top */}
            <div className={header ? "hidden" : ""}>
              <Filter />
            </div>
            {/* bottom */}
            <div className="py-1">
              <ul className="flex flex-wrap capitalize gap-2 py-1 font-semibold text-base justify-center ">
                {menuList.map((item) => (
                  <li
                    key={item.id}
                    onMouseEnter={() => setHoveredMenu(item.id)}
                    onMouseLeave={() => setHoveredMenu(null)}
                    className={`inline-block relative px-1 pb-1 cursor-pointer transition-colors duration-300 ${
                      item.link === location.pathname
                        ? "text-[#FF0000]"
                        : "text-black"
                    } hover:text-[#FF0000]`}
                  >
                    <Link to={item.link}>
                      <span
                        className={`inline-block relative px-1 pb-1 cursor-pointer transition-colors duration-300 ${
                          item.link === location.pathname
                            ? "text-[#FF0000]"
                            : "text-black"
                        } hover:text-[#FF0000]`}
                      >
                        {item.name}
                      </span>
                    </Link>

                    {item.children && hoveredMenu === item.id && (
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
                    )}
                  </li>
                ))}
              </ul>
            </div>
            {/*  */}
          </nav>

          {/* Right Side - Cart & Login/Profile */}
          <div className="items-center hidden gap-6 lg:flex">
            {/* Cart */}
            {CartIcon}
            {/* Profile/Login Button with dianamic add user data form data base*/}
            {isUser ? (
              <ProfileDropdown user={isUser as TUser} />
            ) : (
              <Link to="/login">
                <div className="text-xl mt-[1px]">
                  <FaUser />
                </div>
              </Link>
            )}
          </div>

          {/* Mobile Navbar - Drawer */}
          <div className="block lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-5 ">
                    {/* Cart */}
                    {CartIcon}

                    {/* Login/Profile */}
                    {isUser ? (
                      <ProfileDropdown user={isUser as TUser} />
                    ) : (
                      <Link to="/login">
                        <Button
                          variant="outline"
                          className="font-semibold text-primary-red"
                        >
                          Log in
                        </Button>
                      </Link>
                    )}
                  </div>
                  <Button
                    className={
                      header
                        ? "hover:bg-white hover:text-black text-white text-xl"
                        : "bg-transparent text-black hover:text-white  text-xl"
                    }
                    size="icon"
                  >
                    <Menu className="size-4" />
                  </Button>
                </div>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <img
                        className="w-56 "
                        src={brand}
                        alt="bike shop brand"
                      />
                    </div>
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile Menu List */}
                <div className="flex flex-col gap-4 mt-6 mb-6">
                  <ul className="block capitalize gap-2 py-1 font-semibold text-base justify-center ">
                    {menuList.map((item) => (
                      <li
                        key={item.id}
                        onMouseEnter={() => setHoveredMenu(item.id)}
                        onMouseLeave={() => setHoveredMenu(null)}
                        className={`relative px-4 py-2 cursor-pointer transition-colors duration-300 ${
                          item.link === location.pathname
                            ? "bg-[#FF0000]"
                            : "text-white"
                        } hover:text-[#FF0000] `}
                      >
                        <Link to={item.link}>
                          <span
                            className={`inline-block relativecursor-pointer transition-colors duration-300 ${
                              item.link === location.pathname
                                ? "bg-[#FF0000] text-[#fff]"
                                : "text-black"
                            } hover:text-[#FF0000]`}
                          >
                            {item.name}
                          </span>
                        </Link>

                        {item.children && hoveredMenu === item.id && (
                          <div className=" transition decoration-500 ease-in bg-white">
                            <ul className=" group-hover:flex bg-white px-2 py-2 text-left">
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
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
