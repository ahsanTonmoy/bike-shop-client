import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAllProductsQuery } from "@/redux/features/products/productApi";
import { BiCart } from "react-icons/bi";
import { Badge } from "@/components/ui/badge";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart/cartSlice";
import LoadingSkelton from "@/components/shared/LoadingSkelton";
import { TbListDetails } from "react-icons/tb";
import { Helmet } from "react-helmet-async";

export default function AllProducts() {
  const dispatch = useAppDispatch();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 20;

  const categories = [
    { label: "All Bikes", value: "All" },
    { label: "Mountain Bikes", value: "Mountain" },
    { label: "Road Bikes", value: "Road" },
    { label: "Electric Bikes", value: "Electric" },
    { label: "Hybrid Bikes", value: "Hybrid" },
    { label: "Kids Bikes", value: "Kids" },
    { label: "Accessories", value: "Accessories" },
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const query = useMemo(() => {
    const params: Record<string, string> = {
      page: currentPage.toString(),
      limit: limit.toString(),
    };
    if (selectedCategory !== "All") {
      params.category = selectedCategory;
    }
    return params;
  }, [selectedCategory, currentPage]);

  const { data, isLoading } = useAllProductsQuery(query);
  const totalPages = data?.meta?.totalPage || 1;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const selectedLabel =
    categories.find((cat) => cat.value === selectedCategory)?.label ||
    "All Products";

  if (isLoading) return <LoadingSkelton />;

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{selectedLabel} - Bike Shop || Online Delivery</title>
      </Helmet>

      <div className="container mx-auto px-4 md:px-8 py-8">
        {/* <div className="py-4">
          <h1 className=" text-center font-semibold text-black mb-4 uppercase">
            Category: {selectedLabel}
          </h1>

          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-0.5 bg-[#FF0000] mr-2" />
            <div className="w-3 h-3 rotate-45 bg-[#FF0000]" />
            <div className="w-12 h-0.5 bg-[#FF0000] ml-2" />
          </div>
        </div> */}

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar: Category Buttons */}
          <aside className="md:w-1/4 w-full space-y-4 ">
            <div className="border">
              {categories.map((cat) => (
                <div
                  key={cat.value}
                  onClick={() => handleCategoryClick(cat.value)}
                  className={`py-2 px-4 cursor-pointer border-b transition-all ${
                    selectedCategory === cat.value
                      ? "bg-[#EA1D25] text-white font-bold"
                      : " hover:text-[#EA1D25] text-gray-800 "
                  }`}
                >
                  <h3
                    className={`${
                      selectedCategory === cat.value ? " font-bold" : " "
                    }`}
                  >
                    {cat.label}
                  </h3>
                </div>
              ))}
            </div>
          </aside>

          {/* Right Side: Product List */}
          <section className="md:w-3/4 w-full">
            <div className="">
              <h1 className=" text-center font-semibold text-black mb-4 uppercase">
                Category: {selectedLabel}
              </h1>
            </div>
            {/* data */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
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
                    <p className="text-sm text-gray-600">
                      Model: {product.model}
                    </p>
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
                No products found in this category.
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 mt-10">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-5 py-2 bg-[#FF0000] text-white rounded hover:bg-teal-600 disabled:bg-gray-400 transition"
              >
                Prev
              </button>
              <span className="text-black">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-5 py-2 bg-[#FF0000] text-white rounded hover:bg-black disabled:bg-gray-400 transition"
              >
                Next
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
