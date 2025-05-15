import { useNavigate } from "react-router-dom";

interface SlideContentProps {
  h5: string;
  title: string;
  subtitle: string;
  img: string;
}

const SlideContent: React.FC<SlideContentProps> = ({
  h5,
  title,
  subtitle,
  img,
}) => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-full">
      <img
        src={img}
        alt={title}
        className="object-cover w-full h-full opacity-60"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
        <h5 className="text-orange-500 font-medium md:text-lg">{h5}</h5>
        <h1 className="text-4xl font-bold md:text-5xl animate-fadeIn">
          {title}
        </h1>
        <p className="mt-2 text-lg delay-200 md:text-xl animate-fadeIn">
          {subtitle}
        </p>
        <div className="flex flex-col items-center gap-4 mt-4 lg:flex-row">
          <button
            onClick={() => navigate("/bikes")}
            className="inline-block px-6 py-3 mt-6 text-sm font-semibold text-white transition bg-orange-500 border border-orange-500 rounded-lg shadow-md hover:bg-transparent"
          >
            Explore Product
          </button>
          <button
            onClick={() => navigate("/services")}
            className="inline-block px-6 py-3 mt-6 text-sm font-semibold text-white transition bg-transparent border border-orange-500 rounded-lg shadow-md hover:bg-orange-500"
          >
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideContent;
