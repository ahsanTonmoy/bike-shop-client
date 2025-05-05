import { useLocation } from "react-router-dom";
import { useAllProductsQuery } from "@/redux/features/products/productApi";
// import { IBikeResponse } from "@/types/types";

const SearchResults = () => {
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get("query") || "";

  const { data, isLoading } = useAllProductsQuery({ searchTerm });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6 h-screen">
      <h1 className="text-2xl font-bold mb-4">Results for "{searchTerm}"</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data?.data?.map((bike) => (
          <div key={bike._id} className="border p-4 rounded shadow">
            <img
              src={bike.image}
              alt={bike.name}
              className="w-full h-40 object-cover mb-2"
            />
            <h3 className="font-semibold">{bike.name}</h3>
            <p>{bike.model}</p>
            <p>BDT {bike.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
