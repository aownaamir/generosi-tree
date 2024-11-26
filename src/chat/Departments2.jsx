import { departments } from "../data/data";

function Deparemrnts() {
  return (
    <div className="bg-theme-background  py-16">
      <h2 className="text-3xl font-bold text-chat-brown text-center mb-12">
        Our Departments
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {departments.map((department, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border-4 border-chat-green hover:bg-chat-green group"
          >
            <div className="text-5xl mb-4 group-hover:text-chat-brown transition-colors duration-200">
              {/* <department.svg width="50px" height="50px" fill="#765341" /> */}
              <department.svg className="w-[50px] h-[50px] fill-[#765341] group-hover:fill-theme-background" />
            </div>
            <h3 className="text-xl font-semibold text-chat-brown group-hover:text-theme-background">
              {department.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deparemrnts;
