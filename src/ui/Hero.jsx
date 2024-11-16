import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="w-full lg:h-[80vh] flex flex-col lg:flex-row relative  justify-between items-center gap-10 lg:gap-0">
      <div className="w-full lg:w-[520px] flex flex-col items-center lg:items-start gap-4  text-center lg:text-left">
        <h1 className="leading-[1.2] font-bold text-4xl lg:text-5xl">
          Rooted in giving, branching out in hope
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          molestie tortor ut faucibus fringilla. Vivamus quis efficitur elit.
          Pellentesque tortor ex, mattis non diam non, condimentum interdum
          lorem.
        </p>
        <Link to="/donations">
          <button className="w-[130px] h-10 rounded-md border border-black">
            Donate
          </button>
        </Link>
      </div>
      <div className="">
        <div className="grid grid-cols-2 gap-6">
          <div className="w-[170px] lg:w-[190px] h-[170px] lg:h-[190px] border border-black rounded-lg"></div>
          <div className="w-[170px] lg:w-[190px] h-[170px] lg:h-[190px] border border-black rounded-lg"></div>
          <div className="w-[170px] lg:w-[190px] h-[170px] lg:h-[190px] border border-black rounded-lg"></div>
          <div className="w-[170px] lg:w-[190px] h-[170px] lg:h-[190px] border border-black rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
