import { Link } from "react-router-dom";
import logo from "/images/logo.png";
import { LuPalmtree } from "react-icons/lu";

function Hero() {
  return (
    <div className="px-3 lg:px-8 pt-[96px] w-full lg:h-[100vh] flex flex-col lg:flex-row relative  justify-center items-center gap-10 lg:gap-[130px] bg-theme-background">
      <div className="w-full lg:w-[540px] flex flex-col items-center lg:items-start gap-4  text-center lg:text-left">
        {/* <div className="w-[200px] h-[200px]">
          <Link to="/">
            <img src={logo} alt="logo" width="100%" height="100%" />
          </Link>
        </div> */}
        <h1 className="leading-[55px] poppins font-bold text-[36px] lg:text-[48px] text-theme-brown">
          Rooted in giving, branching out in hope
        </h1>
        <p className="raleway">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          molestie tortor ut faucibus fringilla. Vivamus quis efficitur elit.
          Pellentesque tortor ex, mattis non diam non, condimentum interdum
          lorem.
        </p>
        <Link to="/donations">
          <button className="w-[130px] h-10 text-slate-50 rounded-md bg-green-600 font-[550]">
            Donate
          </button>
        </Link>
      </div>
      <div className="">
        {/* <div className="grid grid-cols-2 gap-6">
          <div className="w-[170px] lg:w-[190px] h-[170px] lg:h-[190px] border-4 border-themeBrown-a rounded-lg"></div>
          <div className="w-[170px] lg:w-[190px] h-[170px] lg:h-[190px] border-4 border-themeBrown-a rounded-lg"></div>
          <div className="w-[170px] lg:w-[190px] h-[170px] lg:h-[190px] border-4 border-themeBrown-a rounded-lg"></div>
          <div className="w-[170px] lg:w-[190px] h-[170px] lg:h-[190px] border-4 border-themeBrown-a rounded-lg"></div>
        </div> */}
        <div className="w-[200px] h-[200px] lg:w-[450px] lg:h-[450px]">
          <Link to="/">
            <img src={logo} alt="logo" width="100%" height="100%" />
          </Link>
        </div>
        {/* <div>
          <LuPalmtree className="text-[350px]" />
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
