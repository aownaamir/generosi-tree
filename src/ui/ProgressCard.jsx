const ProgressCard = ({ title, target, raised, className = "" }) => {
  const percentage = Math.min((raised / target) * 100, 100);
  return (
    <div
      className={`bg-white shadow-lg rounded-lg p-6 border-l-4 border-green-600 ${className}`}
    >
      <h3 className="text-2xl font-bold text-green-700">{title}</h3>
      <p className="text-gray-700 mt-2">Target: Rs {target.toLocaleString()}</p>
      <p className="text-gray-700">Raised: Rs {raised.toLocaleString()}</p>
      <div className="w-full bg-gray-200 h-4 mt-4 rounded-full">
        <div
          style={{ width: `${percentage}%` }}
          className="bg-green-600 h-4 rounded-full transition-all"
        />
      </div>
      <p className="text-green-700 mt-2">{percentage.toFixed(1)}% raised</p>
    </div>
  );
};

export default ProgressCard;
