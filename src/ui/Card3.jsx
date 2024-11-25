function Card3() {
  return (
    <div className="bg-gradient-to-br from-green-500 to-green-300 p-4 rounded-lg shadow-lg">
      <h2 className="text-white text-2xl font-bold">Tree Planting Campaign</h2>
      <p className="text-green-100 mt-2">Rs 500 plants one tree</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-green-100">Status: Verified</span>
        <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-100">
          Donate
        </button>
      </div>
    </div>
  );
}

export default Card3;
