import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen px-6 py-12 bg-white">
      <div className="max-w-md text-center">
        <h1 className="mb-4 font-extrabold text-red-600 text-7xl">404</h1>
        <h2 className="mb-2 text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>
        <p className="mb-6 text-gray-500">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center px-5 py-3 text-sm font-medium text-white transition bg-red-600 rounded-lg hover:bg-red-700"
        >
          <FaArrowLeft className="mr-2" /> Go Back Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
