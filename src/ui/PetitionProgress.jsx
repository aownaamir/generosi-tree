function PetitionProgress({ step }) {
  return (
    <div className="flex justify-between mb-4">
      <div
        className={`flex-1 h-1.5 rounded-full ${
          step >= 1 ? "bg-chat-green" : "bg-gray-300"
        }`}
      ></div>
      <div className="w-2"></div>
      <div
        className={`flex-1 h-1.5 rounded-full ${
          step >= 2 ? "bg-chat-green" : "bg-gray-300"
        }`}
      ></div>
      <div className="w-2"></div>
      <div
        className={`flex-1 h-1.5 rounded-full ${
          step >= 3 ? "bg-chat-green" : "bg-gray-300"
        }`}
      ></div>
    </div>
  );
}

export default PetitionProgress;
