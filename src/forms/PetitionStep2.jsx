import BackButton from "../ui/BackButton";
import NextButton from "../ui/NextButton";

function PetitionStep2({ prevStep, nextStep }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Step 2: Petition Details</h3>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Petition Title"
          className="px-3 py-2 text-sm border border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Amount Needed (Total)"
          className="px-3 py-2 text-sm border border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Affordable Time"
          className="px-3 py-2 text-sm border border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
        <input
          type="tel"
          placeholder="Bank Name"
          className="px-3 py-2 text-sm border border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
        <select className=" px-3 py-2 text-sm border border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none">
          <option value="">Donation Type</option>
          <option value="monetary">Monetary</option>
          <option value="goods">Goods</option>
        </select>
        <div className=" px-3 py-2 text-sm flex gap-6 rounded-lg ">
          <p className="text-[15px] w-[87px] " htmlFor="name">
            Keep it confidential?
          </p>
          <div className="flex flex-col md:flex-row md:gap-6">
            <div className="flex justify-center items-center gap-1">
              <input type="radio" id="yes" name="name" required className="" />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="flex justify-center items-center gap-1">
              <input type="radio" id="no" name="name" required className="" />
              <label htmlFor="no">No</label>
            </div>
          </div>
        </div>
        {/* <input
          type="text"
          placeholder="Account No."
          className="col-span-2 px-3 py-2 text-sm border border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
        /> */}
      </div>
      <div className="flex justify-between mt-6">
        <BackButton prevStep={prevStep} />
        <NextButton nextStep={nextStep} />
      </div>
    </div>
  );
}

export default PetitionStep2;
