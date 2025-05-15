// import bikeImge from "@/assets/images/home/bike-1.jpg";
import { Badge } from "@/components/ui/badge";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAllProductsQuery } from "@/redux/features/products/productApi";
import { useAppDispatch } from "@/redux/hooks";
import { BiCart } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import LoadingSkelton from "../shared/LoadingSkelton";
const NewProducts = () => {
  const { data, isLoading } = useAllProductsQuery(undefined);
  const dispatch = useAppDispatch();
  // console.log(isError, "all products");
  if (isLoading) {
    return <LoadingSkelton />;
  }
  return (
    <div className="container px-10 mx-auto mt-16">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {data?.data?.slice(0, 5).map((product) => (
          <div
            key={product?._id}
            className="relative z-0 overflow-hidden text-center transition-all bg-white shadow cursor-pointer hover:shadow-xl hover:rounded-md"
          >
            {/* Image Box */}
            <div className=" w-full aspect-[4/3]  group">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full  transition-all duration-300 ]"
              />

              {/* Badge */}
              <Badge
                className={`absolute top-2 left-2 px-3 py-1 text-xs font-semibold ${
                  product?.inStock
                    ? "bg-green-500 text-white"
                    : "bg-[#8E1616] text-white rounded-lg shadow-md"
                }`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </Badge>

              {/* View Details Button (show on hover) */}
              <Link to={`/details/${product._id}`}>
                <button className="absolute bottom-0 left-0 hidden w-full p-4 font-normal text-white bg-black bg-opacity-70 group-hover:block">
                  <div className="flex justify-center gap-2">
                    <TbListDetails className="mt-[5px]" />
                    <span className="capitalize">view details</span>
                  </div>
                </button>
              </Link>
            </div>

            {/* Product Info */}

            <h2 className="text-base ">{product.name}</h2>

            <span className=" text-[#8E1616] ">BDT {product.price}</span>

            {/* Add to Cart Button */}

            <div className="absolute z-10 -translate-y-1/2 top-6 right-4">
              <button
                className={`flex items-center gap-2 p-1 text-sm font-medium bg-transparent rounded-full ${
                  !product.inStock
                    ? "bg-[#8E1616] text-white cursor-not-allowed"
                    : " border-2 bg-[#E8C999]  hover:bg-[#8E1616]  transition-all"
                }`}
                disabled={!product.inStock}
                onClick={() =>
                  dispatch(addToCart({ ...product, selectQuantity: 1 }))
                }
              >
                <BiCart className="text-[#8E1616] text-md  hover:text-white " />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
