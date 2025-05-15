import { Badge } from "@/components/ui/badge";
import { BiCart } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "@/components/Loading";
import { addToCart } from "@/redux/features/cart/cartSlice";
import {
  useSpecificProductsQuery,
  useAllProductsQuery,
} from "@/redux/features/products/productApi";
import { useAppDispatch } from "@/redux/hooks";
import { Helmet } from "react-helmet-async";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { data, isLoading } = useSpecificProductsQuery(id);
  const product = data?.data;

  const { data: allProducts } = useAllProductsQuery(undefined);

  const relatedProducts =
    allProducts?.data?.filter(
      (item) => item.category === product?.category && item._id !== product._id
    ) || [];

  const [visibleProducts, setVisibleProducts] = useState(4); // Initial visible products
  const observer = useRef<IntersectionObserver | null>(null);

  // Lazy load more products when reaching the bottom
  useEffect(() => {
    if (!observer.current) {
      observer.current = new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting &&
            visibleProducts < relatedProducts.length
          ) {
            setVisibleProducts((prev) => prev + 4); // Load more products
          }
        },
        {
          rootMargin: "100px",
        }
      );
    }

    const target = document.querySelector("#load-more-trigger");
    if (target) {
      observer.current.observe(target);
    }

    return () => {
      if (observer.current && target) {
        observer.current.unobserve(target);
      }
    };
  }, [visibleProducts, relatedProducts.length]);

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
      <Helmet>
        <title>{product.name} - Bike Shop || Online Delivery</title>
      </Helmet>

      <div className="overflow-hidden bg-white px-4 md:px-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative ">
            <img src={product.image} alt={product.name} className="w-full " />
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

          {/* Product Details */}
          <div className="flex flex-col gap-2 justify-center p-6">
            <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
              {product.name}
            </h1>
            <p className="text-sm text-gray-500 md:text-base">
              {product.category} Bike | Model: {product.model}
            </p>
            <p className="text-lg font-medium text-gray-600">
              <span className="font-semibold">BDT</span>{" "}
              <span className="text-xl font-bold text-orange-600">
                {product.price}
              </span>
            </p>

            <Button className="flex my-4 text-sm bg-green-500 cursor-default w-fit hover:bg-green-500">
              Quantity: <span className="text-sm">{product?.quantity}</span>{" "}
            </Button>
            <p className="text-gray-700">{product.description}</p>

            {/* Action Buttons */}
            {product?.inStock && (
              <div className="flex flex-col gap-4 mt-6 sm:flex-row">
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-md text-white font-semibold bg-orange-500 hover:bg-black transition decoration-400 ease-in justify-center"
                  onClick={() =>
                    dispatch(addToCart({ ...product, selectQuantity: 1 }))
                  }
                >
                  <BiCart className="text-xl hover:scale-[1.05]" /> Add to Cart
                </button>

                <button
                  onClick={handleOrder}
                  className="px-4 py-2 border bgDark hover:bg-orange-500 text-white rounded-md font-semibold hover:scale-[1.05] hover:text-white duration-300 transition"
                >
                  Order New
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-12 px-4 md:px-20">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
            Related {product?.category} Bikes
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {relatedProducts.slice(0, visibleProducts).map((item) => (
              <div
                key={item._id}
                className="border rounded-lg p-4 hover:shadow-md transition cursor-pointer"
                onClick={() => navigate(`/details/${item._id}`)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.model}</p>
                <p className="text-orange-600 font-bold">BDT {item.price}</p>
              </div>
            ))}
          </div>

          {/* Load More Trigger (Invisible target) */}
          <div id="load-more-trigger" className="h-10"></div>

          {/* Optional: View All by Category Button */}
          {visibleProducts < relatedProducts.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setVisibleProducts(visibleProducts + 4)}
                className="px-6 py-2 bg-orange-600 text-white rounded-md font-semibold hover:bg-red-700 transition"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
