import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";
import { verifyToken } from "./verifyToken";
import { Navigate } from "react-router-dom";
import { TUser } from "@/types/types";


const DashboardProtected = ({ children, role }: { children: ReactNode, role: string }) => {
    const token = useAppSelector(selectCurrentToken);

    let user;
    if (token) {
      user = verifyToken(token) as TUser
    }
  
    if (!user?.email) {
      return <Navigate to={'/login'}></Navigate>;
    }
  
    if (user?.role !== role) {
      return <Navigate to={user?.role === "admin" ? "/admin/dashboard" : "/user/dashboard"} />;
    }
    return children;
};

export default DashboardProtected;