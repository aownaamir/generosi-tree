import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
function Links() {
  return (
    <div className="my-[120px] flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-28">
        <div className="flex flex-col justify-center items-center gap-3">
          <BiLogoGmail className="text-[60px]" />

          <p className="">generositree_official@gmail.com</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <FaInstagram className="text-[60px]" />
          <p className="">generositree_official</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <CiLinkedin className="text-[60px]" />
          <p className="">generositree/linkedin.com</p>
        </div>
      </div>
    </div>
  );
}

export default Links;
