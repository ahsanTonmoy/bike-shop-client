import { useLocation } from "react-router-dom";
import { useAllProductsQuery } from "@/redux/features/products/productApi";
import { IBikeResponse } from "@/types/types";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("query") || "";

  const { data, isLoading, isError } = useAllProductsQuery({ searchTerm });

  const bikes: IBikeResponse[] = data?.data || [];

  if (isLoading) return <div className="p-10">Loading...</div>;
  if (isError)
    return <div className="p-10 text-red-600">Failed to load bikes.</div>;

  return (
    <div className="px-10 py-6 min-h-screen bg-white">
      <h2 className="text-2xl font-semibold mb-4">
        Search Results for: "<span className="text-blue-600">{searchTerm}</span>
        "
      </h2>

      {bikes.length === 0 ? (
        <p className="text-gray-500">No bikes found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikes.map((bike) => (
            <div key={bike._id} className="border p-4 rounded shadow-sm">
              <img
                src={bike.image}
                alt={bike.name}
                className="w-full h-40 object-cover mb-3"
              />
              <h3 className="font-bold text-lg">{bike.name}</h3>
              <p className="text-gray-600 text-sm">{bike.model}</p>
              <p className="text-red-600 font-semibold mt-1">
                BDT {bike.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
