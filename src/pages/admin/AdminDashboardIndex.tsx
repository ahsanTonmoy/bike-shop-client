import { MonthlySalesGraph } from "@/components/dashboard/admin/MonthlySalesGraph";
import OrderHistoryGraph from "@/components/dashboard/admin/OrderHistoryGraph";
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
import { FaBox, FaUsers, FaShoppingCart, FaDollarSign } from "react-icons/fa";

const AdminDashboardIndex = () => {
  const { isLoading: productLoading, data: productData } =
    useAllProductsQuery(undefined);
  const { isLoading: userLoading, data: userData } = useAllUserQuery(undefined);
  const { isLoading: orderLoading, data: orderData } =
    useAllOrdersQuery(undefined);
  const { isLoading: revenueLoading, data: revenueData } =
    useRevenueQuery(undefined);

  return (
    <div className="p-6">
      {/* title */}
      <div className="">
        <Helmet>
          <title>DashBoard - Bike Shop || Online Delivary</title>
        </Helmet>
      </div>
      <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>

      {/* dashboard Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 !text-base">
        {productLoading || orderLoading || revenueLoading || userLoading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="h-32 w-full rounded-lg" />
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

      {/* order section */}
      <div>
        <OrderHistoryGraph />
      </div>
      {/* graph */}

      <div className="">
        {/* title */}
        <h2 className="text-3xl font-bold capitalize py-8">pogress report</h2>
        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
    <Card className="shadow-md border rounded-xl flex flex-col items-center p-4  py-5 text-center">
      <div className="text-4xl text-orange-600 mb-2">{icon}</div>
      <CardHeader>
        <CardTitle className="text-3xl font-semibold">{title}</CardTitle>
      </CardHeader>
      {/* <CardContent> */}
      <p className="text-2xl font-bold">{value}</p>
      {/* </CardContent> */}
    </Card>
  );
};
