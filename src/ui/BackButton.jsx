function BackButton({ prevStep }) {
  return (
    <button
      onClick={prevStep}
      className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
    >
      Back
    </button>
  );
}

export default BackButton;
