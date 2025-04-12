import MainLayout from "@/components/layout/MainLayout";

import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import AdminDashboardIndex from "@/pages/admin/AdminDashboardIndex";
import AdminProducts from "@/pages/admin/AdminProducts";
import { AllUsers } from "@/pages/admin/AllUsers";
import OrderAdmin from "@/pages/admin/OrderAdmin";
import AllProducts from "@/pages/AllProducts";
import CartPage from "@/pages/CartPage";
import FAQPage from "@/pages/FAQPage";
import OrderPage from "@/pages/Order/OrderPage";
import OrderResponse from "@/pages/Order/OrderResponse";
import ProductDetails from "@/pages/ProductDetails";
import ProfileUpdate from "@/pages/ProfileUpdate";
import Services from "@/pages/Service";
import SignUpPage from "@/pages/SignUpPage";
import UserDashboardIndex from "@/pages/user/UserDashboardIndex";
import UserOrders from "@/pages/user/UserOrders";
import DashboardProtected from "@/utils/DashboardProtected";
import PrivetUserRoute from "@/utils/PrivetUserRoute";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
//import { Contact } from "lucide-react";
import Contact from "@/pages/Contact";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bikes",
        element: <AllProducts />,
      },
      {
        path: "/details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/order",
        element: (
          <PrivetUserRoute>
            <OrderPage />
          </PrivetUserRoute>
        ),
      },
      {
        path: "/response",
        element: (
          <PrivetUserRoute>
            <OrderResponse />
          </PrivetUserRoute>
        ),
      },

      {
        path: "/faqs",
        element: <FAQPage />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: (
      <DashboardProtected role="admin">
        <DashboardLayout />
      </DashboardProtected>
    ),
    children: [
      {
        path: "/admin/dashboard",
        element: <AdminDashboardIndex />,
      },
      {
        path: "/admin/dashboard/products",
        element: <AdminProducts />,
      },
      {
        path: "/admin/dashboard/orders",
        element: <OrderAdmin />,
      },
      {
        path: "/admin/dashboard/customer",
        element: <AllUsers />,
      },
      {
        path: "/admin/dashboard/profile-setting",
        element: <ProfileUpdate />,
      },
    ],
  },
  {
    path: "/user/dashboard",
    element: (
      <DashboardProtected role="customer">
        <DashboardLayout />
      </DashboardProtected>
    ),
    children: [
      {
        path: "/user/dashboard",
        element: <UserDashboardIndex />,
      },
      {
        path: "/user/dashboard/viewOrders",
        element: <UserOrders />,
      },
      {
        path: "/user/dashboard/profile-setting",
        element: <ProfileUpdate />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
