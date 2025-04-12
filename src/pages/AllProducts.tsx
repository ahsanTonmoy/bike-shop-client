import { useState, useMemo } from "react";
import { FieldValues } from "react-hook-form";
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

  // Filter State
  const [filters, setFilters] = useState({
    searchTerm: "",
    category: "",
    inStock: "",
    minPrice: "",
    maxPrice: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 8; // Items per page

  // Handle filter changes
  const handleFilterChange = (e: FieldValues) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1); // Reset to first page on filter change
  };

  // Construct API Query Object
  const query = useMemo(() => {
    const params: Record<string, string> = {
      page: currentPage.toString(),
      limit: limit.toString(),
    };
    if (filters.searchTerm) params.searchTerm = filters.searchTerm;
    if (filters.category) params.category = filters.category;
    if (filters.inStock)
      params.inStock = filters.inStock === "In Stock" ? "true" : "false";
    if (filters.minPrice) params.minPrice = filters.minPrice;
    if (filters.maxPrice) params.maxPrice = filters.maxPrice;
    return params;
  }, [filters, currentPage]);

  // Fetch Data with Filters
  const { data, isLoading } = useAllProductsQuery(query);
  const totalPages = data?.meta?.totalPage || 1;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (isLoading) {
    return <LoadingSkelton />;
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="">
        <Helmet>
          <title>All Products - Bike Shop || Online Delivary</title>
        </Helmet>
      </div>
      <div className="container mx-auto px-4 md:px-0">
        <h1 className="text-4xl py-4 text-black font-light text-center uppercase">
          All Products
        </h1>
        {/*  */}
        <div className="flex items-center justify-center p-4">
          <div className="w-12 h-0.5 bg-[#FF0000] mr-2"></div>
          <div className="w-3 h-3 rotate-45 bg-[#FF0000]"></div>
          <div className="w-12 h-0.5 bg-[#FF0000] ml-2"></div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 m-4 bg-gray-100 p-4">
          <input
            type="text"
            name="searchTerm"
            placeholder="Search by brand, name, or category"
            className="p-2 border border-gray-300 rounded-md flex-1"
            value={filters.searchTerm}
            onChange={handleFilterChange}
          />

          <select
            name="category"
            className="p-2 border border-gray-300 rounded-md"
            value={filters.category}
            onChange={handleFilterChange}
          >
            <option value="">All Categories</option>
            <option value="Mountain">Mountain</option>
            <option value="Road">Road</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electric">Electric</option>
          </select>

          <select
            name="inStock"
            className="p-2 border border-gray-300 rounded-md"
            value={filters.inStock}
            onChange={handleFilterChange}
          >
            <option value="">All Availability</option>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>

          <div className="flex gap-2 items-center">
            <input
              type="number"
              name="minPrice"
              placeholder="Min Price"
              className="p-2 border border-gray-300 rounded-md w-24"
              value={filters.minPrice}
              onChange={handleFilterChange}
            />
            <span> - </span>
            <input
              type="number"
              name="maxPrice"
              placeholder="Max Price"
              className="p-2 border border-gray-300 rounded-md w-24"
              value={filters.maxPrice}
              onChange={handleFilterChange}
            />
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-20 px-4 md:px-8">
          {data?.data?.map((product) => (
            <div
              key={product?._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all p-4 border border-gray-200"
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
                <p className="my-3 text-sm text-gray-600">
                  Model: {product.model}
                </p>
                <p className="text-lg font-medium text-gray-800">
                  Price:{" "}
                  <span className="font-bold text-[#f40707] uppercase">
                    {product.price} bdt
                  </span>
                </p>

                <div className="flex gap-2 mt-3">
                  <Link to={`/details/${product._id}`} className="flex-1">
                    <button className="flex justify-center w-full gap-4 py-2 text-base font-bold text-white uppercase transition-all bg-black border-2 rounded-md hover:bg-white hover:text-black ">
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

        {data?.data?.length === 0 && (
          <div className="text-center mt-8 text-gray-500">
            No products match your search or filter criteria.
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center py-8 gap-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 disabled:bg-gray-600 transition-all duration-300"
          >
            Prev
          </button>
          <span className="px-4 py-2 text-black">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 disabled:bg-gray-600 transition-all duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
