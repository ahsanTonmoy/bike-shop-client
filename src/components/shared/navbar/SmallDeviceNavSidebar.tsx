import { Button } from "@/components/ui/button";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {  selectCurrentToken } from "@/redux/features/auth/authSlice";
import {  useAppSelector } from "@/redux/hooks";
import { Menu, Sheet } from "lucide-react";
import { menuList } from "./navbarData";
import { Link } from "react-router-dom";
import { verifyToken } from "@/utils/verifyToken";
import navbarImg from "@/assets/images/bike-logo/bike-img-logo.png";
import { TUser } from "@/types/types";

const SmallDeviceNavSidebar = () => {
  const token = useAppSelector(selectCurrentToken);


  let isUser;
  if (token) {
    isUser = verifyToken(token) as TUser;
  }
//   const handleLogOut = async () => {
//     dispatch(logout());
//     toast.success("logout!");
//     await logOut({});
//   };
  return (
    <div className="block lg:hidden">
      <div className="flex items-center justify-between px-2 ">
        <div className="flex items-center gap-2">
          <img src={navbarImg} className="w-20" alt="logo" />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle>
                <div className="flex items-center gap-2 border-b">
                  <span className="text-lg font-semibold">ROYAL KNIGHT</span>
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="flex items-center text-white  font-bold">
              <ul className="flex flex-col py-5 text-black gap-5">
                {menuList.map((item) => (
                  <li className="relative group" key={item.id}>
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
                    {/* <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary-red transition-all duration-300 group-hover:w-full"></span> */}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              {isUser ? (
                <div>
                  {isUser?.role === "admin" ? (
                    <Link to={"/admin/dashboard"} className="w-full">
                      <Button
                        variant={"outline"}
                        className="w-full hover:text-primary-red"
                      >
                        Dashboard
                      </Button>
                    </Link>
                  ) : (
                    <Link to={"/user/dashboard"} className="w-full">
                      <Button
                        variant={"outline"}
                        className="w-full hover:text-primary-red"
                      >
                        Dashboard
                      </Button>
                    </Link>
                  )}
                </div>
              ) : (
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="text-primary-red font-semibold text-lg hover:shadow-md h-10" // Ensure button height matches
                  >
                    Log in
                  </Button>
                </Link>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default SmallDeviceNavSidebar;
