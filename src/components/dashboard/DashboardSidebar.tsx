import { IoIosHome } from "react-icons/io";
import { AiOutlineProduct } from "react-icons/ai";
import { BsBorderStyle } from "react-icons/bs";
import { FaUsersCog } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdGridView } from "react-icons/md";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { TUser } from "@/types/types";
import { Link, useLocation } from "react-router-dom";

const adminMenuItems = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <IoIosHome className="w-7 h-7" />,
  },
  {
    name: "Products",
    path: "/admin/dashboard/products",
    icon: <AiOutlineProduct className="w-7 h-7" />,
  },
  {
    name: "Orders",
    path: "/admin/dashboard/orders",
    icon: <BsBorderStyle className="w-7 h-7" />,
    //
  },

  {
    name: "Users",
    path: "/admin/dashboard/customer",
    icon: <FaUsersCog className="w-7 h-7" />,
  },
  {
    name: " Profile Settings",
    path: "/admin/dashboard/profile-setting",
    icon: <IoMdSettings className="w-7 h-7" />,
  },
];
const customerMenuItems = [
  {
    name: "Dashboard",
    path: "/user/dashboard",
    icon: <IoIosHome className="w-7 h-7" />,
  },
  {
    name: "View Orders",
    path: "/user/dashboard/viewOrders",
    icon: <MdGridView className="w-7 h-7" />,
  },
  {
    name: " Profile Settings",
    path: "/user/dashboard/profile-setting",
    icon: <IoMdSettings className="w-7 h-7" />,
  },
];
const DashboardSidebar = () => {
  const token = useAppSelector(selectCurrentToken);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  let isUser;
  let menuItems;
  if (token) {
    isUser = verifyToken(token) as TUser;
    // console.log(isUser, "isUser");
    if (isUser.role === "admin") {
      menuItems = adminMenuItems;
    } else {
      menuItems = customerMenuItems;
    }
  }
  return (
    <ul className="mt-4 space-y-2 px-2">
      {menuItems?.map((item) => (
        <li key={item.name}>
          <Link
            to={item.path as string}
            className={` p-2 rounded-md flex gap-2 items-center text-base py-2 ${
              isActive(item.path as string)
                ? "bg-white text-black"
                : "hover:bg-white hover:text-black"
            }`}
          >
            {item?.icon}
            {item?.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DashboardSidebar;
