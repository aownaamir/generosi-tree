function Hero() {
  return (
    <div className="w-full lg:h-screen flex flex-col relative">
      <div className="w-full mt-20 lg:mt-0 lg:w-[520px] flex flex-col items-center lg:items-start gap-4 lg:absolute lg:top-[120px] lg:left-[100px] text-center lg:text-left">
        <h1 className="leading-[1.2] font-bold text-4xl lg:text-5xl">
          Rooted in giving, branching out in hope
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          molestie tortor ut faucibus fringilla. Vivamus quis efficitur elit.
          Pellentesque tortor ex, mattis non diam non, condimentum interdum
          lorem.
        </p>
        <button className="w-[130px] h-10 rounded-md border border-black">
          Donate
        </button>
      </div>
      <div className="my-28 lg:mt-0 lg:absolute lg:right-[120px] lg:top-[70px]">
        <div className="w-full lg:w-[360px] h-[1200px] lg:h-[360px] grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="border border-black rounded-lg"></div>
          <div className="border border-black rounded-lg"></div>
          <div className="border border-black rounded-lg"></div>
          <div className="border border-black rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
