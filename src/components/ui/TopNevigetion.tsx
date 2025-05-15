import { BsPhoneFill } from "react-icons/bs";
import { SiFacebook } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopNevigetion = () => {
  return (
    <div>
      <div className="bg-orange-500 flex justify-around p-4 text-white font-normal text-sm">
        {/* support */}
        <div className="flex gap-2 py-1 ">
          <div className="mt-1">
            <BsPhoneFill />
          </div>
          <div className="">Support - (+88) 01994361085</div>
        </div>

        {/* social link */}
        <div className="text-end flex gap-4">
          <Link to={"/"} className="rounded-full p-2 bg-[#3b5998] text-white">
            <SiFacebook />
          </Link>
          <Link to={"/"} className="rounded-full p-2 bg-[#25D366] text-white">
            <FaWhatsapp />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNevigetion;
