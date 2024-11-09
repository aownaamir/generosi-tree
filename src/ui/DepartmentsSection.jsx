import { Link } from "react-router-dom";
import { departments } from "../data/data";

function Departments() {
  return (
    <div className="my-10 flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-14">
        {departments.map((item) => (
          <Link key={item.id} to={`${item.name.toLowerCase()}`}>
            <div className="w-full h-[250px] lg:w-[300px] lg:h-[200px] flex flex-col gap-3 text-lg py-2 px-5 justify-center items-center border border-black rounded-md">
              <h1>{item.name}</h1>
              <p className="text-justify text-sm">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Departments;
