import { Link } from "react-router-dom";
import { departments } from "../data/data";

function Departments() {
  return (
    <div className="pt-[120px] flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-14">
        {departments.map((item) => (
          <Link key={item.id} to={`${item.url}`}>
            <div className="w-full h-[250px] lg:w-[300px] lg:h-[200px] flex flex-col gap-3 text-lg py-2 px-5 justify-center items-center border-4 border-green-600 rounded-md">
              <h1 className="text-theme-brown font-[550]">{item.name}</h1>
              <p className="text-center text-sm">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Departments;
