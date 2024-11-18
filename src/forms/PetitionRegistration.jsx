function PetitionRegistration({ setStep }) {
  return (
    <form action="" className="flex flex-col gap-7">
      <div className=" flex flex-col lg:flex-row gap-7 lg:gap-16 justify-center items-center">
        <div className="w-[200px] h-[58px] flex flex-col gap-3">
          <label className="text-[15px]" htmlFor="name">
            First name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border-b-2 border-black box-border focus:outline-none  bg-transparent"
          />
        </div>
        <div className="w-[200px] h-[58px] flex flex-col gap-3">
          <label className="text-[15px]" htmlFor="name">
            Last name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border-b-2 border-black box-border focus:outline-none  bg-transparent"
          />
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-7 lg:gap-16 justify-center items-center">
        <div className="w-[200px] h-[58px] flex flex-col gap-3">
          <label className="text-[15px]" htmlFor="name">
            Email
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border-b-2 border-black box-border focus:outline-none  bg-transparent"
          />
        </div>
        <div className="w-[200px] h-[58px] flex flex-col gap-3">
          <label className="text-[15px]" htmlFor="name">
            Phone
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border-b-2 border-black box-border focus:outline-none  bg-transparent"
          />
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-7 lg:gap-16 justify-center items-center">
        <div className="w-[200px] h-[58px] flex flex-col gap-3">
          <label className="text-[15px]" htmlFor="name">
            CNIC
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border-b-2 border-black box-border focus:outline-none  bg-transparent"
          />
        </div>
        <div className="w-[200px] h-[58px] flex flex-col gap-3">
          <label className="text-[15px]" htmlFor="name">
            Donation type
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border-b-2 border-black box-border focus:outline-none  bg-transparent"
          />
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-7 lg:gap-16 justify-center items-center">
        <div className="w-[200px] h-[58px] flex justify-center items-end">
          <button
            className="w-full h-10  bg-green-600 text-slate-50 font-[550]"
            onClick={() => setStep((pV) => pV + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
}

export default PetitionRegistration;
