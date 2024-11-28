import NextButton from "../ui/NextButton";

function PetitionStep1({ nextStep }) {
  return (
    <form>
      <h3 className="text-lg font-semibold mb-4">Step 1: Registration</h3>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="px-3 py-2 text-sm border border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="px-3 py-2 text-sm border border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="px-3 py-2 text-sm border border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
        <input
          type="tel"
          placeholder="Phone"
          className="px-3 py-2 text-sm border border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
        <input
          type="text"
          placeholder="CNIC"
          className="col-span-2 px-3 py-2 text-sm border border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
        <select className="col-span-2 px-3 py-2 text-sm border border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none">
          <option value="">Donation Type</option>
          <option value="monetary">Monetary</option>
          <option value="goods">Goods</option>
        </select>
      </div>
      <div className="flex justify-end mt-6">
        <NextButton nextStep={nextStep} />
      </div>
    </form>
  );
}

export default PetitionStep1;
