function Tiers() {
  return (
    <div className="mt-5 flex gap-4">
      <div className="p-4 bg-yellow-100 rounded shadow-md">
        <h4 className="text-lg font-bold text-yellow-600">Bronze Donor</h4>
        <p>Up to Rs 10,000</p>
      </div>
      <div className="p-4 bg-gray-300 rounded shadow-md">
        <h4 className="text-lg font-bold text-gray-700">Silver Donor</h4>
        <p>Up to Rs 50,000</p>
      </div>
      <div className="p-4 bg-yellow-500 rounded shadow-md">
        <h4 className="text-lg font-bold text-white">Gold Donor</h4>
        <p>Above Rs 50,000</p>
      </div>
    </div>
  );
}

export default Tiers;
