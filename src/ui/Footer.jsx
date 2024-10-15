import logo from "/images/logo.png";
import { IoMailOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div className="mt-20 mb-10 px-5">
      <div className="grid gap-y-20 lg:gap-0 grid-cols-1 lg:grid-cols-4">
        <div className=" flex flex-col justify-center items-center">
          <div>
            <img src={logo} alt="logo" className="lg:w-[200px] h-[200px]" />
          </div>
          <ul className="flex gap-2">
            <li className=" flex justify-center items-center  rounded-md">
              <IoMailOutline className="text-xl" />
            </li>
            <li className=" flex justify-center items-center  rounded-md">
              <TbWorld className="text-xl" />
            </li>
            <li className=" flex justify-center items-center  rounded-md">
              <FaLinkedin className="text-xl" />
            </li>
            <li className=" flex justify-center items-center  rounded-md">
              <FaInstagram className="text-xl" />
            </li>
          </ul>
        </div>
        <div className=" flex flex-col justify-center items-center gap-3">
          <h1 className="text-2xl  pb-1 lg:w-[200px]">FAQs</h1>
          <ul className="flex flex-col lg:w-[200px] gap-2">
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
            <li>Point 4</li>
          </ul>
        </div>
        <div className=" flex flex-col justify-center items-center gap-3">
          <h1 className="text-2xl  pb-1 lg:w-[200px]">FAQs</h1>
          <ul className="flex flex-col lg:w-[200px] gap-2">
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
            <li>Point 4</li>
          </ul>
        </div>
        <div className=" flex flex-col justify-center items-center gap-3">
          <h1 className="text-2xl  pb-1 lg:w-[200px]">FAQs</h1>
          <ul className="flex flex-col lg:w-[200px] gap-2">
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
            <li>Point 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
