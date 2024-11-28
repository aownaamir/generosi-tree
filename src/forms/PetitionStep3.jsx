import BackButton from "../ui/BackButton";

function PetitionStep3({ prevStep, nextStep }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Step 3: Review & Submit</h3>
      <div className="grid grid-cols-2 gap-4">
        <textarea
          type="text"
          placeholder="Explain your petition"
          className="px-3 py-2 text-sm border border-slate-600 col-span-2 row-span-6 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
        <div className=" px-3 py-2 text-sm flex gap-6 rounded-lg ">
          <p>Document 1 (required)</p>
          <input type="file" id="d1" name="name" required className="hidden" />
          <label
            htmlFor="d1"
            className="text-center text-xs border-b-2 border-chat-green box-border w-24 h-8 flex justify-center items-center cursor-pointer"
          >
            Upload file
          </label>
        </div>
        <div className=" px-3 py-2 text-sm flex gap-6 rounded-lg ">
          <p>Document 1 (optional)</p>
          <input type="file" id="d1" name="name" required className="hidden" />
          <label
            htmlFor="d1"
            className="text-center text-xs border-b-2 border-chat-green box-border w-24 h-8 flex justify-center items-center cursor-pointer"
          >
            Upload file
          </label>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <BackButton prevStep={prevStep} />
        <button
          type="submit"
          className="px-6 py-2 bg-chat-green text-white rounded-lg hover:bg-chat-greenH"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default PetitionStep3;
