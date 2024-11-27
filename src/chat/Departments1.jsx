import { Link } from "react-router-dom";
import { departments } from "../data/data";
import DepartmentCard from "../ui/DepartmentCard";

function Departments() {
  return (
    <div className="px-5 lg:px-8 pt-[120px] pb-28 flex flex-col justify-center items-center">
      <h1 className="text-4xl mt-10 mb-20 poppins">Our Departments</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {departments.map((item) => (
          <DepartmentCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Departments;
