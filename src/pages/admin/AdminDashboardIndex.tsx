import { MonthlySalesGraph } from "@/components/dashboard/admin/MonthlySalesGraph";
import { OrderStatusChart } from "@/components/dashboard/admin/OrderStatusChart";
import { VisitorGraph } from "@/components/dashboard/admin/VisitorGraph";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useAllUserQuery } from "@/redux/features/Admin/allUsers/allUserApi";
import {
  useAllOrdersQuery,
  useRevenueQuery,
} from "@/redux/features/order/orderApi";
import { useAllProductsQuery } from "@/redux/features/products/productApi";
import { Helmet } from "react-helmet-async";
import { FaBox, FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";

const AdminDashboardIndex = () => {
  const { isLoading: productLoading, data: productData } =
    useAllProductsQuery(undefined);
  const { isLoading: userLoading, data: userData } = useAllUserQuery(undefined);
  const { isLoading: orderLoading, data: orderData } =
    useAllOrdersQuery(undefined);
  const { isLoading: revenueLoading, data: revenueData } =
    useRevenueQuery(undefined);

  return (
    <div className="px-10">
      {/* title */}
      <div className="">
        <Helmet>
          <title>DashBoard - Bike Shop || Online Delivary</title>
        </Helmet>
      </div>
      <h1 className="pt-5 mb-10 text-2xl font-bold ">Dashboard Overview</h1>

      {/* dashboard Status */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 !text-base">
        {productLoading || orderLoading || revenueLoading || userLoading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="w-full h-32 rounded-lg" />
          ))
        ) : (
          <>
            <StatsCard
              icon={<FaBox />}
              title="Total Products"
              value={productData?.meta?.total || 0}
            />
            <StatsCard
              icon={<FaUsers />}
              title="Total Users"
              value={userData?.meta?.total || 0}
            />
            <StatsCard
              icon={<FaShoppingCart />}
              title="Total Orders"
              value={orderData?.meta?.total || 0}
            />
            <StatsCard
              icon={<FaDollarSign />}
              title="Total Revenue"
              value={`BDT ${revenueData?.data?.totalRevenue || 0}`}
            />
          </>
        )}
      </div>

      {/* graph */}

      <div className="">
        {/* title */}
        <h2 className="py-10 text-3xl font-bold capitalize">pogress report</h2>
        {/* content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <VisitorGraph />
          <OrderStatusChart />
        </div>
        {/* sale report */}
        <div className="py-8">
          <MonthlySalesGraph />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardIndex;

// Reusable Stats Card Component
const StatsCard = ({
  icon,
  title,
  value,
}: {
  icon: JSX.Element;
  title: string;
  value: string | number;
}) => {
  return (
    <Card className="flex flex-col items-center p-4 py-5 text-center border shadow-md hover:bg-orange-100 rounded-xl">
      <div className="mb-2 text-4xl text-orange-600 ">{icon}</div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      {/* <CardContent> */}
      <p className="text-xl font-bold">{value}</p>
      {/* </CardContent> */}
    </Card>
  );
};
