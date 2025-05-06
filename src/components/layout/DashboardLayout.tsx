import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import { useAppDispatch } from "@/redux/hooks";
import { useLogOutMutation } from "@/redux/features/auth/authApi";
import { logout } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import brand from "@/assets/images/logo/Bike_Shop_Logo.png";
import { IoIosLogOut } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [logOut] = useLogOutMutation();

  const handleLogOut = async () => {
    dispatch(logout());
    toast.success("Logged out!");
    await logOut({});
  };

  return (
    <div className="">
      <div className="">
        <div className=" lg:flex h-screen w-full">
          {/* Sidebar */}
          <div
            className={`fixed inset-y-0 left-0 shadow z-50 bgDark  text-white transition-all duration-300 overflow-y-auto 
            ${isSidebarOpen ? "w-80" : "w-0"} xl:w-2/12 lg:w-3/12 `}
          >
            <div className="p-4 text-lg bg-white font-semibold border-b border-gray-700">
              <Link to="/" className="flex  justify-center items-center gap-3">
                {" "}
                <div className="">
                  <img className=" h-10" src={brand} alt="" />
                </div>
              </Link>
            </div>
            <DashboardSidebar />
          </div>

          {/* Sidebar overlay for mobile */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          )}

          {/* Main Content */}
          <div className=" xl:w-10/12 lg:w-9/12 xl:ml-[16%] lg:ml-[25%]">
            {/* ✅ Fixed Navbar */}
            <div className="bg-white h-16 px-4 py-9 flex items-center justify-between shadow-md top-0 left-0 right-0 z-30 ">
              {/* Sidebar Toggle Button */}
              <button
                className="text-gray-700 p-2 focus:outline-none lg:hidden"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
                  />
                </svg>
              </button>

              <div className="px-6">
                <h1 className="text-xl font-semibold flex gap-3">
                  {" "}
                  <div className="mt-1">
                    <MdDashboard />
                  </div>{" "}
                  Dashboard
                </h1>
              </div>

              {/* Logout Button */}
              <div
                onClick={handleLogOut}
                className=" font-black text-3xl mx-6 cursor-pointer p-2 hover:bg-black rounded hover:text-white"
              >
                <IoIosLogOut />
              </div>
            </div>

            {/* ✅ Scrollable Content */}
            <div className="flex-1 h-full bg-gray-100 w-full overflow-auto px-4 py-4">
              <Outlet />
            </div>
            {/* copyright */}
            <div className=" border-t border-gray-700 py-4 text-center text-base  bg-gray-100 px-10">
              &copy; {new Date().getFullYear()} Bike Shop. All rights reserved.
            </div>
          </div>
          {/* mobile */}
        </div>
      </div>
    </div>
  );
}
