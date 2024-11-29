function FAQs() {
  return (
    <div className="w-96">
      <details className="p-4 border border-chat-green rounded mb-2">
        <summary className="cursor-pointer text-green-600 font-bold">
          How are donations used?
        </summary>
        <p className="mt-2 text-gray-700">
          Donations are allocated to various causes like education, healthcare,
          and food relief.
        </p>
      </details>
      <details className="p-4 border border-chat-green rounded mb-2">
        <summary className="cursor-pointer text-green-600 font-bold">
          Can I get a receipt?
        </summary>
        <p className="mt-2 text-gray-700">
          Yes, all donors receive an electronic receipt via email.
        </p>
      </details>
    </div>
  );
}

export default FAQs;
