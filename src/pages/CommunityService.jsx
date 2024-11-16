import { IoHeartCircleOutline } from "react-icons/io5";
function CommunityService() {
  return (
    <div className="px-7 lg:px-10 flex flex-col justify-center items-center gap-10">
      <div className="mt-20 flex flex-col justify-center items-center gap-1">
        <h1 className="font-bold text-[60px] text-center">
          Helping the Community
        </h1>
        <IoHeartCircleOutline className="text-[60px]" />
      </div>
      <div className="flex justify-center items-center flex-col gap-10">
        <h2 className="font-semibold text-4xl">Our work</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-4 gap-7">
          <div className="w-[150px] h-[150px] lg:w-auto lg:h-[250px] bg-green-100 border border-black rounded-lg lg:col-span-3 shadow-xl"></div>
          <div className="w-[150px] h-[150px] lg:w-[250px] lg:h-auto bg-green-100 border border-black rounded-lg lg:row-span-3 shadow-xl"></div>
          <div className="w-[150px] h-[150px] lg:w-[250px] lg:h-auto bg-green-100 border border-black rounded-lg lg:row-span-3 shadow-xl"></div>
          <div className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] bg-green-100 border border-black rounded-lg shadow-xl"></div>
          <div className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] bg-green-100 border border-black rounded-lg shadow-xl"></div>
          <div className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] bg-green-100 border border-black rounded-lg shadow-xl"></div>
          <div className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] bg-green-100 border border-black rounded-lg shadow-xl"></div>
          <div className="w-[150px] h-[150px] lg:h-[250px] lg:w-auto bg-green-100 border border-black rounded-lg lg:col-span-3 shadow-xl"></div>
        </div>
      </div>
    </div>
  );
}

export default CommunityService;
