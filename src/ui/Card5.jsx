function Card5() {
  return (
    <div className="group bg-green-100 p-5 rounded-xl shadow-md transition hover:shadow-lg hover:bg-green-200">
      <h3 className="text-xl font-bold text-green-700 group-hover:text-green-900">
        Winter Aid Drive
      </h3>
      <p className="text-sm text-gray-600 mt-2">Goal: Rs 100,000</p>
      <div className="w-full bg-gray-300 rounded-full h-2.5 mt-4">
        <div
          className="bg-green-500 h-2.5 rounded-full"
          style={{ width: "75%" }}
        ></div>
      </div>
      <button className="mt-4 bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700">
        Donate Now
      </button>
    </div>
  );
}

export default Card5;
