function PetitionDetails({ setStep }) {
  return (
    <form action="" className="flex flex-col gap-7">
      <div className=" flex flex-col lg:flex-row  justify-center items-center gap-7 lg:gap-16">
        <div className="w-[200px] h-[58px] flex flex-col gap-3">
          <label className="text-[15px]" htmlFor="name">
            Petition title
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border-b-2 border-black focus:outline-none"
          />
        </div>
        <div className="w-[200px] h-[58px] flex flex-col gap-3">
          <label className="text-[15px]" htmlFor="name">
            Amount needed (total)
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border-b-2 border-black focus:outline-none"
          />
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row  justify-center items-center gap-7 lg:gap-16">
        <div className="w-[200px] h-[58px] flex flex-col gap-3">
          <label className="text-[15px]" htmlFor="name">
            Affordable time
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border-b-2 border-black  focus:outline-none"
          />
        </div>
        <div className="w-[200px] h-[58px] flex flex-col gap-3">
          <label className="text-[15px]" htmlFor="name">
            Bank name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border-b-2 border-black focus:outline-none"
          />
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row  justify-center items-center gap-7 lg:gap-16">
        <div className="w-[200px] h-[58px] flex flex-col gap-3">
          <label className="text-[15px]" htmlFor="name">
            Account No.
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border-b-2 border-black focus:outline-none"
          />
        </div>
        <div className="w-[200px] h-[58px] flex gap-3">
          <p className="text-[15px] w-[87px] " htmlFor="name">
            Keep it confidential?
          </p>
          <div className="flex justify-center items-center gap-1">
            <input type="radio" id="name" name="name" required className="" />
            <label>Yes</label>
          </div>
          <div className="flex justify-center items-center gap-1">
            <input type="radio" id="name" name="name" required className="" />
            <label>No</label>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row  justify-between items-center">
        <div className="w-[200px] h-[58px] flex justify-center items-end">
          <button
            className="w-full h-10 border border-black"
            onClick={() => setStep((pV) => pV - 1)}
          >
            Back
          </button>
        </div>
        <div className="w-[200px] h-[58px] flex justify-center items-end">
          <button
            className="w-full h-10 border border-black"
            onClick={() => setStep((pV) => pV + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
}

export default PetitionDetails;
