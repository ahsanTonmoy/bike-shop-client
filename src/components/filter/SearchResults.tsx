import { useLocation } from "react-router-dom";
import { useAllProductsQuery } from "@/redux/features/products/productApi";
// import { IBikeRespoimport { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { BiCart } from "react-icons/bi";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Badge } from "@/components/ui/badge";
import Loading from "../Loading";

const SearchResults = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get("query") || "";

  const { data, isLoading } = useAllProductsQuery({ searchTerm });

  if (isLoading) return <Loading />;

  return (
    <div className="p-6 my-10">
      <div className=""></div>
      <h1 className="text-2xl font-bold my-4">Results for "{searchTerm}"</h1>
      {/* search product */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.data?.map((product) => (
          <div
            key={product?._id}
            className="card bg-white hover:shadow-lg hover:rounded-md cursor-pointer  overflow-hidden transition-all text-center"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-44 object-cover transition-all duration-300 cursor-pointer"
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

              <div className="">
                <Link to={`/details/${product._id}`} className="">
                  <button className=" view-btn absolute hidden w-full left-0 bottom-0 p-4 bg-black bg-opacity-80 text-white  font-normal ">
                    <div className="flex gap-2 justify-center">
                      <div className="mt-[5px]">
                        <TbListDetails />
                      </div>
                      <div className=" capitalize">view details</div>
                    </div>
                  </button>
                </Link>
              </div>
            </div>

            <div className="grid gap-2 p-3">
              <h2 className=" text-base font-bold">{product.name}</h2>
              <p className="text-sm text-gray-600">Model: {product.model}</p>
              <p className="text-lg font-medium text-gray-800">
                {" "}
                <span className="font-bold text-[#f43307c2] uppercase">
                  bdt {product.price}
                </span>
              </p>

              <div className="flex justify-center">
                <button
                  className={`py-2 px-4 rounded-md ${
                    !product?.inStock
                      ? "bg-gray-400 cursor-not-allowed flex justify-center w-fit gap-2 py-2 px-4 text-sm font-medium text-white"
                      : "flex justify-center w-fit gap-2 py-2 px-4 text-sm font-medium text-black transition-all bg-white border-2 hover:bg-black hover:text-white"
                  } transition-all`}
                  disabled={!product?.inStock}
                  onClick={() =>
                    dispatch(addToCart({ ...product, selectQuantity: 1 }))
                  }
                >
                  <div className="">
                    <BiCart className="text-lg mt-[2px]" />
                  </div>
                  <div className=" uppercase">add to cart</div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {data?.data?.length === 0 && (
        <div className="text-center text-gray-500 mt-6">
          No products found in this serach "{searchTerm}" .
        </div>
      )}
    </div>
  );
};

export default SearchResults;
