import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(
        `/search-results?query=${encodeURIComponent(searchTerm.trim())}`
      );
    }
  };

  return (
    <div className=" border-2 border-[#FF541F] rounded-full px-4 py-3">
      <form onSubmit={handleSearch} className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search by name, model, or brand"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=" w-full"
        />
        <button type="submit" className="text-xl">
          <IoSearchSharp />
        </button>
      </form>
    </div>
  );
};

export default Filter;
