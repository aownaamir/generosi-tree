import { Link } from "react-router-dom";
import logo from "/images/logo.png";
import { LuPalmtree } from "react-icons/lu";

function Hero() {
  return (
    <div className="px-5 lg:px-8  pt-[96px] w-full lg:h-[100vh] flex flex-col lg:flex-row relative  justify-center items-center lg:gap-[80px] bg-theme-background">
      <div className="w-[320px] h-[320px] lg:hidden">
        <Link to="/">
          <img src={logo} alt="logo" width="100%" height="100%" />
        </Link>
      </div>

      <div className="w-full lg:w-[690px] flex flex-col items-center lg:items-start gap-4  text-center lg:text-left">
        <h1 className="leading-[70px] poppins text-[36px] lg:text-[57px] text-theme-brown">
          Rooted in giving, branching out in hope
        </h1>
        <p className="roboto-regular text-[17px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          molestie tortor ut faucibus fringilla. Vivamus quis efficitur elit.
          Pellentesque tortor ex, mattis non diam non, condimentum interdum
          lorem.
        </p>
        <Link to="/donations">
          <button className="px-6 py-3 bg-chat-green hover:bg-chat-brown text-white font-semibold rounded-lg shadow-md transition-all">
            Donate
          </button>
        </Link>
      </div>

      <div className="w-[200px] h-[200px] lg:w-[480px] lg:h-[480px] hidden lg:block">
        <Link to="/">
          <img src={logo} alt="logo" width="100%" height="100%" />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
