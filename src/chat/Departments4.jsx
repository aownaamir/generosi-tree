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
            className="group flex flex-col items-center p-6 bg-green-100 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-green-200"
          >
            <div className="text-green-600 text-4xl mb-4 group-hover:text-green-800">
              <i className="fas fa-hand-holding-heart"></i>
            </div>
            <h3 className="text-lg font-semibold text-green-700 group-hover:text-green-900">
              Donations
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deparemrnts;
