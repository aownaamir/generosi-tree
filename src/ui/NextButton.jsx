function NextButton({ nextStep }) {
  return (
    <button
      type="button"
      onClick={nextStep}
      className="px-6 py-2 bg-chat-green text-white rounded-lg hover:bg-chat-greenH transition"
    >
      Next
    </button>
  );
}

export default NextButton;
