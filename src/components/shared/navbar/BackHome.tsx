import { Link } from "react-router-dom";

const BackHome = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h3 className="text-2xl uppercase text-primary-red"> {message}</h3>
      <Link to="/">
        <button className="px-5 py-2 mt-5 text-lg font-bold duration-300 border rounded-md border-primary-red text-primary-red hover:bg-primary-red hover:text-white">
          Back
        </button>
      </Link>
    </div>
  );
};

export default BackHome;
