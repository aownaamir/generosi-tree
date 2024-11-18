import { Link } from "react-router-dom";
import { departments } from "../data/data";

function Departments() {
  return (
    <div className="px-5 lg:px-8 pt-[120px] flex flex-col justify-center items-center">
      <h1 className="text-4xl mt-10 mb-20 poppins">Our Departments</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-y-[60px] lg:gap-x-[160px]">
        {departments.map((item) => (
          <Link key={item.id} to={`${item.url}`}>
            <div className="w-full h-[190px] lg:w-[180px] lg:h-[180px] flex flex-col gap-3 text-lg py-2 px-5 items-center">
              <div className="w-[110px] h-[110px] rounded-full border-4 border-theme-green flex justify-center items-center dept-shadow">
                {<item.svg width="50px" height="50px" fill="#765341" />}
              </div>
              <h1 className="text-theme-brown font-[550] text-nowrap">
                {item.name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Departments;
