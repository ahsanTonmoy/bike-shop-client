// import bikeImge from "@/assets/images/home/bike-1.jpg";
import { Badge } from "@/components/ui/badge";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAllProductsQuery } from "@/redux/features/products/productApi";
import { useAppDispatch } from "@/redux/hooks";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import LoadingSkelton from "../shared/LoadingSkelton";
import { TbListDetails } from "react-icons/tb";
const NewProducts = () => {
  const { data, isLoading } = useAllProductsQuery(undefined);
  const dispatch = useAppDispatch();
  // console.log(isError, "all products");
  if (isLoading) {
    return <LoadingSkelton />;
  }
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4  px-4 py-4">
      {data?.data?.map((product) => (
        <div
          key={product?._id}
          className="p-4 overflow-hidden transition-all bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl"
        >
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-44 object-cover rounded-md hover:scale-[1.05] transition-all duration-300 cursor-pointer"
            />
            <Badge
              className={`absolute top-2 left-2 px-3 py-1 text-xs font-semibold ${
                product?.inStock
                  ? "bg-green-600 text-white"
                  : "bg-red-600 text-white"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </Badge>
          </div>

          <div className="p-3">
            <h2 className="mb-1 text-lg font-bold">{product.name}</h2>
            <p className="my-3 text-sm text-gray-600">Model: {product.model}</p>
            <p className="text-lg font-medium text-gray-800">
              Price:{" "}
              <span className="font-bold text-[#f40707] uppercase">
                {product.price} bdt
              </span>
            </p>

            <div className="flex gap-2 mt-3">
              <Link to={`/details/${product._id}`} className="flex-1">
                <button className="w-full py-2 text-base  font-bold uppercase text-white transition-all bg-black border-2 rounded-md hover:bg-white hover:text-black flex gap-4 justify-center ">
                  <div className="mt-1">
                    <TbListDetails />
                  </div>
                  <div className="">View Details</div>
                </button>
              </Link>

              <button
                className={`py-2 px-4 rounded-md ${
                  !product?.inStock
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#f40707] hover:bg-green-600"
                } transition-all`}
                disabled={!product?.inStock}
                onClick={() =>
                  dispatch(addToCart({ ...product, selectQuantity: 1 }))
                }
              >
                <BiCart className="text-lg text-white" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewProducts;
