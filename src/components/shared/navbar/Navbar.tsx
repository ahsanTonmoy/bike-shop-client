import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { BiCartAdd } from "react-icons/bi";

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
import brand from "@/assets/images/logo/Bike_Shop_Logo.png";
//

import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { verifyToken } from "@/utils/verifyToken";
import { useEffect, useState } from "react";

const menuList = [
  { id: 1, name: "HOME", link: "/" },
  { id: 2, name: "All PRODUCTS", link: "/bikes" },
  { id: 3, name: "SERVICES", link: "/service" },
  { id: 4, name: "ABOUT", link: "/about" },
  { id: 5, name: "CONTACT", link: "/contact" },
];

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
      className="relative p-2 transition-all duration-300 hover:scale-105 text-lg"
    >
      <BiCartAdd className={header ? "w-8 h-8 text-white" : "text-black"} />

      <span className="absolute px-2 py-1 text-xs text-white bg-red-600 rounded-full -top-2 -right-2">
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
            ? " fixed top-0 z-50 shadow-sm py-4 bgDark text-white w-full px-4 lg:px-20"
            : " shadow-sm bg-white py-4 px-4 lg:px-20"
        }
      >
        <div className="container flex items-center justify-between px-4 mx-auto lg:px-0">
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
          <nav className="items-center hidden gap-6 lg:flex">
            <ul className="flex gap-6 font-bold text-base">
              {menuList.map((item) => (
                <li className="relative group" key={item.id}>
                  <Link to={item.link}>
                    <span
                      className={`cursor-pointer hover:text-[#FF0000] transition-all duration-300 ${
                        item.link === location.pathname ? "text-[#FF0000]" : ""
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF0000] transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
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
                <Button className="h-10 text-lg font-medium text-black capitalize bg-white border-2 shadow-none hover:shadow-md hover:text-white">
                  Log in
                </Button>
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
                  <ul className="flex flex-col gap-6 font-semibold">
                    {menuList.map((item) => (
                      <li className="relative group" key={item?.id}>
                        <Link to={item.link}>
                          <span
                            className={`cursor-pointer hover:text-primary-red transition-all duration-300 ${
                              item.link === location.pathname
                                ? "text-primary-red"
                                : ""
                            }`}
                          >
                            {item.name}
                          </span>
                        </Link>
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
