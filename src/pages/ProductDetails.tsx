import { Badge } from "@/components/ui/badge";
import { BiCart } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
// import bikeImge from "@/assets/images/home/bike-1.jpg";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useSpecificProductsQuery } from "@/redux/features/products/productApi";
import { useAppDispatch } from "@/redux/hooks";
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useSpecificProductsQuery(id);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const product = data?.data;
  // console.log(data?.data,"checking product")
  const handleOrder = () => {
    dispatch(addToCart({ ...product, selectQuantity: 1 }));
    navigate("/cart");
  };
  if (isLoading) {
    return <Loading />;
  }
  if (!product) {
    return (
      <div className="mt-10 text-xl text-center text-red-600">
        Product not found!
      </div>
    );
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="">
        <Helmet>
          <title>{product.name} - Bike Shop || Online Delivary</title>
        </Helmet>
      </div>
      <div className="overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Side - Image */}
          <div className="relative shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[300px] md:h-[450px] object-cover"
            />
            <Badge
              className={`absolute top-3 right-3 px-3 py-1 text-sm font-semibold ${
                product?.inStock
                  ? "bg-green-600 text-white"
                  : "bg-red-600 text-white"
              }`}
            >
              {product?.inStock ? "In Stock" : "Out of Stock"}
            </Badge>
          </div>

          {/* e - Details */}
          <div className="flex flex-col gap-2 justify-center p-6">
            <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
              {product.name}
            </h1>
            <p className="text-sm text-gray-500 md:text-base">
              {product.category} Bike | Model: {product.model}
            </p>
            <p className="text-lg font-medium text-gray-600">
              <span className="font-semibold"> BDT</span>{" "}
              <span className="text-xl font-bold text-primary-red">
                {product.price}
              </span>
            </p>
            <Button className="flex w-fit my-4 text-sm bg-green-500 hover:bg-green-500 cursor-default">
              Quantity: <span className="text-sm">{product?.quantity}</span>{" "}
            </Button>
            <p className=" text-gray-700">{product.description}</p>

            {/* Buttons */}
            {product?.inStock && (
              <div className="flex flex-col gap-4 mt-6 sm:flex-row">
                {/* Add to Cart Button */}
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-white font-semibold bg-primary-red hover:bg-red-700 transition-all justify-center`}
                  // disabled={product.inStock}
                  onClick={() =>
                    dispatch(addToCart({ ...product, selectQuantity: 1 }))
                  }
                >
                  <BiCart className="text-xl hover:scale-[1.05]" /> Add to Cart
                </button>

                {/* Go Back Button */}

                <button
                  onClick={handleOrder}
                  className="px-4 py-2 border bgDark text-white  rounded-md font-semibold hover:scale-[1.05] hover:text-white duration-300 transition"
                >
                  Order New
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
