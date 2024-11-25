function Card4() {
  return (
    <div className="bg-white border-l-4 border-green-500 p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-green-700">
        Clean Water Project
      </h3>
      <p className="text-sm text-gray-500 mt-2">
        Help provide clean water to 500 families.
      </p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-400 text-sm">Target: Rs 50,000</span>
        <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600">
          Donate
        </button>
      </div>
    </div>
  );
}

export default Card4;
