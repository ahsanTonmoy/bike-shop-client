import { ProductTable } from "@/components/dashboard/admin/ProductTable";
import { Helmet } from "react-helmet-async";

const AdminProducts = () => {
  return (
    <div>
      {/* title */}
      <div className="">
        <Helmet>
          <title>Manege Product - Bike Shop || Online Delivary</title>
        </Helmet>
      </div>
      <ProductTable />
    </div>
  );
};

export default AdminProducts;
